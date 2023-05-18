// resolvers.js: Define the query and mutation functionality to work with the Mongoose models.
const { Book, User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
             }
             throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          
          saveBook: async (parent, args, context) => {
            if (context.user) {
                const booksData = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: { savedBooks: args } },
                    { new: true }
                );

                return booksData;
            }
            throw new AuthenticationError('You need to be logged in!');
          },

          removeBook: async (parent, args, context) => {
            if (context.user) {
              const booksData = await User.findOneAndDelete(
                { _id: context.user_id },
                { $pull: { savedBooks: {bookId} } },
                { new: true }               
              );
              return booksData;
              }
            throw new AuthenticationError('You need to be logged in!');
          },
    }
};
module.exports = resolvers;


// const { Tech, Matchup } = require('../models');

// const resolvers = {
//   Query: {
//     tech: async () => {
//       return Tech.find({});
//     },
//     matchups: async (parent, { _id }) => {
//       const params = _id ? { _id } : {};
//       return Matchup.find(params);
//     },
//   },
//   Mutation: {
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
// };

// module.exports = resolvers;




