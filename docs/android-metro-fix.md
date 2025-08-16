# Android Metro Connection Fix

This document explains the fix for the "Unable to load script" error in React Native Android development.

## Problem
When running `npx react-native run-android`, the Android app displays an error:
```
Unable to load script.
Make sure you're running Metro or that your bundle 'index.android.bundle' is packaged correctly for release.
```

## Root Cause
Android 9+ (API level 28+) blocks cleartext HTTP traffic by default for security reasons. Since the Metro development server runs on `http://localhost:8081`, the Android app cannot connect to it without explicit permission.

## Solution
Added a network security configuration that allows cleartext traffic to development servers:

1. **Network Security Config** (`android/app/src/main/res/xml/network_security_config.xml`):
   - Allows cleartext traffic to `localhost` (development machine)
   - Allows cleartext traffic to `10.0.2.2` (Android emulator default host)
   - Allows cleartext traffic to `10.0.3.2` (Genymotion emulator default host)

2. **AndroidManifest.xml Update**:
   - Added `android:networkSecurityConfig="@xml/network_security_config"` to the application tag

## Security Note
This configuration only affects development builds. Production builds should use HTTPS for all network communications. The network security configuration specifically targets development server addresses only.

## Testing the Fix
To verify Metro connectivity:
```bash
# Start Metro bundler
npm start

# Test connectivity (in another terminal)
curl http://localhost:8081/status
curl "http://localhost:8081/index.bundle?platform=android"
```

Both commands should return successful responses when Metro is running.