/**
 * Created by bilalmf on 01/01/17.
 */
export default (prev = [], action)=>{

    switch (action.type){
        case 'ADD_HANDLE':
            return [...prev, action.handle]
        case 'REMOVE_HANDLE':
            return prev.filter(x=>x.id != action.id)
        case 'HANDLE_SAVED':
            return prev.map(h=>{
                if(h.id == action.localId){
                    return {...h, isSaving:false, id:action.id}
                }
                else{
                    return {...h}
                }
            })
        case "HANDLES_LOADED":
            console.log("reducer 1 called")
            return action.handles.map(h=>{
                    return {
                        ...h,
                        isSaving:false,
                        tweets: [],
                        tweetsLoading: true
                    }
                })
        default:
            return prev;
    }
}