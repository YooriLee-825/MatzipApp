import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useAuth from '../../hooks/queryies/useAuth';

const MapHomeScreen = () => {
  const {logoutMutation} = useAuth();

  return (
    <View>
      <Text>Map Screen</Text>
      <Button title="Log Out" onPress={() => logoutMutation.mutate(null)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapHomeScreen;
