<template>
  <nav id="nav" :class="{ scrolled: isScrolled }">
    <router-link to="/" class="nav-logo">k<span>.</span>dev</router-link>
    <div class="nav-links">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/projects" active-class="active">Projects</router-link>
      <router-link to="/blog" active-class="active">Blog</router-link>
      <router-link to="/about" active-class="active">About</router-link>
      <router-link to="/contact" active-class="active">Contact</router-link>
    </div>
    <div class="nav-status">Available for work</div>
    <button class="nav-toggle" @click="toggleMenu" :class="{ open: menuOpen }" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="mobile-menu" :class="{ open: menuOpen }">
    <router-link to="/" @click="closeMenu">Home</router-link>
    <router-link to="/projects" @click="closeMenu">Projects</router-link>
    <router-link to="/blog" @click="closeMenu">Blog</router-link>
    <router-link to="/about" @click="closeMenu">About</router-link>
    <router-link to="/contact" @click="closeMenu">Contact</router-link>
  </div>

  <router-view />

  <footer>
    <div class="footer-text">© 2026 <span>k.dev</span> — Crafted with precision</div>
    <div class="footer-links">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="footer-text">Designed & built by <span>KDev</span></div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
