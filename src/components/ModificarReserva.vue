<template>
	<div id="ModificarReserva">
		<label for="idReserva">Dinos el id de la reserva que quieres modificar:</label>
		<input v-on:keypress.enter = "mostrar_info" v-model="idReservaInicial" id="idReserva" >
		<br>
		<section id="Info">
			<h4>Nro Documento registrado:
			<span>  {{NroDocumO}}</span>
			</h4>
			<h4>Tu nombre:
			<span>  {{NombreO}}</span>
			</h4>
			<h4>Tu celular:
			<span>  {{CelularO}}</span>
			</h4>
			<h4>Tu email:
			<span>  {{EmailO}}</span>
			</h4>
			<h4>Cuando reservaste:
			<span>  {{FechaReservaO}}</span>
			</h4>
			<h4>Cuando llegas:
			<span>  {{FechaIngresoO}}</span>
			</h4>
			<h4>Cuando te vas:
			<span>  {{FechaSalidaO}}</span>
			</h4>
			<h4>Cuántos son:
			<span>  {{NumPersonasO}}</span>
			</h4>
		</section>

		<section>
			<!--<label for="nombre">Nuevo Nombre</label>
			<input v-model="nombre" id="nombre" value=:NombreO>
			<br>-->
			<label for="fecha_llegada">Nueva Fecha de Llegada</label>
			<input v-model="fecha_llegada" id="fecha_llegada" >
			<br>
			<label for="fecha_salida">Nueva Fecha de Salida</label>
			<input v-model="fecha_salida" id="fecha_salida" >
			<br>
			<label for="num_personas">Cuantas personas viajan?</label>
			<input v-model="num_personas" id="num_personas" >
			<br>
			<label for="celular">Donde podemos llamarte?</label>
			<input v-model="celular" id="celular" >
			<br>
			<label for="correo">Actualiza tu correo</label>
			<input v-model="correo" id="correo" >
			<br>
			<!--<label for="idcliente">Nuevo ID</label>
			<input v-model="idcliente" id="idcliente" >
			<br>-->
			<button v-on:click = "ejecutar_cambio">Cambiar</button>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'ModificarReserva',
		data: function (){
			return {
				idReservaInicial: "",
				NroDocumO: 0,
				NombreO: "",
				CelularO: 0,
				EmailO: "",
				FechaReservaO: "",
				FechaIngresoO: "",
				FechaSalidaO: "",
				NumPersonasO: 0,

				idcliente: 0,
				nombre: "",
				celular: 0,
				correo: "",
				fecha_llegada: "",
				fecha_salida: "",
				num_personas: 0
			}
		},
		methods: {
			//antes estaba created
			mostrar_info: function(){
			//this.idReserva = this.$route.params.idReserva
			let self = this
			//axios.get("http://127.0.0.1:8000/buscar-reserva/" + this.idReservaInicial)
			axios.get("https://dummyhotel.herokuapp.com/buscar-reserva/" + this.idReservaO)
			.then((result) => {
				self.NroDocumO = result.data.NroDocum
				self.NombreO = result.data.Nombre
				self.CelularO = result.data.Celular
				self.EmailO = result.data.Email
				self.FechaReservaO = result.data.FechaReserva
				self.FechaIngresoO = result.data.FechaIngreso
				self.FechaSalidaO = result.data.FechaSalida
				self.NumPersonasO = result.data.NumPersonas
			})
			.catch((error) => {
				alert(error.response.data.detail);
			});
			},
			ejecutar_cambio: function(){
			var new_data = {"idReserva": this.idReservaInicial, "NroDocum": this.NroDocumO, "Nombre": this.NombreO, "Celular": this.celular, "Email": this.correo, "FechaIngreso": this.fecha_llegada, "FechaSalida": this.fecha_salida, "NumPersonas": this.num_personas, "FechaReserva": Date.now()}

			//let self = this
			//axios.put("http://127.0.0.1:8000/modificar-reserva/",new_data)
			axios.put("https://dummyhotel.herokuapp.com/modificar-reserva/",new_data)
			.then((resultado) => {
				alert('Tu reseva ha sido cambiada con exito en '+
					resultado.data.FechaReserva);
			})
			.catch((error_put) => {
				//alert('Error del servidor');
				alert(error_put.response.data.detail);
			});
			}
		}
	}
</script>

<style>
	#ModificarReserva{
		width: 30%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
	}
	#ModificarReserva label{
		font-size: 18px;
		color: #ffffff;
		font-weight: bold;
	}
	#ModificarReserva h4{
		font-size: 18px;
		color: #ffffff;
		text-decoration: underline;
	}
	#ModificarReserva span{
		color: #00FEE7;
		font-weight: bold;
	}
</style>