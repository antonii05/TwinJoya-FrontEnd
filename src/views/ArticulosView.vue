<template>
    <div v-if="articulo.id">
        <CardComponent size="col-5">
            <h1>{{ 'Articulo: ' + articulo.codigo }}</h1>
            <h3 class="my-4 text-uppercase">{{ 'Código: ' + articulo.codigo }}</h3>
            <h6>Meter Informacion del empleaado que le ha dado de alta</h6>
        </CardComponent>
    </div>

    <div v-if="!articulo.id">
        <CardComponent size="col-4">
            <h1 class="text-center">Creación del Articulo</h1>
        </CardComponent>
    </div>

    <div class="row">
        <div class="col-lg-10">
            <div class="btn-group my-3" role="group">
                <button type="button" class="btn btn-info" @click="cambiarPestania('detalle')">
                    Información
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('ultimaCompra')">
                    Ultima Compra
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('inventario')">
                    Inventario
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('masDatos')">
                    Datos Adicionales
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('web')">
                    Web
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('imagen')">
                    Imagen
                </button>
                <button type="button" class="btn btn-info" @click="cambiarPestania('notas')">
                    Notas
                </button>
            </div>
        </div>
        <div class="col">
            <BotonesCrudComponent
                @crear="crear(articulo)"
                @eliminar="eliminar(articulo.id)"
                @modificar="modificar(articulo)"
                :is-cliente="!!articulo.id"
                text="Registrar Articulo"
            />
        </div>
    </div>

    <div id="vistas">
        <div class="informacion" v-if="selector == 'detalle'">
            <detalleArticulos v-model:articulo="articulo" :main-view="true" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'ultimaCompra'">
            <ultimaCompraArticulos :articulo="articulo" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'notas'">
            <notasArticulos :articulo="articulo" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'imagen'">
            <imagenArticulos :articulo="articulo" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'inventario'">
            <inventarioArticulos :articulo="articulo" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'masDatos'">
            <otrosDatosArticulos :articulo="articulo" />
        </div>

        <div class="datosFacturacion" v-if="selector == 'web'">
            <webArticulos :articulo="articulo" />
        </div>
        {{ articulo }}
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { CardComponent, BotonesCrudComponent } from '@/components/helpers';
import { useArticulos } from '@/composables';
import {
    detalleArticulos,
    imagenArticulos,
    inventarioArticulos,
    notasArticulos,
    otrosDatosArticulos,
    ultimaCompraArticulos,
    webArticulos,
} from '@/components/articulos';

//Estrcuctura Composable
const { articulo, selector, cambiarPestania, crear, eliminar, modificar, detalle, nuevoArticulo } =
    useArticulos();

const route = useRoute();

onMounted(async () => {
    selector.value = 'detalle';
    if (route.params.id) {
        detalle(parseInt(route.params.id as string));
    } else {
        nuevoArticulo();
    }
});
</script>
