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
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
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
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
