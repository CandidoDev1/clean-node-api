
import type { Config } from "jest";

const config: Config = {

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testEnvironment: "node"

};

export default config;
