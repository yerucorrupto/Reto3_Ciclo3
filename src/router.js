import vueRouter from 'vue-router'
import CrearReserva from './components/CrearReserva'
import ConsultarReserva from './components/ConsultarReserva'
import ModificarReserva from './components/ModificarReserva'
import Nada from './components/Nada'
import App from './App'

const router = new vueRouter(
	{mode: 'history',
	base: __dirname,
	routes: [
	{path: '/blablabla',
	name: "root",
	component: App },
	{path: '/inicio',
	name: "nada",
	component: Nada },
	{path: '/crear-reserva',
	name: "crear",
	component: CrearReserva },
	{path: '/consulta-reserva/',//:idReserva',
	name: "consultar",
	component: ConsultarReserva},
	{path: '/modificar-reserva/',//:idReserva',
	name: "modificar",
	component: ModificarReserva}]
	})
export default router