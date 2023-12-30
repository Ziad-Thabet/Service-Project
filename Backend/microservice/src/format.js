// format.js
const { execSync } = require('child_process');
try {
  execSync('prettier --write "**/*.ts"', { stdio: 'inherit' });
  console.log('Formatting completed successfully.');
} catch (error) {
  console.error('Formatting failed:', error.message);
}
