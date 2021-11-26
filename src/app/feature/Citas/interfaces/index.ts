export interface Cita{
    nombrePropietario:string;
    nombreMascota:string;
    tipoServicio:string;
    tarifa:number;
    fechaHora:string;
    observaciones:string;
}
export interface Citas extends Cita{
    id: number;
}
