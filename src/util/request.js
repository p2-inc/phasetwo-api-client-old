import fetch from 'isomorphic-unfetch';

/*
 * A modified version of fetch() which throws an error on non-200 status codes.
 *
 * The default implementation of fetch() only throws when a network error is encountered,
 * leading to the development of shims like this one to allow API consumers to handle
 * API errors via .catch()
 *
 * @return {Promise} A promise resolving to the response object on success or an error object on non-200 or failed requests
 */
function request(url, options) {
  return fetch(url, options).then(checkStatus);
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export default request;
