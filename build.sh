#!/bin/bash

# Railway build script
set -e

echo "🚀 Building Kian Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🎨 Building application..."
npm run build

echo "✅ Build completed successfully!"
