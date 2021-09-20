/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
      id
      title
      body
      acknowledged
      targetUserID
      targetUser {
        id
        username
        email
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
      id
      title
      body
      acknowledged
      targetUserID
      targetUser {
        id
        username
        email
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
      id
      title
      body
      acknowledged
      targetUserID
      targetUser {
        id
        username
        email
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
      firstName
      lastName
      description
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
      schedules {
        items {
          id
          title
          date
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      notifications {
        items {
          id
          title
          body
          acknowledged
          targetUserID
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
      firstName
      lastName
      description
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
      schedules {
        items {
          id
          title
          date
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      notifications {
        items {
          id
          title
          body
          acknowledged
          targetUserID
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
      firstName
      lastName
      description
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
      schedules {
        items {
          id
          title
          date
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      notifications {
        items {
          id
          title
          body
          acknowledged
          targetUserID
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
  subscription OnCreateAvatar($owner: String!) {
    onCreateAvatar(owner: $owner) {
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
  subscription OnUpdateAvatar($owner: String!) {
    onUpdateAvatar(owner: $owner) {
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
  subscription OnDeleteAvatar($owner: String!) {
    onDeleteAvatar(owner: $owner) {
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
export const onCreateDailySchedule = /* GraphQL */ `
  subscription OnCreateDailySchedule {
    onCreateDailySchedule {
      id
      title
      date
      owner
      events {
        items {
          id
          parentSchedule
          startTime
          endTime
          title
          description
          status
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
export const onUpdateDailySchedule = /* GraphQL */ `
  subscription OnUpdateDailySchedule {
    onUpdateDailySchedule {
      id
      title
      date
      owner
      events {
        items {
          id
          parentSchedule
          startTime
          endTime
          title
          description
          status
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
export const onDeleteDailySchedule = /* GraphQL */ `
  subscription OnDeleteDailySchedule {
    onDeleteDailySchedule {
      id
      title
      date
      owner
      events {
        items {
          id
          parentSchedule
          startTime
          endTime
          title
          description
          status
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      parentSchedule
      startTime
      endTime
      title
      description
      status
      assignee {
        id
        username
        email
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      parentSchedule
      startTime
      endTime
      title
      description
      status
      assignee {
        id
        username
        email
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      parentSchedule
      startTime
      endTime
      title
      description
      status
      assignee {
        id
        username
        email
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
          firstName
          lastName
          description
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
          firstName
          lastName
          description
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
          firstName
          lastName
          description
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
        avatar {
          id
          name
          owner
          createdAt
          updatedAt
        }
        firstName
        lastName
        description
        teamsMember {
          nextToken
        }
        teamsOwner {
          nextToken
        }
        memberChecklists {
          nextToken
        }
        schedules {
          nextToken
        }
        notifications {
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
