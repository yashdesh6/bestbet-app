import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ParlayDetailScreen = ({ route }) => {
  const { initialBet } = route.params;

  return (
    <ScrollView>

          <Text>{JSON.stringify(initialBet.response.response.content, null, 2)}</Text>
    </ScrollView>
  );
};

export default ParlayDetailScreen;
