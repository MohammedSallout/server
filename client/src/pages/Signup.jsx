
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../style/signup.css'

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        navigate('/signin');
        console.log('SignUp successful');
      } else {
        const responseData = await response.json();
        setError(responseData.message);

      }
    } catch (error) {
      setError('An error occurred');
      console.log('An error occurred', error.message);
    }
  };
  

  return (
    <div className='Sign'>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignUp}>
        <h1>SignUp</h1>
  
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
        <button type="submit">SignUp</button>
        <h3>I have an account <Link to="/signin">Sign-in</Link></h3>
      </form>
    </div>
  );
  
};

export default SignUp;
