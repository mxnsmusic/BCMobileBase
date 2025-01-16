import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import LandingPage from './src/screens/LandingScreen/LandingPage';
import OnboardingScreen from './src/screens/LandingScreen/OnboardingScreen';
import {getItem} from './src/utils/asynStorage';

export type RootStackParamList = {
  Onboarding: undefined;
  Landing: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator();

function RootStack() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);
  useEffect(() => {
    checkIfAlreadyOnboard();
  }, []);

  const checkIfAlreadyOnboard = async () => {
    const onboarded = await getItem('onboarded');
    setShowOnboarding(!onboarded);
    console.log(onboarded + ' ah yo!');
  };
  if (showOnboarding == null) {
    return null;
  }
  if (showOnboarding) {
    return (
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          options={{headerShown: false}}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Landing"
          options={{headerShown: false}}
          component={LandingPage}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Onboarding"
          options={{headerShown: false}}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Landing"
          options={{headerShown: false}}
          component={LandingPage}
        />
      </Stack.Navigator>
    );
  }
}

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
