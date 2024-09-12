/** @module buildingblocks/areas */

/**
 * @class
 */
export abstract class Area {
  id: String;
  constructor(id: string) {
    this.id = id;
  }
}

/**
 * @class
 */
export class GridArea extends Area {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
export class ListArea extends Area {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
export class KeyArea extends Area {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
export class TitleArea extends Area {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
export class DisplayArea extends Area {
  constructor(id: string) {
    super(id);
  }
}

/**
 * @class
 */
export class ControlArea extends Area {
  constructor(id: string) {
    super(id);
  }
}
