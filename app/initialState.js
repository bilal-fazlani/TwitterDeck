/**
 * Created by bilalmf on 01/01/17.
 */
export default ()=> {
    return {
        handles:[{
            name:"dangal",
            tweetsLoading: false,
            isSaving:false,
            tweets:[{
                text:"this is a sample tweet",
                profilePicUrl:"http://www.material-ui.com/images/ok-128.jpg",
                name:"aamir khan"
            }]
        },
            {
                name:"raees",
                tweetsLoading: false,
                isSaving:true,
                tweets:[{
                    text:"this is a sample tweet",
                    profilePicUrl:"http://www.material-ui.com/images/ok-128.jpg",
                    name:"SRK"
                }]
            }]
    }
}