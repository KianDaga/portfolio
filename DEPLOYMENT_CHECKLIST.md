# Railway Deployment Checklist

## Pre-Deployment Checklist

### ✅ Build Process
- [ ] `npm run build` works locally
- [ ] `dist/index.js` exists after build
- [ ] `dist/public/` contains static files
- [ ] `npm start` works locally

### ✅ Configuration Files
- [ ] `package.json` has correct scripts
- [ ] `railway.json` is minimal and clean
- [ ] `nixpacks.toml` specifies Node.js 18
- [ ] `Procfile` uses direct node command
- [ ] `.railwayignore` excludes unnecessary files

### ✅ Server Configuration
- [ ] Server uses `process.env.PORT`
- [ ] Static files served from `dist/public`
- [ ] Health check endpoint at `/health`
- [ ] No hardcoded ports or paths

## Deployment Steps

### 1. Connect to Railway
- [ ] Push code to GitHub
- [ ] Connect repository to Railway
- [ ] Railway auto-detects Node.js project

### 2. Configure Build
- [ ] Build command: `npm run build`
- [ ] Start command: `node dist/index.js`
- [ ] Node.js version: 18

### 3. Set Environment Variables
- [ ] `NODE_ENV=production`
- [ ] `PORT` (Railway sets automatically)
- [ ] Any other required variables

### 4. Deploy
- [ ] Trigger deployment
- [ ] Monitor build logs
- [ ] Check runtime logs
- [ ] Test health endpoint

## Troubleshooting

### Build Fails
1. Check build logs in Railway dashboard
2. Verify all dependencies in package.json
3. Test build locally: `npm run build`
4. Check for TypeScript errors: `npm run check`

### App Won't Start
1. Check runtime logs
2. Verify `dist/index.js` exists
3. Test locally: `npm start`
4. Check PORT environment variable

### Static Files Not Loading
1. Verify `dist/public/` exists
2. Check static file serving
3. Test file paths
4. Check CORS settings

## Quick Fixes

### If Railway can't detect project type:
- Add `"engines": {"node": "18"}` to package.json
- Ensure package.json has correct scripts

### If build times out:
- Simplify build process
- Remove heavy operations
- Use incremental builds

### If memory issues:
- Optimize dependencies
- Remove dev dependencies from production
- Use production builds only

## Verification

After successful deployment:
- [ ] App loads at Railway URL
- [ ] All pages work correctly
- [ ] Static assets load properly
- [ ] API endpoints respond
- [ ] Health check returns 200

## Rollback Plan

If deployment fails:
1. Go to Railway dashboard
2. Navigate to Deployments
3. Click "Rollback" on last working version
4. Fix issues and redeploy
