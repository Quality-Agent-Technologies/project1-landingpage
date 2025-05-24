<template>
  <div class="min-h-screen bg-white">
    <Header />
    <Hero />
    <AboutUs />
    <Projects />
    <ContactUs />
    <Footer />
    <WhatsAppFloat />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import AboutUs from './components/AboutUs.vue'
import Projects from './components/Projects.vue'
import ContactUs from './components/ContactUs.vue'
import Footer from './components/Footer.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    AboutUs,
    Projects,
    ContactUs,
    Footer,
    WhatsAppFloat
  }
}
</script>
