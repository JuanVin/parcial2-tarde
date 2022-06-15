<template lang="">
  <div>
    <div class="input-group mb-3 w-50  mt-3">
        <input type="text" v-model="provincia_buscada" class="form-control" id="dato" placeholder="Ingresar Provincia">
        <button className="btn btn-success" @click="buscarPorNombre()">Ingresar</button>
    </div>
    <a class="btn btn-success mt-1 mb-3" :href="'/nueva'">Nueva provincia</a>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Provincia</th>
          <th scope="col">Abreviatura</th>
          <th scope="col">Bandera</th>
          <th scope="col">Modificar</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="provincia in provincias" :key="provincia.id">
          <th>{{provincia.nombre}}</th>
          <td>{{provincia.abreviatura}}</td>
          <td><img :src="'/img/'+provincia.bandera"></td>
          <td><a class="btn btn-success" :href="'/modificar/'+provincia.id">Modificar</a></td>
          <td><a class="btn btn-primary" :href="'/detalle/'+provincia.id">Detalle</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "GrillaProvincias",
  data(){
    return{
        provincias: null,
        provincia_buscada: null
    }
  },
  beforeMount() {
    this.traerProvincias()
  },
  methods: {
    async traerProvincias(){
        let _provincias = await fetch('http://168.194.207.98:8081/api_provincia/get_provincias.php')
        _provincias = await _provincias.json()
        this.provincias = _provincias
    },
    async buscarPorNombre(){
        let _provincia = await fetch(`http://168.194.207.98:8081/api_provincia/get_provincias.php?nombre=${this.provincia_buscada}`)
        _provincia = await _provincia.json()
        this.provincias = _provincia
    }
  }
};
</script>
<style lang=""></style>
