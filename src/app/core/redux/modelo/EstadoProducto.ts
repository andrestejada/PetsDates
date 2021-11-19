import { Producto } from 'app/feature/Citas/models/Producto';

export interface EstadoProducto {
  productos: Producto[];
  cantidadTotalProducto: number;
}
