import { defineFunction, defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'OurAppStorage',
  triggers: {
    onUpload: defineFunction({
      entry: './on-upload-handler.ts',
    }),
  },
  access: (allow) => ({
    'Files/*': [allow.guest.to(['read', 'write'])],
  }),
});
