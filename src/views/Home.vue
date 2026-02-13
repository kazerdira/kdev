<template>
  <!-- Hero -->
  <section class="hero">
    <div class="hero-grid"></div>
    <div class="hero-glow"></div>
    <div class="hero-glow-2"></div>
    <div class="hero-content">
      <div class="hero-tag">Full Stack Developer</div>
      <h1 class="hero-title">
        <span class="line">Building</span>
        <span class="line"><span class="gradient">digital</span> products</span>
        <span class="line"><span class="outline">that scale.</span></span>
      </h1>
      <p class="hero-desc">
        I craft performant backends, polished mobile apps, and resilient systems — from concept to deployment.
      </p>
      <div class="hero-actions">
        <router-link to="/contact" class="btn-primary">Get in Touch →</router-link>
        <router-link to="/projects" class="btn-secondary">See my work</router-link>
      </div>
    </div>
  </section>

  <!-- Marquee -->
  <div class="marquee-section">
    <div class="marquee-track">
      <span class="marquee-item" v-for="(item, i) in [...techStack, ...techStack]" :key="i">
        <span class="dot"></span>{{ item }}
      </span>
    </div>
  </div>

  <!-- Stack -->
  <section id="stack">
    <div v-observe class="reveal">
      <div class="section-label">Tech Stack</div>
      <h2 class="section-title">Tools of the trade.</h2>
      <p class="section-desc">Battle-tested technologies I use to ship production-ready software.</p>
    </div>
    <div v-observe class="stack-grid reveal">
      <div class="stack-card" v-for="s in stack" :key="s.name">
        <div class="stack-icon">{{ s.icon }}</div>
        <div class="stack-name">{{ s.name }}</div>
        <div class="stack-desc">{{ s.desc }}</div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <div v-observe class="reveal">
    <div class="stats-bar">
      <div class="stat-item" v-for="s in stats" :key="s.label">
        <div class="stat-value">{{ s.value }}</div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
  </div>

  <!-- Services -->
  <section id="services">
    <div v-observe class="reveal">
      <div class="section-label">What I Do</div>
      <h2 class="section-title">End-to-end delivery.</h2>
      <p class="section-desc">From system architecture to pixel-perfect UIs — I handle the full stack.</p>
    </div>
    <div v-observe class="services-grid reveal">
      <div class="service-card" v-for="svc in services" :key="svc.num">
        <div class="service-number">{{ svc.num }}</div>
        <div class="service-name">{{ svc.name }}</div>
        <div class="service-desc">{{ svc.desc }}</div>
        <div class="service-tags">
          <span class="service-tag" v-for="t in svc.tags" :key="t">{{ t }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Terminal -->
  <section class="terminal-section" id="terminal">
    <div v-observe class="reveal">
      <div class="terminal">
        <div class="terminal-header">
          <div class="terminal-dot r"></div>
          <div class="terminal-dot y"></div>
          <div class="terminal-dot g"></div>
          <span class="terminal-title">kdev@arch ~ </span>
        </div>
        <div class="terminal-body">
          <div class="terminal-line"><span class="prompt">→ </span><span class="cmd">whoami</span></div>
          <div class="terminal-line"><span class="output">Full Stack Developer based in Algeria 🇩🇿</span></div>
          <br>
          <div class="terminal-line"><span class="prompt">→ </span><span class="cmd">cat philosophy.txt</span></div>
          <div class="terminal-line"><span class="string">"Ship clean code. Build for production.</span></div>
          <div class="terminal-line"><span class="string"> No shortcuts, no prototypes — industrial grade."</span></div>
          <br>
          <div class="terminal-line"><span class="prompt">→ </span><span class="cmd">ls ./interests</span></div>
          <div class="terminal-line"><span class="key">systems-design/</span>  <span class="key">real-time-apps/</span>  <span class="key">mobile-ux/</span></div>
          <div class="terminal-line"><span class="key">databases/</span>  <span class="key">clean-architecture/</span>  <span class="key">open-source/</span></div>
          <br>
          <div class="terminal-line"><span class="prompt">→ </span><span class="cursor"></span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section" id="contact">
    <div class="cta-glow"></div>
    <div v-observe class="cta-content reveal">
      <div class="section-label" style="justify-content: center;">Get in Touch</div>
      <h2 class="cta-title">Let's build <span class="gradient">something great.</span></h2>
      <p class="cta-desc">Got a project in mind? I'm always open to discussing new ideas and opportunities.</p>
      <div class="cta-links">
        <a href="mailto:wolverix.app@gmail.com" class="cta-link">✉️ Email</a>
        <a href="https://github.com/kazerdira" class="cta-link" target="_blank">🐙 GitHub</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { vObserve } from '../composables/useReveal'

const techStack = ['Go / Golang', 'Flutter & Dart', 'React', 'Docker', 'PostgreSQL', 'Firebase', 'Agora SDK', 'LiveKit', 'REST APIs', 'WebSockets', 'Python', 'CI/CD']

const stack = [
  { icon: '⚡', name: 'Go', desc: 'High-performance APIs, microservices, and concurrent backend systems built for scale.' },
  { icon: '📱', name: 'Flutter', desc: 'Cross-platform mobile apps with native performance and polished UI/UX.' },
  { icon: '⚛️', name: 'React', desc: 'Modern web interfaces, dashboards, and interactive frontends.' },
  { icon: '🐳', name: 'Docker', desc: 'Containerized deployments, reproducible environments, seamless CI/CD pipelines.' },
  { icon: '🔥', name: 'Firebase', desc: 'Auth, real-time database, push notifications, and cloud functions.' },
  { icon: '🎙️', name: 'Real-Time', desc: 'Voice, video, and live collaboration using Agora, LiveKit, and WebSockets.' },
]

const stats = [
  { value: '5+', label: 'Apps Shipped' },
  { value: '3+', label: 'Years Coding' },
  { value: '∞', label: 'Coffee Consumed' },
  { value: '24/7', label: 'Uptime Mindset' },
]

const services = [
  { num: '01', name: 'Backend Engineering', desc: 'Scalable APIs, database design, authentication, payment systems, and real-time communication layers.', tags: ['Go', 'PostgreSQL', 'SQLC', 'REST', 'WebSocket'] },
  { num: '02', name: 'Mobile Development', desc: 'Native-quality cross-platform apps with custom animations, offline support, and seamless integrations.', tags: ['Flutter', 'Dart', 'Firebase', 'Play Store'] },
  { num: '03', name: 'Web & Dashboards', desc: 'Interactive frontends, admin panels, and data-driven dashboards with clean, responsive design.', tags: ['React', 'Three.js', 'Tailwind', 'Vercel'] },
  { num: '04', name: 'DevOps & Infrastructure', desc: 'Containerized deployments, automated pipelines, monitoring, and production-grade infrastructure.', tags: ['Docker', 'CI/CD', 'Linux', 'Cloud'] },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  justify-content: center;
  padding: 8rem 4rem 4rem;
  position: relative; overflow: hidden;
}
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(34,211,117,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,211,117,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent);
  pointer-events: none;
}
.hero-glow {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-glow), transparent 70%);
  top: 20%; left: -10%;
  filter: blur(80px);
  animation: float 8s ease-in-out infinite;
  pointer-events: none;
}
.hero-glow-2 {
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%);
  bottom: 10%; right: 5%;
  filter: blur(60px);
  animation: float 10s ease-in-out infinite reverse;
  pointer-events: none;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}
.hero-content { position: relative; z-index: 1; max-width: 900px; }
.hero-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem; color: var(--accent);
  letter-spacing: 0.15em; text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: flex; align-items: center; gap: 0.75rem;
  animation: slideUp 0.8s var(--ease) 0.2s both;
}
.hero-tag::before { content: ''; width: 40px; height: 1px; background: var(--accent); }
.hero-title {
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 900; line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
  animation: slideUp 0.8s var(--ease) 0.4s both;
}
.hero-title .line { display: block; }
.hero-desc {
  font-size: 1.1rem; color: var(--text-dim);
  line-height: 1.7; max-width: 500px;
  margin-bottom: 2.5rem;
  animation: slideUp 0.8s var(--ease) 0.6s both;
}
.hero-actions {
  display: flex; gap: 1rem; align-items: center;
  animation: slideUp 0.8s var(--ease) 0.8s both;
  position: relative; z-index: 50;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.terminal-section { padding: 6rem 4rem; }
@media (max-width: 768px) {
  .hero { padding: 7rem 1.5rem 3rem; }
  .terminal-section { padding: 4rem 1.5rem; }
}
</style>
