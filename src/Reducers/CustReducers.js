const initialState={
    UserList:[],
}
export const CustReducers=(state=initialState,action)=>{
switch(action.type){
    case 'FETCH_ALL':
        return {
            ...state,
            UserList:action.payload,
        };
    case 'CREATE':
        const users=state.users.concat(action.payload);
         return{
            ...state,
            users
        };
       
     default:
        return state;   
}
}