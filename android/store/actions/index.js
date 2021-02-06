const set_data = () => {
    return (dispatch) =>{        
        dispatch({type:"SETDATA",payload:{name:"hamza"}})
    }
    
}

export {
    set_data
}