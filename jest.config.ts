import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>'],
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
