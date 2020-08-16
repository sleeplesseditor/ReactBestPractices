import DynamicComponent from 'components/DynamicCommponent/DynamicCommponent';

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "vacations" */ 'containers/VacationsContainer'))

export default dynamic;