@echo off
echo Creating production build directory...

set BUILD_DIR=production_upload

REM Clean up previous build
if exist %BUILD_DIR% (
    echo Removing old build directory...
    rmdir /s /q %BUILD_DIR%
)

mkdir %BUILD_DIR%
mkdir %BUILD_DIR%\css
mkdir %BUILD_DIR%\fonts
mkdir %BUILD_DIR%\js
mkdir %BUILD_DIR%\dist

echo Copying essential files...

REM Copy HTML and component files
copy *.html %BUILD_DIR%\

REM Copy minified assets and fonts
copy css\production.min.css %BUILD_DIR%\css\
xcopy /s /e /i fonts %BUILD_DIR%\fonts\
copy js\production.min.js %BUILD_DIR%\js\
copy js\chatbot-loader.js %BUILD_DIR%\js\

REM Copy optimized images and assets from dist
xcopy /s /e /i dist %BUILD_DIR%\dist\

REM Copy SEO files
copy robots.txt %BUILD_DIR%\
copy sitemap.xml %BUILD_DIR%\

echo.
echo Production build created in '%BUILD_DIR%' directory.
echo You can now upload the contents of this folder to your Plesk server.
pause