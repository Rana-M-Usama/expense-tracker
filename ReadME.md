
# Expense Tracker App

This project is a React Native application that serves as an expense tracker with authentication enabled through AWS Cognito. It communicates with a serverless backend deployed on AWS. Below are the steps to set up and configure the application along with the necessary environment variables.

## Setup

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install` in the project directory.
3. Configure environment variables by creating a `.env` file in the project root with the following content:

```plaintext
EXPO_PUBLIC_AWS_PROJECT_REGION=<Project Region>
EXPO_PUBLIC_AWS_COGNITO_REGION=<Cognito Region>
EXPO_PUBLIC_AWS_USER_POOLS_ID=<Cognito User Pool ID>
EXPO_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID=<Cognito Client ID>
EXPO_PUBLIC_BACKEND_URL=<Backend URL (API Gateway URL)>
```

4. Run the application using one of the available scripts:

- `npm start`: Starts the Expo development server.
- `npm run android`: Starts the Expo development server and launches the app on an Android emulator/device.
- `npm run ios`: Starts the Expo development server and launches the app on an iOS simulator/device.
- `npm run web`: Starts the Expo development server and launches the app in a web browser.

## Usage

Once the application is running, users can authenticate(singin/signUp/ForgotPassword) using AWS Cognito and then navigate between screens to add expenses and view expense details.



