import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const dataDirectory = path.join(process.cwd(), "data");

export function loadYamlData<T>(filename: string): T {
  const fullPath = path.join(dataDirectory, `${filename}.yaml`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const data = yaml.load(fileContents) as T;
  return data;
}
