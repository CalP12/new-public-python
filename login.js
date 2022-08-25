function AppComp(){

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  let handleUsername = (event) => {
    setUsername(event.target.value)
  }
  let handlePassword = (event) => {
    setPassword(event.target.value)
  }
  let handleSubmit = () => {
    if (username === 'admin' && password === 'admin')
    {
      alert("Success")
    }
    else
    {
      alert("Fail")
    }
  }
  
  return(<>
  <form onSubmit={handleSubmit}>
    <input type="text" value={username} onChange={handleUsername} /><br />
    <input type="password" value={password} onChange={handlePassword} /><br />
    <button>Submit</button>
  </form>
  </>)
}
