<!-- @format -->

# rn-toast-message

rn-toast-message is toast message for react native

## Installation

rn-toast-message uses [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) version 3.0.0. Be sure you installed React Native Reanimated version 3.0.0.

```bash
npm install rn-toast-message
or
yarn add rn-toast-message
```

## Usage

app.tsx

```javascript
import React from "react";
import YourApp from "./src/YourApp";
import { ToastMessageProvider } from "rn-toast-message";

const App = () => {
  return (
    <ToastMessageProvider>
      <YourApp />
    </ToastMessageProvider>
  );
};

export default App;
```

```javascript
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useToast } from "rn-toast-message";

const YourApp = () => {
  const { showToast } = useToast();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        onPress={() => {
          showToast({
            message: "Hello From Toast Message",
            type: "success",
            duration: 3000,
            textStyle: {
              color: "white",
            },
          });
        }}
      >
        <Text>Show Toast</Text>
      </Pressable>
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
