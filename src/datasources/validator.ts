/** @module validator */

type BaseDataTypes = string | Date | number | boolean;

/**
 * 
 */
export interface FieldValidator<T extends BaseDataTypes> {
  isAcceptable(val: T) : boolean;
}

