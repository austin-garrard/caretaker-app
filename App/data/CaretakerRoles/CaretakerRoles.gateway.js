/*
  Makes API calls to fetch caretaker roles.

  However, until there is an API to call, it returns canned data.
*/
import { getApiUrl } from '../../config/ApiConfig';
import '../../utils/fetch';

const createCaretakerRolesGateway = () => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  const postConfig = {
    method: 'POST',
    headers: {
      ...config.headers,
      'Content-Type': 'application/json'
    }
  };

  const API_URL = getApiUrl();

  return {
    getAll() {
      return fetch(API_URL + '/roles', config)
        .then(response => response.json())
        .then(json => {
          return json.roles;
        })
    },

    create(newRoleData) {
      return fetch(API_URL + '/roles', postConfig)
        .then(response => response.json())
        .then(json => json.newRole);
    }
  }
};

export default createCaretakerRolesGateway();
