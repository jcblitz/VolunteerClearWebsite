<script setup lang="ts">
import { ShieldCheckIcon, BellAlertIcon, EyeIcon, UserGroupIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section id="safety" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Protecting Children Through Proper Vetting
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Every child deserves a safe environment. VolunteerClear ensures your organization never misses an expired clearance or overlooks a compliance requirement. With automated alerts and instant visibility, you can focus on your mission while we handle the details.
          </p>

          <!-- Key Benefits -->
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <BellAlertIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Never miss an expired clearance</h3>
                <p class="text-gray-600">Automated alerts notify you before clearances expire</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <EyeIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Instant compliance visibility</h3>
                <p class="text-gray-600">See at a glance who's compliant and who needs attention</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <UserGroupIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Role-based requirements</h3>
                <p class="text-gray-600">Different roles require different clearances—we track it all</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image/Icon -->
        <div class="flex justify-center">
          <div class="relative">
            <div class="w-64 h-64 bg-primary-100 rounded-full flex items-center justify-center">
              <ShieldCheckIcon class="h-32 w-32 text-primary-600" />
            </div>
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
