// jest.config.js
const { defaults } = require("jest-config");

module.exports = {
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/babel_compiled/"],
};
