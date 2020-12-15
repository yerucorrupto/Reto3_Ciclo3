import vueRouter from 'vue-router'
import CrearReserva from './components/CrearReserva'
import ConsultarReserva from './components/ConsultarReserva'
import App from './App'

const router = new vueRouter(
	{mode: 'history',
	base: __dirname,
	routes: [
	{path: '/inicio',
	name: "root",
	component: App },
	{path: '/crear-reserva',
	name: "crear",
	component: CrearReserva },
	{path: '/consulta-reserva/',//:idReserva',
	name: "consultar",
	component: ConsultarReserva},]
	})
export default router