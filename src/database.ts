import { ConnectionOptions } from "typeorm";

import { User, Wishlist } from './models'

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: '1',
  database: process.env.POSTGRES_DB || "bitcoin",
  entities: [ User, Wishlist ],
  synchronize: true,
};

export default config;
