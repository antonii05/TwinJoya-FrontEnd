import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import type { Cliente } from '@/models/Cliente';

//UTILIZAR PUT PARA MODIFICAR Y POST PARA CREAR

export default {
    name: 'ClientesApi',
    async getClientes(): Promise<Cliente[]> {
        return axios
            .get('/clientes/getClientes')
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async detalleCliente(id: number): Promise<Cliente> {
        return axios
            .get('/clientes/recursos/' + id)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    //Se puede cambiar
    async eliminarCliente(id_cliente: number) {
        return axios
            .delete('/clientes/eliminar/' + id_cliente)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async crear(cliente: Cliente) {
        return axios
            .post('/clientes/crear', cliente)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async update(cliente: Cliente) {
        return axios
            .put('/clientes/actualizar', cliente)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
};
