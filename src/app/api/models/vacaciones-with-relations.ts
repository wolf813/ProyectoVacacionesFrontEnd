/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: VacacionesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface VacacionesWithRelations {
  empleado?: EmpleadoWithRelations;
  empleadoId?: string;
  empleadoif: string;
  fecha: string;
  id?: string;
}
