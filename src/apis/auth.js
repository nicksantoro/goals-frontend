const fetchAuth = async (token) => {
  console.log(token)
  if (!token) throw Error("no token found")
  let userJson = await fetch('https://chirpy4-backend.herokuapp.com/users/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    }
  })


  let user = await userJson.json();

  return user;

}


export default fetchAuth