import { createWebHistory, createRouter } from "vue-router";
import GrillaProvincias from "../components/GrillaProvincias";
const routes = [
  {
    path: "/",
    name: "GrillaProvincias",
    component: GrillaProvincias,
  },
  {
    path: "/detalle/:id",
    name: "DetalleProvincias",
    component: () => import("../components/DetalleProvincia"),
  },
  {
    path: "/modificar/:id",
    name: "ModificarProvincia",
    component: () => import("../components/FormularioProvincia"),
  },
  {
    path: "/nueva",
    name: "NuevaProvincia",
    component: () => import("../components/FormularioProvincia"),
  }/*,
  {
    path: "/crear",
    name: "FormularioCrear",
    component: () => import("../components/FormularioAgenda"),
  },
  */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;