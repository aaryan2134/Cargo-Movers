#!/bin/zsh

set -euo pipefail

BUILD_DIR="production_upload"

echo "Creating production build directory..."

echo "Building optimized images..."
npm run build:images

if [[ -d "$BUILD_DIR" ]]; then
  echo "Removing old build directory..."
  rm -rf "$BUILD_DIR"
fi

mkdir -p "$BUILD_DIR/css" "$BUILD_DIR/fonts" "$BUILD_DIR/js" "$BUILD_DIR/dist"

echo "Copying essential files..."

# Copy HTML and component files
cp ./*.html "$BUILD_DIR/"

# Rewrite packaged Forbes image to use the optimized production asset
perl -0pi -e 's|assets/forbes\.jpeg|dist/assets/forbes.jpeg|g' "$BUILD_DIR/index.html"

# Copy minified assets and fonts
cp "css/production.min.css" "$BUILD_DIR/css/"
cp -R "fonts/." "$BUILD_DIR/fonts/"
cp "js/production.min.js" "$BUILD_DIR/js/"
cp "js/chatbot-loader.js" "$BUILD_DIR/js/"

# Copy optimized images and assets from dist
cp -R "dist/." "$BUILD_DIR/dist/"

# Copy SEO files
cp "robots.txt" "$BUILD_DIR/"
cp "sitemap.xml" "$BUILD_DIR/"

echo
echo "Production build created in '$BUILD_DIR' directory."
echo "You can now upload the contents of this folder to your Plesk server."