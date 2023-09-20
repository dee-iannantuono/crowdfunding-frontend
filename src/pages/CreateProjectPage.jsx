import CreateProject from "../components/CreateProject";

function CreateProjectForm() {
    return <CreateProject projectData={{ date_created: projectData.date_created, is_open: projectData.is_open }}/>;
}

export default CreateProjectForm;