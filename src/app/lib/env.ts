import zod from "zod";

const envSchema = zod.object({
  MEASUREMENT_ID: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);
