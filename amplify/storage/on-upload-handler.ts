import { S3Handler } from 'aws-lambda';

export const handler: S3Handler = async (event) => {
  const objects = event.Records.map((record) => record.s3.object.key);

  console.log('Files has been uploaded:', objects);
};
