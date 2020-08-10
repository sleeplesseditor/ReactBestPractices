import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetVacationDetails(action) {
    try {
        yield put(actions.getVacationDetailsSuccess())
    } catch(error) {
        yield put(actions.getVacationDetailsError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_VACATIONDETAILS, handleGetVacationDetails),
    ]);
}
