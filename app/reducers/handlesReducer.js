/**
 * Created by bilalmf on 01/01/17.
 */
export default (prev = [], action)=>{

    switch (action.type){
        case 'ADD_HANDLE':
            return [...prev, action.handle]
        default:
            return prev;
    }
}