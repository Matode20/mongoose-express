import { rateLimit } from "express-rate-limit";

export const loginlimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 2,
  message: "Too many login attempts,please try again later",
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});
