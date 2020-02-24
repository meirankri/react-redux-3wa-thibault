import axios from 'axios'

export function signup(info, state){
  const {firstName,lastName,email, password} = info
    return axios.post('http://localhost:5000/user/signup',{
          firstName,
          lastName,
          email, 
          password

    })
    .then(function (response) {
      
        return response.data;
      })
      .catch(function (error) {        
        return error
      });
}
export function signin(info){
  const {email, password} = info
    return axios.post('http://localhost:5000/user/signin',{
          email, 
          password

    })
    .then(function (response) {
        return response.data;
      })
      .catch(function (error) {        
        return error;
      });
}
