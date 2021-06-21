import {shopActions} from '../reduxSlices/shopSlice/shopSlice';

export const  hideErrorMessage = (dispatch) => {
    setTimeout(function(){
        dispatch(shopActions.hide({
           payload: true
        }))
     },3750)
}