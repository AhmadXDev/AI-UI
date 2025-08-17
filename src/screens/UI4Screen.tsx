import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CustomText,
  Button,
  Input,
  Card,
} from '../components';
import { colors, spacing } from '../styles/theme';
import { globalStyles } from '../styles/globalStyles';

export const UI4Screen: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [bio, setBio] = React.useState('');

  const handleSave = () => {
    console.log('Save pressed');
  };

  const handleCancel = () => {
    console.log('Cancel pressed');
  };

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <CustomText variant="heading" style={styles.title}>
            Profile Settings
          </CustomText>
          <CustomText
            variant="body"
            color={colors.textSecondary}
            style={styles.subtitle}
          >
            Update your personal information
          </CustomText>
        </View>

        {/* Profile Card */}
        <Card style={styles.profileCard}>
          <View style={styles.avatarSection}>
            <View style={styles.avatar}>
              <CustomText variant="heading" color={colors.background}>
                JD
              </CustomText>
            </View>
            <Button
              title="Change Photo"
              variant="outline"
              size="small"
              onPress={() => console.log('Change photo')}
              style={styles.changePhotoButton}
            />
          </View>
        </Card>

        {/* Form Section */}
        <Card style={styles.formCard}>
          <CustomText variant="subheading" style={styles.sectionTitle}>
            Personal Information
          </CustomText>
          
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
            testID="name-input"
          />
          
          <Input
            label="Email Address"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            testID="email-input"
          />
          
          <Input
            label="Bio"
            placeholder="Tell us about yourself"
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            testID="bio-input"
          />
        </Card>

        {/* Stats Card */}
        <Card style={styles.statsCard}>
          <CustomText variant="subheading" style={styles.sectionTitle}>
            Account Stats
          </CustomText>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <CustomText variant="heading" color={colors.primary}>
                24
              </CustomText>
              <CustomText variant="caption" color={colors.textSecondary}>
                Posts
              </CustomText>
            </View>
            
            <View style={styles.statItem}>
              <CustomText variant="heading" color={colors.primary}>
                156
              </CustomText>
              <CustomText variant="caption" color={colors.textSecondary}>
                Followers
              </CustomText>
            </View>
            
            <View style={styles.statItem}>
              <CustomText variant="heading" color={colors.primary}>
                89
              </CustomText>
              <CustomText variant="caption" color={colors.textSecondary}>
                Following
              </CustomText>
            </View>
          </View>
        </Card>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Save Changes"
            onPress={handleSave}
            style={styles.saveButton}
            testID="save-button"
          />
          
          <Button
            title="Cancel"
            variant="outline"
            onPress={handleCancel}
            style={styles.cancelButton}
            testID="cancel-button"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  contentContainer: {
    padding: spacing.md,
    paddingBottom: spacing.xxl,
  },
  header: {
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  title: {
    marginBottom: spacing.sm,
  },
  subtitle: {
    textAlign: 'center',
  },
  profileCard: {
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  avatarSection: {
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  changePhotoButton: {
    minWidth: 120,
  },
  formCard: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
  statsCard: {
    marginBottom: spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  actionButtons: {
    gap: spacing.md,
  },
  saveButton: {
    marginBottom: spacing.sm,
  },
  cancelButton: {
    marginBottom: spacing.sm,
  },
});