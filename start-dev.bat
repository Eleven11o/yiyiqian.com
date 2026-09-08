@echo off
title Yiyi Qian Portfolio - Dev Server
set "NODE_PATH=D:\Programs\NodeJS"
set "PATH=%NODE_PATH%;%PATH%"
cd /d "%~dp0"
echo Starting Astro dev server...
start "" "http://localhost:4321/works/deepcore/"
call "%NODE_PATH%\npx.cmd" astro dev --host
pause
