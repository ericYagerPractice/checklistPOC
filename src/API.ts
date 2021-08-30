/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChecklistInput = {
  id?: string | null,
  Title: string,
};

export type ModelChecklistConditionInput = {
  Title?: ModelStringInput | null,
  and?: Array< ModelChecklistConditionInput | null > | null,
  or?: Array< ModelChecklistConditionInput | null > | null,
  not?: ModelChecklistConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Checklist = {
  __typename: "Checklist",
  id: string,
  Title: string,
  FormFields?: ModelFormFieldConnection | null,
  comments?: ModelCommentConnection | null,
  users?: ModelChecklistUserJoinConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFormFieldConnection = {
  __typename: "ModelFormFieldConnection",
  items?:  Array<FormField | null > | null,
  nextToken?: string | null,
};

export type FormField = {
  __typename: "FormField",
  id: string,
  title: string,
  type: formFieldType,
  input?: Array< string | null > | null,
  checklistID: string,
  checklist?: Checklist | null,
  createdAt: string,
  updatedAt: string,
};

export enum formFieldType {
  TextField = "TextField",
  Radio = "Radio",
  Checklist = "Checklist",
  Range = "Range",
  Datepicker = "Datepicker",
}


export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  checklistID: string,
  checklist?: Checklist | null,
  content: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelChecklistUserJoinConnection = {
  __typename: "ModelChecklistUserJoinConnection",
  items?:  Array<ChecklistUserJoin | null > | null,
  nextToken?: string | null,
};

export type ChecklistUserJoin = {
  __typename: "ChecklistUserJoin",
  id: string,
  userID: string,
  checklistID: string,
  checklistUser: User,
  checklist: Checklist,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  phone: string,
  teamsMember?: ModelTeamUserJoinConnection | null,
  teamsOwner?: ModelTeamConnection | null,
  memberChecklists?: ModelChecklistUserJoinConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTeamUserJoinConnection = {
  __typename: "ModelTeamUserJoinConnection",
  items?:  Array<TeamUserJoin | null > | null,
  nextToken?: string | null,
};

export type TeamUserJoin = {
  __typename: "TeamUserJoin",
  id: string,
  teamID: string,
  userID: string,
  team: Team,
  teamMember: User,
  createdAt: string,
  updatedAt: string,
};

export type Team = {
  __typename: "Team",
  id: string,
  teamName: string,
  avatar: string,
  teamMembers?: ModelTeamUserJoinConnection | null,
  teamLead: User,
  createdAt: string,
  updatedAt: string,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
};

export type UpdateChecklistInput = {
  id: string,
  Title?: string | null,
};

export type DeleteChecklistInput = {
  id: string,
};

export type CreateFormFieldInput = {
  id?: string | null,
  title: string,
  type: formFieldType,
  input?: Array< string | null > | null,
  checklistID: string,
};

export type ModelFormFieldConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelformFieldTypeInput | null,
  input?: ModelStringInput | null,
  checklistID?: ModelIDInput | null,
  and?: Array< ModelFormFieldConditionInput | null > | null,
  or?: Array< ModelFormFieldConditionInput | null > | null,
  not?: ModelFormFieldConditionInput | null,
};

export type ModelformFieldTypeInput = {
  eq?: formFieldType | null,
  ne?: formFieldType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFormFieldInput = {
  id: string,
  title?: string | null,
  type?: formFieldType | null,
  input?: Array< string | null > | null,
  checklistID?: string | null,
};

export type DeleteFormFieldInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  checklistID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  checklistID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  checklistID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  teamName: string,
  avatar: string,
  teamTeamLeadId: string,
};

export type ModelTeamConditionInput = {
  teamName?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  teamName?: string | null,
  avatar?: string | null,
  teamTeamLeadId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  phone: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTeamUserJoinInput = {
  id?: string | null,
  teamID: string,
  userID: string,
};

export type ModelTeamUserJoinConditionInput = {
  teamID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelTeamUserJoinConditionInput | null > | null,
  or?: Array< ModelTeamUserJoinConditionInput | null > | null,
  not?: ModelTeamUserJoinConditionInput | null,
};

export type UpdateTeamUserJoinInput = {
  id: string,
  teamID?: string | null,
  userID?: string | null,
};

export type DeleteTeamUserJoinInput = {
  id: string,
};

export type CreateChecklistUserJoinInput = {
  id?: string | null,
  userID: string,
  checklistID: string,
};

export type ModelChecklistUserJoinConditionInput = {
  userID?: ModelIDInput | null,
  checklistID?: ModelIDInput | null,
  and?: Array< ModelChecklistUserJoinConditionInput | null > | null,
  or?: Array< ModelChecklistUserJoinConditionInput | null > | null,
  not?: ModelChecklistUserJoinConditionInput | null,
};

export type UpdateChecklistUserJoinInput = {
  id: string,
  userID?: string | null,
  checklistID?: string | null,
};

export type DeleteChecklistUserJoinInput = {
  id: string,
};

export type ModelChecklistFilterInput = {
  id?: ModelIDInput | null,
  Title?: ModelStringInput | null,
  and?: Array< ModelChecklistFilterInput | null > | null,
  or?: Array< ModelChecklistFilterInput | null > | null,
  not?: ModelChecklistFilterInput | null,
};

export type ModelChecklistConnection = {
  __typename: "ModelChecklistConnection",
  items?:  Array<Checklist | null > | null,
  nextToken?: string | null,
};

export type ModelFormFieldFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelformFieldTypeInput | null,
  input?: ModelStringInput | null,
  checklistID?: ModelIDInput | null,
  and?: Array< ModelFormFieldFilterInput | null > | null,
  or?: Array< ModelFormFieldFilterInput | null > | null,
  not?: ModelFormFieldFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  checklistID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  teamName?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type CreateChecklistMutationVariables = {
  input: CreateChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type CreateChecklistMutation = {
  createChecklist?:  {
    __typename: "Checklist",
    id: string,
    Title: string,
    FormFields?:  {
      __typename: "ModelFormFieldConnection",
      items?:  Array< {
        __typename: "FormField",
        id: string,
        title: string,
        type: formFieldType,
        input?: Array< string | null > | null,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        checklistID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChecklistMutationVariables = {
  input: UpdateChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type UpdateChecklistMutation = {
  updateChecklist?:  {
    __typename: "Checklist",
    id: string,
    Title: string,
    FormFields?:  {
      __typename: "ModelFormFieldConnection",
      items?:  Array< {
        __typename: "FormField",
        id: string,
        title: string,
        type: formFieldType,
        input?: Array< string | null > | null,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        checklistID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChecklistMutationVariables = {
  input: DeleteChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type DeleteChecklistMutation = {
  deleteChecklist?:  {
    __typename: "Checklist",
    id: string,
    Title: string,
    FormFields?:  {
      __typename: "ModelFormFieldConnection",
      items?:  Array< {
        __typename: "FormField",
        id: string,
        title: string,
        type: formFieldType,
        input?: Array< string | null > | null,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        checklistID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFormFieldMutationVariables = {
  input: CreateFormFieldInput,
  condition?: ModelFormFieldConditionInput | null,
};

export type CreateFormFieldMutation = {
  createFormField?:  {
    __typename: "FormField",
    id: string,
    title: string,
    type: formFieldType,
    input?: Array< string | null > | null,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormFieldMutationVariables = {
  input: UpdateFormFieldInput,
  condition?: ModelFormFieldConditionInput | null,
};

export type UpdateFormFieldMutation = {
  updateFormField?:  {
    __typename: "FormField",
    id: string,
    title: string,
    type: formFieldType,
    input?: Array< string | null > | null,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormFieldMutationVariables = {
  input: DeleteFormFieldInput,
  condition?: ModelFormFieldConditionInput | null,
};

export type DeleteFormFieldMutation = {
  deleteFormField?:  {
    __typename: "FormField",
    id: string,
    title: string,
    type: formFieldType,
    input?: Array< string | null > | null,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    teamName: string,
    avatar: string,
    teamMembers?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamLead:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    teamName: string,
    avatar: string,
    teamMembers?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamLead:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    teamName: string,
    avatar: string,
    teamMembers?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamLead:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    teamsMember?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamsOwner?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        teamName: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    memberChecklists?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    teamsMember?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamsOwner?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        teamName: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    memberChecklists?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    teamsMember?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamsOwner?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        teamName: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    memberChecklists?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamUserJoinMutationVariables = {
  input: CreateTeamUserJoinInput,
  condition?: ModelTeamUserJoinConditionInput | null,
};

export type CreateTeamUserJoinMutation = {
  createTeamUserJoin?:  {
    __typename: "TeamUserJoin",
    id: string,
    teamID: string,
    userID: string,
    team:  {
      __typename: "Team",
      id: string,
      teamName: string,
      avatar: string,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    },
    teamMember:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamUserJoinMutationVariables = {
  input: UpdateTeamUserJoinInput,
  condition?: ModelTeamUserJoinConditionInput | null,
};

export type UpdateTeamUserJoinMutation = {
  updateTeamUserJoin?:  {
    __typename: "TeamUserJoin",
    id: string,
    teamID: string,
    userID: string,
    team:  {
      __typename: "Team",
      id: string,
      teamName: string,
      avatar: string,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    },
    teamMember:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamUserJoinMutationVariables = {
  input: DeleteTeamUserJoinInput,
  condition?: ModelTeamUserJoinConditionInput | null,
};

export type DeleteTeamUserJoinMutation = {
  deleteTeamUserJoin?:  {
    __typename: "TeamUserJoin",
    id: string,
    teamID: string,
    userID: string,
    team:  {
      __typename: "Team",
      id: string,
      teamName: string,
      avatar: string,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    },
    teamMember:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChecklistUserJoinMutationVariables = {
  input: CreateChecklistUserJoinInput,
  condition?: ModelChecklistUserJoinConditionInput | null,
};

export type CreateChecklistUserJoinMutation = {
  createChecklistUserJoin?:  {
    __typename: "ChecklistUserJoin",
    id: string,
    userID: string,
    checklistID: string,
    checklistUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklist:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChecklistUserJoinMutationVariables = {
  input: UpdateChecklistUserJoinInput,
  condition?: ModelChecklistUserJoinConditionInput | null,
};

export type UpdateChecklistUserJoinMutation = {
  updateChecklistUserJoin?:  {
    __typename: "ChecklistUserJoin",
    id: string,
    userID: string,
    checklistID: string,
    checklistUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklist:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChecklistUserJoinMutationVariables = {
  input: DeleteChecklistUserJoinInput,
  condition?: ModelChecklistUserJoinConditionInput | null,
};

export type DeleteChecklistUserJoinMutation = {
  deleteChecklistUserJoin?:  {
    __typename: "ChecklistUserJoin",
    id: string,
    userID: string,
    checklistID: string,
    checklistUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklist:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetChecklistQueryVariables = {
  id: string,
};

export type GetChecklistQuery = {
  getChecklist?:  {
    __typename: "Checklist",
    id: string,
    Title: string,
    FormFields?:  {
      __typename: "ModelFormFieldConnection",
      items?:  Array< {
        __typename: "FormField",
        id: string,
        title: string,
        type: formFieldType,
        input?: Array< string | null > | null,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        checklistID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChecklistsQueryVariables = {
  filter?: ModelChecklistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChecklistsQuery = {
  listChecklists?:  {
    __typename: "ModelChecklistConnection",
    items?:  Array< {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFormFieldQueryVariables = {
  id: string,
};

export type GetFormFieldQuery = {
  getFormField?:  {
    __typename: "FormField",
    id: string,
    title: string,
    type: formFieldType,
    input?: Array< string | null > | null,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormFieldsQueryVariables = {
  filter?: ModelFormFieldFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormFieldsQuery = {
  listFormFields?:  {
    __typename: "ModelFormFieldConnection",
    items?:  Array< {
      __typename: "FormField",
      id: string,
      title: string,
      type: formFieldType,
      input?: Array< string | null > | null,
      checklistID: string,
      checklist?:  {
        __typename: "Checklist",
        id: string,
        Title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      checklistID: string,
      checklist?:  {
        __typename: "Checklist",
        id: string,
        Title: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    teamName: string,
    avatar: string,
    teamMembers?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamLead:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      teamName: string,
      avatar: string,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    teamsMember?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamsOwner?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        teamName: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    memberChecklists?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChecklistSubscription = {
  onCreateChecklist?:  {
    __typename: "Checklist",
    id: string,
    Title: string,
    FormFields?:  {
      __typename: "ModelFormFieldConnection",
      items?:  Array< {
        __typename: "FormField",
        id: string,
        title: string,
        type: formFieldType,
        input?: Array< string | null > | null,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        checklistID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChecklistSubscription = {
  onUpdateChecklist?:  {
    __typename: "Checklist",
    id: string,
    Title: string,
    FormFields?:  {
      __typename: "ModelFormFieldConnection",
      items?:  Array< {
        __typename: "FormField",
        id: string,
        title: string,
        type: formFieldType,
        input?: Array< string | null > | null,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        checklistID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChecklistSubscription = {
  onDeleteChecklist?:  {
    __typename: "Checklist",
    id: string,
    Title: string,
    FormFields?:  {
      __typename: "ModelFormFieldConnection",
      items?:  Array< {
        __typename: "FormField",
        id: string,
        title: string,
        type: formFieldType,
        input?: Array< string | null > | null,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        checklistID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFormFieldSubscription = {
  onCreateFormField?:  {
    __typename: "FormField",
    id: string,
    title: string,
    type: formFieldType,
    input?: Array< string | null > | null,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormFieldSubscription = {
  onUpdateFormField?:  {
    __typename: "FormField",
    id: string,
    title: string,
    type: formFieldType,
    input?: Array< string | null > | null,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormFieldSubscription = {
  onDeleteFormField?:  {
    __typename: "FormField",
    id: string,
    title: string,
    type: formFieldType,
    input?: Array< string | null > | null,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    checklistID: string,
    checklist?:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    teamName: string,
    avatar: string,
    teamMembers?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamLead:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    teamName: string,
    avatar: string,
    teamMembers?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamLead:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    teamName: string,
    avatar: string,
    teamMembers?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamLead:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    teamsMember?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamsOwner?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        teamName: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    memberChecklists?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    teamsMember?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamsOwner?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        teamName: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    memberChecklists?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone: string,
    teamsMember?:  {
      __typename: "ModelTeamUserJoinConnection",
      items?:  Array< {
        __typename: "TeamUserJoin",
        id: string,
        teamID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    teamsOwner?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        teamName: string,
        avatar: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    memberChecklists?:  {
      __typename: "ModelChecklistUserJoinConnection",
      items?:  Array< {
        __typename: "ChecklistUserJoin",
        id: string,
        userID: string,
        checklistID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamUserJoinSubscription = {
  onCreateTeamUserJoin?:  {
    __typename: "TeamUserJoin",
    id: string,
    teamID: string,
    userID: string,
    team:  {
      __typename: "Team",
      id: string,
      teamName: string,
      avatar: string,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    },
    teamMember:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamUserJoinSubscription = {
  onUpdateTeamUserJoin?:  {
    __typename: "TeamUserJoin",
    id: string,
    teamID: string,
    userID: string,
    team:  {
      __typename: "Team",
      id: string,
      teamName: string,
      avatar: string,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    },
    teamMember:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamUserJoinSubscription = {
  onDeleteTeamUserJoin?:  {
    __typename: "TeamUserJoin",
    id: string,
    teamID: string,
    userID: string,
    team:  {
      __typename: "Team",
      id: string,
      teamName: string,
      avatar: string,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        phone: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    },
    teamMember:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChecklistUserJoinSubscription = {
  onCreateChecklistUserJoin?:  {
    __typename: "ChecklistUserJoin",
    id: string,
    userID: string,
    checklistID: string,
    checklistUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklist:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChecklistUserJoinSubscription = {
  onUpdateChecklistUserJoin?:  {
    __typename: "ChecklistUserJoin",
    id: string,
    userID: string,
    checklistID: string,
    checklistUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklist:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChecklistUserJoinSubscription = {
  onDeleteChecklistUserJoin?:  {
    __typename: "ChecklistUserJoin",
    id: string,
    userID: string,
    checklistID: string,
    checklistUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone: string,
      teamsMember?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamsOwner?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      memberChecklists?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklist:  {
      __typename: "Checklist",
      id: string,
      Title: string,
      FormFields?:  {
        __typename: "ModelFormFieldConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelChecklistUserJoinConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
