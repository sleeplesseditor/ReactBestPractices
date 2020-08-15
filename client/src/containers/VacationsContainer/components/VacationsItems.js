import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Vacation from "./Vacation";

const VacationsItems = ({ vacations, updateSelectedVacation }) => {
    return (
        vacations.map(vacation => (
                <Vacation updateSelectedVacation={updateSelectedVacation} vacation={vacation} />))
    );
};

VacationsItems.propTypes = {
    vacations: PropTypes.array,
    updateSelectedVacation: PropTypes.func
};

export default memo(VacationsItems);
