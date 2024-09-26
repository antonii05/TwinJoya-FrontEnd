import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    //history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'incio',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/reparaciones',
            name: 'reparaciones',
            component: () => import('@/components/reparaciones/listadoReparacion.vue'),
        },
        {
            path: '/reparacion/informacion/:id(\\d+)',
            name: 'reparacionesInformacion',
            component: () => import('@/views/ReparacionesView.vue'),
        },
        {
            path: '/reparaciones/nuevo',
            name: 'reparacionesNuevo',
            component: () => import('@/views/ReparacionesView.vue'),
        },
        {
            path: '/clientes',
            name: 'clientes',
            component: () => import('@/components/clientes/listadoClientes.vue'),
        },
        {
            path: '/cliente/nuevo',
            name: 'clienteNuevo',
            component: () => import('@/views/ClientesView.vue'),
        },
        {
            path: '/cliente/detalle/:id(\\d+)',
            name: 'clienteDetalle',
            component: () => import('@/views/ClientesView.vue'),
        },
        {
            path: '/proveedores',
            name: 'proveedores',
            component: () => import('@/components/proveedores/listadoProveedores.vue'),
        },
        {
            path: '/proveedor/informacion/:id(\\d+)',
            name: 'proveedorInformacion',
            component: () => import('@/views/ProveedoresView.vue'),
        },
        {
            path: '/proveedor/nuevo',
            name: 'proveedorNuevo',
            component: () => import('@/views/ProveedoresView.vue'),
        },
        {
            path: '/articulos',
            name: 'articulos',
            component: () => import('@/components/articulos/listadoArticulos.vue'),
        },
        {
            path: '/articulo/nuevo',
            name: 'articuloNuevo',
            component: () => import('@/views/ArticulosView.vue'),
        },
        {
            path: '/articulos/informacion/:id(\\d+)',
            name: 'articulosInformacion',
            component: () => import('@/views/ArticulosView.vue'),
        },
        {
            path: '/configuracion',
            name: 'configuracion',
            component: () => import('@/views/configuracion/ConfiguracionView.vue'),
        },
        {
            path: '/configuracion/familias/config/adicional',
            name: 'configuracionSecciones',
            component: () => import('@/views/configuracion/ConfiguracionSeccionesView.vue'),
        },
        {
            path: '/factura/proveedor/informacion/:id(\\d+)',
            name: 'facturasProveedoresInformacion',
            component: () => import('@/views/facturas/FacturasProveedorView.vue'),
        },
        {
            path: '/facturas/proveedores',
            name: 'facturasProveedores',
            component: () =>
                import('@/components/facturas/proveedores/FacturasProveedorListado.vue'),
        },
        {
            path: '/facturas/proveedores/nuevo',
            name: 'facturasProveedoresNuevo',
            component: () => import('@/views/facturas/FacturasProveedorView.vue'),
        },
        /* AGREGAR MAS FACTURAS DE PROVEEDOR */
    ],
});

export default router;
