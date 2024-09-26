import { ref } from 'vue';
import type { Cliente } from '@/models/Cliente';
import ClientesApi from '@/api/ClientesApi';
import { useRouter } from 'vue-router';
import { useEmpresa } from './useEmpresa';

export const useCliente = () => {
    //variables
    const ruta = useRouter();
    const clientes = ref([] as Cliente[]);
    const cliente = ref({} as Cliente);
    const selector = ref('');
    const isNew = ref(true);

    //Composables
    const { empresas, cargarEmpresas } = useEmpresa();

    const cargarClientes = async () => {
        try {
            clientes.value = await ClientesApi.getClientes();
        } catch (e) {
            console.log('Error en la carga de los clientes ERROR: ', e);
        }
    };

    const detalle = async (id: number) => {
        isNew.value = false;
        try {
            ruta.push('/cliente/detalle/' + id);
            cliente.value = await ClientesApi.detalleCliente(id);
            cliente.value.activo = Boolean(cliente.value.activo);
        } catch (error) {
            console.log('Error en la carga del detalle del Cliente', error);
        }
    };

    //FUNCTIONS
    const cambiarPestania = (nombre: string) => {
        switch (nombre) {
            case 'detalle':
                selector.value = 'detalle';
                break;
            case 'facturacion':
                selector.value = 'facturacion';
                break;
            case 'fechaSenialada':
                selector.value = 'fechaSenialada';
                break;
            //TODO AÑADIR MAS
            case 'cuenta_cte':
                selector.value = 'cuenta_cte';
                break;
            case 'g_Apartado':
                selector.value = 'g_Apartado';
                break;
            case 'notas':
                selector.value = 'notas';
                break;
            case 'reparaciones':
                selector.value = 'reparaciones';
                break;

            default:
                break;
        }
    };

    const nuevoCliente = () => {
        //! CAMBIAR EL USUARIO AL EMPLEADO AL QUE LE HAYA DADO DE ALTA (SERA EL QUE ESTE LOGEADO)
        cliente.value = {} as Cliente;
        cliente.value.activo = true;
        const empresaPorDefecto = empresas.value.find(empresa => empresa.id === 1);

        cliente.value.empresa = empresaPorDefecto!;
        cliente.value.tipo_cliente = -1;
        cliente.value.id_usuario = 1;
        ruta.push('/cliente/nuevo');
    };

    //-----------------------------------------ACCIONES CRUD---------------------------------------------

    const eliminar = async (id_cliente: number) => {
        try {
            await ClientesApi.eliminarCliente(id_cliente);
            alert('El Cliente se ha eliminado correctamente');
            ruta.push('/clientes');
            window.location.reload(); // cambiar mas adelante
        } catch (error) {
            console.log(error);
        }
    };

    const modificar = async (nuevoCliente: Cliente) => {
        try {
            await ClientesApi.update(nuevoCliente);
            ruta.push('/clientes');
        } catch (error) {
            console.log('Ocurrio un error al hacer la peticion de update a la API ERROR: ' + error);
        }
    };

    const crear = async (nuevoCliente: Cliente) => {
        try {
            await ClientesApi.crear(nuevoCliente);
            ruta.push('/clientes');
        } catch (error) {
            console.log(
                'Ocurrio un error al hacer la peticion de creacion a la API ERROR: ',
                error,
            );
        }
    };

    //-----------------------------------------ACCIONES CRUD---------------------------------------------

    return {
        cliente,
        clientes,
        selector,
        cambiarPestania,
        cargarClientes,
        cargarEmpresas,
        detalle,
        eliminar,
        nuevoCliente,
        modificar,
        crear,
        empresas,
        isNew,
    };
};
