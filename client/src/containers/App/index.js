import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoginPage from "../LoginPage";
import DynamicForm from "../../hooks/DynamicForm";
import HomePage from "../../hooks/HomePage";

function App() {
  return (<HomePage />);
}

App.propTypes = {};

const withConnect = connect();

export default compose(
  withConnect,
)(App);
