import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import type { Proveedor } from '@/models/Proveedor';

export default {
    name: 'ProveedorApi',
    async getProveedores(): Promise<Proveedor[]> {
        return axios
            .get('/proveedores/getProveedores')
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async detalleProveedor(id_Proveedor: number) {
        return axios
            .get('/proveedores/getProveedor/' + id_Proveedor)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async eliminar(id_Proveedor: number) {
        return axios
            .delete('/proveedores/eliminar/' + id_Proveedor)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async crear(proveedor: Proveedor) {
        return axios
            .post('/proveedores/crear', proveedor)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async update(nuevoProveedor: Proveedor) {
        return axios
            .put('/proveedores/actualizar', nuevoProveedor)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
};
