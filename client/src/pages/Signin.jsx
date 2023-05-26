import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const SignIn = () => {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signin', { username, password });
      if (response.status === 200) {
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/');
      } else {
        console.log(response);
      }
    } catch (error) {
      if (error.response.data?.message?.details?.[0].message) {
        setError(error.response.data.message.details[0].message);
      } else {
        setError(error.response.data.message);
      }

    }
  };

  return (
    <div className='Sign'>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignIn}>
        <h1>SignIn</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">SignIn</button>
        <h3>I don't have an account <Link to="/signup">Sign-up</Link></h3>

      </form>

    </div>
  );
};

export default SignIn;
