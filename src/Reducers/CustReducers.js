const initialState={
    UserList:[],
}
export const CustReducers=(state=initialState,action)=>{
switch(action.type){
    case 'CREATE':
        const users=state.users.concat(action.payload);
         return{
            ...state,
            users
        };
    case 'UPDATE':
        const user=state.users.concat(action.payload);
        return{
            ...state,
            user
        }
       
     default:
        return state;   
}
}