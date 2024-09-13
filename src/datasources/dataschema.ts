type FieldDataType = string | number | Date | boolean | {};
type FieldDataTypeNames = "string" | "number" | "Date" | "boolean" | "object";

export abstract class Field<T extends FieldDataType> {
  _name: string;
  _typeString: FieldDataTypeNames;

  constructor(name: string, typeString: FieldDataTypeNames) {
    this._name = name;
    this._typeString = typeString;
  }
  
  get name(): string {
    return this._name;
  }

  get typeString(): string {
    return this._typeString;
  }

  abstract extractValue(record: { [key: string]: FieldDataType }): T;
}

export class TextField extends Field<string> {

  constructor(name: string) {
    super(name, "string");
  }
  
  extractValue(record: { [key: string]: FieldDataType }): string {
    const value = record[this.name];
    if (typeof value === "string") {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a string.`,
    );
  }

}

export class NumberField extends Field<number> {

  constructor(name: string) {
    super(name, "number");
  }
  
  extractValue(record: { [key: string]: FieldDataType }): number {
    const value = record[this.name];
    if (typeof value === "number") {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a number.`,
    );
  }
}

export class BooleanField extends Field<boolean> {

  constructor(name: string) {
    super(name, "boolean");
  }
  
  extractValue(record: { [key: string]: FieldDataType }): boolean {
    const value = record[this.name];
    if (typeof value === "boolean") {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a boolean.`,
    );
  }
}

export class DateField extends Field<Date> {
  
  constructor(name: string) {
    super(name, "Date");
  }
  
  extractValue(record: { [key: string]: FieldDataType }): Date {
    const value = record[this.name];
    if (value instanceof Date) {
      return value;
    }
    // TODO: implement converter
    throw Error(
      `type of record element ${this.name} (type = ${typeof value}) is not a boolean.`,
    );
  }
}

export class DataRecord {
  name: string;
  fields: { [name: string]: Field<FieldDataType> };

  constructor(name: string) {
    this.name = name;
    this.fields = {};
  }

  addField<FT extends Field<FieldDataType>>(name: string, field: FT): FT {
    this.fields[name] = field;
    return field;
  }
}

