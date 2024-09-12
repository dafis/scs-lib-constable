/** @module rendering/renderer */

import { TableLayout } from "../buildingblocks/layouts";
import { ConstructableTable } from "../buildingblocks/table";
import { GridArea, KeyArea, ListArea } from "../buildingblocks/areas";

export type TableRenderFunction = {
  (table: ConstructableTable, layout: HTMLDivElement): HTMLElement;
};

export type LayoutRenderFunction = {
  (
    layout: TableLayout,
    areas: { [id: string]: HTMLDivElement },
  ): HTMLDivElement;
};

export type GridAreaRenderFunction = {
  (area: GridArea, cells: HTMLElement[]): HTMLElement;
};

export type ListAreaRenderFunction = {
  (area: ListArea, cells: HTMLElement[]): HTMLElement;
};

export type KeyAreaRenderFunction = {
  (area: KeyArea, cells: HTMLElement[]): HTMLElement;
};
