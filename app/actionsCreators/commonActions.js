/**
 * Created by bilalmf on 19/01/17.
 */

const showError = (message) => {
    return {
        type: "SHOW_ERROR",
        message: message.toString()
    }
}

const hideError = () => {
    return {
        type: "HIDE_ERROR"
    }
}

export {showError, hideError}