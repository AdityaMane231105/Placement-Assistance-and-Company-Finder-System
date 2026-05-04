# 📤 GitHub Setup & Push Instructions

## Why GitHub?
Netlify and Render auto-deploy whenever you push code to GitHub. This makes updates automatic!

---

## STEP 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `placement-finder`
3. Description: `Placement Assistance and Company Finder System`
4. **CHECK** "Add a README file" (optional - you have one)
5. Click "Create repository"

---

## STEP 2: Push Your Code to GitHub

### Using Git Bash/Terminal (Recommended):

1. **Open Terminal/PowerShell** in your project folder:
   ```bash
   cd Desktop/Placement-Assistance-and-Company-Finder-System
   ```

2. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Placement Finder full-stack application"
   ```

3. **Add Remote** (replace YOUR_USERNAME):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/placement-finder.git
   ```

4. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

5. **Enter GitHub credentials** when prompted

---

### Using GitHub Desktop (Easier):

1. Download: https://desktop.github.com
2. Click "File" → "Clone repository"
3. Enter: `https://github.com/YOUR_USERNAME/placement-finder.git`
4. Click "Publish repository"
5. Keep "Private" or "Public" as you prefer

---

## STEP 3: Verify on GitHub

Go to https://github.com/YOUR_USERNAME/placement-finder
You should see your code there!

---

## STEP 4: Deploy with GitHub Connection

### Option 1: Netlify (for Frontend)
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Select "GitHub"
4. Choose your `placement-finder` repo
5. Auto-deploys on every push! ✅

### Option 2: Render (for Backend)
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub
4. Select your repo
5. Auto-deploys on every push! ✅

---

## Important Files to Include

Make sure your `.gitignore` has:
```
node_modules/
.env
.env.local
.DS_Store
```

This prevents uploading sensitive data!

---

## Making Updates Later

After deployment, to update your site:

```bash
# Make changes to your files
# Then:
git add .
git commit -m "Your change description"
git push
```

**Boom!** Both Netlify and Render auto-redeploy! 🎉

---

## Quick Reference

```bash
# Check git status
git status

# See all commits
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

---

**Next**: Follow QUICK_START.md to deploy!
