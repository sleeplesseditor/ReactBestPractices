import { connect } from 'react-redux';
import VacationDetails from './components/VacationDetails';
import {getVacationDetails} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getVacationDetails,
});

const VacationDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VacationDetails);

export default VacationDetailsContainer;
