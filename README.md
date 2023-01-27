# Purpose
The purpose of this app is to give a reproducible example of a bug in Detox, where .tap() function doesn't work on Android Tiramisu (API 33)

# Installation and run

```sh
yarn

# One of the following
yarn build:debug
yarn build:release

# Change emulator avdName to whatever you're using
# Make sure it's on Tiramisu (API 33)
vi .detoxrc.js

# One of the following
yarn test:debug
yarn test:release
```

## Why did only the long presses pass?

Well, I don't know. My suspicion is, that `.tap()` function doesn't trigger `onClick` functions, only react-native highlight effects.