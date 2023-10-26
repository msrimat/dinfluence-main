import { createClient } from "next-sanity";

const projectId = "gw89z3qt";
const dataset = "production";
const apiVersion = "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
