import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoginPage from "../LoginPage";
import { getAuth } from 'containers/AuthContainer/meta/selectors';
import NavigationContainer from 'containers/NavigationContainer';

function App({ auth }) {
  return (
    <>
      {!auth.isAuthenticated && <LoginPage />}
      {auth.isAuthenticated && <NavigationContainer />}
    </>
  );
}

App.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(App);
