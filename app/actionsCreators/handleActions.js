/**
 * Created by bilalmf on 01/01/17.
 */
const addHandle = (handleName, localId) => {

    return {
        type:"ADD_HANDLE",
        handle: {
            name:handleName,
            tweets:[],
            tweetsLoading:true,
            isSaving:true,
            id: localId
        }
    }
}

const handleSaved = (localId, id) => {
    return {
        type:"HANDLE_SAVED",
        id,
        localId
    }
}

const removeHandle = (id) => {

    return {
        type: "REMOVE_HANDLE",
        id
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

        let localId = "local_"+Date.now().toString();

        dispatch(addHandle(handleName, localId));

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
                name:handleName,
                localId
            })
        };


        return fetch("http://localhost:5000/api/handle", options)
            .then(response=>{

                if(response.status != 201)
                    throw "could no save handle. status: "+ response.status

                console.log(`added ${handleName} on server`);

                return response.json();
            })
            .then(json => {
                console.log(json);
                dispatch(handleSaved(localId, json.id));
            })
            .catch(err=> {
                console.log(err)
                dispatch(removeHandle(localId))
                dispatch(showError(err))
            });
    }
}

export {addHandle, removeHandle, addHandleServerAsync}