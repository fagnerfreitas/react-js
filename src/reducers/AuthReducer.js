const initialState = {
    users:[],
    email:'fagner.hf@gmail.com',
    senha:'123456',
    cidade:'Santa Luzia'
}
const AuthReducer = (state = [], action)=>{
    
    if(state.length == 0){
        
        return initialState;
    }

    if(action.type == 'editEmail'){
        return {...state, email: action.payload.email}
    }

    if(action.type == 'editCidade'){
        return {...state, cidade:action.payload.cidade}
    }

    if(action.type == 'editUsers'){
        return {...state, users:action.payload.users}
    }


    return state;
}

export default AuthReducer;