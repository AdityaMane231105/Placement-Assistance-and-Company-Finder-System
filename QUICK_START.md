# 🚀 Quick Start - Get Your Site Live in 10 Minutes

## What You Need
1. GitHub account (free)
2. Netlify account (free) 
3. Render account (free)
4. MongoDB Atlas account (free)

---

## STEP 1: Setup MongoDB (2 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up with Google
3. Create a Free Cluster
4. Create a Database User (remember username/password)
5. Click "Connect" → "Drivers" → Copy your connection string
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/placement`
6. **COPY THIS STRING** - you'll need it for Render

---

## STEP 2: Deploy Backend to Render (3 minutes)

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Select your GitHub repository
5. Fill in:
   - **Name**: `placement-finder-backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Runtime**: Node
6. Click "Advanced" and add Environment Variables:
   ```
   MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/placement
   NODE_ENV = production
   ```
7. Click "Create Web Service"
8. **WAIT 2-3 MINUTES** for deployment to complete
9. Copy your backend URL (looks like: `https://placement-finder-backend.onrender.com`)

---

## STEP 3: Update Frontend URL (2 minutes)

1. Open `Placement-Finder/script.js`
2. Find line with `placement-backend-jkka.onrender.com`
3. Replace with your Render URL from Step 2
4. Save the file

---

## STEP 4: Deploy Frontend to Netlify (3 minutes)

1. Go to https://app.netlify.com
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Build settings:
   - **Publish directory**: `Placement-Finder/`
   - **Build command**: (leave empty)
6. Click "Deploy site"
7. **WAIT 1-2 MINUTES** for deployment
8. Your site URL will appear (like: `https://placement-finder-xxxx.netlify.app`)

---

## ✅ DONE! Your Live URL:

```
https://placement-finder-xxxx.netlify.app
```

### Test It:
- Open your URL in browser
- Go to "Dashboard" tab
- You should see all 55 companies loading
- Try searching and filtering
- Click on a company to see details

---

## 🎯 What to Show Your Sir

1. **Home Page** - Shows hero section with search
2. **Dashboard** - Lists all 55 companies from database
3. **Search/Filter** - Works perfectly
4. **Company Details** - Shows package, eligibility, skills
5. **Profile** - Can save profile
6. **Dark Mode** - Toggle available

---

## ⚠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Companies not loading | Check MongoDB connection string in Render |
| Page shows 404 | Check netlify.toml and _redirects files exist |
| API errors in console | Verify backend URL in script.js is correct |
| Can't deploy to Render | Make sure .env file is in .gitignore |

---

**Need the step-by-step with screenshots?** 
Each service has great onboarding guides:
- Render: https://docs.render.com
- Netlify: https://docs.netlify.com
- MongoDB: https://docs.atlas.mongodb.com
