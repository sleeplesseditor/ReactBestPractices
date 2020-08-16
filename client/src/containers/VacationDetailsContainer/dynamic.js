import DynamicComponent from 'components/DynamicCommponent/DynamicCommponent';

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "vacationDetails" */ 'containers/VacationDetailsContainer'))

export default dynamic;