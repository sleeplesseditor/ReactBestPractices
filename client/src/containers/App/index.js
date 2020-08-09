import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoginPage from "../LoginPage";
import { getAuth } from 'containers/AuthContainer/meta/selectors';
import NavigationContainer from 'containers/NavigationContainer';
import { ThemeProvider } from '@material-ui/core';
import { selectTheme } from 'containers/App/meta/selectors';
import { BrowserRouter } from 'react-router-dom';

function App({ auth, theme }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        {!auth.isAuthenticated && <LoginPage />}
        {auth.isAuthenticated && <NavigationContainer />}
      </ThemeProvider>
    </BrowserRouter>
  );
}

App.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = (state) => ({
  auth: getAuth(state),
  theme: selectTheme(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(App);
