    import { Redis } from '@upstash/redis';

    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,  // Nova variable
      token: process.env.UPSTASH_REDIS_REST_TOKEN,  // Nova variable
    });

    export default async function handler(req, res) {
      await redis.set('key', 'value');
      const data = await redis.get('key');
      res.status(200).json({ data });
    }
    
