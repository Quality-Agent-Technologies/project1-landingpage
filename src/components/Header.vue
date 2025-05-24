<template>
  <header class="backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold text-primary-600">
          AdCreative
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <a
            href="#about"
            @click="scrollTo('about')"
            class="text-white hover:text-primary-600 transition duration-300 cursor-pointer"
          >
            About Us
          </a>
          <a
            href="#projects"
            @click="scrollTo('projects')"
            class="text-white hover:text-primary-600 transition duration-300 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            @click="scrollTo('contact')"
            class="text-white hover:text-primary-600 transition duration-300 cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-primary-600 hover:text-primary-600 focus:outline-none"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <a
          href="#about"
          @click="scrollTo('about')"
          class="block py-2 text-primary-600 hover:text-white transition duration-300"
        >
          About Us
        </a>
        <a
          href="#projects"
          @click="scrollTo('projects')"
          class="block py-2 text-primary-600 hover:text-white transition duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          @click="scrollTo('contact')"
          class="block py-2 text-primary-600 hover:text-white transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    scrollTo(elementId) {
      this.mobileMenuOpen = false
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
