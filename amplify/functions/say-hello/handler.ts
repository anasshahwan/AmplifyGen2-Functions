import type { Handler } from 'aws-lambda';
import { env } from '$amplify/env/sayHello';

export const handler: Handler = async (event, context) => {
  const { name } = event.arguments;

  console.log('ENViroments:', env);
  console.log('TEST_ENV:', env.TEST_ENV);
  console.log('API_ENDPOINT:', env.API_ENDPOINT);

  return `Hello from Amplify Functions ${name}`;
};
