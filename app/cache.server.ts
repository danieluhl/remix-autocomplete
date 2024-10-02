import { Redis } from "@upstash/redis";

import { singleton } from "./singleton.server";

const getRedisClient = () => {
  const { UPSTASH_REDIS_URL, UPSTASH_REDIS_TOKEN } = process.env;
  return new Redis({
    url: UPSTASH_REDIS_URL,
    token: UPSTASH_REDIS_TOKEN,
  });
};

const redis = singleton("prisma", getRedisClient);

const data = await redis.set("foo", "bar");
