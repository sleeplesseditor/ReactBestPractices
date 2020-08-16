import DynamicComponent from 'components/DynamicCommponent/DynamicCommponent';

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "profile" */ 'containers/ProfileContainer'))

export default dynamic;