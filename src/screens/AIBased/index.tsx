// import React from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Dimensions,
//   TextInput,
// } from "react-native";

// const { width } = Dimensions.get("window");

// const insights = [
//   {
//     title: "Savings Opportunity",
//     value: "₹6,500",
//     subtitle: "Potential monthly savings",
//   },
//   {
//     title: "Portfolio Risk",
//     value: "Moderate",
//     subtitle: "Well balanced portfolio",
//   },
//   {
//     title: "Tax Saving",
//     value: "₹48,000",
//     subtitle: "Available this year",
//   },
// ];

// const goals = [
//   {
//     title: "Dream House",
//     progress: "72%",
//   },
//   {
//     title: "New Car",
//     progress: "54%",
//   },
//   {
//     title: "Vacation",
//     progress: "91%",
//   },
// ];

// const AIWealthCoachScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.content}
//       >
//         {/* Header */}

//         <View style={styles.header}>
//           <View>
//             <Text style={styles.greeting}>
//               Good Evening 👋
//             </Text>

//             <Text style={styles.username}>
//               Sandeep
//             </Text>
//           </View>

//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>AI</Text>
//           </View>
//         </View>

//         {/* Health Score */}

//         <View style={styles.scoreCard}>
//           <Text style={styles.cardLabel}>
//             AI Financial Health Score
//           </Text>

//           <Text style={styles.scoreText}>
//             85
//             <Text style={styles.totalScore}>/100</Text>
//           </Text>

//           <View style={styles.progressBg}>
//             <View style={styles.progressFill} />
//           </View>

//           <Text style={styles.status}>
//             Excellent Financial Health
//           </Text>
//         </View>

//         {/* AI Recommendation */}

//         <View style={styles.recommendationCard}>
//           <Text style={styles.sectionTitle}>
//             AI Recommendation
//           </Text>

//           <Text style={styles.recommendationText}>
//             Increase your SIP by ₹2,000 to achieve
//             your retirement goal 3 years earlier.
//           </Text>
//         </View>

//         {/* Insights */}

//         <Text style={styles.sectionTitle}>
//           Smart Insights
//         </Text>

//         <View style={styles.insightWrapper}>
//           {insights.map(item => (
//             <View
//               key={item.title}
//               style={styles.insightCard}
//             >
//               <Text style={styles.insightTitle}>
//                 {item.title}
//               </Text>

//               <Text style={styles.insightValue}>
//                 {item.value}
//               </Text>

//               <Text style={styles.insightSubtitle}>
//                 {item.subtitle}
//               </Text>
//             </View>
//           ))}
//         </View>

//         {/* Portfolio */}

//         <Text style={styles.sectionTitle}>
//           Portfolio Analysis
//         </Text>

//         <View style={styles.portfolioCard}>
//           <PortfolioRow
//             label="Stocks"
//             value="42%"
//           />
//           <PortfolioRow
//             label="Mutual Funds"
//             value="35%"
//           />
//           <PortfolioRow
//             label="Gold"
//             value="13%"
//           />
//           <PortfolioRow
//             label="Cash"
//             value="10%"
//           />
//         </View>

//         {/* Goals */}

//         <Text style={styles.sectionTitle}>
//           Financial Goals
//         </Text>

//         {goals.map(item => (
//           <View
//             key={item.title}
//             style={styles.goalCard}
//           >
//             <View style={styles.goalHeader}>
//               <Text style={styles.goalTitle}>
//                 {item.title}
//               </Text>

//               <Text style={styles.goalPercent}>
//                 {item.progress}
//               </Text>
//             </View>

//             <View style={styles.goalProgressBg}>
//               <View
//                 style={[
//                   styles.goalProgressFill,
//                   {
//                     width: item.progress,
//                   },
//                 ]}
//               />
//             </View>
//           </View>
//         ))}

//         {/* Market Intelligence */}

//         <Text style={styles.sectionTitle}>
//           Market Intelligence
//         </Text>

//         <View style={styles.marketCard}>
//           <Text style={styles.marketTitle}>
//             NIFTY Outlook
//           </Text>

//           <Text style={styles.marketBullish}>
//             Bullish ↗
//           </Text>

//           <Text style={styles.marketSubtitle}>
//             Top sectors identified by AI
//           </Text>

//           <View style={styles.tagsRow}>
//             <Tag text="Banking" />
//             <Tag text="Technology" />
//             <Tag text="Energy" />
//           </View>
//         </View>

//         {/* AI Assistant */}

//         <Text style={styles.sectionTitle}>
//           Ask AI Assistant
//         </Text>

//         <View style={styles.chatBox}>
//           <TextInput
//             placeholder="Ask about investments, tax saving, retirement..."
//             placeholderTextColor="#94A3B8"
//             style={styles.input}
//           />

//           <TouchableOpacity style={styles.askButton}>
//             <Text style={styles.askText}>
//               Ask AI
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={{ height: 40 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const PortfolioRow = ({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) => (
//   <View style={styles.portfolioRow}>
//     <Text style={styles.portfolioLabel}>
//       {label}
//     </Text>

//     <Text style={styles.portfolioValue}>
//       {value}
//     </Text>
//   </View>
// );

// const Tag = ({ text }: { text: string }) => (
//   <View style={styles.tag}>
//     <Text style={styles.tagText}>
//       {text}
//     </Text>
//   </View>
// );

// export default AIWealthCoachScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0B1220",
//   },

//   content: {
//     padding: 20,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 25,
//   },

//   greeting: {
//     color: "#94A3B8",
//     fontSize: 14,
//   },

//   username: {
//     color: "#FFFFFF",
//     fontSize: 28,
//     fontWeight: "700",
//     marginTop: 4,
//   },

//   avatar: {
//     width: 54,
//     height: 54,
//     borderRadius: 27,
//     backgroundColor: "#14B8A6",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   avatarText: {
//     color: "#FFF",
//     fontWeight: "700",
//     fontSize: 18,
//   },

//   scoreCard: {
//     backgroundColor: "#111C34",
//     borderRadius: 24,
//     padding: 22,
//     marginBottom: 20,
//   },

//   cardLabel: {
//     color: "#CBD5E1",
//     fontSize: 15,
//   },

//   scoreText: {
//     color: "#14B8A6",
//     fontSize: 44,
//     fontWeight: "800",
//     marginVertical: 12,
//   },

//   totalScore: {
//     color: "#94A3B8",
//     fontSize: 22,
//   },

//   progressBg: {
//     height: 10,
//     backgroundColor: "#1E293B",
//     borderRadius: 20,
//   },

//   progressFill: {
//     width: "85%",
//     height: 10,
//     borderRadius: 20,
//     backgroundColor: "#14B8A6",
//   },

//   status: {
//     color: "#22C55E",
//     marginTop: 12,
//     fontWeight: "600",
//   },

//   recommendationCard: {
//     backgroundColor: "#1B2847",
//     borderRadius: 22,
//     padding: 20,
//     marginBottom: 24,
//   },

//   recommendationText: {
//     color: "#E2E8F0",
//     marginTop: 10,
//     lineHeight: 24,
//   },

//   sectionTitle: {
//     color: "#FFF",
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 15,
//   },

//   insightWrapper: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },

//   insightCard: {
//     width: width * 0.43,
//     backgroundColor: "#111C34",
//     borderRadius: 20,
//     padding: 16,
//     marginBottom: 15,
//   },

//   insightTitle: {
//     color: "#94A3B8",
//     fontSize: 13,
//   },

//   insightValue: {
//     color: "#FFF",
//     fontSize: 22,
//     fontWeight: "700",
//     marginVertical: 8,
//   },

//   insightSubtitle: {
//     color: "#64748B",
//     fontSize: 12,
//   },

//   portfolioCard: {
//     backgroundColor: "#111C34",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 25,
//   },

//   portfolioRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 10,
//   },

//   portfolioLabel: {
//     color: "#CBD5E1",
//   },

//   portfolioValue: {
//     color: "#14B8A6",
//     fontWeight: "700",
//   },

//   goalCard: {
//     backgroundColor: "#111C34",
//     borderRadius: 18,
//     padding: 16,
//     marginBottom: 14,
//   },

//   goalHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//   },

//   goalTitle: {
//     color: "#FFF",
//     fontWeight: "600",
//   },

//   goalPercent: {
//     color: "#14B8A6",
//     fontWeight: "700",
//   },

//   goalProgressBg: {
//     height: 8,
//     backgroundColor: "#1E293B",
//     borderRadius: 10,
//   },

//   goalProgressFill: {
//     height: 8,
//     borderRadius: 10,
//     backgroundColor: "#14B8A6",
//   },

//   marketCard: {
//     backgroundColor: "#111C34",
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 25,
//   },

//   marketTitle: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "700",
//   },

//   marketBullish: {
//     color: "#22C55E",
//     fontSize: 28,
//     fontWeight: "700",
//     marginVertical: 10,
//   },

//   marketSubtitle: {
//     color: "#94A3B8",
//     marginBottom: 15,
//   },

//   tagsRow: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },

//   tag: {
//     backgroundColor: "#1E293B",
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 10,
//   },

//   tagText: {
//     color: "#FFF",
//   },

//   chatBox: {
//     backgroundColor: "#111C34",
//     borderRadius: 20,
//     padding: 15,
//   },

//   input: {
//     color: "#FFF",
//     minHeight: 50,
//   },

//   askButton: {
//     marginTop: 15,
//     backgroundColor: "#14B8A6",
//     paddingVertical: 14,
//     borderRadius: 14,
//     alignItems: "center",
//   },

//   askText: {
//     color: "#FFF",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });