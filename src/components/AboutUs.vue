<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a creative advertising agency dedicated to helping businesses grow through innovative and effective advertising solutions.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
          <div class="space-y-6">
            <p class="text-gray-600 leading-relaxed">
              Founded in 2015, our agency began with a simple mission: to create advertising that not only looks great but delivers real results for our clients. What started as a small team of passionate creatives has grown into a full-service advertising agency.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Over the years, we've had the privilege of working with businesses of all sizes, from startups to Fortune 500 companies. Our diverse portfolio spans across various industries including technology, healthcare, retail, and hospitality.
            </p>
            <p class="text-gray-600 leading-relaxed">
              We believe that great advertising is born from understanding your audience, your brand, and your goals. That's why we take a collaborative approach to every project, working closely with our clients to ensure their vision comes to life.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600">500+</div>
              <div class="text-gray-600">Projects Completed</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600">8+</div>
              <div class="text-gray-600">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600">200+</div>
              <div class="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
        
        <!-- Values -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                <p class="text-gray-600">We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Passion</h4>
                <p class="text-gray-600">We love what we do and it shows in every project we undertake.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Quality</h4>
                <p class="text-gray-600">We never compromise on quality and always deliver excellence in every detail.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
                <p class="text-gray-600">We work as partners with our clients to achieve shared success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>
