import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref<string>('');
  let ticking = false;

  const throttle = (callback: () => void) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };

  const updateActiveSection = () => {
    const scrollPosition = window.scrollY + 100; // Offset for navbar

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const sectionId = sectionIds[i];
      if (!sectionId) continue;
      
      const element = document.querySelector(sectionId);
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        
        if (scrollPosition >= elementTop) {
          activeSection.value = sectionId;
          return;
        }
      }
    }
    
    // Default to first section if none match
    if (sectionIds.length > 0 && sectionIds[0]) {
      activeSection.value = sectionIds[0];
    }
  };

  const handleScroll = () => {
    throttle(updateActiveSection);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMounted(() => {
    // Set initial active section
    updateActiveSection();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    activeSection,
    scrollToSection,
  };
}
