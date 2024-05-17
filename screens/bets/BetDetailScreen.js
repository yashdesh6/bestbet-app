import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import dummyData from '../../dummy.json';
import { getStyleForGrade } from '../../components/getStyleFromGrade';
import InfoBox from '../../components/InfoBox';
import Fact from '../../components/Fact';

const BetDetailScreen = () => {
  const betData = {
    image: require('../../assets/images/steph.png'),
  };

  const threshold = 27.5;

  // Helper function to render text safely
  const renderTextSafely = (text) => {
    if (typeof text === 'string') {
      return text;
    } else if (Array.isArray(text)) {
      return text.join(', ');
    } else if (typeof text === 'object' && text !== null) {
      return JSON.stringify(text);
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={betData.image} style={styles.image} />
        <Text style={styles.title}>{renderTextSafely(dummyData.player_name)}</Text>
        <Text style={styles.description}>{renderTextSafely(dummyData.player_description)}</Text>
      </View>
      <ScrollView style={styles.contentSection}>
        <InfoBox title={'YOUR BET'}>
          <Text style={styles.betText}>{renderTextSafely(dummyData.user_bet)}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.strengthText}>STRENGTH: </Text>
            <Text style={getStyleForGrade(dummyData.bet_rating)}>
              {renderTextSafely(dummyData.bet_rating)}
            </Text>
          </View>
        </InfoBox>
        <View style={styles.line} />
        <InfoBox title={'WE SUGGEST'} style={{ paddingHorizontal: 24 }}>
          <Text style={styles.suggestText}>{renderTextSafely(dummyData.suggestion)}</Text>
        </InfoBox>
        <View style={styles.line} />
        <Text style={styles.infoHeader}>INFO</Text>
        <Text style={styles.subsectionHeader}>FACTS</Text>
        <View style={styles.facts}>
          {dummyData.player_facts.map((fact, index) => (
            <Fact fact={fact} key={index} />
          ))}
        </View>
        <Text style={styles.subsectionHeader}>STATISTICS</Text>
        <View style={styles.statisticsContainer}>
          <BarChart
            spacing={8}
            barWidth={23}
            noOfSections={7}
            barBorderRadius={4}
            frontColor={'gray'}
            data={dummyData.graph_struct.data}
            yAxisThickness={0}
            xAxisThickness={0}
            hideRules
            showReferenceLine1
            referenceLine1Position={threshold}
            referenceLine1Config={{
              color: '#F7F7F7',
              dashWidth: 12,
              dashGap: 10,
              thickness: 1.5,
            }}
            xAxisLabelTextStyle={{ color: 'white', fontSize: 10 }}
            xAxisTextNumberOfLines={3}
            yAxisTextStyle={{ color: 'white' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#151719',
    height: '100%',
  },
  topSection: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15%',
  },
  contentSection: {
    display: 'flex',
    paddingHorizontal: 16,
  },
  image: {
    height: 96,
    width: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  title: {
    color: '#F7F7F7', // Equivalent to text-blue-500
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  description: {
    color: '#F7F7F7',
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 16,
  },
  betContainer: {
    width: '100%',
    backgroundColor: '#333', // Equivalent to bg-gray-700
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  betText: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Inter-SemiBold',
    color: '#F7F7F7',
    marginBottom: 16,
  },
  line: {
    width: '100%',
    height: 0,
    borderColor: 'rgba(200, 200, 200, 0.2)',
    borderWidth: 1,
    marginVertical: 30,
  },
  suggestText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Inter-SemiBold',
    color: '#F7F7F7',
    marginBottom: 16,
    textAlign: 'center',
  },
  facts: {
    marginBottom: 35,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: '2%',
  },
  strengthText: {
    color: '#F7FBFF', // Equivalent to text-green-500
    fontFamily: 'Inter-Bold',
    fontSize: 22,
  },
  suggestionContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 16,
  },
  infoHeader: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    marginTop: 10,
    marginBottom: 18,
  },
  subsectionHeader: {
    color: '#009AFA',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    marginBottom: 16,
  },
  statisticsContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 16,
    marginBottom: '15%',
  },
});

export default BetDetailScreen;
