/** @module controller */

/**
 * A Controller
 */
export abstract class Controller {
  id: string;

  constructor(id: string){
    this.id = id;
  }
}
