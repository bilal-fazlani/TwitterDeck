/**
 * Created by bilalmf on 01/01/17.
 */
export default ()=> {

    console.log("loading...");

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
            if(response.status == 200){
                return response.json();
            }
            else{
                throw "error loading data"
            }
        })
        .then(json=>{
            console.log(json);
            return json;
        })
        .catch(err => {
            console.log("error loading initial state");
            console.log(err);
        });

    //             tweets:[{
    //                 text:"this is a sample tweet",
    //                 profilePicUrl:"http://www.material-ui.com/images/ok-128.jpg",
    //                 name:"SRK"
}