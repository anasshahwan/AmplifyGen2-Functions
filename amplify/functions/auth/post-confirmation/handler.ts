import { PostConfirmationTriggerHandler } from 'aws-lambda';
import {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
} from '@aws-sdk/client-cognito-identity-provider';
export const handler: PostConfirmationTriggerHandler = async (event) => {
  const command = new AdminAddUserToGroupCommand({
    UserPoolId: event.userPoolId,
    Username: event.userName,
    GroupName: 'EVERYONE',
  });

  const client = new CognitoIdentityProviderClient();
  // Send the command to add the user to the group
  const response = await client.send(command);
  console.log('User added to group:', response);
  return event;
};
