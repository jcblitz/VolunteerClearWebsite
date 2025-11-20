<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid';
import CTAButton from './CTAButton.vue';
import type { PricingTier } from '../types/marketing';

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for small organizations just getting started',
    features: [
      'Up to 5 volunteers',
      '1 organization',
      'Basic features',
      'Document upload & storage',
      'Compliance dashboard',
      'Email support',
    ],
    cta: 'Get Started Free',
    ctaLink: '#contact',
    highlighted: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$79',
    period: 'per month',
    description: 'Best for growing organizations with more volunteers',
    features: [
      'Up to 25 volunteers',
      '1 organization',
      'All features',
      'Custom clearance types',
      'Expiration alerts',
      'Priority support',
      'Advanced reporting',
    ],
    cta: 'Start Free Trial',
    ctaLink: '#contact',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited volunteers',
      'Multiple organizations',
      'All features',
      'API access',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    ctaLink: '#contact',
    highlighted: false,
  },
];
</script>

<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your organization's needs
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div
          v-for="tier in pricingTiers"
          :key="tier.id"
          :class="[
            'relative rounded-2xl border-2 p-8 flex flex-col',
            tier.highlighted
              ? 'border-primary-600 shadow-xl scale-105 bg-primary-50'
              : 'border-gray-200 bg-white',
          ]"
        >
          <!-- Popular Badge -->
          <div
            v-if="tier.highlighted"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2"
          >
            <span class="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>

          <!-- Tier Header -->
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ tier.name }}</h3>
            <p class="text-gray-600 text-sm">{{ tier.description }}</p>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-5xl font-bold text-gray-900">{{ tier.price }}</span>
              <span class="ml-2 text-gray-600">{{ tier.period }}</span>
            </div>
          </div>

          <!-- Features List -->
          <ul class="space-y-4 mb-8 flex-grow" role="list">
            <li
              v-for="(feature, index) in tier.features"
              :key="index"
              class="flex items-start"
            >
              <CheckIcon class="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span class="ml-3 text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <CTAButton
            :text="tier.cta"
            :variant="tier.highlighted ? 'primary' : 'outline'"
            size="lg"
            :href="tier.ctaLink"
            class="w-full"
          />
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-12 text-center">
        <p class="text-gray-600">
          Start with our free plan. Upgrade anytime as your organization grows. No credit card required.
        </p>
      </div>
    </div>
  </section>
</template>
