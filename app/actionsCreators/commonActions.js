/**
 * Created by bilalmf on 19/01/17.
 */

const showError = (error) => {
    return {
        type: "SHOW_ERROR",
        error
    }
}

export {showError}