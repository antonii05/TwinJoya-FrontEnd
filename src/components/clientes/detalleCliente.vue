<template>
    <CardComponent>
        <h2>Información</h2>
        <div class="progress my-3" role="progressbar" aria-valuenow="100" style="height: 1px">
            <div class="progress-bar w-100 bg-info"></div>
        </div>
        <div class="row text-center">
            <div class="col col-lg-6 col-md-12 col-sm-12 mt-3">
                <div v-if="!cliente.id">
                    <div class="col-5">
                        <div class="input-group my-4 col-4">
                            <span class="input-group-text">Nombre</span>
                            <input
                                class="form-control form-control-md"
                                type="text"
                                v-model="clienteLocal.nombre"
                            />
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="input-group my-4">
                            <span class="input-group-text">Apellidos</span>
                            <input
                                class="form-control form-control-md"
                                type="text"
                                v-model="clienteLocal.apellidos"
                            />
                        </div>
                    </div>
                </div>

                <div class="col-9">
                    <div class="input-group my-4">
                        <span class="input-group-text">Dirección</span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="clienteLocal.direccion"
                        />
                    </div>
                </div>
                <div class="input-group my-4 col">
                    <span class="input-group-text">Codigo Postal</span>
                    <input type="number" class="form-control col-1" v-model="clienteLocal.cod_postal" />
                    <span class="input-group-text">Provincia</span>
                    <input type="text" class="form-control col-3" v-model="clienteLocal.provincia" />
                </div>
                <div class="col-4">
                    <div class="input-group">
                        <span class="input-group-text">País</span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="clienteLocal.pais"
                        />
                    </div>
                </div>
                <!-- Telefonos -->
                <div class="row my-4">
                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-text">Teléfono Movil</span>
                            <input
                                class="form-control form-control-md"
                                type="text"
                                v-model="clienteLocal.telefono"
                            />
                        </div>
                    </div>

                    <div class="col-5">
                        <div class="input-group">
                            <span class="input-group-text">Teléfono Fijo</span>
                            <input
                                class="form-control form-control-md"
                                type="text"
                                v-model="clienteLocal.telefonoFijo"
                            />
                        </div>
                    </div>
                </div>

                <div class="col-8">
                    <div class="input-group">
                        <span class="input-group-text"><font-awesome-icon icon="envelope" /></span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="clienteLocal.email"
                            placeholder="ejemplo@ejemplo.com"
                        />
                    </div>
                </div>
            </div>
            <!-- Fin de la primera col -->

            <!-- Switch -->
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div class="row col-3 ms-lg-auto my-4">
                    <div class="form-check form-switch" v-if="cliente.id">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            v-model="clienteLocal.activo"
                        />
                        <label class="form-check-label" for="flexSwitchCheckDefault"
                            >Cliente {{ cliente.activo ? 'Activo' : 'Desactivado' }}</label
                        >
                    </div>
                </div>
                <div class="offset-md-8">
                    <div class="input-group my-4">
                        <span class="input-group-text">DNI</span>
                        <input
                            class="form-control form-control-md"
                            type="text"
                            v-model="clienteLocal.nif"
                        />
                    </div>
                </div>
                <div class="offset-md-7" v-if="cliente.id">
                    <div class="input-group my-4">
                        <span class="input-group-text">Alta Cliente</span>
                        <input
                            type="datetime-local"
                            class="form-control text-center"
                            id="fechaAlta"
                            v-model="clienteLocal.fecha_alta"
                            disabled
                        />
                    </div>
                </div>

                <div class="offset-7">
                    <div class="input-group my-4 col-10">
                        <select v-model="clienteLocal.tipo_cliente" class="form-select">
                            <option value="-1" selected disabled>Tipo de cliente</option>
                            <option value="0">Sin Información</option>
                            <option value="1">Comun</option>
                            <option value="2">Recurrente</option>
                        </select>
                    </div>
                </div>
                <div class="offset-8">
                    <div class="input-group my-4 col-10">
                        <span class="mb-2">Tienda de Referencia</span>
                        <VueMultiselect
                            v-model="clienteLocal.empresa"
                            :options="empresas"
                            :close-on-select="true"
                            placeholder="Busque una Empresa"
                            label="razon_social"
                            track-by="id"
                            data-select="Seleccione Una opcion"
                            :disabled="!isNew"
                        />
                    </div>
                </div>
            </div>
        </div>
    </CardComponent>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useCliente } from '@/composables';
import { useRoute } from 'vue-router';
import { CardComponent } from '@/components/helpers';
import type { Cliente } from '@/models';
import VueMultiselect from 'vue-multiselect';
import '../../../node_modules/vue-multiselect/dist/vue-multiselect.css';

const route = useRoute();
const { detalle, empresas, isNew, cargarEmpresas } = useCliente();

const props = defineProps<{
    cliente: Cliente;
}>();

const clienteLocal = computed({
    get() {
        return props.cliente;
    },
    set(value) {
        emit('update:cliente', value);
    },
});

const emit = defineEmits<{
    (e: 'update:cliente', newArticulo: Cliente): void;
}>();

onMounted(async () => {
    await cargarEmpresas();
    try {
        if (route.params.id) {
            await detalle(parseInt(route.params.id as string));
        }
    } catch (error) {
        console.log('error en la vista de detalle ERROR: ' + error);
    }
});
</script>
