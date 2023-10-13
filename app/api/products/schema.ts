import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(255),
});

export default schema;
