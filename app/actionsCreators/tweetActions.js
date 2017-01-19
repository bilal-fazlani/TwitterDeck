/**
 * Created by bilalmf on 19/01/17.
 */

import {showError} from './commonActions'

const loadTweets = (localId)=>{
    return{
        type: "LOAD_TWEETS",
        localId
    }
}

/**
 * Created by bilalmf on 19/01/17.
 */
const tweetsLoaded = (localId, tweets)=>{
    return{
        type: "TWEETS_LOADED",
        localId,
        tweets
    }
}

const loadTweetsServerAsync = (localId, handleName)=>{

    return (dispatch=>{
        console.log(`loading tweets for ${handleName}...`)
        dispatch(loadTweets(localId))

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

        return fetch(`http://localhost:5000/api/search/${handleName}`, options)
            .then(response=>{

                if(response.status != 200)
                    throw "could not load tweets. status: "+ response.status

                console.log(`loaded tweets for ${handleName}`);

                return response.json();
            })
            .then(json => {
                console.log(json);
                dispatch(tweetsLoaded(localId, json.statuses));
            })
            .catch(err=> {
                console.log(err)
                dispatch(showError(err))
            });

    })

}

export {loadTweetsServerAsync}