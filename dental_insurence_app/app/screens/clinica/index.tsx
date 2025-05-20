import Goback from '@/components/gobackbutton';
import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

const profileIcon = require("@/assets/images/profile-pfp.png");

const Perfil = () => {

  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.perfilContainer}>
        <Text style={styles.perfilText}>Perfil da Clínica</Text>

        <View style={styles.imageContainer}>
          <Image source={profileIcon} style={styles.profileIcon} />
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.data}>Clínica DentalCare</Text>

          <Text style={styles.label}>CNPJ:</Text>
          <Text style={styles.data}>12.345.678/0001-90</Text>

          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.data}>Rua Exemplo, 123 - São Paulo/SP</Text>

          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.data}>(11) 2345-6789</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.data}>contato@dentalcare.com</Text>
        </View>
        <Goback></Goback>
      </View>

      <StatusBar style="auto" />
    </View>

  );

};

export default Perfil;

const styles = StyleSheet.create({

  backgroundProfile: {

    backgroundColor: '#82B4FF',

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

  },

  perfilContainer: {

    backgroundColor: '#fff',

    width: '90%',

    borderRadius: 20,

    padding: 24,

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 4,

    elevation: 3,

  },

  perfilText: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#0066FF',

    marginBottom: 20,

    textAlign: 'center',

  },

  imageContainer: {

    alignItems: 'center',

    marginBottom: 30,

  },

  profileIcon: {

    width: 120,

    height: 120,

    borderRadius: 60,

  },

  dataContainer: {

    marginBottom: 40,

  },

  label: {

    fontSize: 16,

    color: '#999',

    fontWeight: '600',

  },

  data: {

    fontSize: 18,

    color: '#333',

    marginBottom: 12,

  },

  buttonContainer: {

    alignItems: 'center',

  },

  button: {

    backgroundColor: '#FF6052',

    paddingVertical: 10,

    paddingHorizontal: 32,

    borderRadius: 20,

  },

  buttonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: '600',

  },

});

