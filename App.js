import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
