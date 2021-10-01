import axios from "axios";

export const getUSers=()=>{
    return (dispatch)=>{
        axios.get('/api/UserDetails/')
        .then(response=>{
            dispatch({
                type:'FETCH_ALL',
                payload:response.data
            })
        })
        .catch(err=>console.log(err));
    }
}
export const addUser=(userObj)=>{
    return (dispatch)=>{
        axios.post('https://localhost:44347/api/UserDetails',
        {
         Name:userObj.Name,
         userName:userObj.userName,
         password:userObj.password,
         guardianType:userObj.guardianType,
         guardianName:userObj.guardianName,
         Address:userObj.Address,
         citizenShip:userObj.citizenShip,
         state:userObj.state,
         country:userObj.country,
         email:userObj.email,
         gender:userObj.gender,
         maritalStatus:userObj.maritalStatus,
         contact:userObj.contact,
         dob:userObj.dob,
         regDate:userObj.regDate,
         acctType:userObj.acctType,
         branchName:userObj.branchName,
         ccitizenStatus:userObj.ccitizenStatus,
         initialDepositAmt:userObj.initialDepositAmt,
         proofType:userObj.proofType,
         documentNo:userObj.documentNo,
         holderName : userObj.holderName,
         holderAcctNo:userObj.holderAcctNo,
         holderAddress:userObj.holderAddress,

    }).then(response=>{
        dispatch({
            type:'CREATE',
            payload:response.data
        })
    }).catch(err=>console.log(err));
    }
}