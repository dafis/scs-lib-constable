type ValueType = number | string | Date | boolean 
interface ValueObserver<VT extends ValueType> {
  onValueChanged(newValue?: VT, oldValue?: VT ): boolean;
}

abstract class AbstractCellType<VT extends ValueType> {
  id: string;
  _value?: VT;

  constructor(id: string) {
    this.id = id;
  }

  get value(): VT | undefined {
    return this._value;
  }

  set value(value: VT | undefined)  {
     this._value = value;
  }
}

class TextCell extends AbstractCellType<string> {
  constructor(id: string) {
    super(id);
  }
}

class NumberCell extends AbstractCellType<number> {
  constructor(id: string) {
    super(id);
  }
}

class DateCell extends AbstractCellType<Date> {
  constructor(id: string) {
    super(id);
  }
}

class BooleanCell extends AbstractCellType<boolean> {
  constructor(id: string) {
    super(id);
  }
}

