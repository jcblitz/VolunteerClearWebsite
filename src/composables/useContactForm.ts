import { reactive } from 'vue';
import type { ContactFormData, ContactFormState } from '../types/marketing';

export function useContactForm() {
  const state = reactive<ContactFormState>({
    data: {
      name: '',
      email: '',
      organizationName: '',
      message: '',
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
    submitError: null,
  });

  const validateName = (name: string): string | null => {
    if (!name || name.trim().length === 0) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return null;
  };

  const validateEmail = (email: string): string | null => {
    if (!email || email.trim().length === 0) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validateMessage = (message: string): string | null => {
    if (!message || message.trim().length === 0) {
      return 'Message is required';
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters';
    }
    return null;
  };

  const validateField = (field: keyof ContactFormData, value: string) => {
    let error: string | null = null;

    switch (field) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
    }

    if (error) {
      state.errors[field] = error;
    } else {
      delete state.errors[field];
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    const nameError = validateName(state.data.name);
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(state.data.email);
    if (emailError) errors.email = emailError;

    const messageError = validateMessage(state.data.message);
    if (messageError) errors.message = messageError;

    state.errors = errors;
    return Object.keys(errors).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) {
      return;
    }

    state.isSubmitting = true;
    state.submitError = null;

    try {
      // Simulate API call - in production, this would call a real API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log form data (in production, this would be sent to a backend)
      console.log('Form submitted:', state.data);

      state.isSubmitted = true;
      
      // Reset form after successful submission
      state.data = {
        name: '',
        email: '',
        organizationName: '',
        message: '',
      };
      state.errors = {};
    } catch (error) {
      state.submitError = 'Something went wrong. Please try again or email us directly at hello@volunteerclear.com';
      console.error('Form submission error:', error);
    } finally {
      state.isSubmitting = false;
    }
  };

  const resetForm = () => {
    state.data = {
      name: '',
      email: '',
      organizationName: '',
      message: '',
    };
    state.errors = {};
    state.isSubmitting = false;
    state.isSubmitted = false;
    state.submitError = null;
  };

  return {
    state,
    validateField,
    submitForm,
    resetForm,
  };
}
