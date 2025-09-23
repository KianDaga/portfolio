# Railway Railpack Deployment Guide

## ✅ Fixed: Railway is using Railpack, not Nixpacks

The issue was that Railway is using **Railpack** (not Nixpacks) and it was looking in the wrong directory. I've fixed this!

## 🔧 Changes Made

### 1. Updated package.json
- ✅ Added `"main": "dist/index.js"`
- ✅ Added `"engines": {"node": ">=18.0.0"}`
- ✅ Changed name to `"kian-portfolio"`

### 2. Created Railpack Configuration
- ✅ `railpack.json` - Railpack-specific config
- ✅ `build.sh` - Build script (executable)
- ✅ `start.sh` - Start script (executable)

### 3. Simplified Railway Config
- ✅ Minimal `railway.json` to let Railpack auto-detect

## 📁 File Structure

```
KianPortfolio/
├── package.json          # Main Node.js config
├── railpack.json         # Railpack configuration
├── railway.json          # Railway config
├── build.sh              # Build script (executable)
├── start.sh              # Start script (executable)
├── client/               # React frontend
├── server/               # Express backend
└── dist/                 # Build output
```

## 🚀 Deployment Steps

### 1. Push Changes
```bash
git add .
git commit -m "Fix Railway Railpack deployment"
git push origin main
```

### 2. Deploy on Railway
```bash
railway up
```

Railway should now:
1. ✅ Detect this as a Node.js project
2. ✅ Find the build.sh script
3. ✅ Build successfully
4. ✅ Start with start.sh script

## 🔍 How Railpack Works

Railpack analyzes your project and:
1. **Detects** Node.js from package.json
2. **Builds** using `build.sh` or `npm run build`
3. **Starts** using `start.sh` or `npm start`

## ✅ Verification

After deployment:
- [ ] Build completes successfully
- [ ] App starts without errors
- [ ] Health endpoint works: `/health`
- [ ] Static files load correctly

## 🐛 If Still Failing

### Check Railpack Detection
Railpack should detect:
- ✅ Node.js project (from package.json)
- ✅ Build script (build.sh)
- ✅ Start script (start.sh)

### Manual Override
If auto-detection fails, you can specify in Railway dashboard:
- **Build Command**: `./build.sh`
- **Start Command**: `./start.sh`

## 📋 Quick Test

Test locally:
```bash
# Test build
./build.sh

# Test start
./start.sh

# Check health
curl http://localhost:5000/health
```

The key fix was ensuring Railway/Railpack looks at the **root directory** where our scripts are located, not the `client/` subdirectory!
