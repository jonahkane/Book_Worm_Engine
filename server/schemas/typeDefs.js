const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

input bookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String]
      description: String!
      title: String!
      bookId: String!
      image: String
      link: String
    ): User
    removeBook(bookId: ID!): User


}
`


// // typeDefs.js: Define the necessary Query and Mutation types:

// // Query type:

// // me: Which returns a User type.
// // Mutation type:



// // saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

// // removeBook: Accepts a book's bookId as a parameter; returns a User type.





// // User type:

// // savedBooks (This will be an array of the Book type.)




// // Auth type:

// // token

// // user (References the User type.)
