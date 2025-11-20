<script setup lang="ts">
import { DevicePhoneMobileIcon, AcademicCapIcon, ChartBarIcon, ClockIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <section id="ease-of-use" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image/Mockup -->
        <div class="order-2 md:order-1">
          <div class="relative">
            <!-- Placeholder for UI Screenshot -->
            <div class="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg shadow-2xl p-8 aspect-video flex items-center justify-center">
              <div class="text-center">
                <ChartBarIcon class="h-24 w-24 text-primary-600 mx-auto mb-4" />
                <p class="text-gray-600 font-medium">Dashboard Preview</p>
              </div>
            </div>
            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm font-medium text-gray-700">Compliant</span>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <div class="flex items-center space-x-2">
                <ClockIcon class="h-5 w-5 text-primary-600" />
                <span class="text-sm font-medium text-gray-700">Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="order-1 md:order-2">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            So Simple, Anyone Can Use It
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Designed for real people, not IT experts. VolunteerClear works on any device, requires zero training, and makes compliance tracking as easy as checking your email. Upload documents from your phone, review compliance at a glance, and get back to what matters.
          </p>

          <!-- Key Benefits -->
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <AcademicCapIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">No training required</h3>
                <p class="text-gray-600">Intuitive interface that anyone can use immediately</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <DevicePhoneMobileIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Mobile-friendly design</h3>
                <p class="text-gray-600">Works perfectly on phones, tablets, and computers</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <ChartBarIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Dashboard at a glance</h3>
                <p class="text-gray-600">See compliance status instantly with visual indicators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
