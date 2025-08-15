import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '../components/common/SearchBar';
import { TopSearches } from '../components/search/TopSearches';
import { BrowseCategories } from '../components/search/BrowseCategories';
import { BottomNavigation } from '../components/navigation/BottomNavigation';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

export const SearchScreen: React.FC = () => {
  const handleSearchPress = () => {
    // Handle search bar press - for UI only
    console.log('Search bar pressed');
  };

  const handleTopSearchPress = (searchTerm: string) => {
    // Handle top search item press - for UI only
    console.log('Top search pressed:', searchTerm);
  };

  const handleCategoryPress = (category: string) => {
    // Handle category press - for UI only
    console.log('Category pressed:', category);
  };

  const handleTabPress = (tabTitle: string) => {
    // Handle bottom tab press - for UI only
    console.log('Tab pressed:', tabTitle);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.content}>
        <View style={styles.header}>
          <SearchBar onPress={handleSearchPress} />
        </View>
        
        <ScrollView 
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TopSearches onSearchPress={handleTopSearchPress} />
          <BrowseCategories onCategoryPress={handleCategoryPress} />
        </ScrollView>
        
        <BottomNavigation onTabPress={handleTabPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  header: {
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  scrollContainer: {
    flex: 1,
  },
});