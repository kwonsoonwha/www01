@echo off
cd /d "%~dp0"
git add .
git -c user.name="kwonsoonwha" -c user.email="kwonsoonwha@github.com" commit -m "update: 커피프리 실제 네이버 스마트스토어 URL 연결"
git push origin main
