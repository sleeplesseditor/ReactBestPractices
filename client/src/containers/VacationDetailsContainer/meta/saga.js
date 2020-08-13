import { all, takeLatest, put, select } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import { selectVacations } from "containers/VacationsContainer/meta/selectors";

function* handleGetVacationDetails(action) {
    try {
        const vacations = yield select(selectVacations);
        const vacation = vacations.find(vacation => vacation.id === action.vacationId);
        yield put(actions.getVacationDetailsSuccess(vacation))
    } catch(error) {
        yield put(actions.getVacationDetailsError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_VACATIONDETAILS, handleGetVacationDetails),
    ]);
}
