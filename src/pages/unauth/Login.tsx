import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login:React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>    
            <h1>Login</h1>
            <form>
                <p>To do</p>
            </form>
            <Link to='/'><span role="img" aria-label="Go back to">👈</span> Home</Link>
        </div>
    )
}

export default Login;