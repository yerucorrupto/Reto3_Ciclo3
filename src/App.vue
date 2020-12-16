<template>
  <div id="app">
      <div class="header">
        <h1>Dummy Hotel</h1>
        <nav>
          <button v-on:click = "init"> Inicio </button>
          <button v-on:click = "crear_reserva"> Crear Reserva </button>
          <button v-on:click = "buscar_reserva"> Consultar Reserva </button>
          <button> Cerrar Sesión</button>
        </nav>
      </div>

      <div class="main-component">
        <router-view></router-view>
      </div>

      <div class="footer">
        <h2>Realizado por los Dummies</h2>
      </div>
  </div>
</template>


<!--PREGUNTAS: 1. Como insertar imagenes dinamicamente (variable)
2. como funcionan los beforecreate, los created
3. replicar el ejercico de rappi
4. -->

<script>
export default {
  name: 'App',
  components: {},
  data: function(){
    return {
     show: true
    }
  },
  methods: {
    init: function(){
      this.$router.push({ name:"nada"})
    },
    buscar_reserva: function (){
      if(this.$route.name != "consultar"){
        //let idReserva = localStorage.getItem("current_id_reserva")
        this.$router.push({ name:"consultar",
          //params:{idReserva:idReserva}})
        });
      }
    },
    crear_reserva: function(){
      if (this.$route.name != "crear") {
        this.$router.push({ name: "crear",
          //params:{dato:"Soy un dato que vengo de el componente raiz"}
        });
      }
    }
  },
  //beforeCreate: function(){
  //  localStorage.setItem('show',false)
    //localStorage.setItem('current_id_reserva', 1)
    //this.$router.push({name:"consultar",params:{idReserva: 1}})
  //}
}
</script>

<style>
body{
  margin: 0 0 0 0;
}
.header{
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #C1E3F5 ;
  color:#000000 ;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1{
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button{
  color: #E5E7E9;
  background: #283747;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover{
  color: #283747;
  background: #E5E7E9;
  border: 1px solid #E5E7E9;
}
.main-component{
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE ;
  background-image: url('./assets/mico.gif');
  background-position: center;
  background-size: cover;
}
.footer{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #E5E7E9;
}
.footer h2{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
