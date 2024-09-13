export abstract class AbstractDataAcessComponent {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export class DataReader extends AbstractDataAcessComponent {
  constructor(id: string) {
    super(id)
  }
}

export class DataWriter extends AbstractDataAcessComponent {
  constructor(id: string) {
    super(id)
  }
}

