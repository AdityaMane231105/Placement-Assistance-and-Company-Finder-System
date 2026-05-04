# 🔧 TROUBLESHOOTING & REFERENCE GUIDE

## Quick Fixes (Try These First!)

### Issue: Page shows 404 on Netlify

**Check 1: netlify.toml file exists**
```bash
# Make sure this file exists in Placement-Finder/ folder
cat netlify.toml
```

**Check 2: _redirects file exists**
```bash
# Make sure this file exists in Placement-Finder/ folder
cat _redirects
```

**Check 3: Publish directory correct**
- Go to Netlify dashboard
- Site settings → Build & deploy
- Verify "Publish directory" = `Placement-Finder/`

**Fix**: If missing, add the files from this guide and redeploy

---

### Issue: Companies not loading (blank dashboard)

**Check 1: Backend running?**
```bash
# Go to your backend URL
https://your-render-url.onrender.com
# Should show: {"message": "CareerLaunch API is running."}
```

**Check 2: API endpoint correct?**
```bash
# Test API directly
https://your-render-url.onrender.com/api/companies
# Should return JSON array of companies
```

**Check 3: Check browser console errors**
- Open DevTools (F12)
- Go to Console tab
- Look for red error messages
- Check Network tab for failed requests

**Fix**: 
1. Verify backend URL in script.js line 1396
2. Check MongoDB connection on Render dashboard
3. Check Render logs for errors

---

### Issue: API errors in console

**Error: "Failed to fetch"**
- Backend URL is wrong or offline
- Check: Backend URL in script.js

**Error: "CORS error"**
- Backend CORS not configured
- Check: server.js has `app.use(cors())`

**Error: "MongoDB connection error"**
- Wrong connection string
- Check: Environment variable on Render

---

### Issue: Backend won't deploy on Render

**Check 1: Github repo connected?**
- Go to Render dashboard
- Make sure GitHub is authorized

**Check 2: Build logs**
- Click service → Logs tab
- Look for error messages
- Common: `npm install` failed

**Check 3: Procfile correct?**
```bash
# Should contain:
web: node server.js
```

**Fix**:
1. Check package.json has all dependencies
2. Make sure .gitignore excludes node_modules
3. Redeploy from Render dashboard

---

### Issue: Dark mode not working

**Check 1: Clear cache**
```
Ctrl + Shift + Delete (Windows)
Cmd + Shift + Delete (Mac)
```

**Check 2: Browser console**
- F12 → Console
- Look for JavaScript errors

**Fix**: 
- Redeploy frontend on Netlify
- Hard refresh browser (Ctrl+F5)

---

## Environment Variable Reference

### Backend (.env file)

```ini
# Development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/placement
NODE_ENV=development

# Production (Render)
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/placement
NODE_ENV=production
```

### Format of MONGODB_URI

```
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/DATABASE
```

**Don't forget**:
- Special characters in password must be URL encoded
- Example: `@` becomes `%40`, `:` becomes `%3A`
- Use https://www.urlencode.org if unsure

---

## Debugging Checklist

When something doesn't work:

### 1. Frontend Issues
```
[ ] Page loads?           → Check Netlify URL in browser
[ ] No 404 error?         → Check netlify.toml & _redirects
[ ] Console errors?       → F12 → Console tab
[ ] Network errors?       → F12 → Network tab
[ ] API calls failing?    → Check backend URL
```

### 2. Backend Issues
```
[ ] Backend URL works?    → Visit: https://your-url.onrender.com
[ ] API endpoint works?   → Visit: https://your-url.onrender.com/api/companies
[ ] Companies return?     → Should see JSON array
[ ] Error in logs?        → Check Render dashboard → Logs
[ ] MongoDB connected?    → Check connection string
```

### 3. Database Issues
```
[ ] MongoDB URI correct?  → Verify in environment variables
[ ] Database exists?      → Check MongoDB Atlas dashboard
[ ] Collections created?  → Should see "companies" collection
[ ] Data loaded?          → Check if companies added to database
```

---

## Useful Links

| Service | Link | Purpose |
|---------|------|---------|
| MongoDB | https://cloud.mongodb.com | Database |
| Render | https://render.com | Backend hosting |
| Netlify | https://app.netlify.com | Frontend hosting |
| GitHub | https://github.com | Code repository |

---

## File Structure Reference

```
Placement-Finder/
├── index.html              ← Home page
├── dashboard.html          ← Companies list
├── company.html            ← Company details
├── profile.html            ← User profile
├── script.js               ← JavaScript logic (API calls here!)
├── style.css               ← Styling
├── netlify.toml            ← Netlify config
├── _redirects              ← SPA routing
├── backend/
│   ├── package.json        ← Dependencies
│   ├── server.js           ← Express server
│   ├── Procfile            ← Render config
│   ├── .env.example        ← Env vars template
│   ├── .gitignore          ← Git ignore
│   ├── config/
│   │   └── db.js           ← MongoDB connection
│   ├── models/
│   │   ├── Company.js      ← Company schema
│   │   └── User.js         ← User schema
│   ├── routes/
│   │   ├── companyRoutes.js ← Company API
│   │   └── userRoutes.js    ← User API
│   └── data/
│       └── companies.json   ← 55 companies
└── data/
    └── companies.json       ← Companies data
```

---

## Testing Checklist

### Local Testing
```bash
# 1. Backend
cd Placement-Finder/backend
npm install
npm start
# Should say: "Server running on port 5000"

# 2. MongoDB
# Visit: http://localhost:5000/api/companies
# Should return JSON

# 3. Frontend
# Open: file:///path/to/Placement-Finder/index.html
# Should load without errors
```

### Production Testing
```bash
# 1. Frontend loads
https://your-netlify-url.netlify.app
# No 404 error

# 2. Dashboard works
# Click Dashboard → Companies load
# Should show all 55 companies

# 3. API works
https://your-render-url.onrender.com/api/companies
# Should return JSON array
```

---

## Performance Tips

### Speed up deployment:
1. Exclude large files from Git (use .gitignore)
2. Minify CSS and JS (optional)
3. Compress images (optional)

### Speed up load time:
1. Use CDN for static files (Netlify does this)
2. Optimize images
3. Lazy load company data

---

## Security Checklist

✅ **Already Secure:**
- CORS configured
- Environment variables protected
- HTTPS enforced by Netlify/Render
- No hardcoded secrets

❌ **Don't Do:**
- Commit .env file (use .gitignore)
- Expose MongoDB password in code
- Use HTTP instead of HTTPS
- Share credentials in GitHub issues

---

## Common Error Messages

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot GET /` | SPA routing not configured | Add netlify.toml |
| `Unexpected token <` | HTML returned instead of JSON | Check API URL |
| `CORS error` | CORS not enabled | Add `app.use(cors())` |
| `Connection refused` | Backend not running | Check Render status |
| `MongoError: Invalid URI` | Wrong connection string | Verify in environment vars |
| `Cannot find module` | Missing npm package | Run `npm install` |

---

## Browser DevTools Tips

### Console (F12 → Console)
- See all error messages
- Run JavaScript commands
- Check API responses

### Network (F12 → Network)
- See all HTTP requests
- Check response status (200 = OK, 404 = Not Found)
- View response body
- Check timing

### Storage (F12 → Application → Storage)
- View LocalStorage (bookmarks, profiles)
- View cookies
- Debug saved data

### Responsive Design (F12 → Toggle device toolbar)
- Test on mobile
- Test on tablet
- Check all breakpoints

---

## Frequently Asked Questions

**Q: How do I update the companies list?**
A: Edit companies.json in data/ folder and push to GitHub

**Q: Can I add new features?**
A: Yes! Modify files locally, test, commit to GitHub, auto-deploys

**Q: How do I add user authentication?**
A: Not needed for demo, but check README for future enhancements

**Q: What's the maximum number of companies?**
A: Unlimited! Just add more to database

**Q: How do I backup my data?**
A: MongoDB Atlas has automatic backups

**Q: Can I use a different database?**
A: Yes! Modify models/config for PostgreSQL, etc.

---

## Getting Help

1. **Check console** (F12) for error messages
2. **Read relevant guide** in this project
3. **Check service dashboards** (Render/Netlify logs)
4. **Search error message** on StackOverflow
5. **Ask your sir** or instructor

---

## Next Steps

- ✅ Local testing working? → Deploy!
- ✅ Frontend deployed? → Connect backend
- ✅ All tests passing? → Show to sir!
- ✅ Want improvements? → See future enhancements in README

---

**Last Updated**: May 2026  
**Version**: 1.0  
**Status**: Production Ready ✅
