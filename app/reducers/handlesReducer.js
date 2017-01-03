/**
 * Created by bilalmf on 01/01/17.
 */
export default (prev = [], action)=>{

    switch (action.type){
        case 'ADD_HANDLE':
            console.log("prev state: ")
            console.log(prev)
            console.log("action: ")
            console.log(action)
            return [...prev, action.handle]
        default:
            return prev;
    }
}