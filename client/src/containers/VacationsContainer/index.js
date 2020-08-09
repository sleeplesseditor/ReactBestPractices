import { connect } from 'react-redux';
import Vacations from './components/Vacations';
import {getVacations} from "./meta/actions";
import {makeSelectVacations, selectDiscounts, selectShowDiscounts, selectSelectedVacation} from "./meta/selectors";

const mapStateToProps = state => ({
    vacations: makeSelectVacations(state),
    discounts: selectDiscounts(state),
    showDiscounts: selectShowDiscounts(state),
    selectedVacation: selectSelectedVacation(state),
});

const mapDispatchToProps = ({
    getVacations,
});

const VacationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Vacations);

export default VacationsContainer;