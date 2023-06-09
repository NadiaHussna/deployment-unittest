module.exports = {
  // roots: ['<rootDir>/src', '<rootDir>/tests', '<rootDir>/utils'],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
  // collectCoverage: true,
  testTimeout: 30000,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.+(ts|tsx|js)', '<rootDir>/src/*.+(ts|tsx|js)'],
  coveragePathIgnorePatterns: [
    // NOTE: Not testable files
    'node_modules',
    '<rootDir>/index.ts',
    '<rootDir>/src/routes.ts',
    '<rootDir>/test/_variables.ts',
    '<rootDir>/utils/env-constants.ts',
    '<rootDir>/utils/jwk-file.ts',
    '<rootDir>/utils',
    '<rootDir>/src/generics',
    '<rootDir>/src/middleware',
    '<rootDir>/src/static',
    '<rootDir>/src/models',
    '<rootDir>/src/system-admin/users/common.ts',
    // 1a2 implementations
    '<rootDir>/src/hq-finance',
    '<rootDir>/src/hq-ops',
    '<rootDir>/src/edd',
    '<rootDir>/src/amla',
    '<rootDir>/src/permissions/finance.ts',
    '<rootDir>/src/permissions/operations.ts',
  ],
}
