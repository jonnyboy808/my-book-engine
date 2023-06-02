const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookcount: Int
    savedBooks: [Book]
  }

  type Books {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input Bookinput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: bookInput): User
    removeBook(bookId: ID): User
  }
`;

module.exports = typeDefs;
