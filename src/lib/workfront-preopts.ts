/**
 * Field IDs from getIntegrationMetadata().customIntegration.inputFields[].id
 */
const CLIENT_ID_FIELD = '8ab1d143-687e-4d28-b599-a3cd568ecc7f';
const CLIENT_SECRET_FIELD = 'c72887e1-e9dd-47df-9a8d-efce84feeeff';

export function getWorkfrontInitialPreOptions(): Record<string, string> {
  return {
    [CLIENT_ID_FIELD]: 'your-client-id',
    [CLIENT_SECRET_FIELD]: 'your-client-secret',
  };
}
