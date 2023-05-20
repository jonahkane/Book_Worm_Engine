// resolvers.js: Define the query and mutation functionality to work with the Mongoose models.
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      getSingleUser: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
              .select("-__v -password")

              
            return userData;
          }
             throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email, password }, context) => {
            const user = await User.findOne({ email });     
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPassword = await user.isCorrectPassword(password);
      
            if (!correctPassword) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          
          saveBook: async (parent, { body }, context) => {
            const { user } = conext;
            try {
              const updatedUser = await User.fineOneAndUpdated(
                    {_id: user._id},
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                    );

                return updatedUser;
              } catch (err) {
                console.log(err);
                throw new Error('book not saved');
              }
            },
            
          deleteBook: async (parent, { bookId }, context) => {
            const { user } = context;
              const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }              
              );
              if (!updatedUser) {
                throw new Error('user not found');
              }
              return updatedUser;
          }
    },
};
module.exports = resolvers;


