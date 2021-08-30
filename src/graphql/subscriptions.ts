/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChecklist = /* GraphQL */ `
  subscription OnCreateChecklist {
    onCreateChecklist {
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
export const onUpdateChecklist = /* GraphQL */ `
  subscription OnUpdateChecklist {
    onUpdateChecklist {
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
export const onDeleteChecklist = /* GraphQL */ `
  subscription OnDeleteChecklist {
    onDeleteChecklist {
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
export const onCreateFormField = /* GraphQL */ `
  subscription OnCreateFormField {
    onCreateFormField {
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
export const onUpdateFormField = /* GraphQL */ `
  subscription OnUpdateFormField {
    onUpdateFormField {
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
export const onDeleteFormField = /* GraphQL */ `
  subscription OnDeleteFormField {
    onDeleteFormField {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAvatar = /* GraphQL */ `
  subscription OnCreateAvatar {
    onCreateAvatar {
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
export const onUpdateAvatar = /* GraphQL */ `
  subscription OnUpdateAvatar {
    onUpdateAvatar {
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
export const onDeleteAvatar = /* GraphQL */ `
  subscription OnDeleteAvatar {
    onDeleteAvatar {
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
export const onCreateTeamUserJoin = /* GraphQL */ `
  subscription OnCreateTeamUserJoin {
    onCreateTeamUserJoin {
      id
      teamID
      userID
      team {
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
      teamMember {
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
export const onUpdateTeamUserJoin = /* GraphQL */ `
  subscription OnUpdateTeamUserJoin {
    onUpdateTeamUserJoin {
      id
      teamID
      userID
      team {
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
      teamMember {
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
export const onDeleteTeamUserJoin = /* GraphQL */ `
  subscription OnDeleteTeamUserJoin {
    onDeleteTeamUserJoin {
      id
      teamID
      userID
      team {
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
      teamMember {
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
export const onCreateChecklistUserJoin = /* GraphQL */ `
  subscription OnCreateChecklistUserJoin {
    onCreateChecklistUserJoin {
      id
      userID
      checklistID
      checklistUser {
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
export const onUpdateChecklistUserJoin = /* GraphQL */ `
  subscription OnUpdateChecklistUserJoin {
    onUpdateChecklistUserJoin {
      id
      userID
      checklistID
      checklistUser {
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
export const onDeleteChecklistUserJoin = /* GraphQL */ `
  subscription OnDeleteChecklistUserJoin {
    onDeleteChecklistUserJoin {
      id
      userID
      checklistID
      checklistUser {
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
