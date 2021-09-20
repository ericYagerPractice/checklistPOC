export const ListUserNotifications = /* GraphQL */ `
    query ListUserNotifications(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                notifications {
                    items {
                        body
                        title
                        createdAt
                        acknowledged
                    }
                    nextToken
                }
            }
        }
    }
`;

