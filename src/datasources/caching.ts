class DataCache {
  id: string;
  size: number
  data: [{[key:string]: any}?];
  constructor(id: string, size: number) {
    this.id = id;
    this.size = size;
    this.data = [];
  }
}

