import { createConnection as createConnectionFactory, Connection, Repository } from "typeorm";


export let connection: Connection = null

export async function createConnection() {
  connection = await createConnectionFactory()
}

export function createRepository<T>(Modal: T): Repository<T> {
  // @ts-ignore
  return connection.getRepository(Modal)
}