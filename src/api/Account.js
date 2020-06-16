import request from '../util/request';

/**
 * An Account object used to interact with the Keycloak Account API.
 */
class Account {
  constructor(realmUrl) {
    this.realmUrl = realmUrl;
  }

  /**
   * Gets the current user's account information via the Keycloak API.
   *
   * Example account JSON:
   * {
   *  "username": "alice",
   *  "firstName": "Alice",
   *  "lastName": "Liddel",
   *  "email": "alice@keycloak.org",
   *  "emailVerified": false,
   *  "attributes": {}
   * }
   *
   * @param {string} token The current user's Keycloak id token
   *
   * @return {Promise} A promise resolving to response object containing the API response
   */
  get(token) {
    const url = `${this.realmUrl}/account/`;

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      Authorization: `Bearer ${token}`,
    };

    return request(url, { headers })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error('❌ Error getting Account API response:\n', err);
        throw err;
      });
  }
}

export default Account;
