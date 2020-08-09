import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { updateThemeMode } from 'containers/App/meta/actions';
import { logout } from 'containers/AuthContainer/meta/actions';
import { getUser } from 'containers/AuthContainer/meta/selectors';

const mapStateToProps = state => ({
    routes: [
        { key: 'home', path: 'home', text: 'Home' }, 
        { key: 'vacations', path: 'vacations', text: 'Vacations' }
    ],
    user: getUser(state)
});

const mapDispatchToProps = ({
    logout,
    updateThemeMode
});

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
