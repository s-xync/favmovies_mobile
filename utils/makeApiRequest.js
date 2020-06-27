import axios from 'axios';

const makeApiRequest = async (
  type,
  microservice,
  url,
  auth = false,
  body = {},
  sessionId = '',
  filePresent = false,
) => {
  if (!type || !url) {
    return {
      error: true,
      logout: false,
      message: 'Something went wrong. Please try again.',
    };
  }

  if (type !== 'GET' && type !== 'POST') {
    return {
      error: true,
      logout: false,
      message: 'Something went wrong. Please try again.',
    };
  }

  const headers = {};
  let data;
  let bearerToken = '';
  if (auth) {
    bearerToken = `Bearer ${sessionId}`;
    if (!bearerToken) {
      return {
        error: true,
        logout: true,
        message: 'You have been logged out. Please login again.',
      };
    }
    headers.Authorization = bearerToken;
  }

  if (filePresent) {
    // Reference: https://stackoverflow.com/questions/38458570/multer-uploading-array-of-files-fail
    headers['Content-Type'] = 'multipart/form-data';
    data = new FormData();

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    Object.keys(body.files).forEach((key, index) => {
      data.append('files', body.files[index]);
    });
  } else {
    data = {...body};
  }

  try {
    let response;
    if (type === 'POST') {
      response = await axios.post(`${microservice}/${url}`, data, {
        headers,
      });
    } else if (type === 'GET') {
      response = await axios.get(`${microservice}/${url}`, {
        ...data,
        headers,
      });
    }
    return {
      error: false,
      logout: false,
      message: response.data.message,
      response: response.data,
    };
  } catch (error) {
    if (error.response && error.response.data) {
      if (error.response.status === 401) {
        return {
          error: true,
          logout: true,
          message: 'You have been logged out. Please login again.',
        };
      }
      return {
        error: true,
        logout: false,
        message:
          error.response.data.message ||
          'Something went wrong. Please try again.',
      };
    }

    if (error.message && error.message.includes('Network Error')) {
      return {
        error: true,
        logout: false,
        message:
          'You are not connected to the internet. Please connect and try again.',
      };
    }

    return {
      error: true,
      logout: false,
      message: 'Something went wrong. Please try again.',
    };
  }
};

export default makeApiRequest;
