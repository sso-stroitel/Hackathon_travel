import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/LogInScreen";

export default createStackNavigator({
  LogIn: LoginScreen,
}, {headerMode: "none"});
