import { defineFunction } from '@aws-amplify/backend';

export const sayHello = defineFunction({
  name: 'sayHello',
  entry: './handler.ts',
  timeoutSeconds: 60, //1 minute
  memoryMB: 256, //128 MB
  ephemeralStorageSizeMB: 512, //512 MB
  runtime: 22,
  resourceGroupName: 'data',
});
