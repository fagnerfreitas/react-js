export const editEmail = (email) =>{


    return {
        type:'editEmail',
        payload:{
            email:email
        }
    };
};


export const editCidade = (cidade) =>{

    return {
        type:'editCidade',
        payload:{
            cidade:cidade
        }
    }
}


export const editUsers = (users) =>{

    return {
        type:'editUsers',
        payload:{
            users:users
        }
    }
}
