import { Model as ModelInterface } from "sequelize";

export interface Service {
  create: (data) => Promise<ModelInterface>;
  find: () => Promise<Model[]>;
  findOne: (id: number) => Promise<ModelInterface>;
  update: (id: number, changes: object) => Promise<ModelInterface>;
  delete: (id: number) => Promise<{ id: number }>;
}