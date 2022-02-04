const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Movies } = require('../models');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },

    movies: async () => {
      return Movies.find()
        .select('-_');
    },

    movie: async (parent, { _id }) => {
      return Movies.findOne({ _id});
        
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      const token = signToken(user)
      return { token, user };
    },
    addMovie: async (parent, args) => {
      const movie = await Movies.create(args);

      return movie;
    },
    // addReview: async (parent, { reviewId, reviewBod }, context) => {
    //   if (context.user) {
    //     const updatedReview = await Review.findOneAndUpdate(
    //       { _id: reviewId },
    //       { $push: { review: {reviewBody, username: context.user.username } } },
    //       { new: true, runValidators: true }
    //     )
    //       return updatedReview
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // }
  }
};

module.exports = resolvers;