class AbstractRestController {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class RestPaginator extends AbstractRestController {
  constructor(name: string) {
    super(name)
  }
}

class RestFilter extends AbstractRestController {
  constructor(name: string) {
    super(name)
  }
}

class RestSorter extends AbstractRestController {
  constructor(name: string) {
    super(name)
  }
}


