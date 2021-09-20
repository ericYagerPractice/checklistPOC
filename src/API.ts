/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNotificationInput = {
  id?: string | null,
  title: string,
  body: string,
  acknowledged: boolean,
  targetUserID: string,
};

export type ModelNotificationConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  acknowledged?: ModelBooleanInput | null,
  targetUserID?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type Notification = {
  __typename: "Notification",
  id: string,
  title: string,
  body: string,
  acknowledged: boolean,
  targetUserID: string,
  targetUser: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  avatar?: Avatar | null,
  firstName?: string | null,
  lastName?: string | null,
  description?: string | null,
  teamsMember?: ModelTeamUserJoinConnection | null,
  teamsOwner?: ModelTeamConnection | null,
  memberChecklists?: ModelChecklistUserJoinConnection | null,
  schedules?: ModelDailyScheduleConnection | null,
  notifications?: ModelNotificationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Avatar = {
  __typename: "Avatar",
  id: string,
  name?: string | null,
  owner?: string | null,
  file?: PhotoStorage | null,
  createdAt: string,
  updatedAt: string,
};

export type PhotoStorage = {
  __typename: "PhotoStorage",
  bucket: string,
  region: string,
  key: string,
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
  avatar?: Avatar | null,
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

export type ModelDailyScheduleConnection = {
  __typename: "ModelDailyScheduleConnection",
  items?:  Array<DailySchedule | null > | null,
  nextToken?: string | null,
};

export type DailySchedule = {
  __typename: "DailySchedule",
  id: string,
  title: string,
  date: string,
  owner: string,
  events?: ModelEventConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items?:  Array<Event | null > | null,
  nextToken?: string | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  parentSchedule: string,
  startTime: number,
  endTime: number,
  title: string,
  description: string,
  status?: Status | null,
  assignee: User,
  createdAt: string,
  updatedAt: string,
};

export enum Status {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  VERIFIED_COMPLETE = "VERIFIED_COMPLETE",
}


export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items?:  Array<Notification | null > | null,
  nextToken?: string | null,
};

export type UpdateNotificationInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  acknowledged?: boolean | null,
  targetUserID?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

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
  teamAvatarId?: string | null,
  teamTeamLeadId: string,
};

export type ModelTeamConditionInput = {
  teamName?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  teamName?: string | null,
  teamAvatarId?: string | null,
  teamTeamLeadId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  description?: string | null,
  userAvatarId?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  description?: string | null,
  userAvatarId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAvatarInput = {
  id?: string | null,
  name?: string | null,
  owner?: string | null,
  file?: PhotoStorageInput | null,
};

export type PhotoStorageInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelAvatarConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAvatarConditionInput | null > | null,
  or?: Array< ModelAvatarConditionInput | null > | null,
  not?: ModelAvatarConditionInput | null,
};

export type UpdateAvatarInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  file?: PhotoStorageInput | null,
};

export type DeleteAvatarInput = {
  id: string,
};

export type CreateDailyScheduleInput = {
  id?: string | null,
  title: string,
  date: string,
  owner: string,
};

export type ModelDailyScheduleConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelDailyScheduleConditionInput | null > | null,
  or?: Array< ModelDailyScheduleConditionInput | null > | null,
  not?: ModelDailyScheduleConditionInput | null,
};

export type UpdateDailyScheduleInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  owner?: string | null,
};

export type DeleteDailyScheduleInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  parentSchedule: string,
  startTime: number,
  endTime: number,
  title: string,
  description: string,
  status?: Status | null,
};

export type ModelEventConditionInput = {
  parentSchedule?: ModelIDInput | null,
  startTime?: ModelIntInput | null,
  endTime?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateEventInput = {
  id: string,
  parentSchedule?: string | null,
  startTime?: number | null,
  endTime?: number | null,
  title?: string | null,
  description?: string | null,
  status?: Status | null,
};

export type DeleteEventInput = {
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

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  acknowledged?: ModelBooleanInput | null,
  targetUserID?: ModelIDInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
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
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelAvatarFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAvatarFilterInput | null > | null,
  or?: Array< ModelAvatarFilterInput | null > | null,
  not?: ModelAvatarFilterInput | null,
};

export type ModelAvatarConnection = {
  __typename: "ModelAvatarConnection",
  items?:  Array<Avatar | null > | null,
  nextToken?: string | null,
};

export type ModelDailyScheduleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelDailyScheduleFilterInput | null > | null,
  or?: Array< ModelDailyScheduleFilterInput | null > | null,
  not?: ModelDailyScheduleFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  parentSchedule?: ModelIDInput | null,
  startTime?: ModelIntInput | null,
  endTime?: ModelIntInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    title: string,
    body: string,
    acknowledged: boolean,
    targetUserID: string,
    targetUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    title: string,
    body: string,
    acknowledged: boolean,
    targetUserID: string,
    targetUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    title: string,
    body: string,
    acknowledged: boolean,
    targetUserID: string,
    targetUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
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
    schedules?:  {
      __typename: "ModelDailyScheduleConnection",
      items?:  Array< {
        __typename: "DailySchedule",
        id: string,
        title: string,
        date: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        title: string,
        body: string,
        acknowledged: boolean,
        targetUserID: string,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
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
    schedules?:  {
      __typename: "ModelDailyScheduleConnection",
      items?:  Array< {
        __typename: "DailySchedule",
        id: string,
        title: string,
        date: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        title: string,
        body: string,
        acknowledged: boolean,
        targetUserID: string,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
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
    schedules?:  {
      __typename: "ModelDailyScheduleConnection",
      items?:  Array< {
        __typename: "DailySchedule",
        id: string,
        title: string,
        date: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        title: string,
        body: string,
        acknowledged: boolean,
        targetUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAvatarMutationVariables = {
  input: CreateAvatarInput,
  condition?: ModelAvatarConditionInput | null,
};

export type CreateAvatarMutation = {
  createAvatar?:  {
    __typename: "Avatar",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "PhotoStorage",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAvatarMutationVariables = {
  input: UpdateAvatarInput,
  condition?: ModelAvatarConditionInput | null,
};

export type UpdateAvatarMutation = {
  updateAvatar?:  {
    __typename: "Avatar",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "PhotoStorage",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAvatarMutationVariables = {
  input: DeleteAvatarInput,
  condition?: ModelAvatarConditionInput | null,
};

export type DeleteAvatarMutation = {
  deleteAvatar?:  {
    __typename: "Avatar",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "PhotoStorage",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDailyScheduleMutationVariables = {
  input: CreateDailyScheduleInput,
  condition?: ModelDailyScheduleConditionInput | null,
};

export type CreateDailyScheduleMutation = {
  createDailySchedule?:  {
    __typename: "DailySchedule",
    id: string,
    title: string,
    date: string,
    owner: string,
    events?:  {
      __typename: "ModelEventConnection",
      items?:  Array< {
        __typename: "Event",
        id: string,
        parentSchedule: string,
        startTime: number,
        endTime: number,
        title: string,
        description: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDailyScheduleMutationVariables = {
  input: UpdateDailyScheduleInput,
  condition?: ModelDailyScheduleConditionInput | null,
};

export type UpdateDailyScheduleMutation = {
  updateDailySchedule?:  {
    __typename: "DailySchedule",
    id: string,
    title: string,
    date: string,
    owner: string,
    events?:  {
      __typename: "ModelEventConnection",
      items?:  Array< {
        __typename: "Event",
        id: string,
        parentSchedule: string,
        startTime: number,
        endTime: number,
        title: string,
        description: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDailyScheduleMutationVariables = {
  input: DeleteDailyScheduleInput,
  condition?: ModelDailyScheduleConditionInput | null,
};

export type DeleteDailyScheduleMutation = {
  deleteDailySchedule?:  {
    __typename: "DailySchedule",
    id: string,
    title: string,
    date: string,
    owner: string,
    events?:  {
      __typename: "ModelEventConnection",
      items?:  Array< {
        __typename: "Event",
        id: string,
        parentSchedule: string,
        startTime: number,
        endTime: number,
        title: string,
        description: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    parentSchedule: string,
    startTime: number,
    endTime: number,
    title: string,
    description: string,
    status?: Status | null,
    assignee:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    parentSchedule: string,
    startTime: number,
    endTime: number,
    title: string,
    description: string,
    status?: Status | null,
    assignee:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    parentSchedule: string,
    startTime: number,
    endTime: number,
    title: string,
    description: string,
    status?: Status | null,
    assignee:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    title: string,
    body: string,
    acknowledged: boolean,
    targetUserID: string,
    targetUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items?:  Array< {
      __typename: "Notification",
      id: string,
      title: string,
      body: string,
      acknowledged: boolean,
      targetUserID: string,
      targetUser:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
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
    schedules?:  {
      __typename: "ModelDailyScheduleConnection",
      items?:  Array< {
        __typename: "DailySchedule",
        id: string,
        title: string,
        date: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        title: string,
        body: string,
        acknowledged: boolean,
        targetUserID: string,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAvatarQueryVariables = {
  id: string,
};

export type GetAvatarQuery = {
  getAvatar?:  {
    __typename: "Avatar",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "PhotoStorage",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAvatarsQueryVariables = {
  filter?: ModelAvatarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAvatarsQuery = {
  listAvatars?:  {
    __typename: "ModelAvatarConnection",
    items?:  Array< {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDailyScheduleQueryVariables = {
  id: string,
};

export type GetDailyScheduleQuery = {
  getDailySchedule?:  {
    __typename: "DailySchedule",
    id: string,
    title: string,
    date: string,
    owner: string,
    events?:  {
      __typename: "ModelEventConnection",
      items?:  Array< {
        __typename: "Event",
        id: string,
        parentSchedule: string,
        startTime: number,
        endTime: number,
        title: string,
        description: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDailySchedulesQueryVariables = {
  filter?: ModelDailyScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDailySchedulesQuery = {
  listDailySchedules?:  {
    __typename: "ModelDailyScheduleConnection",
    items?:  Array< {
      __typename: "DailySchedule",
      id: string,
      title: string,
      date: string,
      owner: string,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    parentSchedule: string,
    startTime: number,
    endTime: number,
    title: string,
    description: string,
    status?: Status | null,
    assignee:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      parentSchedule: string,
      startTime: number,
      endTime: number,
      title: string,
      description: string,
      status?: Status | null,
      assignee:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    title: string,
    body: string,
    acknowledged: boolean,
    targetUserID: string,
    targetUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    title: string,
    body: string,
    acknowledged: boolean,
    targetUserID: string,
    targetUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    title: string,
    body: string,
    acknowledged: boolean,
    targetUserID: string,
    targetUser:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
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
    schedules?:  {
      __typename: "ModelDailyScheduleConnection",
      items?:  Array< {
        __typename: "DailySchedule",
        id: string,
        title: string,
        date: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        title: string,
        body: string,
        acknowledged: boolean,
        targetUserID: string,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
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
    schedules?:  {
      __typename: "ModelDailyScheduleConnection",
      items?:  Array< {
        __typename: "DailySchedule",
        id: string,
        title: string,
        date: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        title: string,
        body: string,
        acknowledged: boolean,
        targetUserID: string,
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
    avatar?:  {
      __typename: "Avatar",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "PhotoStorage",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    firstName?: string | null,
    lastName?: string | null,
    description?: string | null,
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
    schedules?:  {
      __typename: "ModelDailyScheduleConnection",
      items?:  Array< {
        __typename: "DailySchedule",
        id: string,
        title: string,
        date: string,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      items?:  Array< {
        __typename: "Notification",
        id: string,
        title: string,
        body: string,
        acknowledged: boolean,
        targetUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAvatarSubscriptionVariables = {
  owner: string,
};

export type OnCreateAvatarSubscription = {
  onCreateAvatar?:  {
    __typename: "Avatar",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "PhotoStorage",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAvatarSubscriptionVariables = {
  owner: string,
};

export type OnUpdateAvatarSubscription = {
  onUpdateAvatar?:  {
    __typename: "Avatar",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "PhotoStorage",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAvatarSubscriptionVariables = {
  owner: string,
};

export type OnDeleteAvatarSubscription = {
  onDeleteAvatar?:  {
    __typename: "Avatar",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "PhotoStorage",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDailyScheduleSubscription = {
  onCreateDailySchedule?:  {
    __typename: "DailySchedule",
    id: string,
    title: string,
    date: string,
    owner: string,
    events?:  {
      __typename: "ModelEventConnection",
      items?:  Array< {
        __typename: "Event",
        id: string,
        parentSchedule: string,
        startTime: number,
        endTime: number,
        title: string,
        description: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDailyScheduleSubscription = {
  onUpdateDailySchedule?:  {
    __typename: "DailySchedule",
    id: string,
    title: string,
    date: string,
    owner: string,
    events?:  {
      __typename: "ModelEventConnection",
      items?:  Array< {
        __typename: "Event",
        id: string,
        parentSchedule: string,
        startTime: number,
        endTime: number,
        title: string,
        description: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDailyScheduleSubscription = {
  onDeleteDailySchedule?:  {
    __typename: "DailySchedule",
    id: string,
    title: string,
    date: string,
    owner: string,
    events?:  {
      __typename: "ModelEventConnection",
      items?:  Array< {
        __typename: "Event",
        id: string,
        parentSchedule: string,
        startTime: number,
        endTime: number,
        title: string,
        description: string,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    parentSchedule: string,
    startTime: number,
    endTime: number,
    title: string,
    description: string,
    status?: Status | null,
    assignee:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    parentSchedule: string,
    startTime: number,
    endTime: number,
    title: string,
    description: string,
    status?: Status | null,
    assignee:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    parentSchedule: string,
    startTime: number,
    endTime: number,
    title: string,
    description: string,
    status?: Status | null,
    assignee:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      teamMembers?:  {
        __typename: "ModelTeamUserJoinConnection",
        nextToken?: string | null,
      } | null,
      teamLead:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        firstName?: string | null,
        lastName?: string | null,
        description?: string | null,
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
      avatar?:  {
        __typename: "Avatar",
        id: string,
        name?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      firstName?: string | null,
      lastName?: string | null,
      description?: string | null,
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
      schedules?:  {
        __typename: "ModelDailyScheduleConnection",
        nextToken?: string | null,
      } | null,
      notifications?:  {
        __typename: "ModelNotificationConnection",
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
