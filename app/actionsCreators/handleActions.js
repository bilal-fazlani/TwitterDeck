/**
 * Created by bilalmf on 01/01/17.
 */
const addHandle = (handleName) => {
    console.log("handlename: "+ handleName)
    return {
        type:"ADD_HANDLE",
        handle: {
            name:handleName,
            tweets:[],
            isLoading:true
        }
    }
}

const removeHandle = (handleName) => {
    console.log("handlename: "+ handleName)
    return {
        type: "REMOVE_HANDLE",
        handleName
    }
}

export {addHandle, removeHandle}