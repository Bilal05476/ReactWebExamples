import React, {useEffect ,useState} from 'react';
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5ff961899a770c10abd3d17e';

const DummyApi = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers(){
        
        const response = await axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            //For Map Function
            const data = await response.data.data; 
            // For Simple use
            // const data = await response.data.data[0];
            // console.log(data);
            setUsers(data)
        }
        fetchUsers();
    }, [])

        return (
            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-3">
            //             <div className="card">
            //                 <img src={users.picture} className="card-img-top" alt="user image" />
            //                 <div className="card-body">
            //                     <h5 className="card-title">{users.firstName}</h5>
            //                     <p className="card-text">{users.email}</p>
            //                     <a href="#" className="btn btn-primary">{users.title}</a>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="container">
                <div className="row"> 
                    {users.map((user, ind) => {
                        return(
                            <div className="col-12 col-md-4">
                            <div className="card" key={ind}>
                                <img src={user.picture} className="card-img-top" alt="user image" />
                                <div className="card-body">
                                    <h5 className="card-title">{user.firstName}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <a href="#" className="btn btn-primary">{user.title}</a>
                                </div>
                            </div>
                            </div>
                        )
                    })}   
                </div>
            </div>             
        );
};

export default DummyApi;