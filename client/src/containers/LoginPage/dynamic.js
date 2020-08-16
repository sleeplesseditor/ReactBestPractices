import DynamicComponent from 'components/DynamicCommponent/DynamicCommponent';

const dynamic = DynamicComponent(() => import(/* webpackChunkName: "login" */ 'containers/LoginPage'))

export default dynamic;