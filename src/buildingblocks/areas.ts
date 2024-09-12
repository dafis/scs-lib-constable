/** @module buildingblocks/areas */

export abstract class Area {
  id: String;
  constructor(id: string) {
    this.id = id;
  }
}

export class GridArea extends Area {
  constructor(id: string) {
    super(id)
  }
}

export class ListArea extends Area {
  constructor(id: string) {
    super(id)
  }
}

export class KeyArea extends Area {
  constructor(id: string) {
    super(id)
  }
}

export class TitleArea extends Area {
  constructor(id: string) {
    super(id)
  }
}

export class DisplayArea extends Area {
  constructor(id: string) {
    super(id)
  }
}

export class ControlArea extends Area {
  constructor(id: string) {
    super(id)
  }
}

