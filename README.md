# react-native-uuid-generator

A simple wrapper around the native iOS and Android UUID classes.
Exposes a single method, `getRandomUUID`.

## Getting started

`$ npm install react-native-uuid-generator --save`

### Mostly automatic installation

`$ react-native link react-native-uuid-generator`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-uuid-generator` and add `RNUUIDGenerator.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNUUIDGenerator.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNUUIDGeneratorPackage;` to the imports at the top of the file
  - Add `new RNUUIDGeneratorPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  ```
    include ':react-native-uuid-generator'
    project(':react-native-uuid-generator').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-uuid-generator/android')
  ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  ```
    compile project(':react-native-uuid-generator')
  ```

## Usage
```javascript
import RNUUIDGenerator from 'react-native-uuid-generator';

RNUUIDGenerator.getRandomUUID((uuid) => {
  console.log(uuid);
});
// => "BD6120BD-3612-4D56-8957-99F5D6F02C52"
```