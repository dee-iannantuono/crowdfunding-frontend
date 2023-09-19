import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postUser from '../api/post-user';

function NewUser() {
    const navigate = useNavigate()
    const [UserData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    });

    const handleChange = (e) => {
        setUserData({
            ...UserData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
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
                    name="username"
                    password="password"
                    first_name="firstname"
                    last_name="lastname"
                    value={UserData.username}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Register" />
        </form>
    );
}


export default NewUser;