/**
 * @class
 */
interface ValueObserver<Type> {
  /**
   *
   */
  onValueChanged(newValue: Type | undefined, oldValue: Type | undefined ): boolean;
}

/**
 * @class
 */
class AbstractCellType<Type> implements ValueObserver<Type>{
  id: string;
  _value: Type | undefined;
  constructor(id: string) {
    this.id = id;
  }

  onValueChanged(newValue: Type | undefined, oldValue: Type | undefined): boolean {
      throw "Not yet implemented. Method must be overwritten."
  }

  get value(): Type | undefined {
    return this._value;
  }

  set value(value: Type | undefined)  {
     this._value = value;
  }
}

/**
 * @class
 */
class TextCell extends AbstractCellType<string> {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class NumberCell extends AbstractCellType<number> {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class DateCell extends AbstractCellType<Date> {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class BooleanCell extends AbstractCellType<boolean> {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
class ObjectCell extends AbstractCellType<object> {
  constructor(id: string) {
    super(id);
  }
}
