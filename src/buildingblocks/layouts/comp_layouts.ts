import { Controller } from "../../controlling/controller";
import { Area } from "../areas/comp_areas";


export class TableLayoutController extends Controller {
  tableId: string;
  layout: TableLayout;

  constructor(tableId: string, layout: TableLayout) {
    super("layout_" + tableId);
    this.tableId = tableId;
    this.layout = layout;
  }
}

export class TableLayout {
  id: string;
  areas: Area[] = [];
  controller: TableLayoutController;

  constructor(id: string) {
    this.id = id;
    this.controller = new TableLayoutController(id, this);
  }

  addArea(area: Area) {
    this.areas.push(area);
  }
}
