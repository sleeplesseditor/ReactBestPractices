import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NavigationContainer from 'containers/NavigationContainer';
import { ThemeProvider } from '@material-ui/core';
import { selectTheme } from 'containers/App/meta/selectors';
import { BrowserRouter } from 'react-router-dom';

function App({ theme }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <NavigationContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

App.propTypes = {
  theme: PropTypes.object
};

const mapStateToProps = (state) => ({
  theme: selectTheme(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(App);
