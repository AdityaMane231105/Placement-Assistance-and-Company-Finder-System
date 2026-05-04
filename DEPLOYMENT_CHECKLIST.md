# ✅ MASTER DEPLOYMENT CHECKLIST

**Complete this checklist to go LIVE with your Placement Finder!**

---

## 📋 PRE-DEPLOYMENT (Do Once)

### Local Testing
- [ ] `cd Placement-Finder/backend && npm install`
- [ ] Create `.env` file in backend folder with:
  ```
  MONGODB_URI=your_test_mongodb_uri
  PORT=5000
  NODE_ENV=development
  ```
- [ ] `npm start` (backend runs on port 5000)
- [ ] Open `index.html` in browser → Dashboard loads companies
- [ ] Test search, filter, and company details work

### GitHub Setup
- [ ] Create GitHub account (https://github.com/join)
- [ ] Create new repository: `placement-finder`
- [ ] Follow [GITHUB_SETUP.md](GITHUB_SETUP.md)
- [ ] Push all code to GitHub:
  ```bash
  git add .
  git commit -m "Initial commit"
  git push -u origin main
  ```
- [ ] Verify code appears on GitHub website

---

## 🗄️ DATABASE SETUP (Do Once)

### MongoDB Atlas Setup
- [ ] Sign up: https://www.mongodb.com/cloud/atlas
- [ ] Create FREE cluster
- [ ] Create database user (save username/password)
- [ ] Get connection string from "Connect" → "Drivers"
- [ ] **Copy this string**: `mongodb+srv://username:password@cluster.mongodb.net/placement`
- [ ] Save for next steps

---

## 🔗 BACKEND DEPLOYMENT (Render.com)

### Create Render Account
- [ ] Sign up: https://render.com (use GitHub login)

### Deploy Backend
- [ ] Click "New +" → "Web Service"
- [ ] Select your GitHub repository
- [ ] Fill in:
  ```
  Name: placement-finder-backend
  Build Command: npm install
  Start Command: node server.js
  ```

### Add Environment Variables
- [ ] Go to "Environment" tab
- [ ] Add MONGODB_URI:
  ```
  MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/placement
  ```
- [ ] Add NODE_ENV:
  ```
  NODE_ENV = production
  ```
- [ ] Click "Create Web Service"

### Verify Deployment
- [ ] Wait 2-3 minutes for build
- [ ] Check if status shows "Live" (green)
- [ ] Copy backend URL: `https://your-service-name.onrender.com`
- [ ] Test in browser: `https://your-service-name.onrender.com` should show JSON response
- [ ] Save this URL for next step

---

## 🎨 FRONTEND UPDATE

### Update Backend URL
- [ ] Open `Placement-Finder/script.js`
- [ ] Find line 1396: `placement-backend-jkka.onrender.com`
- [ ] Replace with your Render URL from previous step
- [ ] Save file

### Push to GitHub
- [ ] Terminal: `git add .`
- [ ] Terminal: `git commit -m "Update backend URL"`
- [ ] Terminal: `git push`

---

## 🌐 FRONTEND DEPLOYMENT (Netlify)

### Create Netlify Account
- [ ] Sign up: https://app.netlify.com (use GitHub login)

### Deploy Frontend
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Select "GitHub"
- [ ] Select your `placement-finder` repository
- [ ] Fill in:
  ```
  Build command: (leave empty)
  Publish directory: Placement-Finder/
  ```
- [ ] Click "Deploy site"

### Verify Deployment
- [ ] Wait 1-2 minutes for deployment
- [ ] Your URL will appear: `https://placement-finder-xxx.netlify.app`
- [ ] **This is your LIVE URL!** 🎉

---

## ✅ FINAL TESTING

### Frontend Testing
- [ ] Open your live URL in browser
- [ ] Page loads without 404 error
- [ ] Home page displays correctly
- [ ] Toggle dark mode works
- [ ] Navigation links work

### Dashboard Testing
- [ ] Click "Dashboard"
- [ ] Companies load from backend ✅
- [ ] All 55 companies visible
- [ ] No API errors in console (F12)

### Search & Filter Testing
- [ ] Search for "TCS" → results show
- [ ] Filter by skill "Java" → results update
- [ ] Filter by location works
- [ ] Reset filters works

### Company Details
- [ ] Click on any company
- [ ] Popup shows all details
- [ ] Package, skills, eligibility visible
- [ ] "Apply" button works

### Other Features
- [ ] Profile page loads
- [ ] Can save skills
- [ ] Dark mode toggle works
- [ ] No console errors (F12)

---

## 🎬 READY TO PRESENT!

### What to Show Your Sir

1. **Home Screen**
   - Show search and filters
   - Highlight 55 companies available

2. **Dashboard**
   - Show companies loading from database
   - Show real-time filtering works

3. **Company Details**
   - Click on any company
   - Show complete details

4. **Search Demo**
   - Search for "Google" or "Microsoft"
   - Show results update instantly

5. **Profile**
   - Show profile management
   - Show saved preferences

6. **Dark Mode**
   - Toggle to show UI works

---

## 📱 SHARING YOUR LIVE URL

### Your Live URLs:
```
Frontend: https://placement-finder-xxx.netlify.app
Backend: https://placement-finder-backend.onrender.com
```

### Send to Sir:
"Here's the fully functional placement finder:
- **Live URL**: https://placement-finder-xxx.netlify.app
- **Features**: 55 companies, search, filter, dark mode
- **Backend**: Connected to MongoDB
- **Status**: Production ready!"

---

## 🔧 TROUBLESHOOTING

| Issue | Solution | Status |
|-------|----------|--------|
| Page shows 404 | Check netlify.toml exists in Placement-Finder/ | [ ] |
| Companies not loading | Test backend URL directly in browser | [ ] |
| API errors in console | Verify backend URL in script.js | [ ] |
| Dark mode not working | Clear browser cache (Ctrl+Shift+Delete) | [ ] |
| Backend says "offline" on Render | Check MongoDB connection string | [ ] |

---

## 📞 GET HELP

If something doesn't work:
1. Check [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) 
2. Check [QUICK_START.md](QUICK_START.md)
3. Check console errors (F12)
4. Check Render/Netlify dashboard logs

---

**NEXT STEP**: Start with "PRE-DEPLOYMENT" section and work through checklist! ✅

**Estimated Time**: 15-20 minutes total
