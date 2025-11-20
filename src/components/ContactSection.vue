<script setup lang="ts">
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/vue/24/outline';
import { useContactForm } from '../composables/useContactForm';

const { state, validateField, submitForm, resetForm } = useContactForm();

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  await submitForm();
};

const handleInput = (field: 'name' | 'email' | 'organizationName' | 'message', value: string) => {
  state.data[field] = value;
  if (state.errors[field]) {
    validateField(field, value);
  }
};

const handleBlur = (field: 'name' | 'email' | 'organizationName' | 'message') => {
  validateField(field, state.data[field] || '');
};
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <div v-if="state.isSubmitted" class="bg-green-50 border border-green-200 rounded-lg p-6">
            <div class="flex items-start">
              <CheckCircleIcon class="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div class="ml-3">
                <h3 class="text-lg font-semibold text-green-900 mb-1">Message Sent!</h3>
                <p class="text-green-700 mb-4">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  class="text-green-700 underline hover:text-green-800"
                  @click="resetForm"
                >
                  Send another message
                </button>
              </div>
            </div>
          </div>

          <form v-else @submit="handleSubmit" class="space-y-6">
            <!-- Error Banner -->
            <div
              v-if="state.submitError"
              class="bg-red-50 border border-red-200 rounded-lg p-4"
              role="alert"
            >
              <p class="text-red-800 text-sm">{{ state.submitError }}</p>
            </div>

            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Name <span class="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                :value="state.data.name"
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors',
                  state.errors.name ? 'border-red-500' : 'border-gray-300',
                ]"
                placeholder="Your name"
                :aria-invalid="!!state.errors.name"
                :aria-describedby="state.errors.name ? 'name-error' : undefined"
                @input="handleInput('name', ($event.target as HTMLInputElement).value)"
                @blur="handleBlur('name')"
              />
              <p
                v-if="state.errors.name"
                id="name-error"
                class="mt-1 text-sm text-red-600"
                role="alert"
              >
                {{ state.errors.name }}
              </p>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                :value="state.data.email"
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors',
                  state.errors.email ? 'border-red-500' : 'border-gray-300',
                ]"
                placeholder="your.email@example.com"
                :aria-invalid="!!state.errors.email"
                :aria-describedby="state.errors.email ? 'email-error' : undefined"
                @input="handleInput('email', ($event.target as HTMLInputElement).value)"
                @blur="handleBlur('email')"
              />
              <p
                v-if="state.errors.email"
                id="email-error"
                class="mt-1 text-sm text-red-600"
                role="alert"
              >
                {{ state.errors.email }}
              </p>
            </div>

            <!-- Organization Name Field -->
            <div>
              <label for="organizationName" class="block text-sm font-medium text-gray-700 mb-2">
                Organization Name (Optional)
              </label>
              <input
                id="organizationName"
                type="text"
                :value="state.data.organizationName"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your organization"
                @input="handleInput('organizationName', ($event.target as HTMLInputElement).value)"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                :value="state.data.message"
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors',
                  state.errors.message ? 'border-red-500' : 'border-gray-300',
                ]"
                rows="5"
                placeholder="Tell us about your needs..."
                :aria-invalid="!!state.errors.message"
                :aria-describedby="state.errors.message ? 'message-error' : undefined"
                @input="handleInput('message', ($event.target as HTMLTextAreaElement).value)"
                @blur="handleBlur('message')"
              ></textarea>
              <p
                v-if="state.errors.message"
                id="message-error"
                class="mt-1 text-sm text-red-600"
                role="alert"
              >
                {{ state.errors.message }}
              </p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="state.isSubmitting"
              class="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ state.isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p class="text-gray-600 mb-6">
              Prefer to reach out directly? You can also contact us via email.
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <EnvelopeIcon class="h-6 w-6 text-primary-600" />
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                <a
                  href="mailto:hello@volunteerclear.com"
                  class="text-primary-600 hover:text-primary-700"
                >
                  hello@volunteerclear.com
                </a>
              </div>
            </div>
          </div>

          <div class="bg-primary-50 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-2">Response Time</h4>
            <p class="text-gray-700">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
