import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import makeSelectLoginPage from '../../LoginPage/meta/selectors';
import { getEndpointURL } from 'utils/endpoint';
import networkService from 'utils/network';
import { saveDataToStorage, clearDataFromStorage } from 'utils/cookies';

function* handleGetAuth() {
    try {
        const loginPage = yield select(makeSelectLoginPage());
        const request = { username: loginPage.username, password: loginPage.password };
        const action = getEndpointURL('AUTHENTICATE');
        const response = yield call(networkService.postData, action, request);
        yield call(saveDataToStorage, response);
        networkService.setCredentials(response.token);
        yield put(actions.getAuthSuccess(response))
    } catch(error) {
        yield put(actions.getAuthError(error))
    }
}

function* handleLogout() {
    yield call(clearDataFromStorage);
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_AUTH, handleGetAuth),
        yield takeLatest(constants.LOGOUT, handleLogout),
    ]);
}
