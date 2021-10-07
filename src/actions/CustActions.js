import axios from "axios";
export const updateUser=(userObj)=>{
    return (dispatch)=>{
        axios.put('https://localhost:44347/api/UserDetails/'+userObj.CustomerId,{
         customerID:userObj.CustomerId,   
         accountNumber:userObj.AcctNo,
         name:userObj.Name,
         userName:userObj.userName,
         password:userObj.password,
         guardianType:userObj.guardianType,
         guardianName:userObj.guardianName,
         address:userObj.Address,
         citizenship:userObj.citizenShip,
         state:userObj.state,
         country:userObj.country,
         email:userObj.email,
         maritalStatus:userObj.maritalStatus,
         contactNo:userObj.contact,
         dob:userObj.dob,
         regDate:userObj.RegDate,
         accType:userObj.acctType,
         branchName:userObj.branchName,
         citizenStatus:userObj.ccitizenStatus,
         proofType:userObj.proofType,
         docNumber:userObj.documentNo,
         holderName : userObj.holderName,
         holderAcctNumber:userObj.holderAcctNo,
         holderAddress:userObj.holderAddress,
            
        }).then(response=>{
            console.log(response);
        }).catch(err=>console.log(err))
    }
}
export const addUser=(userObj)=>{
    return (dispatch)=>{
        axios.post('https://localhost:44347/api/UserDetails',
        {
         Name:userObj.Name,
         UserName:userObj.userName,
         Password:userObj.password,
         GuardianType:userObj.guardianType,
         GuardianName:userObj.guardianName,
         Address:userObj.Address,
         Citizenship:userObj.citizenShip,
         State:userObj.state,
         Country:userObj.country,
         Email:userObj.email,
         MaritalStatus:userObj.maritalStatus,
         ContactNo:userObj.contact,
         Dob:userObj.dob,
         RegDate:userObj.regDate,
         AccType:userObj.acctType,
         BranchName:userObj.branchName,
         CitizenStatus:userObj.ccitizenStatus,
         DepositAmmount:userObj.initialDepositAmt,
         proofType:userObj.proofType,
         DocNumber:userObj.documentNo,
         HolderName : userObj.holderName,
         HolderAcctNumber:userObj.holderAcctNo,
         HolderAddress:userObj.holderAddress,

    }).then(response=>{
       console.log(response);
    }).catch(err=>console.log(err));
    }
}