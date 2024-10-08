<template>
    <CardComponent>
        <h2>Informacion Del Proveedor</h2>
        <div class="progress my-3" role="progressbar" aria-valuenow="100" style="height: 1px">
            <div class="progress-bar w-100 bg-info"></div>
        </div>
        <div class="row">
            <!-- First Column -->
            <div class="col col-lg-6">
                <div class="col-7">
                    <div class="input-group my-4 col-4" v-if="!localProveedor.id">
                        <span class="input-group-text">Nombre</span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="localProveedor.nombre_fiscal"
                        />
                    </div>
                </div>
                <div class="col-9">
                    <div class="input-group my-4">
                        <span class="input-group-text">Dirección</span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="localProveedor.direccion"
                        />
                    </div>
                </div>
                <div class="my-4 row">
                    <div class="input-group col-3">
                        <span class="input-group-text">Codigo Postal</span>
                        <input type="number" class="form-control" v-model="localProveedor.cod_postal" />
                        <span class="input-group-text">Provincia</span>
                        <input type="text" class="form-control" v-model="localProveedor.provincia" />
                    </div>
                </div>
                <div class="col-3 my-4">
                    <div class="input-group my-4">
                        <span class="input-group-text">País</span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="localProveedor.pais"
                        />
                    </div>
                </div>
                <!-- Teelfonos -->
                <div class="input-group col-3 my-4">
                    <span class="input-group-text">Teléfono 1</span>
                    <input type="text" class="form-control" v-model="localProveedor.telefono1" />
                    <span class="input-group-text">Teléfono 2</span>
                    <input type="text" class="form-control" v-model="localProveedor.telefono2" />
                </div>

                <div class="col-6 my-4">
                    <div class="input-group">
                        <span class="input-group-text"><font-awesome-icon icon="envelope" /></span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="localProveedor.email"
                            placeholder="ejemplo@ejemplo.com"
                        />
                    </div>
                </div>

                <div class="col-8 my-4">
                    <div class="input-group">
                        <span class="input-group-text"><font-awesome-icon icon="globe" /></span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="localProveedor.web"
                            placeholder="https://paginaweb.com"
                        />
                    </div>
                </div>
            </div>

            <!-- Second Column -->
            <div class="col col-lg-6">
                <!-- SWITCH -->
                <div class="row col-3 col ms-lg-auto">
                    <div class="form-check form-switch my-4" v-if="localProveedor.id">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            v-model="localProveedor.activo"
                        />
                        <label class="form-check-label"
                            >Proveedor {{ localProveedor.activo ? 'Activo' : 'Inactivo' }}</label
                        >
                    </div>
                </div>

                <div class="col-3 ms-auto" v-if="!localProveedor.id">
                    <div class="input-group my-4">
                        <span class="input-group-text">Codigo</span>
                        <input
                            type="text"
                            class="form-control form-control-md text-uppercase"
                            v-model="localProveedor.codigo"
                        />
                    </div>
                </div>

                <div class="col-3 col ms-auto">
                    <div class="input-group my-4">
                        <span class="input-group-text">CIF / NIF</span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="localProveedor.cif"
                        />
                    </div>
                </div>

                <div class="col-5 ms-auto" v-if="localProveedor.fecha_alta">
                    <div class="input-group my-4">
                        <span class="input-group-text">Ultima Modificacion</span>
                        <input
                            type="datetime-local"
                            class="form-control form-control-md"
                            v-model="localProveedor.fecha_modificacion"
                            disabled
                        />
                    </div>
                </div>
                <div class="col-5 ms-auto" v-if="localProveedor.fecha_alta">
                    <div class="input-group my-4">
                        <span class="input-group-text">Dado de Alta</span>
                        <input
                            type="datetime-local"
                            class="form-control form-control-md"
                            v-model="localProveedor.fecha_modificacion"
                            disabled
                        />
                    </div>
                </div>

                <div class="ms-auto col-4">
                    <div class="input-group">
                        <label for="id_empresa" class="text-success">* Tienda 1 por defecto</label>
                        <span class="input-group-text">Tienda de Referencia</span>
                        <input
                            class="form-control form-control-md"
                            type="number"
                            id="id_empresa"
                            v-model="localProveedor.id_empresa"
                            :disabled="!!localProveedor.id"
                        />
                    </div>
                </div>
            </div>
        </div>
    </CardComponent>
</template>

<script setup lang="ts">
import {  defineProps, defineEmits, computed } from 'vue';
import {CardComponent} from '@/components/helpers';
import type { Proveedor } from '@/models';

const props = defineProps<{
    proveedor: Proveedor;
}>();


const emit = defineEmits<{
    (e: 'update:proveedor', newProveedor: Proveedor): void;
}>()


const localProveedor = computed({
    get () {
        return props.proveedor;
    },
    set(newValue) {
        emit('update:proveedor', newValue);
    },
});
</script>
