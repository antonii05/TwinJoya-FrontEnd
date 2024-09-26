import { ref } from 'vue';
import type { Seccion } from '@/models/Seccion';
import SeccionesApi from '@/api/SeccionesApi';

export const useSeccion = () => {
    //variables
    const secciones = ref([] as Seccion[]);

    //Functions

    //----------------------------------------------CRUD-----------------------------------------

    const modificar = async (newSecciones: Seccion[]) => {
        try {
            await SeccionesApi.actualizarSecciones(newSecciones).then(respuesta => {
                if (respuesta.status == 200) {
                    window.location.reload();
                }
            });
        } catch (error) {
            console.error('Error en la llamada de la API ERROR: ' + error);
        }
    };

    const eliminar = async (idSeccion: number, index: number) => {
        secciones.value.splice(index, 1);
        try {
            await SeccionesApi.eliminarSeccion(idSeccion).then(respuesta => {
                if (respuesta == 200) {
                    window.location.reload();
                }
            });
        } catch (error) {
            console.error('Error en la llamada de la API ERROR: ' + error);
        }
    };

    //----------------------------------------------CRUD-----------------------------------------

    const cargarSecciones = async () => {
        secciones.value = await SeccionesApi.getSecciones();
    };

    const agregarSeccion = () => {
        const nuevaSecccion = ref({} as Seccion);
        secciones.value.push(nuevaSecccion.value);
    };

    return { secciones, cargarSecciones, modificar, eliminar, agregarSeccion };
};
