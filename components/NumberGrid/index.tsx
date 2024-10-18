import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const NumberGrid = () => {
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const handlePress = (value: number) => {
    if (value === clickedNumbers.length + 1) {
      setClickedNumbers([...clickedNumbers, value]);
      setCount(count + 1);
    }
  };

  const handleReset = () => {
    setClickedNumbers([]);
    setCount(0);
  };

  const renderSquare = (value: number) => {
    const isClicked = clickedNumbers.includes(value);
    return (
      <TouchableOpacity
        key={value}
        style={[styles.square, isClicked ? styles.clickedSquare : styles.defaultSquare]}
        onPress={() => handlePress(value)}
        disabled={isClicked}
      >
        <Text style={styles.squareText}>{value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.countText}>Count: {count}</Text>
        <Button title="Reset" onPress={handleReset} color="#6200EE" />
      </View>
      <View style={styles.grid}>
        {Array.from({ length: 108 }, (_, i) => renderSquare(i + 1))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  countText: {
    fontSize: 20,
    marginRight: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  square: {
    width: 50,
    height: 50,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultSquare: {
    backgroundColor: '#E0E0E0',
  },
  clickedSquare: {
    backgroundColor: '#6200EE',
  },
  squareText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default NumberGrid;
