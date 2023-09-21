import deletePledge from "../api/delete-pledge";

function HandleDeletePledge(pledgeId) {
    setIsLoading(true);
    deletePledge(pledgeId)
        .then(() => {
                setPledges((prevPledges) =>
                prevPledges.filter((pledge) => pledge.id !== pledgeId)
            );
        })
        .catch((error) => {
            console.error('Error deleting pledge:', error);
            setIsLoading(false)
        })
        .finally(() => {
            setIsLoading(false);
        });
}

    // {project.pledges.map((pledgeData, key) => {
    //     return (
    //         <div key={key}>
    //             {pledgeData.amount} from {pledgeData.supporter}
    //             <span>Delete this pledge</span>
    //             <button onClick={() => handleDeletePledge(pledgeData.id)}>Delete</button>
    //         </div>
    //     );
    // })}

export default HandleDeletePledge;