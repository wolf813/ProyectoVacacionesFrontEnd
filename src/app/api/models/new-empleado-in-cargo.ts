/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Empleado, 'id'>, 'cargoId'>, schemaOptions: { title: 'NewEmpleadoInCargo', exclude: [ 'id' ], optional: [ 'cargoId' ] })
 */
export interface NewEmpleadoInCargo {
  cargoId?: string;
  cargoid: string;
  disponible?: boolean;
  fechaingreso: string;
  nombre: string;
}
