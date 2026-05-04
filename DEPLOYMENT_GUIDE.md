# 🚀 Placement Finder - Deployment Guide

## Current Status
- **Frontend**: Deployed on Netlify
- **Backend**: Needs to be deployed (currently pointing to: https://placement-backend-jkka.onrender.com)
- **Database**: MongoDB connection needed

---

## STEP 1: Deploy Backend to Render (FREE & EASY)

### Option A: Deploy Backend Using Render.com (Recommended)

1. **Create Account**: Go to https://render.com and sign up

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repo
   - Set Build Command: `npm install`
   - Set Start Command: `node server.js`

3. **Environment Variables**:
   - Go to "Environment" tab
   - Add these variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     NODE_ENV=production
     ```

4. **MongoDB Setup** (FREE Tier Available):
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up with Google/GitHub
   - Create a cluster (FREE tier available)
   - Create a database user
   - Get connection string and add to Render environment
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/placement`

5. **Deploy**: Click "Create Web Service"
   - Wait for build to complete (~2-3 minutes)
   - Copy your backend URL: `https://your-backend-service.onrender.com`

---

## STEP 2: Update Frontend with Backend URL

1. **Edit `script.js`**: Replace line 1396:
   ```javascript
   // OLD:
   return fetch('https://placement-backend-jkka.onrender.com/api/companies')
   
   // NEW:
   return fetch('https://YOUR-RENDER-URL.onrender.com/api/companies')
   ```

2. **Commit and Push** to GitHub:
   ```bash
   git add .
   git commit -m "Update backend URL for production"
   git push
   ```

---

## STEP 3: Redeploy Frontend on Netlify

1. **Connect GitHub to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository

2. **Build Settings**:
   - Build command: (leave empty for static site)
   - Publish directory: `Placement-Finder/`

3. **Deploy**: Click "Deploy site"
   - Netlify automatically redeploys when you push to GitHub

---

## STEP 4: Verify Deployment

✅ Check if working:
- Frontend: https://placement-finder.netlify.app
- Open DevTools (F12) → Network tab
- Click on "Dashboard" or search
- Verify API calls to your backend URL are successful
- Should see 55 companies loading

---

## ⚠️ Important: MongoDB Setup

Without MongoDB, the backend won't work. You MUST:

1. **Create MongoDB Atlas Account**: https://www.mongodb.com/cloud/atlas
2. **Get Connection String**:
   - Create Cluster → Create Database User → Copy Connection String
   - Should look like: `mongodb+srv://username:password@cluster.mongodb.net/placement`
3. **Add to Render Environment**: Set MONGODB_URI variable

---

## 🆘 Troubleshooting

### 1. Backend not loading companies
- Check MongoDB connection string
- Verify environment variables on Render
- Check backend logs on Render dashboard

### 2. Frontend showing "Page Not Found"
- Verify netlify.toml exists in Placement-Finder directory
- Verify _redirects file exists
- Redeploy on Netlify

### 3. CORS Error
- Backend already has CORS enabled (see server.js)
- Make sure to use HTTPS URLs

### 4. API returning 404
- Verify backend URL in script.js is correct
- Make sure backend deployment is successful on Render

---

## 📝 Summary

**Your Live URL will be**: `https://placement-finder.netlify.app`

**Backend URL will be**: `https://your-service-name.onrender.com`

**What to show your sir**:
1. Companies load from database (Dashboard tab)
2. Search and filter functionality works
3. Company details show correctly
4. Profile management works
5. Bookmarks/applications saved locally

---

## 🔧 Quick Commands for Local Testing

```bash
# Backend
cd Placement-Finder/backend
npm install
npm start

# Frontend - Open in browser
file:///path/to/Placement-Finder/index.html
```

---

**Need help?** Check the error messages carefully or share your Render URL and backend logs.
