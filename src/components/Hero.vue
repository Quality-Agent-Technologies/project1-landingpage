<template>
  <section class="relative pt-20 pb-16 min-h-screen flex items-center">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        alt="Creative workspace background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Content -->
        <div class="lg:w-1/2 lg:pr-12 mb-20 lg:mb-0">
          <div class="mb-12">
            <h1 class="text-5xl lg:text-8xl font-black text-white mb-6 leading-tight">
              <span class="block hero-highlight">Creative</span>
              <span class="block hero-highlight">Advertising</span>
              <span class="block hero-highlight">Solutions</span>
            </h1>
          </div>
          <!-- <p class="text-xl text-gray-200 mb-8 leading-relaxed">
            Advertising Specialist
          <br>
            Raised Letters -Neonbox - Nameplate - Pylon Signs.
          </p> -->

          <!-- Services List -->
          <div class="mb-20">
            <h3 class="text-lg font-semibold text-white mb-4">Advertising Specialist:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-200">Raised Letters</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-200">Neonbox</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-200">Nameplate</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-200">Pylon Signs</span>
              </div>
              <!-- <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-200">Social Media</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-200">Content Strategy</span>
              </div> -->
            </div>
          </div>

          <!-- CTA Button -->
          <button
            @click="orderNow"
            class="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Order Now
          </button>
        </div>

        <!-- Image -->
        <!-- <div class="lg:w-1/2">
          <div class="relative">
            <div class="bg-primary-600 rounded-lg p-8 text-white text-center">
              <svg class="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 class="text-2xl font-bold mb-2">Professional Results</h3>
              <p class="text-primary-100">Quality advertising solutions that drive results</p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    orderNow() {
      const message = encodeURIComponent('Hi! I\'m interested in your advertising services. Can you provide more information?')
      const whatsappUrl = `https://wa.me/6281286080062?text=${message}`
      window.open(whatsappUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.hero-title {
  text-shadow:
    0 4px 8px rgba(0, 0, 0, 0.8),
    0 8px 16px rgba(0, 0, 0, 0.6),
    0 16px 32px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.02em;
}

.hero-highlight {
  position: relative;
  color: white;
  text-shadow:
    0 4px 8px rgba(0, 0, 0, 0.8),
    0 8px 16px rgba(0, 0, 0, 0.6),
    0 16px 32px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
    line-height: 1.1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}
</style>
