export default class Programas {
  static schema = {
    name: "Programas",
    primaryKey: "id",
    properties: {
      abreviatura: "string",
      id: { type: "int", indexed: true },
      nome: "string"
    }
  };
}