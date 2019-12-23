import React, {useState} from 'react';

const Dashboard: React.FC = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('');
    
    return loggedIn ? (
        <div>
            <h1>Welcome { name }</h1>
        </div>
    ) : (
        <div>
            You need to login first!
        </div>
    )
}

export default Dashboard;