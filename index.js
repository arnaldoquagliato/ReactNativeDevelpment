<<<<<<< HEAD
import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import Main from "./src/components/Main/index";
import { name as appName } from "./app.json";
=======
import { registerRootComponent } from 'expo';

import App from './App';
>>>>>>> e7b567d3839f4572e49b90a4d749450312f1f4ae

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
<<<<<<< HEAD
if (Platform.OS == "android") {
  registerRootComponent(Main);
} else {
  AppRegistry.registerComponent(appName, () => Main);
}
=======
registerRootComponent(App);
>>>>>>> e7b567d3839f4572e49b90a4d749450312f1f4ae
