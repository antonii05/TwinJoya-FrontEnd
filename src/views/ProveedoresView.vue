<template>
    <div v-if="proveedor.id">
        <CardComponent size="col-5">
            <h1>{{ 'Proveedor: ' + proveedor.nombre_fiscal }}</h1>
            <h3 class="my-4 text-uppercase">{{ 'Código: ' + proveedor.codigo }}</h3>
            <h6>Meter Informacion del empleaado que le ha dado de alta</h6>
        </CardComponent>
    </div>

    <div v-if="!proveedor.id">
        <CardComponent size="col-4">
            <h1 class="text-center">Creación del Proveedor</h1>
        </CardComponent>
    </div>

    <div class="row">
        <div class="col-lg-10">
            <div class="btn-group my-3" role="group">
                <button type="button" class="btn btn-info" @click="cambiarPestania('detalle')">
                    Información
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('facturacion')">
                    Facturación
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('datosTaller')">
                    Datos de Taller
                </button>
                <button
                    type="button"
                    class="btn btn-info"
                    @click="cambiarPestania('representante')"
                >
                    Representante
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('notas')">
                    Notas
                </button>
            </div>
        </div>
        <div class="col">
            <BotonesCrud
                @crear="crear(proveedor)"
                @eliminar="eliminar(proveedor.id)"
                @modificar="modificar(proveedor)"
                :is-cliente="!!proveedor.id"
                text="Crear nuevo cliente"
            />
        </div>
    </div>

    <div id="vistas">
        <div class="informacion" v-if="selector == 'detalle'">
            <detalleProveedor :proveedor="proveedor" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'facturacion'">
            <datosFacturacion :proveedor="proveedor" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'datosTaller'">
            <taller :proveedor="proveedor" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'representante'">
            <representante :proveedor="proveedor" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'notas'">
            <notas :proveedor="proveedor" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProveedor } from '@/composables/useProveedor';
import CardComponent from '@/components/helpers/CardComponent.vue';
import BotonesCrud from '@/components/helpers/BotonesCrudComponent.vue';
import detalleProveedor from '@/components/proveedores/detalleProveedor.vue';
import datosFacturacion from '@/components/proveedores/facturacionProveedores.vue';
import taller from '@/components/proveedores/datosTallerProveedor.vue';
import representante from '@/components/proveedores/representanteProveedor.vue';
import notas from '@/components/proveedores/notasProveedor.vue';

//Estrcuctura Composable

const {
    proveedor,
    selector,
    nuevoProveedor,
    detalle,
    cambiarPestania,
    crear,
    eliminar,
    modificar,
} = useProveedor();

const route = useRoute();

onMounted(async () => {
    selector.value = 'detalle';
    try {
        if (route.params.id) {
            detalle(parseInt(route.params.id as string));
        } else {
            nuevoProveedor();
        }
    } catch (error) {
        console.log('error en la vista de detalle ERROR: ' + error);
    }
});
</script>
