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
                    return {...h, isSaving:false, id:action.id, localId: action.localId}
                }
                else{
                    return {...h}
                }
            })
        case "HANDLES_LOADED":
            return action.handles.map(h=>{
                    return {
                        ...h,
                        isSaving:false,
                        tweets: [],
                        tweetsLoading: true,
                        localId: h.id
                    }
                })
        case "LOAD_TWEETS":
            return prev.map(h=>{
                if(h.localId == action.localId){
                    return {...h, tweetsLoading:true}
                }
                else{
                    return {...h}
                }
            })

        case "TWEETS_LOADED":
            return prev.map(h=>{
                if(h.localId == action.localId){
                    return {...h, tweetsLoading:false, tweets:action.tweets}
                }
                else{
                    return {...h}
                }
            })

        default:
            return prev;
    }
}