<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to start your next advertising project? Get in touch with us today and let's discuss how we can help your business grow.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>

          <!-- Contact Details -->
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-1">Office Address</h4>
                <p class="text-gray-600">123 Creative Street<br>Design District, NY 10001<br>United States</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-1">Phone Number</h4>
                <p class="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-1">Email Address</h4>
                <p class="text-gray-600">hello@adcreative.com</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-primary-100 rounded-lg p-3 mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <!-- Quick Contact Button -->
          <div class="mt-8">
            <button
              @click="contactWhatsApp"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
              </svg>
              Contact via WhatsApp
            </button>
          </div>
        </div>

        <!-- Map -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-8">Find Us</h3>

          <!-- Map Container -->
          <div class="bg-gray-200 rounded-lg h-96 overflow-hidden relative">
            <!-- Google Maps Embed -->
            <iframe
              v-if="mapType === 'embed'"
              :src="googleMapsEmbedUrl"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-lg"
            ></iframe>

            <!-- Interactive Google Maps (requires API key) -->
            <div
              v-else-if="mapType === 'interactive'"
              id="google-map"
              class="w-full h-full rounded-lg"
            ></div>

            <!-- Fallback Map Placeholder -->
            <div
              v-else
              class="w-full h-full flex items-center justify-center text-center text-gray-600"
            >
              <div>
                <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p class="text-lg font-semibold">Interactive Map</p>
                <p class="text-sm mb-4">{{ businessAddress }}</p>
                <button
                  @click="openGoogleMaps"
                  class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded transition duration-300"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>

          <!-- Map Info -->
          <div class="mt-4 text-sm text-gray-600">
            <p><strong>Address:</strong> {{ businessAddress }}</p>
            <p><strong>Coordinates:</strong> {{ coordinates.lat }}, {{ coordinates.lng }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      mapType: 'embed', // 'embed', 'interactive', or 'placeholder'
      businessAddress: '123 Creative Street, Design District, NY 10001',
      coordinates: {
        lat: 40.7505, // Times Square area coordinates (more recognizable)
        lng: -73.9934
      },
      googleMapsApiKey: '', // Add your Google Maps API key here for interactive maps
    }
  },
  computed: {
    googleMapsEmbedUrl() {
      // Simple Google Maps iframe embed using coordinates (no API key required)
      const lat = this.coordinates.lat
      const lng = this.coordinates.lng
      const zoom = 15

      // Using Google Maps embed with coordinates
      return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`
    },
    googleMapsSearchUrl() {
      const address = encodeURIComponent(this.businessAddress)
      return `https://www.google.com/maps/search/?api=1&query=${address}`
    }
  },
  mounted() {
    // Initialize interactive map if API key is provided and map type is interactive
    if (this.mapType === 'interactive' && this.googleMapsApiKey) {
      this.loadGoogleMapsScript()
    }
  },
  methods: {
    contactWhatsApp() {
      const message = encodeURIComponent('Hi! I would like to get more information about your advertising services.')
      const whatsappUrl = `https://wa.me/6281286080062?text=${message}`
      window.open(whatsappUrl, '_blank')
    },
    openGoogleMaps() {
      window.open(this.googleMapsSearchUrl, '_blank')
    },
    setMapType(type) {
      this.mapType = type

      // Load interactive map if selected and API key is available
      if (type === 'interactive' && this.googleMapsApiKey) {
        this.$nextTick(() => {
          this.loadGoogleMapsScript()
        })
      }
    },
    loadGoogleMapsScript() {
      // Check if Google Maps script is already loaded
      if (window.google && window.google.maps) {
        this.initializeMap()
        return
      }

      // Load Google Maps JavaScript API
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}&callback=initMap`
      script.async = true
      script.defer = true

      // Set up callback
      window.initMap = () => {
        this.initializeMap()
      }

      document.head.appendChild(script)
    },
    initializeMap() {
      const mapElement = document.getElementById('google-map')
      if (!mapElement) return

      // Create map
      const map = new window.google.maps.Map(mapElement, {
        center: this.coordinates,
        zoom: 15,
        mapTypeId: 'roadmap',
        styles: [
          // Custom map styling (optional)
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      })

      // Add marker
      const marker = new window.google.maps.Marker({
        position: this.coordinates,
        map: map,
        title: 'AdCreative Office',
        animation: window.google.maps.Animation.DROP
      })

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937;">AdCreative</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${this.businessAddress}</p>
            <a href="${this.googleMapsSearchUrl}" target="_blank" style="color: #3b82f6; text-decoration: none; font-size: 14px;">
              Get Directions →
            </a>
          </div>
        `
      })

      // Show info window when marker is clicked
      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      })

      // Auto-open info window
      infoWindow.open(map, marker)
    }
  }
}
</script>
