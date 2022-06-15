<template lang="">
  <div class="w-50 carta p-3 rounded mt-5">
    <div class="row">
      <div class="col">
        <p>Provincia:</p>
        <p>Abreviatura:</p>
        <p>Capital:</p>
        <p>Población:</p>
        <p>Superficie: Nº</p>
        <p>Departamentos:</p>
        <p>Bandera:</p>
      </div>
      <div class="col">
        <p>{{ provincia.nombre }}</p>
        <p>{{ provincia.abreviatura }}</p>
        <p>{{ provincia.capital }}</p>
        <p v-if=" provincia.poblacion">{{ provincia.poblacion }}</p>
        <p v-else>No asigna</p>
        <p>{{ provincia.superficie }}</p>
        <p>{{ provincia.nroDepartamentos }}</p>
        <p><img :src="'/img/' + provincia.bandera" /></p>
      </div>
    </div>
    <a class="btn btn-primary" @click="$router.go(-1)">Volver</a>
  </div>
</template>
<script>
export default {
  name: "DetalleProvincia",
  beforeMount() {
    this.id_provincia = this.$route.params.id;
    this.traerProvincia();
  },
  data() {
    return {
      id_provincia: null,
      provincia: null,
    };
  },
  methods: {
    async traerProvincia() {
      let _provincia = await fetch(
        `http://168.194.207.98:8081/api_provincia/get_provincia.php?id=${this.id_provincia}`
      );
      _provincia = await _provincia.json();
      this.provincia = _provincia;
  
    },
  },
};
</script>
<style scoped>
.carta{
    border: solid 2px grey;
}
</style>
