import React, { useState } from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity,
    Alert,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import photo from './assets/photo.jpg'
import Card from './components/Card';


const App = () => {

  const handleSocialNetworks = (social) => {
    switch(social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/caiquecoelho/')
      break

      case 'github':
        Alert.alert('Meu Github', 'https://github.com/CaiqueCoelho')
      break

      case 'twitter':
        Alert.alert('Meu Twitter', 'https://twitter.com/caiqueocoelho')
      break
    }
  }

  return (
      <>
       <View style={style.page}>
        <View style={style.containerHeader}>
          <Image style={style.photo} source={photo}/>
          <Text style={style.name}>CAÍQUE COELHO</Text>
          <Text style={style.role}>QA Software Engineer</Text>
          <View style={style.socialNetwork}>
            <TouchableOpacity onPress={() => handleSocialNetworks('github')}>
              <Icon name='github' size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialNetworks('twitter')}>
              <Icon name='twitter' size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialNetworks('linkedin')}>
              <Icon name='linkedin' size={30} />
            </TouchableOpacity>
          </View>
        </View>

      <Card title="Formação Acadêmica">
          <Text style={style.cardContentText}>Zé Delivery</Text>
          <Text style={style.cardContentText}>Quinto Andar</Text>
          <Text style={style.cardContentText}>Jera</Text>
      </Card>

      <Card title="Experiências Profissionais">
        <Text style={style.cardContentText}>Ciência da Computação - UFMS</Text>
        <Text style={style.cardContentText}>Inteligência Artificial - IFAL & HUAWEI</Text>
      </Card>

       </View>
      </>
  )
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "#E7E7E7",
    flex: 1,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  role: {
    color: '#939393',
    marginBottom: 10
  },
  socialNetwork: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  cardContentText: {
    color: '#939393',
    marginBottom: 10
  },
})


export default App;
