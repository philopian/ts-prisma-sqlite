module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',

  moduleFileExtensions: ['ts'],
  testMatch: ['test/**/*.test.ts'],

  roots: ['<rootDir>'],
  testMatch: ['**/*.test.ts', '**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$'],
  moduleFileExtensions: ['js', 'ts', 'json'],
}
