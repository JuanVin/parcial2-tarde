<template lang="">
  <div class="centrarDiv text-center">
    <div class="w-50 mt-5">
      {{ respuesta }}
      <div class="form-group">
        <label for="apellido">Nombre</label>
        <input
          type="text"
          v-model="provincia.nombre"
          class="form-control"
          id="nombre"
        />
      </div>
      <div class="form-group">
        <label for="capital">Capital</label>
        <input
          type="text"
          v-model="provincia.capital"
          class="form-control"
          id="capital"
        />
      </div>
      <div class="form-group">
        <label for="poblacion">Poblacion</label>
        <input
          type="number"
          v-model="provincia.poblacion"
          class="form-control"
          id="poblacion"
        />
      </div>
      <div class="form-group">
        <label for="superficie">Superficie</label>
        <input
          type="number"
          v-model="provincia.superficie"
          class="form-control"
          id="superficie"
        />
      </div>
      <div class="form-group">
        <label for="nroDepartamentos">NroDepartamentos</label>
        <input
          type="number"
          v-model="provincia.nroDepartamentos"
          class="form-control"
          id="nroDepartamentos"
        />
      </div>
      <div class="form-group">
        <label for="abreviatura">Abreviatura</label>
        <input
          type="text"
          v-model="provincia.abreviatura"
          class="form-control"
          id="abreviatura"
        />
      </div>
      <div class="form-group">
        <label for="bandera">Bandera</label>
        <input
          type="text"
          v-model="provincia.bandera"
          class="form-control"
          id="bandera"
        />
      </div>
      <button className="btn btn-success mt-3" @click="traerInformacion()">
        Cargar
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormularioProvincia",
  beforeMount() {
    this.id_provincia = this.$route.params.id;
    if (this.id_provincia) {
      this.traerProvincia();
    }
  },
  data() {
    return {
      id_provincia: null,
      provincia: {
        nombre: null,
        capital: null,
        poblacion: null,
        superficie: null,
        nroDepartamentos: null,
        abreviatura: null,
        bandera: null,
      },
      respuesta: null,
    };
  },
  methods: {
    async traerProvincia() {
      let _provincia = await fetch(
        `http://168.194.207.98:8081/api_provincia/get_provincia.php?id=${this.id_provincia}`
      );
      _provincia = await _provincia.json();
      this.provincia = _provincia;
      console.log(this.provincia);
    },
    traerInformacion() {
      if (this.id_provincia) {
        this.actualizarProvincia(this.provincia);
      }
      else{
        this.nuevaProvincia(this.provincia)
      }
    },
    async actualizarProvincia(provincia) {
      provincia.id = this.id_provincia;
      let url = `http://168.194.207.98:8081/api_provincia/put_provincia.php`,
        options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(provincia),
          mode: "cors",
        },
        response;
      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.respuesta = response;
    },
    async nuevaProvincia(provincia) {
      let url = `http://168.194.207.98:8081/api_provincia/post_provincia.php`,
        options = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(provincia),
          mode: "cors",
        },
        response;
      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.respuesta = response;
    },
  },
};
</script>
<style scoped>
.centrarDiv {
  display: flex;
  justify-content: center;
}
</style>
