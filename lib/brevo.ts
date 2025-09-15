// utils/brevo.ts
import * as brevo from '@getbrevo/brevo';

// Check for the API key at the time of module initialization.
if (!process.env.BREVO_API_KEY) {
  throw new Error('BREVO_API_KEY is not defined in environment variables.');
}

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// Export the single, pre-configured instance.
// Node.js will cache this module, so the instance is created only once.
export const brevoClient = apiInstance;
