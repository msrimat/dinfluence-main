import { createClient } from "next-sanity";

const projectId = "bmjkca0b";
const dataset = "production";
const apiVersion = "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
