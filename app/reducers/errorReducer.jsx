export default(prev = {
    hasError: false,
    message:null
},action)=>{
    switch (action.type){
        case "SHOW_ERROR":
            return {
                hasError: true,
                message: action.message
            }
        case "HIDE_ERROR":
            return {
                hasError: false
            }
        default:
            return prev;
    }
}