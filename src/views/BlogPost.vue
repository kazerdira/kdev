<template>
  <header class="page-header">
    <div class="page-header-grid"></div>
    <div class="page-header-content">
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span>/</span>
        <router-link to="/blog">Blog</router-link>
        <span>/</span>
        <span>{{ post?.shortTitle || 'Article' }}</span>
      </div>
      <div class="page-tag">{{ post?.category }}</div>
      <h1 class="page-title">{{ post?.title }}</h1>
      <div class="article-meta">
        <span>📅 {{ post?.date }}</span>
        <span>⏱️ {{ post?.readTime }}</span>
        <span>✍️ KDev</span>
      </div>
    </div>
  </header>

  <section>
    <div class="container-narrow">
      <article class="article-content" style="padding: 0;" v-html="post?.content"></article>
    </div>
  </section>

  <section style="background: var(--bg-elevated); text-align: center; padding: 6rem 4rem;">
    <div class="section-label" style="justify-content: center;">More Articles</div>
    <h2 class="section-title">Keep Reading</h2>
    <p class="section-desc" style="margin: 0 auto 2rem; text-align: center;">
      Check out more articles on development practices, tools, and technologies.
    </p>
    <router-link to="/blog" class="btn-primary">← Back to Blog</router-link>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const blogPosts = {
  'flutter-state-management-guide': {
    shortTitle: 'State Management',
    category: 'Flutter • State Management',
    title: 'The Complete Guide to Flutter State Management in 2026',
    date: 'February 10, 2026',
    readTime: '15 min read',
    content: `
      <h2>Introduction</h2>
      <p>State management is the backbone of any Flutter application. Choosing the right solution can make the difference between a maintainable, scalable app and a tangled mess of spaghetti code. In this guide, I'll compare the most popular state management solutions in the Flutter ecosystem as of 2026.</p>

      <h2>1. Provider</h2>
      <p>Provider remains one of the most accessible state management solutions. Built on top of InheritedWidget, it offers a simple API that's easy to learn.</p>
      <pre><code>class CounterProvider extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}</code></pre>
      <p><strong>Best for:</strong> Small to medium apps, beginners, simple state needs.</p>

      <h2>2. Riverpod</h2>
      <p>Riverpod is the evolution of Provider, created by the same author. It addresses many of Provider's limitations — compile-time safety, no BuildContext dependency, and better testability.</p>
      <pre><code>final counterProvider = StateNotifierProvider&lt;CounterNotifier, int&gt;((ref) {
  return CounterNotifier();
});

class CounterNotifier extends StateNotifier&lt;int&gt; {
  CounterNotifier() : super(0);
  void increment() => state++;
}</code></pre>
      <p><strong>Best for:</strong> Medium to large apps, teams that want compile-time safety, complex dependency graphs.</p>

      <h2>3. BLoC Pattern</h2>
      <p>BLoC (Business Logic Component) uses streams and events to manage state. It enforces a strict separation between UI and business logic.</p>
      <pre><code>class CounterBloc extends Bloc&lt;CounterEvent, int&gt; {
  CounterBloc() : super(0) {
    on&lt;IncrementPressed&gt;((event, emit) {
      emit(state + 1);
    });
  }
}</code></pre>
      <p><strong>Best for:</strong> Large enterprise apps, teams familiar with reactive programming, complex business logic.</p>

      <h2>4. GetX</h2>
      <p>GetX offers state management along with routing and dependency injection — an all-in-one package with minimal boilerplate.</p>
      <pre><code>class CounterController extends GetxController {
  var count = 0.obs;
  void increment() => count++;
}</code></pre>
      <p><strong>Best for:</strong> Rapid prototyping, small teams wanting an all-in-one solution.</p>

      <h2>Recommendation</h2>
      <p>For most projects in 2026, I recommend <strong>Riverpod</strong>. It provides the best balance of simplicity, type safety, and scalability. Use BLoC for enterprise-grade applications where strict architecture is required.</p>

      <h2>Conclusion</h2>
      <p>There's no one-size-fits-all solution. Evaluate your team's experience, project size, and specific requirements. The best state management solution is the one your team can maintain and scale effectively.</p>
    `
  },
  'go-production-api': {
    shortTitle: 'Go APIs',
    category: 'Go • Backend',
    title: 'Building Production-Ready APIs with Go: A Complete Guide',
    date: 'February 8, 2026',
    readTime: '20 min read',
    content: `
      <h2>Introduction</h2>
      <p>Go has become the go-to language for building high-performance APIs. Its simplicity, excellent standard library, and built-in concurrency make it ideal for production backend services. In this guide, I'll walk through building a complete, production-ready API.</p>

      <h2>Project Structure</h2>
      <p>A well-organized project structure is essential for maintainability. I follow a domain-driven layout:</p>
      <pre><code>├── cmd/
│   └── api/
│       └── main.go
├── internal/
│   ├── handler/
│   ├── service/
│   ├── repository/
│   └── middleware/
├── pkg/
│   ├── config/
│   └── validator/
├── migrations/
├── Dockerfile
└── docker-compose.yml</code></pre>

      <h2>Server Setup</h2>
      <p>Start with a proper server configuration that handles graceful shutdown:</p>
      <pre><code>func main() {
    cfg := config.Load()
    db := database.Connect(cfg.DatabaseURL)
    defer db.Close()

    srv := server.New(cfg, db)

    go func() {
        log.Printf("Server starting on :%d", cfg.Port)
        if err := srv.ListenAndServe(); err != http.ErrServerClosed {
            log.Fatalf("Server error: %v", err)
        }
    }()

    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
    &lt;-quit

    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    srv.Shutdown(ctx)
}</code></pre>

      <h2>Middleware Stack</h2>
      <p>Every production API needs proper middleware for logging, CORS, rate limiting, and authentication.</p>

      <h2>Error Handling</h2>
      <p>Use custom error types that map to HTTP status codes for clean, consistent error responses.</p>

      <h2>Database Patterns</h2>
      <p>I use SQLC for type-safe database access — it generates Go code from SQL queries, eliminating ORM overhead while maintaining type safety.</p>

      <h2>Conclusion</h2>
      <p>Building production-ready Go APIs requires attention to error handling, logging, graceful shutdown, and proper project structure. The patterns shown here have served me well across multiple production deployments.</p>
    `
  },
  'firebase-realtime-patterns': {
    shortTitle: 'Firebase Patterns',
    category: 'Firebase • Real-time',
    title: 'Firebase Real-time Database: Patterns and Best Practices',
    date: 'February 5, 2026',
    readTime: '12 min read',
    content: `
      <h2>Introduction</h2>
      <p>Firebase Realtime Database is a powerful tool for building real-time features in mobile and web applications. However, its NoSQL nature requires careful data modeling to avoid performance pitfalls.</p>

      <h2>Data Structure Design</h2>
      <p>The golden rule: denormalize your data. Unlike SQL databases, Firebase works best with flat, duplicated data structures optimized for read patterns.</p>
      <pre><code>{
  "users": {
    "userId1": {
      "name": "John",
      "avatar": "url",
      "lastSeen": 1707123456
    }
  },
  "messages": {
    "chatId1": {
      "msgId1": {
        "text": "Hello!",
        "sender": "userId1",
        "timestamp": 1707123456
      }
    }
  },
  "userChats": {
    "userId1": {
      "chatId1": {
        "lastMessage": "Hello!",
        "unread": 2
      }
    }
  }
}</code></pre>

      <h2>Security Rules</h2>
      <p>Never deploy without proper security rules. Always validate data structure, authenticate users, and limit access.</p>

      <h2>Offline Persistence</h2>
      <p>Enable disk persistence for offline support. Firebase automatically syncs when connectivity returns.</p>

      <h2>Flutter Integration</h2>
      <p>Combine Firebase Realtime Database with StreamBuilder for reactive UI updates that feel instant to users.</p>

      <h2>Conclusion</h2>
      <p>Firebase Realtime Database excels for real-time features when used with proper data modeling and security rules. Denormalize aggressively and design your data structure around your UI's read patterns.</p>
    `
  },
  'docker-go-deployment': {
    shortTitle: 'Docker + Go',
    category: 'Docker • DevOps',
    title: 'Docker for Go Developers: From Development to Production',
    date: 'February 2, 2026',
    readTime: '14 min read',
    content: `
      <h2>Introduction</h2>
      <p>Docker and Go are a natural fit. Go's static binary compilation means incredibly small Docker images, and its fast build times make for efficient CI/CD pipelines.</p>

      <h2>Multi-Stage Builds</h2>
      <p>The key to small Go Docker images is multi-stage builds:</p>
      <pre><code># Build stage
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /app/server ./cmd/api

# Production stage
FROM alpine:3.19
RUN apk --no-cache add ca-certificates
COPY --from=builder /app/server /server
EXPOSE 8080
CMD ["/server"]</code></pre>
      <p>This produces an image under 20MB compared to 1GB+ with the full Go toolchain.</p>

      <h2>Docker Compose for Development</h2>
      <p>Use Docker Compose to run your API alongside PostgreSQL, Redis, and other dependencies during development.</p>

      <h2>Health Checks</h2>
      <p>Always implement health check endpoints and Docker HEALTHCHECK instructions for production reliability.</p>

      <h2>CI/CD Integration</h2>
      <p>Automate builds and deployments with GitHub Actions:</p>
      <pre><code>name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build and push
        run: |
          docker build -t myapp:latest .
          docker push myapp:latest</code></pre>

      <h2>Production Checklist</h2>
      <ul>
        <li>Use multi-stage builds for minimal image size</li>
        <li>Run as non-root user</li>
        <li>Implement health checks</li>
        <li>Use proper logging (JSON format)</li>
        <li>Set resource limits</li>
        <li>Enable graceful shutdown</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Docker + Go gives you fast, reliable, and reproducible deployments. The patterns here will serve as a solid foundation for production containerized Go applications.</p>
    `
  },
}

// Fallback for slugs without dedicated content
const defaultPost = {
  shortTitle: 'Article',
  category: 'Development',
  title: 'Coming Soon',
  date: '2026',
  readTime: '—',
  content: '<p>This article is coming soon. Check back later!</p>'
}

const post = computed(() => blogPosts[route.params.slug] || defaultPost)
</script>
