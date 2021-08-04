import dotenv from 'dotenv';

dotenv.config();

export default {
  port: 1337,
  host: 'localhost',
  dbUri: `mongodb+srv://jglee91:${process.env.DB_PASSWORD}@study.mtewc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: process.env.JWT_PRIVATE_KEY,
};
