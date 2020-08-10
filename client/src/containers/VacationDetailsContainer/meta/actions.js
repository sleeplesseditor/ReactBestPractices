import * as constants from "./constants";


export const getVacationDetails = () => ({
    type: constants.GET_VACATIONDETAILS,
});

export const getVacationDetailsSuccess = payload => ({
    type: constants.GET_VACATIONDETAILS_SUCCESS,
    payload,
});

export const getVacationDetailsError = payload => ({
    type: constants.GET_VACATIONDETAILS_ERROR,
    payload,
});
