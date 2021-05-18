const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: ['**/?(*.)+(test).ts?(x)']
};
