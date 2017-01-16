/**
 * Created by bilalmf on 01/01/17.
 */
const addHandle = (handleName) => {

    return {
        type:"ADD_HANDLE",
        handle: {
            name:handleName,
            tweets:[],
            tweetsLoading:true,
            isSaving:true
        }
    }
}

const handleSaved = (handleName, id) => {
    return {
        type:"HANDLE_SAVED",
        handle: {
            name:handleName,
            id
        }
    }
}

const removeHandle = (handleName) => {

    return {
        type: "REMOVE_HANDLE",
        handleName
    }
}

const showError = (error) => {
    return {
        type: "SHOW_ERROR",
        error
    }
}

const addHandleServerAsync = (handleName) => {

    return (dispatch) => {

        dispatch(addHandle(handleName));

        let headers = new Headers({
            "content-type": "application/json;charset=UTF-8",
            "accept": "application/json"
        });

        let options = {
            method: 'POST',
            cache: 'default',
            mode: 'cors',
            headers: headers,
            body: JSON.stringify({
                name:handleName
            })
        };


        return fetch("http://localhost:5000/api/handle", options)
            .then(response=>{

                if(response.status != 201)
                    throw "could no save handle. status: "+ response.status

                console.log(JSON.stringify(response));
                console.log(`added ${handleName} on server`);
                dispatch(handleSaved(handleName, response.body.toString()));
            })
            .catch(err=> {
                console.log(err)
                dispatch(removeHandle(handleName))
                dispatch(showError(err))
            });
    }
}

export {addHandle, removeHandle, addHandleServerAsync}