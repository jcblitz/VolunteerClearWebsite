<script setup lang="ts">
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  DocumentArrowUpIcon,
  ChartBarIcon,
  CheckCircleIcon,
  BellAlertIcon,
  BuildingLibraryIcon,
  ArrowPathIcon,
  EnvelopeIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/vue/24/outline';
import type { Feature } from '../types/marketing';

const features: Feature[] = [
  {
    id: '1',
    icon: 'BuildingOfficeIcon',
    title: 'Organization & Role Management',
    description: 'Create custom roles with specific clearance requirements for your organization',
  },
  {
    id: '2',
    icon: 'UserGroupIcon',
    title: 'Volunteer Profiles',
    description: 'Centralized profiles for volunteers across multiple organizations and roles',
  },
  {
    id: '3',
    icon: 'DocumentArrowUpIcon',
    title: 'Document Upload & Storage',
    description: 'Secure upload and storage of background checks, clearances, and certifications',
  },
  {
    id: '4',
    icon: 'ChartBarIcon',
    title: 'Compliance Dashboard',
    description: 'Visual dashboard showing compliance status at a glance for all volunteers',
  },
  {
    id: '5',
    icon: 'CheckCircleIcon',
    title: 'Approval Workflow',
    description: 'Admin review and approval process for submitted documents',
  },
  {
    id: '6',
    icon: 'BellAlertIcon',
    title: 'Expiration Tracking',
    description: 'Automated alerts for clearances expiring within 30 days',
  },
  {
    id: '7',
    icon: 'BuildingLibraryIcon',
    title: 'Multi-Organization Support',
    description: 'Volunteers can belong to multiple organizations with a single account',
  },
  {
    id: '8',
    icon: 'ArrowPathIcon',
    title: 'Document Reusability',
    description: 'Upload once, use across multiple organizations—no duplicate submissions',
  },
  {
    id: '9',
    icon: 'EnvelopeIcon',
    title: 'Email Notifications',
    description: 'Automated notifications for document submissions and expiration alerts',
  },
  {
    id: '10',
    icon: 'ClipboardDocumentListIcon',
    title: 'Audit Trail',
    description: 'Complete history of document submissions, approvals, and status changes',
  },
];

const iconComponents = {
  BuildingOfficeIcon,
  UserGroupIcon,
  DocumentArrowUpIcon,
  ChartBarIcon,
  CheckCircleIcon,
  BellAlertIcon,
  BuildingLibraryIcon,
  ArrowPathIcon,
  EnvelopeIcon,
  ClipboardDocumentListIcon,
};
</script>

<template>
  <section id="features" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Everything You Need to Manage Volunteer Clearances
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive platform designed specifically for volunteer organizations
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <component
              :is="iconComponents[feature.icon as keyof typeof iconComponents]"
              class="h-6 w-6 text-primary-600"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
