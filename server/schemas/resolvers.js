// resolvers.js: Define the query and mutation functionality to work with the Mongoose models.
const { Book, User } = require('../models');

const resolvers = {
    Query: {
        // fille in query stuff here
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




