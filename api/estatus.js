import { createClient } from 'redis';

const redis = await createClient({ url: process.env.estatguillemortiz_REDIS_URL="redis://default:AzDFGKSGGrQBXYdPx5JkUIV5DzBpV9Xu@redis-19097.c278.us-east-1-4.ec2.cloud.redislabs.com:19097" }).connect();

await redis.set('key', 'value');
const value = await redis.get('key');
