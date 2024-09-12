/**
 * @class
 */
class AbstractRemoteController {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

}

/**
* @class
*/
class RemotePaginator extends AbstractRemoteController {
  constructor(name: string) {
    super(name)
  }
}


