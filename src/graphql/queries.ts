/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChecklist = /* GraphQL */ `
  query GetChecklist($id: ID!) {
    getChecklist(id: $id) {
      id
      Title
      FormFields {
        items {
          id
          title
          type
          input
          checklistID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          checklistID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userID
          checklistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChecklists = /* GraphQL */ `
  query ListChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Title
        FormFields {
          nextToken
        }
        comments {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFormField = /* GraphQL */ `
  query GetFormField($id: ID!) {
    getFormField(id: $id) {
      id
      title
      type
      input
      checklistID
      checklist {
        id
        Title
        FormFields {
          nextToken
        }
        comments {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFormFields = /* GraphQL */ `
  query ListFormFields(
    $filter: ModelFormFieldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        input
        checklistID
        checklist {
          id
          Title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      checklistID
      checklist {
        id
        Title
        FormFields {
          nextToken
        }
        comments {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        checklistID
        checklist {
          id
          Title
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      teamName
      avatar {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      teamMembers {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      teamLead {
        id
        username
        email
        phone
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamName
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        teamMembers {
          nextToken
        }
        teamLead {
          id
          username
          email
          phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone
      avatar {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      teamsMember {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      teamsOwner {
        items {
          id
          teamName
          createdAt
          updatedAt
        }
        nextToken
      }
      memberChecklists {
        items {
          id
          userID
          checklistID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAvatar = /* GraphQL */ `
  query GetAvatar($id: ID!) {
    getAvatar(id: $id) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAvatars = /* GraphQL */ `
  query ListAvatars(
    $filter: ModelAvatarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvatars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
