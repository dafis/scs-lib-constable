/** @module controlling/controller */

/**
 * @class 
 */
export abstract class Controller {
  id: string;

  constructor(id: string){
    this.id = id;
  }
}
