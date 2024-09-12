import { ConstructableTable } from "./buildingblocks/table";
import { DataSource } from "./datasources/datasource";

/**
 * @function
 */
function createTable(id: string): ConstructableTable {
  const table = new ConstructableTable(id);
  return table;
}

export { createTable };
