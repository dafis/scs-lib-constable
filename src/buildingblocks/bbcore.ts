export abstract class BuildingBlockBase {
  id: String;
  constructor(id: string) {
    this.id = id;
  }
}

export abstract class RenderableBuildingBlockBase extends BuildingBlockBase {
  constructor(id: string) {
    super(id);
  }
}


