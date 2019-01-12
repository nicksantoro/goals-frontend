const fetchAuth = async (token) => {

  if (!token) throw Error("no token found")
  let userJson = await fetch('http://localhost:5000/users/token', {
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