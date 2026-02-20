@echo off
cd /d "%~dp0"
git add .
git -c user.name="kwonsoonwha" -c user.email="kwonsoonwha@github.com" commit -m "feat: initial commit for PREE landing page"
git branch -M main
git push -u origin main
