/**
 * Created by bilalmf on 19/01/17.
 */
export default (prev = "loading", action)=>{
    switch (action.type){
        case "LOAD_HANDLES":
            return "loading"
        case "HANDLES_LOADED":
            console.log("reducer 2 called")
            return "loaded"
        default:
            return prev
    }
}