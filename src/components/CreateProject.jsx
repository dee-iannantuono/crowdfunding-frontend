import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postProject from "../api/post-project.js";

function CreateProject() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        date_created: new Date().toISOString(),
        is_open: true,
    });

    const handleChange = (e) => {
    setProjectData({
            ...projectData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        projectData.date_created = new Date().toISOString();
        projectData.is_open = true;

        postProject({...projectData})
        .then(() => {
        navigate(0)
    })
        .catch(() => {
            setIsLoading(false)
    })
}

if(isLoading) {
    return <p>Loading...</p>
}

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input 
                type="text" 
                id="title" 
                placeholder="Enter title" 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input 
                type="text" 
                id="description" 
                placeholder="Description" 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="goal">Goal:</label>
            <input 
                type="number" 
                id="goal" 
                placeholder="goal" 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="image">Image:</label>
            <input 
                type="url" 
                id="image" 
                placeholder="image" 
                onChange={handleChange} 
            />
        </div>
        <input type="submit" value="Project" />
    </form>
)
}

export default CreateProject;