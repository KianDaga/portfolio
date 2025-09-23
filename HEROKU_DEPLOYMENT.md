# Heroku Deployment Guide

## Prerequisites
1. Heroku CLI installed
2. PostgreSQL database (Heroku Postgres addon)
3. Git repository

## Setup Steps

### 1. Create Heroku App
```bash
heroku create your-app-name
```

### 2. Add PostgreSQL Database
```bash
heroku addons:create heroku-postgresql:mini
```

### 3. Set Environment Variables
```bash
# Get database URL (automatically set by Heroku Postgres)
heroku config:get DATABASE_URL

# Set session secret
heroku config:set SESSION_SECRET=your-random-session-secret-here

# Set Node environment
heroku config:set NODE_ENV=production
```

### 4. Deploy
```bash
git add .
git commit -m "Prepare for Heroku deployment"
git push heroku main
```

### 5. Run Database Migrations
```bash
heroku run npm run db:push
```

## Environment Variables Required
- `DATABASE_URL` - Automatically set by Heroku Postgres
- `SESSION_SECRET` - Random string for session encryption
- `NODE_ENV` - Set to "production"
- `PORT` - Automatically set by Heroku

## Build Process
Heroku will automatically:
1. Install dependencies (`npm install`)
2. Run build script (`npm run heroku-postbuild`)
3. Start the application (`npm start`)

## Troubleshooting
- Check logs: `heroku logs --tail`
- Restart app: `heroku restart`
- Check config: `heroku config`
