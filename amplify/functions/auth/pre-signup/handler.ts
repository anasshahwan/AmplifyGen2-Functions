import { PreSignUpTriggerHandler } from 'aws-lambda';

export const handler: PreSignUpTriggerHandler = async (event) => {
  const email = event.request.userAttributes['email'];

  if (!email.endsWith('Apple.com')) {
    throw new Error('Only Apple.com email addresses are allowed for sign up.');
  }

  return event;
};
