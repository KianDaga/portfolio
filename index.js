// Railway entry point
import { spawn } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting Kian Portfolio...');

// Check if dist directory exists
if (!fs.existsSync('dist')) {
  console.log('📦 Building application...');
  const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
  build.on('close', (code) => {
    if (code === 0) {
      startServer();
    } else {
      console.error('❌ Build failed');
      process.exit(1);
    }
  });
} else {
  startServer();
}

function startServer() {
  console.log('✅ Starting server...');
  const server = spawn('node', ['dist/index.js'], { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  server.on('close', (code) => {
    console.log(`Server exited with code ${code}`);
  });
  
  process.on('SIGTERM', () => {
    server.kill('SIGTERM');
  });
}
