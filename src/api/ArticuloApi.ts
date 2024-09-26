import type { Articulo } from '@/models/Articulo';
import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';

export default {
    name: 'ArticuloApi',
    async getArticulos(): Promise<Articulo[]> {
        return axios
            .get('/articulos/getArticulos')
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async getArticulo(idArticulo: number): Promise<Articulo> {
        return axios
            .get('/articulos/getArticulo/' + idArticulo)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async crear(newArticulo: Articulo) {
        return axios
            .post('/articulos/crear', newArticulo)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async actualizar(newArticulo: Articulo) {
        return axios
            .put('/articulos/actualizar', newArticulo)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async eliminar(idArticulo: number): Promise<Number> {
        return axios
            .delete('/articulos/eliminar/' + idArticulo)
            .then((response: AxiosResponse) => {
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
    async buscar(cadena: string, encontrarPrimero: boolean): Promise<Articulo[] | Articulo> {
        return axios
            .get('/articulos/buscar?cadena=' + cadena + '&encontrar_primero=' + encontrarPrimero)
            .then((response: AxiosResponse) => {
                console.log(cadena);
                return response.data;
            })
            .catch((error: AxiosError) => {
                throw error.response?.data;
            });
    },
};
