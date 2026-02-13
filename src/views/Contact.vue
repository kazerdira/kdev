<template>
  <header class="page-header">
    <div class="page-header-grid"></div>
    <div class="page-header-content">
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span>/</span>
        <span>Contact</span>
      </div>
      <div class="page-tag">Get In Touch</div>
      <h1 class="page-title">Let's Build Something<br>Amazing Together</h1>
      <p class="page-desc">Have a project idea, a question, or just want to say hello? I'd love to hear from you.</p>
    </div>
  </header>

  <!-- Contact Form + Info -->
  <section>
    <div class="container">
      <div class="contact-grid">
        <!-- Form -->
        <div class="contact-form-wrapper" v-observe>
          <h2>Send a Message</h2>
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" placeholder="john@example.com" required>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" v-model="form.subject" placeholder="Project Inquiry">
            </div>
            <div class="form-group">
              <label for="budget">Budget Range</label>
              <select id="budget" v-model="form.budget">
                <option value="">Select budget range</option>
                <option value="<1k">Less than $1,000</option>
                <option value="1k-5k">$1,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="6" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" class="btn-primary" :disabled="submitted" style="width:100%;">
              {{ submitted ? '✓ Message Sent!' : 'Send Message →' }}
            </button>
          </form>
        </div>

        <!-- Sidebar -->
        <div class="contact-sidebar" v-observe>
          <div class="contact-info-card">
            <h3>Contact Info</h3>
            <div class="contact-info-item" v-for="ci in contactInfo" :key="ci.label">
              <div class="ci-icon">{{ ci.icon }}</div>
              <div>
                <div class="ci-label">{{ ci.label }}</div>
                <div class="ci-value">{{ ci.value }}</div>
              </div>
            </div>
          </div>

          <div class="contact-info-card">
            <h3>Connect</h3>
            <div class="social-links">
              <a v-for="s in socials" :key="s.label" :href="s.url" target="_blank" class="social-link">
                {{ s.icon }} {{ s.label }}
              </a>
            </div>
          </div>

          <div class="contact-info-card availability">
            <h3>Availability</h3>
            <p>Currently <strong style="color: var(--accent);">available</strong> for freelance projects and collaborations. Typical response time is within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section style="background: var(--bg-elevated);">
    <div class="container">
      <div class="section-label"><span class="dot"></span> FAQ</div>
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-grid">
        <div class="faq-item" v-for="(f, i) in faqs" :key="i" v-observe @click="toggleFaq(i)">
          <div class="faq-question">
            <span>{{ f.q }}</span>
            <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
          </div>
          <div class="faq-answer" v-show="openFaq === i">{{ f.a }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { vObserve } from '../composables/useReveal'

const form = ref({ name: '', email: '', subject: '', budget: '', message: '' })
const submitted = ref(false)
const openFaq = ref(null)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    form.value = { name: '', email: '', subject: '', budget: '', message: '' }
    submitted.value = false
  }, 3000)
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'wolverix.app@gmail.com' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/kazerdira' },
  { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours' },
  { icon: '📍', label: 'Location', value: 'Algeria' }
]

const socials = [
  { icon: '🐙', label: 'GitHub', url: 'https://github.com/kazerdira' },
  { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/' },
  { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/' }
]

const faqs = [
  { q: 'What technologies do you work with?', a: 'I primarily work with Flutter/Dart for mobile development, Go for backend services, Firebase for real-time features, and Vue.js for web applications. I also have experience with Docker, PostgreSQL, and cloud platforms like GCP and AWS.' },
  { q: 'What is your typical project timeline?', a: 'Timelines vary by project scope. A simple mobile app might take 4-8 weeks, while a complex full-stack application could take 3-6 months. I provide detailed estimates after understanding your requirements.' },
  { q: 'Do you work with international clients?', a: 'Absolutely! I work with clients worldwide. I\'m comfortable with async communication across time zones and use tools like Slack, Discord, and email to stay connected.' },
  { q: 'What is your development process?', a: 'I follow an agile approach: discovery → planning → iterative development with regular check-ins → testing → deployment. I keep you updated at every step with demos and progress reports.' },
  { q: 'Do you offer maintenance after project delivery?', a: 'Yes! I offer ongoing maintenance packages to keep your application updated, secure, and running smoothly. Bug fixes within the warranty period are always free.' },
  { q: 'How do you handle project pricing?', a: 'I offer both fixed-price and hourly billing depending on the project. Fixed-price works well for well-defined projects, while hourly is better for ongoing work or projects with evolving requirements.' }
]
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
}
.contact-form-wrapper h2 { margin-bottom: 2rem; }

.form-group { margin-bottom: 1.5rem; }
.form-group label {
  display: block;
  font-size: .85rem;
  color: var(--text-secondary);
  margin-bottom: .5rem;
  text-transform: uppercase;
  letter-spacing: .05em;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: .75rem 1rem;
  color: var(--text);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color .3s;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}
.form-group textarea { resize: vertical; }

.contact-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-info-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
}
.contact-info-card h3 { margin-bottom: 1rem; font-size: 1rem; }
.contact-info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.ci-icon { font-size: 1.25rem; }
.ci-label { font-size: .8rem; color: var(--text-secondary); }
.ci-value { font-size: .95rem; }

.social-links { display: flex; flex-direction: column; gap: .5rem; }
.social-link {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: .5rem .75rem;
  border-radius: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: background .3s, color .3s;
}
.social-link:hover { background: rgba(100,255,218,.05); color: var(--accent); }

.availability p { color: var(--text-secondary); line-height: 1.7; }

.faq-grid { display: flex; flex-direction: column; gap: 1rem; max-width: 800px; }
.faq-item {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: border-color .3s;
}
.faq-item:hover { border-color: var(--accent); }
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}
.faq-toggle { color: var(--accent); font-size: 1.25rem; }
.faq-answer {
  margin-top: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
