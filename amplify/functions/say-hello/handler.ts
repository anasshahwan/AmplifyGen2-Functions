import type { Handler } from 'aws-lambda';
export const handler: Handler = async (event, context) => {
  const { name } = event.arguments;
  return `Hello from Amplify Functions ${name}`;
};
