import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postUser from '../api/post-user';

function NewUser() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [UserData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
    });

    const handleChange = (e) => {
        setUserData({
            ...UserData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log(UserData)
        e.preventDefault();
        setIsLoading(true)

        postUser({...UserData})
        .then(() => {
        navigate(0)
    })
        .catch(() => {
            setIsLoading(false)
    })
}

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                placeholder="Enter username" 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
                type="text" 
                id="password" 
                placeholder="Password" 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="firstname">First Name:</label>
            <input 
                type="text" 
                id="firstname" 
                placeholder="firstname" 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="lastname">Last name:</label>
            <input 
                type="text" 
                id="lastname" 
                placeholder="lastname" 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="emailaddress">Email address:</label>
            <input 
                type="email" 
                id="emailaddress" 
                placeholder="emailaddress" 
                onChange={handleChange} 
            />
        </div>
            <input type="submit" value={isLoading ? "Loading" : "Register"} disabled={isLoading} />
        </form>
    );
}


export default NewUser;