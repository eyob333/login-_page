
import backgroundImg from './assets/background-image.jpeg'

import './App.css'

function App() {

  return (

    <div className='glass-container'>
      <div className='login-box'>

        <h2> Login </h2>

        <form action="">
          <input id='username' name='username' required placeholder='username' type="text" />
          <input id='password' name='passsword' required placeholder='pasword' type="password" />

        </form>

        <div className='options'>
          <input  type="checkbox" name="rember" id="remember" />
          <label htmlFor="remeber">Remeber me</label>
          <a href="#"> Forgot Passsword? </a>

        </div>          
          <button> Submit</button>
          <p> Don't have an account? <a href='#' id='register'>Register</a></p>

      </div>

    </div>
)}

export default App
