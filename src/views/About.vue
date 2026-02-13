<template>
  <header class="page-header">
    <div class="page-header-grid"></div>
    <div class="page-header-content">
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span>/</span>
        <span>About</span>
      </div>
      <div class="page-tag">About Me</div>
      <h1 class="page-title">The Developer Behind<br>the Code</h1>
      <p class="page-desc">Full-stack developer from Algeria specializing in mobile apps, backend systems, and real-time applications.</p>
    </div>
  </header>

  <!-- Who I Am -->
  <section>
    <div class="container">
      <div class="about-intro" v-observe>
        <div class="about-intro-text">
          <div class="section-label"><span class="dot"></span> Who I Am</div>
          <h2 class="section-title">Building Digital<br>Experiences</h2>
          <p>I'm a passionate full-stack developer based in Algeria with expertise in mobile application development, backend systems, and real-time applications. My journey in software development started with curiosity about how things work and evolved into a deep love for clean, efficient code.</p>
          <p>I specialize in Flutter for cross-platform mobile development, Go for high-performance backend services, and Firebase for real-time data synchronization. My focus is on building applications that are not only functional but also maintainable and scalable.</p>
        </div>
        <div class="about-intro-highlights">
          <div class="highlight-card" v-for="h in highlights" :key="h.label">
            <div class="highlight-icon">{{ h.icon }}</div>
            <div class="highlight-value">{{ h.value }}</div>
            <div class="highlight-label">{{ h.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What I Do -->
  <section style="background: var(--bg-elevated);">
    <div class="container">
      <div class="section-label"><span class="dot"></span> What I Do</div>
      <h2 class="section-title">My Expertise</h2>
      <div class="expertise-grid">
        <div class="expertise-card" v-for="e in expertise" :key="e.title" v-observe>
          <div class="expertise-icon">{{ e.icon }}</div>
          <h3>{{ e.title }}</h3>
          <p>{{ e.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Technical Philosophy -->
  <section>
    <div class="container">
      <div class="section-label"><span class="dot"></span> Philosophy</div>
      <h2 class="section-title">Technical Philosophy</h2>
      <div class="philosophy-grid">
        <div class="philosophy-card" v-for="p in philosophy" :key="p.title" v-observe>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section style="background: var(--bg-elevated);">
    <div class="container">
      <div class="section-label"><span class="dot"></span> Skills</div>
      <h2 class="section-title">Technical Stack</h2>
      <div class="skills-section" v-for="s in skillGroups" :key="s.label" v-observe>
        <h3 class="skills-label">{{ s.label }}</h3>
        <div class="skills-grid">
          <div class="skill-tag" v-for="skill in s.skills" :key="skill">{{ skill }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section>
    <div class="container">
      <div class="section-label"><span class="dot"></span> Journey</div>
      <h2 class="section-title">Experience Timeline</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="t in timeline" :key="t.period" v-observe>
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-period">{{ t.period }}</div>
            <h3 class="timeline-title">{{ t.title }}</h3>
            <p class="timeline-desc">{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Beyond Code -->
  <section style="background: var(--bg-elevated);">
    <div class="container">
      <div class="section-label"><span class="dot"></span> Beyond Code</div>
      <h2 class="section-title">When I'm Not Coding</h2>
      <div class="interests-grid">
        <div class="interest-card" v-for="i in interests" :key="i.label" v-observe>
          <span class="interest-icon">{{ i.icon }}</span>
          <span class="interest-label">{{ i.label }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container" style="text-align: center;">
      <h2 class="section-title">Let's Work Together</h2>
      <p class="section-desc" style="margin: 0 auto 2rem; text-align: center;">
        Have a project in mind? I'm always open to discussing new opportunities and interesting ideas.
      </p>
      <div class="cta-buttons">
        <router-link to="/contact" class="btn-primary">Get In Touch</router-link>
        <router-link to="/projects" class="btn-outline">View Projects</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { vObserve } from '../composables/useReveal'

const highlights = [
  { icon: '🎯', value: '4+', label: 'Years Experience' },
  { icon: '📱', value: '20+', label: 'Projects Built' },
  { icon: '⭐', value: '500+', label: 'GitHub Stars' },
  { icon: '☕', value: '∞', label: 'Coffee Consumed' }
]

const expertise = [
  { icon: '📱', title: 'Mobile Development', desc: 'Building cross-platform mobile applications with Flutter and Dart, delivering native performance and beautiful UIs on iOS and Android.' },
  { icon: '⚡', title: 'Backend Systems', desc: 'Designing and building high-performance backend services with Go, RESTful APIs, WebSocket servers, and microservices architecture.' },
  { icon: '🔥', title: 'Real-time Applications', desc: 'Implementing real-time features using Firebase, WebSockets, and event-driven architectures for live collaboration and messaging.' },
  { icon: '🐳', title: 'DevOps & Deployment', desc: 'Containerization with Docker, CI/CD pipelines, cloud deployment on GCP and AWS, and infrastructure as code.' }
]

const philosophy = [
  { title: 'Clean Code First', desc: 'I believe code should be readable, maintainable, and self-documenting. Good code tells a story that any developer can follow.' },
  { title: 'Performance Matters', desc: 'Every millisecond counts. I optimize for performance from the start, not as an afterthought.' },
  { title: 'User-Centric Design', desc: 'Technology should serve the user. I build with empathy, ensuring applications are intuitive and accessible.' },
  { title: 'Continuous Learning', desc: 'The tech landscape evolves rapidly. I dedicate time every day to learning new tools, patterns, and best practices.' }
]

const skillGroups = [
  { label: 'Languages & Frameworks', skills: ['Dart / Flutter', 'Go', 'JavaScript / TypeScript', 'Python', 'Vue.js', 'React', 'Node.js', 'HTML / CSS'] },
  { label: 'Databases & Storage', skills: ['PostgreSQL', 'Firebase Realtime DB', 'Firestore', 'Redis', 'SQLite', 'MongoDB'] },
  { label: 'Tools & Platforms', skills: ['Docker', 'Git / GitHub', 'Linux', 'GCP', 'AWS', 'Vercel', 'CI/CD', 'Figma'] }
]

const timeline = [
  { period: '2024 – Present', title: 'Full-Stack Developer & Open Source', desc: 'Building production mobile applications with Flutter, developing backend services in Go, and contributing to open-source projects.' },
  { period: '2023 – 2024', title: 'Mobile App Specialist', desc: 'Focused on Flutter development, building real-time chat applications, e-commerce platforms, and Firebase-integrated mobile solutions.' },
  { period: '2022 – 2023', title: 'Backend Developer', desc: 'Developed RESTful APIs and microservices with Go and Node.js. Implemented database designs and deployment pipelines.' },
  { period: '2021 – 2022', title: 'Started Coding Journey', desc: 'Began learning programming with Python and JavaScript. Built first web applications and discovered the joy of problem-solving through code.' }
]

const interests = [
  { icon: '📚', label: 'Tech Reading' },
  { icon: '🎮', label: 'Gaming' },
  { icon: '🏋️', label: 'Fitness' },
  { icon: '✈️', label: 'Travel' },
  { icon: '🎵', label: 'Music' },
  { icon: '☕', label: 'Coffee' }
]
</script>

<style scoped>
.about-intro {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
}
.about-intro-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}
.about-intro-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.highlight-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}
.highlight-icon { font-size: 1.5rem; margin-bottom: .5rem; }
.highlight-value { font-size: 1.8rem; font-weight: 700; color: var(--accent); font-family: var(--font-mono); }
.highlight-label { font-size: .85rem; color: var(--text-secondary); margin-top: .25rem; }

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.expertise-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color .3s;
}
.expertise-card:hover { border-color: var(--accent); }
.expertise-icon { font-size: 2rem; margin-bottom: 1rem; }
.expertise-card h3 { margin-bottom: .75rem; }
.expertise-card p { color: var(--text-secondary); line-height: 1.7; }

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.philosophy-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}
.philosophy-card h3 { margin-bottom: .75rem; color: var(--accent); }
.philosophy-card p { color: var(--text-secondary); line-height: 1.7; }

.skills-section { margin-bottom: 2.5rem; }
.skills-label { font-size: .9rem; color: var(--accent); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: .1em; }
.skills-grid { display: flex; flex-wrap: wrap; gap: .75rem; }
.skill-tag {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: .5rem 1rem;
  font-size: .9rem;
  font-family: var(--font-mono);
  transition: border-color .3s, color .3s;
}
.skill-tag:hover { border-color: var(--accent); color: var(--accent); }

.timeline { position: relative; padding-left: 2rem; }
.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}
.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}
.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg);
  z-index: 1;
}
.timeline-period { font-size: .85rem; color: var(--accent); font-family: var(--font-mono); margin-bottom: .25rem; }
.timeline-title { margin-bottom: .5rem; }
.timeline-desc { color: var(--text-secondary); line-height: 1.7; }

.interests-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
}
.interest-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  transition: border-color .3s;
}
.interest-card:hover { border-color: var(--accent); }
.interest-icon { font-size: 1.5rem; }
.interest-label { font-size: .85rem; color: var(--text-secondary); }

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .about-intro { grid-template-columns: 1fr; gap: 2rem; }
  .expertise-grid { grid-template-columns: 1fr; }
  .philosophy-grid { grid-template-columns: 1fr; }
  .interests-grid { grid-template-columns: repeat(3, 1fr); }
  .cta-buttons { flex-direction: column; align-items: center; }
}
</style>
