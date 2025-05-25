<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Take a look at some of our recent work and see how we've helped businesses achieve their advertising goals.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div class="h-64 relative overflow-hidden">
            <img
              :src="projects[0].image"
              :alt="projects[0].title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              @error="handleImageError($event, 0)"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <span class="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold">
                {{ projects[0].category }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Tech Startup Branding</h3>
            <p class="text-gray-600 mb-4">Complete brand identity and digital marketing campaign for a innovative tech startup.</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Branding</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Digital</span>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div class="h-64 relative overflow-hidden">
            <img
              :src="projects[1].image"
              :alt="projects[1].title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              @error="handleImageError($event, 1)"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <span class="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold">
                {{ projects[1].category }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Restaurant Menu Design</h3>
            <p class="text-gray-600 mb-4">Creative menu design and promotional materials for a high-end restaurant chain.</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Print</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Design</span>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div class="h-64 relative overflow-hidden">
            <img
              :src="projects[2].image"
              :alt="projects[2].title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              @error="handleImageError($event, 2)"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <span class="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold">
                {{ projects[2].category }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Corporate Video Series</h3>
            <p class="text-gray-600 mb-4">Professional video production for corporate training and marketing purposes.</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Video</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Corporate</span>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div class="h-64 relative overflow-hidden">
            <img
              :src="projects[3].image"
              :alt="projects[3].title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              @error="handleImageError($event, 3)"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <span class="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold">
                {{ projects[3].category }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Social Media Campaign</h3>
            <p class="text-gray-600 mb-4">Comprehensive social media strategy and content creation for fashion brand.</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Social</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Fashion</span>
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div class="h-64 relative overflow-hidden">
            <img
              :src="projects[4].image"
              :alt="projects[4].title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              @error="handleImageError($event, 4)"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <span class="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold">
                {{ projects[4].category }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Content Marketing Plan</h3>
            <p class="text-gray-600 mb-4">Strategic content planning and creation for B2B software company.</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Content</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">B2B</span>
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div class="h-64 relative overflow-hidden">
            <img
              :src="projects[5].image"
              :alt="projects[5].title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              @error="handleImageError($event, 5)"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <span class="bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold">
                {{ projects[5].category }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Healthcare Rebrand</h3>
            <p class="text-gray-600 mb-4">Complete brand redesign and marketing materials for healthcare provider.</p>
            <div class="flex flex-wrap gap-2">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Rebrand</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Tech Startup Branding',
          category: 'Digital Campaign',
          image: '/images/project1.jpg',
          fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=256&q=80'
        },
        {
          id: 2,
          title: 'Restaurant Menu Design',
          category: 'Print Design',
          image: '/images/project2.jpg',
          fallbackImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=256&q=80'
        },
        {
          id: 3,
          title: 'Corporate Video Series',
          category: 'Video Production',
          image: '/images/project3.jpg',
          fallbackImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=256&q=80'
        },
        {
          id: 4,
          title: 'Social Media Campaign',
          category: 'Social Media',
          image: '/images/project4.jpg',
          fallbackImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=256&q=80'
        },
        {
          id: 5,
          title: 'Content Marketing Plan',
          category: 'Content Strategy',
          image: '/images/project5.jpg',
          fallbackImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=256&q=80'
        },
        {
          id: 6,
          title: 'Healthcare Rebrand',
          category: 'Brand Identity',
          image: '/images/project6.jpg',
          fallbackImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=256&q=80'
        }
      ]
    }
  },
  methods: {
    handleImageError(event, index) {
      // If the local image fails to load, use the fallback image
      event.target.src = this.projects[index].fallbackImage
    }
  }
}
</script>
