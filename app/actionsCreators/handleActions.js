/**
 * Created by bilalmf on 01/01/17.
 */
import {showError} from './commonActions'
import {loadTweetsServerAsync} from './tweetActions'

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

const removeHandleServerAsync = (id) => {
    return (dispatch) => {

        dispatch(removeHandle(id));
        console.log("removing..."+id);

        let headers = new Headers({
            "content-type": "application/json;charset=UTF-8",
            "accept": "application/json"
        });

        let options = {
            method: 'DELETE',
            cache: 'default',
            mode: 'cors',
            headers: headers
        };


        return fetch("http://localhost:5000/api/handle/"+id, options)
            .then(response=>{

                if(response.status != 200)
                    throw "could no remove handle. status: "+ response.status

                else{
                    console.log(`removed ${id} from server`);
                }
            })
            .catch(err=> {
                console.log(err)
                dispatch(showError(err))
            });

    }
}

const handlesLoaded = (handles)=>{
    return {
        type:"HANDLES_LOADED",
        handles
    }
}

const loadHandles = ()=>{
    return {
        type:"LOAD_HANDLES"
    }
}

const loadHandlesServerAsync = () => {
return (dispatch) => {

    dispatch(loadHandles())

    let headers = new Headers({
        "content-type": "application/json;charset=UTF-8",
        "accept": "application/json"
    });

    let options = {
        method: 'GET',
        cache: 'default',
        mode: 'cors',
        headers: headers
    };


    return fetch("http://localhost:5000/api/handle/list", options)
        .then(response=>{

            if(response.status != 200)
                throw "could no load handle list. status: "+ response.status

            console.log(`loaded all handles`);

            return response.json();
        })
        .then(json => {
            console.log(json);
            dispatch(handlesLoaded(json));
        })
        .catch(err=> {
            console.log(err)
            dispatch(showError(err))
        });
}
}

const addHandleServerAsync = (handleName) => {

    return (dispatch) => {

        let localId = "local_"+Date.now().toString();

        dispatch(addHandle(handleName, localId));
        dispatch(loadTweetsServerAsync(localId, handleName))

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

export {addHandle, addHandleServerAsync, removeHandleServerAsync, loadHandlesServerAsync}