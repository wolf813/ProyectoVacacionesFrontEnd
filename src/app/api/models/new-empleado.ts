/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleado, 'id'>, schemaOptions: { title: 'NewEmpleado', exclude: [ 'id' ] })
 */
export interface NewEmpleado {
  cargoId?: string;
  cargoid: string;
  disponible?: boolean;
  fechaingreso: string;
  nombre: string;
}
