import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Register:React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [quote, setQuote] = useState('');

    return (
        <div>
            <h1>Register</h1>
            <form>
                <p>To do</p>
            </form>
            <Link to='/'><span role="img" aria-label="Go back to">👈</span> Home</Link>
        </div>
    );
}

export default Register;