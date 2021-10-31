import {LoginWebView} from './LoginWebView';
import {connect} from 'react-redux';
import {restoreTokenActionCreator} from '../../redux/authReducer';

let mapStateToProps = state => {
  return {
    auth: state.authPage.auth,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    restoreToken: accessToken => dispatch(restoreTokenActionCreator(accessToken)),
  };
};

let MyLoginWebView = connect(mapStateToProps, mapDispatchToProps)(LoginWebView);

export {MyLoginWebView};
