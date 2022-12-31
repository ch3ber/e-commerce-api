import { Model as ModelInterface, Optional } from "sequelize";

export interface Service {
  create: (data: Optional<any, any>) => Promise<ModelInterface>;
  find: () => Promise<ModelInterface[]>;
  findOne: (id: number) => Promise<ModelInterface>;
  update: (id: number, changes: object) => Promise<ModelInterface>;
  delete: (id: number) => Promise<{ id: number }>;
}
