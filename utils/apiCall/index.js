import { API, Auth } from 'aws-amplify';

/* eslint-disable */
export const apiPost = async (path, body ) => {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  const response = await API.post('secure-api', path, {
    headers: {
      'x-access-token': token,
    },
    body,
  });
  return response;
};

export const apiGet = async (path) => {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  const response = await API.get('secure-api', path, {
    headers: {
      'x-access-token': token,
    },
  });
  return response;
};

export const apiPut = async (path, body) => {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  const response = await API.put('secure-api', path, {
    headers: {
      'x-access-token': token,
    },
    body,
  });
  return response;
};

export const apiDelete = async (path, body) => {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;
  const response = await API.del('secure-api', path, {
    headers: {
      'x-access-token': token,
    },
    body,
  });
  return response;
};
/* eslint-enable */
