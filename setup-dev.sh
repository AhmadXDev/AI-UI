#!/bin/bash

# AI-UI Development Setup Script
# This script helps set up the development environment for Android development

echo "🚀 AI-UI Development Setup"
echo "=============================="

# Check Node.js version
echo "Checking Node.js version..."
node_version=$(node --version)
echo "✓ Node.js: $node_version"

# Check npm version
echo "Checking npm version..."
npm_version=$(npm --version)
echo "✓ npm: $npm_version"

# Check if dependencies are installed
echo "Checking project dependencies..."
if [ -d "node_modules" ]; then
    echo "✓ Node modules already installed"
else
    echo "⚠️  Installing dependencies..."
    npm install
fi

# Check Java version
echo "Checking Java version..."
if command -v java &> /dev/null; then
    java_version=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}')
    echo "✓ Java: $java_version"
else
    echo "❌ Java not found. Please install OpenJDK 17 or later"
fi

# Check Android setup
echo "Checking Android development setup..."
if [ -n "$ANDROID_HOME" ]; then
    echo "✓ ANDROID_HOME is set: $ANDROID_HOME"
else
    echo "⚠️  ANDROID_HOME not set. Please set it to your Android SDK path"
fi

# Check ADB
if command -v adb &> /dev/null; then
    echo "✓ ADB is available"
else
    echo "⚠️  ADB not found in PATH. Make sure Android SDK tools are in your PATH"
fi

echo ""
echo "🎯 Quick Start Commands:"
echo "========================"
echo "Start Metro bundler:     npm start"
echo "Run on Android:          npm run android"
echo "Run tests:              npm test"
echo "Lint code:              npm run lint"
echo ""
echo "📱 For Android Development:"
echo "============================"
echo "1. Start an Android emulator from Android Studio"
echo "2. Or connect a physical Android device with USB debugging enabled"
echo "3. Run: npm run android"
echo ""
echo "✨ The AI-UI framework is ready for development!"