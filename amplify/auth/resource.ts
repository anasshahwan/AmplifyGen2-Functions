import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from '../functions/auth/pre-signup/resource';
import { postConfirmation } from '../functions/auth/post-confirmation/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    birthdate: {
      required: true,
      mutable: false,
    },
  },
  triggers: {
    preSignUp: preSignUp,
    postConfirmation: postConfirmation,
  },
  access: (allow) => [allow.resource(postConfirmation).to(['addUserToGroup'])],
  groups: ['ADMINS', 'EVERYONE'],
});
