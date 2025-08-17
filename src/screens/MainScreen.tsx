import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Button, Input, Card, Text } from '../components';
import { colors, spacing } from '../styles';

export const MainScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSignup = () => {
    console.log('Signup pressed');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text variant="h1" style={styles.title}>
            Welcome Back
          </Text>
          <Text variant="body1" style={styles.subtitle}>
            Sign in to your account to continue
          </Text>
        </View>

        {/* Main Content Card */}
        <Card style={styles.card}>
          <View style={styles.form}>
            <Input
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />

            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              autoComplete="password"
            />

            <Button
              title="Sign In"
              onPress={handleLogin}
              loading={loading}
              fullWidth
              style={styles.loginButton}
            />

            <Button
              title="Forgot Password?"
              onPress={handleForgotPassword}
              variant="ghost"
              style={styles.forgotButton}
            />
          </View>
        </Card>

        {/* Bottom Section */}
        <View style={styles.bottom}>
          <Text variant="body2" style={styles.signupText}>
            Don't have an account?
          </Text>
          <Button
            title="Sign Up"
            onPress={handleSignup}
            variant="outline"
            style={styles.signupButton}
          />
        </View>

        {/* Feature Cards */}
        <View style={styles.features}>
          <Text variant="h3" style={styles.featuresTitle}>
            Features
          </Text>
          
          <Card style={styles.featureCard}>
            <Text variant="h5" style={styles.featureTitle}>
              Modern Design
            </Text>
            <Text variant="body2" style={styles.featureDescription}>
              Clean, modern interface with intuitive navigation and beautiful animations.
            </Text>
          </Card>

          <Card style={styles.featureCard}>
            <Text variant="h5" style={styles.featureTitle}>
              Secure & Fast
            </Text>
            <Text variant="body2" style={styles.featureDescription}>
              Built with security and performance in mind for the best user experience.
            </Text>
          </Card>

          <Card style={styles.featureCard}>
            <Text variant="h5" style={styles.featureTitle}>
              Easy to Use
            </Text>
            <Text variant="body2" style={styles.featureDescription}>
              Simple and straightforward interface that anyone can navigate with ease.
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingTop: spacing.lg,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.textSecondary,
  },
  card: {
    marginBottom: spacing.xl,
  },
  form: {
    gap: spacing.md,
  },
  loginButton: {
    marginTop: spacing.md,
  },
  forgotButton: {
    marginTop: spacing.sm,
  },
  bottom: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  signupText: {
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  signupButton: {
    minWidth: 120,
  },
  features: {
    gap: spacing.md,
  },
  featuresTitle: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  featureCard: {
    marginBottom: spacing.md,
  },
  featureTitle: {
    marginBottom: spacing.sm,
    color: colors.primary,
  },
  featureDescription: {
    color: colors.textSecondary,
    lineHeight: 22,
  },
});