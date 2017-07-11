/*
  Makes API calls to fetch caretaker roles.

  However, until there is an API to call, it returns canned data.
*/

const createCaretakerRolesGateway = () => {

    let allRoles = null;

    return {
        getAll: function() {
            if(allRoles === null) {
                //api call to get roles
                allRoles = [
                    {id: 1, name: 'Driver', description: 'Gives rides to things'},
                    {id: 2, name: 'Coordinator', description: 'Helps coordinate people sign ups'},
                    {id: 3, name: 'Groceries', description: 'Picks up groceries'},
                    {id: 4, name: 'Active Friend', description: 'Gets focus out and active (eg, walks) during vulnerable times'},
                    {id: 5, name: 'Chef', description: 'Cooks food cause yum'}
                ]
            }
            return allRoles;
        }
    }
}

export default createCaretakerRolesGateway();
