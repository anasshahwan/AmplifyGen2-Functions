import { defineFunction, secret } from '@aws-amplify/backend';

export const sayHello = defineFunction({
  name: 'sayHello',
  entry: './handler.ts',
  timeoutSeconds: 60, //1 minute
  memoryMB: 256, //128 MB
  ephemeralStorageSizeMB: 512, //512 MB
  runtime: 22,
  resourceGroupName: 'data',
  environment: {
    TEST_ENV: 'test-value',
    API_ENDPOINT: process.env['API_ENDPOINT'] || 'https://dev.example.com',
    API_KEY: secret('API_KEY'),
  },
});
