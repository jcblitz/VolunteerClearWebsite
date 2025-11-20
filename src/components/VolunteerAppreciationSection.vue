<script setup lang="ts">
import { HeartIcon, UserGroupIcon, SparklesIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <section 
    id="volunteers" 
    class="py-20"
    style="background: linear-gradient(to bottom right, #8b5cf6, #7c3aed, #2563eb);"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="flex justify-center mb-6">
          <HeartIcon class="h-16 w-16 text-white" />
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          For Volunteers: Always Free
        </h2>
        <p class="text-xl max-w-3xl mx-auto mb-8" style="color: rgba(255, 255, 255, 0.9);">
          If you're a volunteer, VolunteerClear is completely free for you—forever. Manage your background checks, upload documents, and track your clearances across all the organizations you serve.
        </p>
      </div>

      <!-- Features for Volunteers -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="rounded-lg p-6 text-center" style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);">
          <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <SparklesIcon class="h-6 w-6" style="color: #7c3aed;" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Upload Once, Use Everywhere</h3>
          <p style="color: rgba(255, 255, 255, 0.8);">
            Upload your clearances once and share them with all the organizations you volunteer with
          </p>
        </div>

        <div class="rounded-lg p-6 text-center" style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);">
          <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <UserGroupIcon class="h-6 w-6" style="color: #7c3aed;" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Multiple Organizations</h3>
          <p style="color: rgba(255, 255, 255, 0.8);">
            One account for all your volunteer roles across different organizations
          </p>
        </div>

        <div class="rounded-lg p-6 text-center" style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);">
          <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="h-6 w-6" style="color: #7c3aed;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">No Hidden Fees</h3>
          <p style="color: rgba(255, 255, 255, 0.8);">
            Completely free for volunteers. No subscriptions, no charges, ever
          </p>
        </div>
      </div>

      <!-- Appreciation Message -->
      <div class="rounded-2xl p-8 md:p-12 text-center border-2" style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-color: rgba(255, 255, 255, 0.2);">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
            Thank You for All You Do
          </h3>
          <p class="text-lg leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
            Without volunteers, many of these programs would cease to exist. Your dedication, time, and passion make a real difference in your community. We built VolunteerClear to make your life easier, so you can focus on what matters most—making an impact.
          </p>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex items-center space-x-2" style="color: rgba(255, 255, 255, 0.9);">
              <HeartIcon class="h-5 w-5" />
              <span class="font-medium">From our team to yours: Thank you</span>
              <HeartIcon class="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
