/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChecklist = /* GraphQL */ `
  mutation CreateChecklist(
    $input: CreateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    createChecklist(input: $input, condition: $condition) {
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
export const updateChecklist = /* GraphQL */ `
  mutation UpdateChecklist(
    $input: UpdateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    updateChecklist(input: $input, condition: $condition) {
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
export const deleteChecklist = /* GraphQL */ `
  mutation DeleteChecklist(
    $input: DeleteChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    deleteChecklist(input: $input, condition: $condition) {
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
export const createFormField = /* GraphQL */ `
  mutation CreateFormField(
    $input: CreateFormFieldInput!
    $condition: ModelFormFieldConditionInput
  ) {
    createFormField(input: $input, condition: $condition) {
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
export const updateFormField = /* GraphQL */ `
  mutation UpdateFormField(
    $input: UpdateFormFieldInput!
    $condition: ModelFormFieldConditionInput
  ) {
    updateFormField(input: $input, condition: $condition) {
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
export const deleteFormField = /* GraphQL */ `
  mutation DeleteFormField(
    $input: DeleteFormFieldInput!
    $condition: ModelFormFieldConditionInput
  ) {
    deleteFormField(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createAvatar = /* GraphQL */ `
  mutation CreateAvatar(
    $input: CreateAvatarInput!
    $condition: ModelAvatarConditionInput
  ) {
    createAvatar(input: $input, condition: $condition) {
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
export const updateAvatar = /* GraphQL */ `
  mutation UpdateAvatar(
    $input: UpdateAvatarInput!
    $condition: ModelAvatarConditionInput
  ) {
    updateAvatar(input: $input, condition: $condition) {
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
export const deleteAvatar = /* GraphQL */ `
  mutation DeleteAvatar(
    $input: DeleteAvatarInput!
    $condition: ModelAvatarConditionInput
  ) {
    deleteAvatar(input: $input, condition: $condition) {
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
export const createDailySchedule = /* GraphQL */ `
  mutation CreateDailySchedule(
    $input: CreateDailyScheduleInput!
    $condition: ModelDailyScheduleConditionInput
  ) {
    createDailySchedule(input: $input, condition: $condition) {
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
export const updateDailySchedule = /* GraphQL */ `
  mutation UpdateDailySchedule(
    $input: UpdateDailyScheduleInput!
    $condition: ModelDailyScheduleConditionInput
  ) {
    updateDailySchedule(input: $input, condition: $condition) {
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
export const deleteDailySchedule = /* GraphQL */ `
  mutation DeleteDailySchedule(
    $input: DeleteDailyScheduleInput!
    $condition: ModelDailyScheduleConditionInput
  ) {
    deleteDailySchedule(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeamUserJoin = /* GraphQL */ `
  mutation CreateTeamUserJoin(
    $input: CreateTeamUserJoinInput!
    $condition: ModelTeamUserJoinConditionInput
  ) {
    createTeamUserJoin(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeamUserJoin = /* GraphQL */ `
  mutation UpdateTeamUserJoin(
    $input: UpdateTeamUserJoinInput!
    $condition: ModelTeamUserJoinConditionInput
  ) {
    updateTeamUserJoin(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeamUserJoin = /* GraphQL */ `
  mutation DeleteTeamUserJoin(
    $input: DeleteTeamUserJoinInput!
    $condition: ModelTeamUserJoinConditionInput
  ) {
    deleteTeamUserJoin(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChecklistUserJoin = /* GraphQL */ `
  mutation CreateChecklistUserJoin(
    $input: CreateChecklistUserJoinInput!
    $condition: ModelChecklistUserJoinConditionInput
  ) {
    createChecklistUserJoin(input: $input, condition: $condition) {
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
export const updateChecklistUserJoin = /* GraphQL */ `
  mutation UpdateChecklistUserJoin(
    $input: UpdateChecklistUserJoinInput!
    $condition: ModelChecklistUserJoinConditionInput
  ) {
    updateChecklistUserJoin(input: $input, condition: $condition) {
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
export const deleteChecklistUserJoin = /* GraphQL */ `
  mutation DeleteChecklistUserJoin(
    $input: DeleteChecklistUserJoinInput!
    $condition: ModelChecklistUserJoinConditionInput
  ) {
    deleteChecklistUserJoin(input: $input, condition: $condition) {
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
