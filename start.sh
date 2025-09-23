#!/bin/bash

# Railway start script
set -e

echo "🚀 Starting Kian Portfolio..."

# Check if dist directory exists
if [ ! -d "dist" ]; then
    echo "❌ Build directory not found. Running build..."
    npm run build
fi

# Check if server file exists
if [ ! -f "dist/index.js" ]; then
    echo "❌ Server file not found. Running build..."
    npm run build
fi

# Start the application
echo "✅ Starting server..."
node dist/index.js
