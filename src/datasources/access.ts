/**
 * @class
 */
class AbstractDataAcessComponent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

}

/**
* @class
*/
class DataReader extends AbstractDataAcessComponent {
  constructor(name: string) {
    super(name)
  }
}

/**
* @class
*/
class DataWriter extends AbstractDataAcessComponent {
  constructor(name: string) {
    super(name)
  }
}

