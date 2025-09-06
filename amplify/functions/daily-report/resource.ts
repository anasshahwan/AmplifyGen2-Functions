import { defineFunction } from '@aws-amplify/backend';

export const dailyReport = defineFunction({
  name: 'dailyReport',
  schedule: ['every month', '0 9 ? * 3 *'],
});
