<template>
	<div id="ConsultarReserva">
		<label for="idReserva">Dinos el id de la reserva que quieres buscar:</label>
		<input v-on:keypress.enter = "buscar" v-model="idReserva" id="idReserva" >
		<br>
		<h4>Nro Documento registrado:
			<span>  {{NroDocum}}</span>
		</h4>
		<h4>Tu nombre:
			<span>  {{Nombre}}</span>
		</h4>
		<h4>Tu celular:
			<span>  {{Celular}}</span>
		</h4>
		<h4>Tu email:
			<span>  {{Email}}</span>
		</h4>
		<h4>Cuando reservaste:
			<span>  {{FechaReserva}}</span>
		</h4>
		<h4>Cuando llegas:
			<span>  {{FechaIngreso}}</span>
		</h4>
		<h4>Cuando te vas:
			<span>  {{FechaSalida}}</span>
		</h4>
		<h4>Cuántos son:
			<span>  {{NumPersonas}}</span>
		</h4>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'ConsultarReserva',
		data: function (){
			return {
				idReserva: "",
				NroDocum: 0,
				Nombre: "",
				Celular: 0,
				Email: "",
				FechaReserva: "",
				FechaIngreso: "",
				FechaSalida: "",
				NumPersonas: 0
			}
		},
		methods: {
			//antes estaba created
			buscar: function(){
			//this.idReserva = this.$route.params.idReserva
			let self = this
			//axios.get("http://127.0.0.1:8000/buscar-reserva/" + this.idReserva)
			axios.get("https://dummyhotel.herokuapp.com/buscar-reserva/" + this.idReserva)
			.then((result) => {
				self.NroDocum = result.data.NroDocum
				self.Nombre = result.data.Nombre
				self.Celular = result.data.Celular
				self.Email = result.data.Email
				self.FechaReserva = result.data.FechaReserva
				self.FechaIngreso = result.data.FechaIngreso
				self.FechaSalida = result.data.FechaSalida
				self.NumPersonas = result.data.NumPersonas
			})
			.catch((error) => {
				alert("ERROR Servidor");
			});
		}
		}
	}
</script>

<style>
	#ConsultarReserva{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#ConsultarReserva label{
		font-size: 18px;
		color: #ffffff;
		font-weight: bold;
	}
	#ConsultarReserva h4{
		font-size: 18px;
		color: #ffffff;
		text-decoration: underline;
	}
	#ConsultarReserva span{
		color: #00FEE7;
		font-weight: bold;
	}
</style>