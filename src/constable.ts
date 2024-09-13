export class ConstructableTable {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export function createTable(id: string): ConstructableTable {
  const table = new ConstructableTable(id);
  return table;
}

