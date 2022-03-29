import React,{useState,useEffect} from 'react';
import {Navigation} from './Navigation';
import {useNavigate} from "react-router-dom";
import "../Css/Profile.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import CONSTANTS from '../../utils/constants';
import {isAuthenticated} from "../../utils/apiCalls";
function Profile(props) {
    const [profile, setProfile] = useState([]);
   
   
   const user=isAuthenticated();
    console.log(user);
   const api_url = `${CONSTANTS.LOCAL_BACKEND_URL}/getDetails/${user.id}`;
    useEffect(() => {
        axios.get(api_url).then((res) => {
            
            setProfile(res.data);
            console.log(profile);
        });
    },[]);
    return (
        <>
        <Navigation/>
        <div>
            <div className="p-container">
                
                    <div className="p-form">

                        <div className="p-right-side">

                            
                            <div className="p-hello">
                                <h2>Profile</h2>
                                <h4>See your profile details</h4>
                            </div>
                            <br />
                            <br />
                            <form>
                                
                                <div className="p-input_text">
                                <h8>Email: {profile.email}</h8>
                                </div>
                                
                                <div className="p-input_text">
                                <h8>First Name: {profile.firstName}</h8>
                                
                                </div>
                                <div className="p-input_text">
                                <h8>Last Name: {profile.lastName}</h8>
                                    
                                </div>
                                <br />
                                
                            </form>
                        </div>
                    </div>
                
            </div>
        </div>
        </>
        
         
    );
  }
  
  export default Profile;
