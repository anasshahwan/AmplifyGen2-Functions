import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from '../functions/auth/pre-signup/resource';

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
  },
});
