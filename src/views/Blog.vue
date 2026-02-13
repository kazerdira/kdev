<template>
  <header class="page-header">
    <div class="page-header-grid"></div>
    <div class="page-header-content">
      <div class="page-tag">Articles & Tutorials</div>
      <h1 class="page-title">Developer <span class="gradient">Blog</span></h1>
      <p class="page-desc">Deep dives into software development, architecture patterns, and lessons learned from building production applications.</p>
    </div>
  </header>

  <section>
    <div class="section-label">Featured Article</div>
    <div v-observe class="blog-card reveal" style="max-width: 800px; padding: 3rem;">
      <div class="blog-card-category">Flutter • State Management</div>
      <h2 class="blog-card-title" style="font-size: 1.8rem;">
        <router-link to="/blog/flutter-state-management-guide">The Complete Guide to Flutter State Management in 2026</router-link>
      </h2>
      <p class="blog-card-excerpt" style="font-size: 1rem;">A comprehensive comparison of Provider, Riverpod, BLoC, and GetX — with real-world examples and recommendations for different project sizes.</p>
      <div class="blog-card-meta">
        <span>📅 February 10, 2026</span>
        <span>⏱️ 15 min read</span>
        <span>👁️ 2.4k views</span>
      </div>
    </div>
  </section>

  <section style="background: var(--bg-elevated);">
    <div class="section-label">Latest Articles</div>
    <h2 class="section-title">Recent Posts</h2>
    <p class="section-desc">Fresh content on development practices, tools, and technologies.</p>
    <div v-observe class="grid-2 reveal">
      <article class="blog-card" v-for="post in posts" :key="post.slug">
        <div class="blog-card-category">{{ post.category }}</div>
        <h3 class="blog-card-title">
          <router-link :to="'/blog/' + post.slug">{{ post.title }}</router-link>
        </h3>
        <p class="blog-card-excerpt">{{ post.excerpt }}</p>
        <div class="blog-card-meta">
          <span>📅 {{ post.date }}</span>
          <span>⏱️ {{ post.readTime }}</span>
        </div>
      </article>
    </div>
  </section>

  <section>
    <div class="section-label">Browse by Topic</div>
    <h2 class="section-title">Categories</h2>
    <p class="section-desc">Find articles on specific technologies and topics.</p>
    <div v-observe class="grid-4 reveal">
      <div class="skill-item" v-for="cat in categories" :key="cat.name">
        <div class="skill-icon">{{ cat.icon }}</div>
        <div class="skill-name">{{ cat.name }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { vObserve } from '../composables/useReveal'

const posts = [
  { slug: 'go-production-api', category: 'Go • Backend', title: 'Building Production-Ready APIs with Go: A Complete Guide', excerpt: 'From project structure to deployment — learn how to build robust, scalable APIs with Go. Covers middleware, error handling, database patterns, and more.', date: 'February 8, 2026', readTime: '20 min read' },
  { slug: 'firebase-realtime-patterns', category: 'Firebase • Real-time', title: 'Firebase Real-time Database: Patterns and Best Practices', excerpt: 'Master Firebase Realtime Database with proven patterns for data structure, security rules, offline persistence, and optimizing read/write operations.', date: 'February 5, 2026', readTime: '12 min read' },
  { slug: 'docker-go-deployment', category: 'Docker • DevOps', title: 'Docker for Go Developers: From Development to Production', excerpt: 'A practical guide to containerizing Go applications — multi-stage builds, optimization techniques, health checks, and CI/CD integration.', date: 'February 2, 2026', readTime: '14 min read' },
  { slug: 'flutter-custom-animations', category: 'Flutter • UI/UX', title: 'Advanced Flutter Animations: Creating Fluid User Experiences', excerpt: 'Go beyond basic animations with custom painters, physics simulations, and staggered animations that make your Flutter apps stand out.', date: 'January 28, 2026', readTime: '18 min read' },
  { slug: 'clean-architecture-flutter', category: 'Architecture • Patterns', title: 'Clean Architecture in Flutter: A Practical Implementation', excerpt: 'Implement clean architecture in your Flutter projects with proper layer separation, dependency injection, and testable code structure.', date: 'January 24, 2026', readTime: '16 min read' },
  { slug: 'websocket-go-flutter', category: 'WebSocket • Real-time', title: 'Building Real-time Features with WebSocket: Go Backend + Flutter Client', excerpt: 'Complete tutorial on implementing WebSocket communication between a Go server and Flutter app — with reconnection, heartbeats, and message queuing.', date: 'January 20, 2026', readTime: '22 min read' },
]

const categories = [
  { icon: '📱', name: 'Flutter' },
  { icon: '⚡', name: 'Go/Golang' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🔌', name: 'WebSocket' },
  { icon: '🏗️', name: 'Architecture' },
  { icon: '⚙️', name: 'CI/CD' },
  { icon: '🛡️', name: 'Security' },
]
</script>
