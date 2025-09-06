import { EventBridgeHandler } from 'aws-lambda';

export const handler: EventBridgeHandler<'Scheduled Event', any, void> = async (
  event,
) => {
  console.log('Daily report event received:', event);
};
