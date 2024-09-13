import { AreaTypes } from "./buildingblocks/areas/comp_areas";

export class ConsTable {
  id: string;
  externalContainerElement?: HTMLDivElement;
  rootElement: HTMLDivElement;
  areaRegistry: { [key: string]: AreaTypes } = {};

  constructor(id: string) {
    this.id = id;
    this.rootElement = document.createElement('div');
    this.rootElement.innerHTML = "C O N S T A B L E"
  }

  registerArea(name: string, area: AreaTypes) {
    // TODO: check if names is already used
    this.areaRegistry[name] = area;
  }

  attacheToContainer(externalElement: HTMLDivElement) {
    this.externalContainerElement = externalElement;
    // remove old content from the external container
    // this should be mentioned in the docs
    externalElement.textContent = '';
    externalElement.appendChild(this.rootElement);
  }
}

export function createTable(id: string): ConsTable {
  const table = new ConsTable(id);
  return table;
}
