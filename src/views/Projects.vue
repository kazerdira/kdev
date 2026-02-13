<template>
  <header class="page-header">
    <div class="page-header-grid"></div>
    <div class="page-header-content">
      <div class="page-tag">Portfolio</div>
      <h1 class="page-title">Featured <span class="gradient">Projects</span></h1>
      <p class="page-desc">A showcase of production-ready applications I've built — from mobile apps and backend services to real-time communication systems.</p>
    </div>
  </header>

  <section>
    <div class="section-label">Featured Work</div>
    <h2 class="section-title">Production Applications</h2>
    <p class="section-desc">Real-world projects deployed to production, serving actual users with complex requirements.</p>
    <div v-observe class="grid-2 reveal">
      <article class="project-card" v-for="p in projects" :key="p.title">
        <div class="project-card-image">{{ p.icon }}</div>
        <div class="project-card-content">
          <div class="project-card-tags">
            <span class="project-card-tag" v-for="t in p.tags" :key="t">{{ t }}</span>
          </div>
          <h3 class="project-card-title"><a href="#">{{ p.title }}</a></h3>
          <p class="project-card-desc">{{ p.desc }}</p>
          <div class="project-card-links">
            <a href="#" class="project-card-link">🔗 View Source</a>
            <a href="#" class="project-card-link">🚀 {{ p.cta }}</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section style="background: var(--bg-elevated);">
    <div class="section-label">Open Source</div>
    <h2 class="section-title">Community Contributions</h2>
    <p class="section-desc">Libraries, packages, and tools I've built for the developer community.</p>
    <div v-observe class="grid-3 reveal">
      <article class="project-card" v-for="p in packages" :key="p.title">
        <div class="project-card-content">
          <div class="project-card-tags">
            <span class="project-card-tag" v-for="t in p.tags" :key="t">{{ t }}</span>
          </div>
          <h3 class="project-card-title"><a href="#">{{ p.title }}</a></h3>
          <p class="project-card-desc">{{ p.desc }}</p>
          <div class="project-card-links">
            <a href="https://github.com/kazerdira" class="project-card-link" target="_blank">🐙 GitHub</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section>
    <div class="section-label">Technical Architecture</div>
    <h2 class="section-title">How I Build Things</h2>
    <p class="section-desc">A look into the architecture and design patterns I use across projects.</p>
    <div v-observe class="container-narrow reveal">
      <article class="article-content" style="padding: 0;">
        <h3>Backend Architecture</h3>
        <p>My Go backends follow clean architecture principles with clear separation between handlers, services, and repositories. I use SQLC for type-safe database queries and implement proper error handling with custom error types.</p>
        <pre><code>// Example Go service structure
type UserService struct {
    repo    *repository.UserRepository
    cache   cache.Cache
    events  events.Publisher
}

func (s *UserService) CreateUser(ctx context.Context, req CreateUserRequest) (*User, error) {
    user, err := s.repo.Create(ctx, req.ToModel())
    if err != nil {
        return nil, fmt.Errorf("create user: %w", err)
    }
    s.events.Publish(ctx, UserCreatedEvent{UserID: user.ID})
    return user, nil
}</code></pre>
        <h3>Mobile Architecture</h3>
        <p>Flutter apps use a feature-first folder structure with BLoC or Riverpod for state management. I implement repository patterns for data access and use dependency injection for testability.</p>
        <h3>Real-time Systems</h3>
        <p>For real-time features, I build on WebSockets with proper reconnection logic, message queuing, and presence management. Video/audio features use LiveKit or Agora SDKs with custom UI layers.</p>
        <h3>Infrastructure</h3>
        <p>All projects are containerized with Docker and deployed via CI/CD pipelines. I use PostgreSQL for relational data, Redis for caching and pub/sub, and proper logging/monitoring setups.</p>
      </article>
    </div>
  </section>

  <section style="background: var(--bg-elevated); text-align: center; padding: 6rem 4rem;">
    <div v-observe class="reveal">
      <div class="section-label" style="justify-content: center;">Work Together</div>
      <h2 class="section-title">Have a Project in Mind?</h2>
      <p class="section-desc" style="margin-left: auto; margin-right: auto; text-align: center;">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
      <router-link to="/contact" class="btn-primary">Start a Conversation →</router-link>
    </div>
  </section>
</template>

<script setup>
import { vObserve } from '../composables/useReveal'

const projects = [
  { icon: '📹', title: 'LiveStream Platform', desc: 'A full-featured live streaming and video conferencing application with real-time chat, screen sharing, virtual backgrounds, and recording capabilities.', tags: ['Flutter', 'Go', 'LiveKit', 'WebRTC'], cta: 'Live Demo' },
  { icon: '🛒', title: 'E-Commerce Marketplace', desc: 'A complete marketplace app with vendor management, real-time inventory, Stripe payment processing, push notifications, and Algolia-powered search.', tags: ['Flutter', 'Firebase', 'Stripe', 'Algolia'], cta: 'Play Store' },
  { icon: '💬', title: 'Real-time Chat System', desc: 'End-to-end encrypted messaging app with WebSocket-based real-time delivery, message reactions, typing indicators, read receipts, and media sharing.', tags: ['Flutter', 'Go', 'WebSocket', 'PostgreSQL'], cta: 'Case Study' },
  { icon: '📊', title: 'Analytics Dashboard', desc: 'Real-time analytics platform with customizable widgets, data visualization, role-based access control, and automated reporting. Handles millions of events daily.', tags: ['React', 'Go', 'PostgreSQL', 'Docker'], cta: 'Live Demo' },
]

const packages = [
  { title: 'go-realtime', desc: 'A lightweight Go library for building real-time applications with WebSocket support, room management, and presence tracking.', tags: ['Go', 'Library'] },
  { title: 'flutter_state_kit', desc: 'A comprehensive state management solution for Flutter with built-in persistence, undo/redo, and DevTools integration.', tags: ['Flutter', 'Package'] },
  { title: 'docker-go-deploy', desc: 'Production-ready Docker templates for Go applications with multi-stage builds, health checks, and CI/CD integration.', tags: ['Docker', 'DevOps'] },
]
</script>
