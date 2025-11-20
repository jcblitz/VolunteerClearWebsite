<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import HeroSection from './components/HeroSection.vue';
import SafetySection from './components/SafetySection.vue';
import SecuritySection from './components/SecuritySection.vue';
import EaseOfUseSection from './components/EaseOfUseSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import PricingSection from './components/PricingSection.vue';
import VolunteerAppreciationSection from './components/VolunteerAppreciationSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';
import { useScrollSpy } from './composables/useScrollSpy';

// Initialize scroll spy for navigation highlighting
const sectionIds = ['#hero', '#safety', '#security', '#ease-of-use', '#features', '#pricing', '#volunteers', '#contact'];
useScrollSpy(sectionIds);

const skipToMain = () => {
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.focus();
    mainElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="min-h-screen">
    <!-- Skip to Content Link for Keyboard Users -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
      @click.prevent="skipToMain"
    >
      Skip to main content
    </a>
    
    <NavigationBar />
    <main id="main-content" tabindex="-1">
      <HeroSection />
      <SafetySection />
      <SecuritySection />
      <EaseOfUseSection />
      <FeaturesSection />
      <PricingSection />
      <VolunteerAppreciationSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
</style>
