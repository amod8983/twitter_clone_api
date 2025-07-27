import { createClient } from "redis";

const redisClient = createClient();

redisClient.on("error", (err) => {
  console.log("Error connecting with redis", err);
});
//init redis
if (!redisClient.isOpen) {
  redisClient
    .connect()
    .then(() => {
      console.log("Redis started");
    })
    .catch((err) => {
      console.log(`Redis failed to start: `, err);
    });
}

export default redisClient;
