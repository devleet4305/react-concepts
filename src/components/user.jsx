import { use } from "react";

const user = ({promiseData}) => {
    const userData = use(promiseData);
    return (
        <div>
            {userData.map(user => (
                <div key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                        
                </div>
            ))}
        </div>
    );
};

export default user;