import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users/'

const getUsersData = async () =>
{
    let resp1 = await axios.get(url)
    let users = resp1.data;
    let usersData = users.map(user =>
      {
         let obj = {};
         obj.name = user.name
         obj.email = user.email
         return obj
      })
      return usersData;
}


export default {getUsersData}