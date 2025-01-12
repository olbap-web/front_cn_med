export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '807e30e3-aa17-4d72-98c6-9a2b4b4fd14e',
      authority: 'https://login.microsoftonline.com/common',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
};
