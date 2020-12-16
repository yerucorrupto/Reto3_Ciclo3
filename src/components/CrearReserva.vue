<template>
	<div id="CrearReserva">
		<h2>Vamos a crear una reserva!</h2>

		<label for="nombre">Cómo te llamas?</label>
		<input v-model="nombre" id="nombre" >
		<br>
		<label for="fecha_llegada">Fecha de Llegada</label>
		<input v-model="fecha_llegada" id="fecha_llegada" >
		<br>
		<label for="fecha_salida">Fecha de Salida</label>
		<input v-model="fecha_salida" id="fecha_salida" >
		<br>
		<label for="num_personas">Cuantas personas viajan?</label>
		<input v-model="num_personas" id="num_personas" >
		<br>
		<label for="celular">Donde podemos llamarte?</label>
		<input v-model="celular" id="celular" >
		<br>
		<label for="correo">Danos tu correo</label>
		<input v-model="correo" id="correo" >
		<br>
		<label for="idcliente">Danos tu ID</label>
		<input v-model="idcliente" id="idcliente" >
		<br>
		<button v-on:click = "guardar_reserva">Generar Reserva</button>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: "CrearReserva",
		data: function() {
			return {
				idcliente: 0,
				nombre: "",
				celular: 0,
				correo: "",
				fecha_llegada: "",
				fecha_salida: "",
				num_personas: 0
    		};
  		},
  		methods: {
  			guardar_reserva: function(){
  				var json = {"idReserva":10, "NroDocum": this.idcliente, "Nombre": this.nombre,
  				"Celular": this.celular, "Email": this.correo, "FechaIngreso": this.fecha_llegada,
  				"FechaSalida": this.fecha_salida, "NumPersonas": this.num_personas,
  				"FechaReserva": Date.now()}
  				//axios.post("http://127.0.0.1:8000/hacer_reserva/", json)
  				axios.post("https://dummyhotel.herokuapp.com/hacer_reserva/", json)
  				.then(respuesta => {
  					alert(respuesta.data.FechaReserva);
  				})
  				.catch(error => {
  					alert("Error en el servidor");
        		});
  			}
  		},
  		created: {}
	}
</script>

<style>
	#CrearReserva{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#CrearReserva h2{
		font-size: 50px;
		color: #ffffff;
	}
	#CrearReserva label{
		color: #ffffff;
		font-weight: bold;
	}
	#CrearReserva button{
		color: #E5E7E9;
		background: #283747;
		border: 1px solid #E5E7E9;
		border-radius: 5px;
		padding: 10px 20px;
	}
	#CrearReserva button:hover{
		color: #283747;
		background: #E5E7E9;
		border: 1px solid #E5E7E9;
	}
</style>