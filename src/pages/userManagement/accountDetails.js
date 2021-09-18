




const GetUserData = /* GraphQL */ `
query MyQuery($eq: String = "qqqqqqqq") {
    listUsers(filter: {username: {eq: $eq}}) {
      nextToken
      items {
        email
        firstName
        id
        lastName
      }
    }
  }
  `;