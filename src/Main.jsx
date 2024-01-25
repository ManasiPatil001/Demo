
import React from 'react';
import { View, Text, Button } from 'react-native';
//import { getUserByEmail } from '../database'; 

const Main = ({ navigation, route }) => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const { email } = route.params; // Assuming you passed the user's email as a parameter from the Login screen

    // Fetch user details from the database
    getUserByEmail(email, (user) => {
      if (user.length > 0) {
        const { name, email } = user[0];
        setUserName(name);
        setUserEmail(email);
      }
    });
  }, [route.params]);

  const handleLogout = () => {

    navigation.navigate('Login'); 
  };

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Text>User Name: {userName}</Text>
      <Text>User Email: {userEmail}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Main;
