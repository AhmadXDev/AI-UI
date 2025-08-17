#!/bin/bash

# Metro Bundler Debug Script
# This script helps diagnose and fix common Metro bundler connection issues

echo "🔍 React Native Android Debug Helper"
echo "=================================="

# Check if Metro is running
echo "📡 Checking Metro bundler status..."
METRO_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8081/status 2>/dev/null)

if [ "$METRO_STATUS" = "200" ]; then
    echo "✅ Metro bundler is running on port 8081"
elif [ "$METRO_STATUS" = "500" ]; then
    echo "⚠️  Metro bundler is running but returning HTTP 500 errors"
    echo "💡 This indicates a configuration or cache issue"
    echo "💡 Try: npx react-native start --reset-cache"
else
    echo "❌ Metro bundler is not running (Status: $METRO_STATUS)"
    echo "💡 Starting Metro bundler..."
    echo "Run: npx react-native start --reset-cache"
fi

echo ""

# Check ADB devices
echo "📱 Checking connected Android devices..."
ADB_DEVICES=$(adb devices | grep -v "List of devices" | grep -v "^$")

if [ -z "$ADB_DEVICES" ]; then
    echo "❌ No Android devices found"
    echo "💡 Make sure:"
    echo "   • Android emulator is running, OR"
    echo "   • Physical device is connected via USB with USB debugging enabled"
else
    echo "✅ Found Android devices:"
    echo "$ADB_DEVICES"
fi

echo ""

# Check port forwarding
echo "🔌 Setting up port forwarding..."
adb reverse tcp:8081 tcp:8081 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Port forwarding setup successful (8081 → 8081)"
else
    echo "❌ Failed to setup port forwarding"
    echo "💡 Try: adb reverse tcp:8081 tcp:8081"
fi

echo ""

# Check network connectivity
echo "🌐 Checking network connectivity..."
if curl -s http://localhost:8081 > /dev/null 2>&1; then
    echo "✅ Can connect to localhost:8081"
else
    echo "❌ Cannot connect to localhost:8081"
    echo "💡 Make sure Metro bundler is running"
fi

echo ""

# System info
echo "📋 System Information:"
echo "Node.js: $(node --version 2>/dev/null || echo 'Not found')"
echo "npm: $(npm --version 2>/dev/null || echo 'Not found')"
echo "React Native CLI: $(npx react-native --version 2>/dev/null | head -1 || echo 'Not found')"

echo ""

# Quick fix suggestions
echo "🛠️  Quick Fix Commands:"
echo "=================================="
echo "1. Clean and restart everything:"
echo "   npm run clean"
echo ""
echo "2. Start Metro bundler:"
echo "   npx react-native start --reset-cache"
echo ""
echo "3. Setup port forwarding:"
echo "   adb reverse tcp:8081 tcp:8081"
echo ""
echo "4. Run Android app:"
echo "   npx react-native run-android"
echo ""
echo "5. Fix HTTP 500 errors (configuration/cache issues):"
echo "   rm -rf /tmp/metro-* && npx react-native start --reset-cache"
echo ""
echo "6. If using physical device over Wi-Fi:"
echo "   Find your computer's IP address and set in app:"
echo "   Settings → Debug server host → YOUR_IP:8081"
echo ""
echo "📖 For detailed troubleshooting, see: ANDROID_SETUP.md"