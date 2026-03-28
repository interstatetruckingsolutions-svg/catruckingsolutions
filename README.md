# CA Trucking Solutions — Web

Next.js landing page for California IRP, IFTA, and trucking insurance compliance.

## Requirements

- [Node.js](https://nodejs.org/) 20+
- [Git](https://git-scm.com/download/win) (to publish to GitHub)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish to GitHub

1. **Install Git for Windows** if `git` is not recognized in PowerShell or Command Prompt.

2. **Create an empty repository** on GitHub (no README, no `.gitignore`—this project already has them). Note the repository URL, for example `https://github.com/YOUR_USERNAME/catruckingsolutions-web.git`.

3. In PowerShell or Git Bash:

```powershell
cd "c:\Users\ITS\Documents\catruckingsolutions-web"

git init
git add .
git commit -m "Initial commit: CA Trucking Solutions Next.js site"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/catruckingsolutions-web.git
git push -u origin main
```

Replace `YOUR_USERNAME` and the repo name with yours.

4. **Authentication:** GitHub no longer accepts account passwords for HTTPS Git. Use one of:

   - **GitHub Desktop** (easiest): File → Add local repository → choose this folder → Publish repository.
   - **SSH:** Add an SSH key in GitHub Settings → SSH keys, then use `git@github.com:YOUR_USERNAME/catruckingsolutions-web.git` as `origin`.
   - **HTTPS + credential manager:** When you `git push`, sign in with a [Personal Access Token](https://github.com/settings/tokens) instead of a password.

## Build

```bash
npm run build
npm start
```
