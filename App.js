import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function App() {
  const metrics = [
    { label: "Grievance Resolution", value: 0.78 },
    { label: "Scheme Completion", value: 0.85 },
    { label: "Fund Utilisation", value: 0.92 },
    { label: "Public Feedback Score", value: 0.84 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Digital Accountability Scorecard</Text>
      <Text style={styles.subHeader}>Representative Performance</Text>

      {metrics.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.metricText}>{item.label}</Text>
          <ProgressBar
            progress={item.value}
            color="#1E88E5"
            style={styles.progress}
          />
          <Text style={styles.percentage}>
            {(item.value * 100).toFixed(0)}%
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
