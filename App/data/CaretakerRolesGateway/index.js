/*
  Makes API calls to fetch caretaker roles.

  However, until there is an API to call, it returns canned data.
*/
import { API_URL } from '../../config/ApiConfig';
import "isomorphic-fetch";

const createCaretakerRolesGateway = () => {

  let allRoles = null;

  return {
    getAll() {
      return fetch(API_URL + '/roles')
        .then(response => response.json())
        .then(json => {
          allRoles = json.roles;
          return json.roles;
        })
    }
  }
}

export default createCaretakerRolesGateway();
