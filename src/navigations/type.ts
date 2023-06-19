type RootStackParamList = {
    Home: {homeName: string}, // undefined because you aren't passing any params to the home screen
    Profile: { username: string },
    Explore: {explorename: string} 
  };

  export default RootStackParamList