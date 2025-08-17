# Android Development Setup & Troubleshooting

## Common "Unable to load script" Error Solutions

This error typically occurs when the Metro bundler cannot connect to the Android device/emulator. Here are the solutions:

### 1. Basic Troubleshooting Steps

```bash
# Step 1: Clean everything
npx react-native clean
rm -rf node_modules package-lock.json
npm install

# Step 2: Start Metro bundler first
npx react-native start --reset-cache

# Step 3: In a new terminal, run Android
npx react-native run-android
```

### 2. Network Configuration

#### For Android Emulator:
The emulator should automatically connect to `localhost:8081`. If it doesn't:

```bash
# Run this command to ensure proper port forwarding
adb reverse tcp:8081 tcp:8081
```

#### For Physical Device (USB):
```bash
# Enable USB debugging and run:
adb reverse tcp:8081 tcp:8081
adb devices  # Verify device is connected
```

#### For Physical Device (Wi-Fi):
1. Find your computer's IP address
2. In the React Native app, shake the device
3. Go to "Settings" → "Debug server host & port for device"
4. Enter: `YOUR_COMPUTER_IP:8081` (e.g., `192.168.1.100:8081`)

### 3. Metro Bundler Issues

If Metro bundler fails to start:

```bash
# Kill any existing Metro processes
npx react-native start --reset-cache

# Or manually kill processes on port 8081
lsof -ti:8081 | xargs kill -9
```

#### HTTP 500 Server Errors

If you see "The development server returned response error code: 500":

```bash
# 1. Clear Metro cache completely
npx react-native start --reset-cache

# 2. Clean node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# 3. Clear temporary files
rm -rf /tmp/metro-*
rm -rf /tmp/react-*

# 4. Start fresh Metro instance
npx react-native start --reset-cache
```

This error typically indicates a Metro configuration issue or corrupted cache.

### 4. Android Build Issues

#### Clean Android Build:
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

#### Fix Gradle Issues:
If you encounter Gradle errors:

1. Update `android/gradle/wrapper/gradle-wrapper.properties`:
```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.8-bin.zip
```

2. Update `android/build.gradle`:
```gradle
classpath("com.android.tools.build:gradle:8.2.0")
```

### 5. React Native Version Compatibility

This project uses React Native 0.81.0. Ensure compatibility:

- **Java**: JDK 11 or higher
- **Android SDK**: API 33 or higher  
- **Node.js**: 18.x or higher
- **React**: 18.x (not 19.x)

### 6. react-native-linear-gradient Setup

The linear gradient library should auto-link, but if you encounter issues:

#### Manual Android Setup (if needed):
1. Verify in `android/settings.gradle`:
```gradle
include ':react-native-linear-gradient'
project(':react-native-linear-gradient').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-linear-gradient/android')
```

2. Add to `android/app/build.gradle`:
```gradle
dependencies {
    implementation project(':react-native-linear-gradient')
}
```

### 7. Development Environment Checklist

- [ ] Android Studio installed with SDK
- [ ] Android SDK Build-Tools version 33.0.0 or higher
- [ ] Android emulator running or physical device connected
- [ ] `adb devices` shows your device
- [ ] Metro bundler started before running app
- [ ] Proper network configuration (localhost:8081 or IP:8081)

### 8. Emergency Solutions

If nothing else works:

#### Reset React Native cache:
```bash
npx react-native start --reset-cache
rm -rf /tmp/metro-*
```

#### Reset Android build:
```bash
cd android
rm -rf build
rm -rf app/build
./gradlew clean
cd ..
```

#### Complete reset:
```bash
# Nuclear option - complete reset
rm -rf node_modules package-lock.json
rm -rf android/build android/app/build
npm install
npx react-native start --reset-cache
```

### 9. Useful Debugging Commands

```bash
# Check device connection
adb devices

# Check port forwarding
adb reverse --list

# Monitor logs
npx react-native log-android

# Check Metro bundler status
curl http://localhost:8081/status
```

## Additional Resources

- [React Native Android Setup Guide](https://reactnative.dev/docs/environment-setup)
- [Android Developer Documentation](https://developer.android.com/studio)
- [Metro Bundler Configuration](https://metrobundler.dev/docs/configuration)