<script setup lang="ts">
import { LockClosedIcon, ShieldCheckIcon, ServerIcon, KeyIcon, BuildingOfficeIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section id="security" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Bank-Level Security for Your Sensitive Data
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          We take security seriously. Your volunteers' personal information and documents are protected with end-to-end encryption, secure storage, and strict access controls. Only authorized administrators can access their organization's data—period.
        </p>
      </div>

      <!-- Security Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- SSL/TLS Encryption -->
        <div class="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
            <LockClosedIcon class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">End-to-End Encryption</h3>
          <p class="text-gray-400">
            All data transmitted between your browser and our servers is encrypted using SSL/TLS protocols
          </p>
        </div>

        <!-- Encryption at Rest -->
        <div class="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
            <ShieldCheckIcon class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Encrypted Data at Rest</h3>
          <p class="text-gray-400">
            All stored data is encrypted using industry-standard encryption algorithms
          </p>
        </div>

        <!-- Secure Storage -->
        <div class="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
            <ServerIcon class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Secure File Storage</h3>
          <p class="text-gray-400">
            Documents are stored in non-public, secure storage systems with restricted access
          </p>
        </div>

        <!-- Access Controls -->
        <div class="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
            <KeyIcon class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Strict Access Controls</h3>
          <p class="text-gray-400">
            Role-based permissions ensure users only access data they're authorized to see
          </p>
        </div>

        <!-- Data Isolation -->
        <div class="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
          <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
            <BuildingOfficeIcon class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Organization Data Isolation</h3>
          <p class="text-gray-400">
            Each organization's data is completely isolated—admins can only access their own organization
          </p>
        </div>

        <!-- Compliance Badge -->
        <div class="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors flex items-center justify-center">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-500 mb-2">99.9%</div>
            <p class="text-gray-400">Uptime Target</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
