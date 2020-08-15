import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import Discounts from "./Discounts";
import Vacation from "./Vacation";
import VacationsItems from './VacationsItems';

const useStyles = makeStyles({
    vacationsRoot: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
        marginTop: '5rem'
    },
});

function Vacations({ discounts, getVacations, selectedVacation, showDiscounts, updateSelectedVacation, updateShowDiscounts, vacations }) {

    const [items, setItems] = React.useState([]);

    useEffect(() => {
        if (getVacations) {
            getVacations()
        }
    }, []);

    useEffect(() => {
        const vacationsElements = vacations.map(vacation => (
            <Vacation vacation={vacation} />)
        );
        setItems(vacationsElements)
    }, [vacations]);

    const classes = useStyles();

    return (
        <>
        <Discounts updateShowDiscounts={updateShowDiscounts} discounts={discounts} showDiscounts={showDiscounts} />
            <div className={classes.vacationsRoot}>
                <VacationsItems updateSelectedVacation={updateSelectedVacation} vacations={vacations} />
            </div>
        </>
    );
}

Vacations.propTypes = {
    getVacations: PropTypes.func,
    updateShowDiscounts: PropTypes.func,
    vacations: PropTypes.array,
    showDiscounts: PropTypes.bool,
    discounts: PropTypes.array,
    selectedVacaton: PropTypes.string
};

export default Vacations;
