// @ts-check
import { ModelCtor, Model, Optional, Identifier } from "sequelize/types";

/**
 * All basic methods to create a basic service
 */
export interface CRUDService {
  create: (data: Optional<any, any>) => Promise<Model>;
  find: () => Promise<Model[]>;
  findOne: (id: number) => Promise<Model>;
  update: (id: number, changes: object) => Promise<Model>;
  delete: (id: number) => Promise<{ id: number }>;
}

export interface CreateableService {
  create: (data: Optional<any, any>) => Promise<Model>;
}

export interface SearchableService {
  find: () => Promise<Model[]>;
  findOne: (id: number) => Promise<Model>;
}

export interface UpgradableService {
  update: (id: number, changes: object) => Promise<Model>;
}

export interface DeletableService {
  delete: (id: number) => Promise<{ id: number }>;
}

/**
 * Create a service with all the basic methods for a service from a model
 * @param model - model to create the service
 */
export class MakeBaseServiceFrom implements CreateableService, SearchableService, UpgradableService, DeletableService {
  constructor(private model: ModelCtor<Model<any, any>>) {}

  /**
   * Create a new product from the client data
   * @param data - Data to create the new object
   * @returns - The new object created in the DB
   */
  async create (data: Optional<any, string>): Promise<Model> {
    const newObject = await this.model.create(data)
    return newObject
  }

  /**
   * Find all objects into the DB
   * @returns Array of all objects in the DB
   */
  async find (): Promise<Model[]> {
    const data = await this.model.findAll()
    return data
  }

  /**
   * Find a object from the DB
   * @param id - object's id in the DB
   * @returns - object found in the DB
   */
  async findOne (id: Identifier): Promise<Model> {
    const data = await this.model.findByPk(id)
    if (!data) {
      throw boom.notFound('Data not found')
    }
    return data
  }

  /**
   * Update data from a object in the DB
   * @param {number} id - product's id in the DB
   * @param {object} changes - changes to apply to the object
   * @returns {Promise<Model>} - object with changes applied
   */
  async update (id: number, changes: unknown): Promise<Model> {
    const object = await this.findOne(id)
    const response = await object.update(changes)
    return response
  }

  /**
   * Delete a product from the DB
   * @param {number} id - product's id in the DB
   * @returns {Promise<{ id: number }>} - Deteled product id
   */
  async delete (id: number): Promise<{ id: number }> {
    const object = await this.findOne(id)
    object.destroy()
    return { id }
  }
}
