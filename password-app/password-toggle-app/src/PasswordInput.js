import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState(''); //this state is for the user to input password
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => { 
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'} //text and password is standard, comes in react libraries
        value={password} onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={togglePasswordVisibility}> 
        {showPassword ? 'Hide' : 'Show'} 
      </button> 
    </div>
  );
};

export default PasswordInput;


/*import React, { useState } from 'react';

function LoginForm() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
    </form>
  );
}

export default LoginForm;
*/