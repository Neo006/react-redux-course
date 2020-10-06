import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php'];

export const forbiddenWordsMiddleware = ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (action.type === CREATE_POST) {
                let found = forbidden.filter(word => action.payload.title.includes(word));
                if (found.length) {
                    return dispatch(showAlert('You are a spammer. We didn\'t invite you, go home.'));
                }
            }
            return next(action);
        }
    }
}