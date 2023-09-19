import deletePledge from "../api/delete-pledge";

function handleDeletePledge(pledgeId) {
    deletePledge(pledgeId)
        .then(() => {
                setPledges((prevPledges) =>
                prevPledges.filter((pledge) => pledge.id !== pledgeId)
            );
        })
        .catch((error) => {
            console.error('Error deleting pledge:', error);
        });
}

    {project.pledges.map((pledgeData, key) => {
        return (
            <div key={key}>
                {pledgeData.amount} from {pledgeData.supporter}
                <span>Delete this pledge</span>
                <button onClick={() => handleDeletePledge(pledgeData.id)}>Delete</button>
            </div>
        );
    })}

export default handleDeletePledge;