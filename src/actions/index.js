import {GET_USER_INFO} from './actions-types';

export const getUserInfo = (user)=>{
    return function(dispatch) {
        //on diffuse l'action au reducer qui lui va initialiser le state avec le payload
        dispatch({
			type: GET_USER_INFO,
			payload: user
		});
    }
}