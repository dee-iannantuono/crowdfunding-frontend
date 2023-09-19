import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import CreatePledge from "../components/CreatePledge";
import handleDeletePledge from "../components/DeletePledge";

function ProjectPage() {
    // Here we use a hook that comes for free in react router called `useParams`to get the id from the URL so that we can pass it to our useProject hook.
    const { id } = useParams();
    // useProject returns three pieces of info, so we need to grab them all here
    const { project, isLoading, error } = useProject(id);

    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h4>{project.description}</h4>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.owner} <handleDeletePledge pledgeID={pledgeData.id}></handleDeletePledge>
                        </li>
                    );
                })}
            </ul>
            <CreatePledge projectId={project.id}></CreatePledge>
        </div>
    );
}

export default ProjectPage 