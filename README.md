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

This folder is **already a Git repository** with an initial commit on branch `main`.

**Remote:** `origin` → `https://github.com/interstatetruckingsolutions-svg/catruckingsolutions-web.git`  
If that is not your GitHub user or repo name, change it:

```powershell
cd "c:\Users\ITS\Documents\catruckingsolutions-web"
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

**Finish publishing**

1. On GitHub, create a **new empty** repository (same name as in the URL, e.g. `catruckingsolutions-web`). Do **not** add a README or `.gitignore` there.
2. Push from your PC (if `git` is not in your PATH, use the full path to `git.exe`):

```powershell
cd "c:\Users\ITS\Documents\catruckingsolutions-web"
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

Sign in when prompted, or use a [Personal Access Token](https://github.com/settings/tokens) as the password for HTTPS.

**Alternatives**

- **GitHub Desktop:** File → Add local repository → this folder → if no remote, Repository → Repository settings → Remote → add `origin`, then Publish / Push.
- **SSH:** `git remote set-url origin git@github.com:YOUR_USERNAME/catruckingsolutions-web.git` then `git push -u origin main` (requires an SSH key on your GitHub account).

## Build

```bash
npm run build
npm start
```
