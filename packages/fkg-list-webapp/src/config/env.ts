export const env = {
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  name: process.env.NODE_ENV,
  commitId: process.env.REACT_APP_COMMIT_ID,
  basePath: process.env.PUBLIC_URL,
}
