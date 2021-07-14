import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../reduxSlices/formSlice/formSlice';
import { connect  } from 'react-redux';

 function mapStateToProps(state){
    return { token: state.token };
 }

function LogoutUser (props) {

    const token = useSelector((state) => state.forms.token);
    const dispatch = useDispatch();
    const logoutUserHandler = (token) => {
        dispatch(logoutUser(token));
    };
    return (
       <div className="logout" onClick={() => logoutUserHandler(token)}>{props.children}</div>
    );
}

export default connect(mapStateToProps, null)(LogoutUser);