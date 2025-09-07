import { PreSignUpTriggerHandler } from 'aws-lambda';

export const handler: PreSignUpTriggerHandler = async (event) => {
  const birthdate = new Date(event.request.userAttributes['birthdate']);
  const email = event.request.userAttributes['email'];

  if (!validateBirthDate(birthdate, 18)) {
    throw new Error('You must be at least 18 years old to sign up.');
  }

  // if (!email.endsWith('Apple.com')) {
  //   throw new Error('Only Apple.com email addresses are allowed for sign up.');
  // }

  return event;
};

function validateBirthDate(date: Date, age: number) {
  const comparisonDate = new Date();

  comparisonDate.setFullYear(comparisonDate.getFullYear() - age);
  return date.getTime() <= comparisonDate.getTime();
}
