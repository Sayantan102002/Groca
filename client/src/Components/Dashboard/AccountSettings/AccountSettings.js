import React, { useState, useContext, useEffect,useRef } from 'react'
import './AccountSettings.css'
import LeftNavigationBar from '../LeftNavigationBar/LeftNavigationBar';
import Contextinit from '../../../Context/contextinit';
// import DashContext from '../../../Context/Dashboard Context/dashContext';
const AccountSettings = () => {
    let context = useContext(Contextinit);
    // let context2 = useContext(DashContext);
    const { getUser, UserData,updateDetails } = context;
    // const { updateDetails } = context2;
    const [email, setemail] = useState(undefined)
    const [id, setid] = useState(undefined)
    const [firstname, setfirstname] = useState(undefined)
    const [lastname, setlastname] = useState(undefined)
    const [phone_number, setphone_number] = useState(0)
    const [edit_name, setedit_name] = useState("Edit")
    useEffect(() => {
        // getUser();
        UserData.map((data, index) => {
            // let email = data.email;
            setid(data._id);
            setemail(data.email);
            setfirstname(data.firstname);
            setlastname(data.lastname);
            setphone_number(data.Phone_Number)
            console.log(data);
            // let firstName = data.firstname;
            // let lastName = data.lastname;
            // console.log(data.email,index);
        },[])
    })
    const [detailsstate, setdetailstate] = useState({ firstname: firstname, lastname: lastname, email: email, Phone_Number: phone_number });
    const nameEdit = () => {
        if (edit_name === "Edit") {
            setedit_name("Cancel");
            document.getElementsByClassName('nameInput_edit_firstname')[0].disabled = false;
            document.getElementsByClassName('nameInput_edit_firstname')[0].style.color = "#000000";
            document.getElementsByClassName('nameInput_edit_lastname')[0].style.color = "#000000";
            document.getElementsByClassName('nameInput_edit_lastname')[0].disabled = false;
            document.getElementsByClassName('editPersonalInfo_name_SubmitButton')[0].style.display = "block";
        }
        else {
            setedit_name("Edit");
            document.getElementsByClassName('nameInput_edit_firstname')[0].disabled = true;
            document.getElementsByClassName('nameInput_edit_lastname')[0].disabled = true;
            document.getElementsByClassName('editPersonalInfo_name_SubmitButton')[0].style.display = "none";
            document.getElementsByClassName('nameInput_edit_firstname')[0].style.color = "#878787";
            document.getElementsByClassName('nameInput_edit_lastname')[0].style.color = "#878787";
        }
    }
    // const handleSubmit = (e) => {
        
    // }
    const handleClick =(e)=>{
        // e.preventDefault();
        updateDetails(id,detailsstate.firstname, detailsstate.lastname, detailsstate.email, detailsstate.Phone_Number);
    }
    const onChange = (e) => {
        setdetailstate({ ...detailsstate, [e.target.name]: e.target.value })
    }
    return (
        <div className="parentDashboardContainer">
            <div className="DashboardContainer">
                <div className="leftNavigationbar">
                    <LeftNavigationBar />
                </div>
                <div className="rightNavigationbar">
                    {/* <RightNavigationBar/> */}
                    <div className="header_personalInfo_div">
                        <h3 className="header_personalInfo">Personal Information </h3>
                        <p onClick={nameEdit}>{edit_name}</p>
                    </div>
                    <div className="editPersonalInfo_name">
                        <form className="PersonalName_Form">
                            <div className="nameInput_edit">
                                <input className="nameInput_edit_firstname" type="text" name="firstname" defaultValue={firstname} disabled onChange={onChange} />
                                <input className="nameInput_edit_lastname" type="text" defaultValue={lastname} disabled onChange={onChange} name="lastname"/>
                            </div>
                            <div className="editPersonalInfo_name_Submit">
                                <button type="submit" onClick={handleClick} className="editPersonalInfo_name_SubmitButton">SAVE</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AccountSettings
