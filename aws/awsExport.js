const awsExports = {
    aws_project_region: process.env.EXPO_PUBLIC_AWS_PROJECT_REGION,
    aws_cognito_region: process.env.EXPO_PUBLIC_AWS_COGNITO_REGION,
    aws_user_pools_id: process.env.EXPO_PUBLIC_AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id:
      process.env.EXPO_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
    oauth: {},
    aws_cognito_username_attributes: [],
    aws_cognito_social_providers: [],
    aws_cognito_signup_attributes: ['EMAIL'],
    aws_cognito_mfa_configuration: 'OFF',
    aws_cloud_logic_custom: [
      {
        name: 'secure-api',
        endpoint: process.env.EXPO_PUBLIC_BACKEND_URL,
        region: 'us-west-2',
      },
    ],
  };
  
  export { awsExports };