import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

const {width} = Dimensions.get('window');

type OnboardingScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const handleDone = () => {
    navigation.navigate('Landing');
  };

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity {...props} style={styles.button}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View>
                <LottieView
                  style={styles.lottieAnimation}
                  source={require('../assets/lotte/animation1.json')}
                  autoPlay={true}
                  loop={true}
                />
              </View>
            ),
            subtitle: 'Done With react',
            title: 'Welcome to BCMobile',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View>
                <LottieView
                  style={styles.lottieAnimation}
                  source={require('../assets/lotte/animation3.json')}
                  autoPlay={true}
                  loop={true}
                />
              </View>
            ),
            subtitle: 'Done With react',
            title: 'Step 1',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View>
                <LottieView
                  style={styles.lottieAnimation}
                  source={require('../assets/lotte/animation2.json')}
                  autoPlay={true}
                  loop={true}
                />
              </View>
            ),
            subtitle: 'Done With react',
            title: 'Step 2',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  lottieAnimation: {width: width * 0.9, height: width},
  button: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%',
  },
});
