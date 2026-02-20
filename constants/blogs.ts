export type BlogCategory = "Technology" | "Tutorial" | "Career" | "Lifestyle" | "Design";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content
  category: BlogCategory;
  tags: string[];
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const BlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mastering Next.js 14 Server Actions",
    slug: "mastering-nextjs-server-actions",
    excerpt: "A comprehensive guide to building type-safe, efficient forms and data mutations using Next.js 14 Server Actions. Learn how to eliminate API routes for simple tasks.",
    content: `
      <h3>Introduction</h3>
      <p>Next.js 14 introduced Server Actions, a stable way to execute server-side code directly from your components. This paradigm shift simplifies data mutation and reduces the amount of client-side JavaScript needed.</p>
      
      <h3>What are Server Actions?</h3>
      <p>Server Actions are asynchronous functions that are executed on the server. They can be used in Server Components to fetch data or in Client Components to submit forms.</p>

      <h3>Why use them?</h3>
      <ul>
        <li><strong>Reduced Boilerplate:</strong> No need to create separate API endpoints for form submissions.</li>
        <li><strong>Progressive Enhancement:</strong> Forms work even if JavaScript is disabled.</li>
        <li><strong>Type Safety:</strong> End-to-end type safety with TypeScript.</li>
      </ul>

      <h3>Implementation</h3>
      <p>Defining a server action is as simple as adding the <code>'use server'</code> directive at the top of an async function.</p>
    `,
    category: "Technology",
    tags: ["Next.js", "React", "TypeScript", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    author: "Ariel Batoon",
    date: "October 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "The Art of Clean Code: Principles for 2025",
    slug: "art-of-clean-code-2025",
    excerpt: "Revisiting classic SOLID principles and adapting them for the modern era of functional programming and component-based architectures. Write code that your future self will thank you for.",
    content: `
      <h3>Clean Code Matters</h3>
      <p>Writing code that a machine can execute is easy. Writing code that a human can understand is the real challenge. As projects grow, technical debt accumulates if we don't adhere to strict coding standards.</p>

      <h3>SOLID Principles Simplified</h3>
      <p>Let's break down how the Single Responsibility Principle applies to React components. A component should do one thing and do it well. If your component is fetching data, transforming it, and rendering a complex UI, it's doing too much.</p>

      <h3>Composition over Inheritance</h3>
      <p>Modern frontend development favors composition. We build small, reusable LEGO blocks and assemble them into complex applications. This makes testing and maintenance significantly easier.</p>
    `,
    category: "Career",
    tags: ["Programming", "Best Practices", "Clean Code"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    author: "Ariel Batoon",
    date: "November 02, 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "3",
    title: "Building Accessible Web Apps for Everyone",
    slug: "building-accessible-web-apps",
    excerpt: "Accessibility isn't just a requirement; it's a moral imperative. Explore practical tips and tools to ensure your web applications are usable by people with diverse abilities.",
    content: `
      <h3>The Importance of a11y</h3>
      <p>The web was designed to be universal. When we build barriers, we exclude millions of users. Accessibility benefits everyone, including users on slow connections or mobile devices.</p>

      <h3>Semantic HTML</h3>
      <p>The foundation of an accessible website is semantic HTML. Using the correct tags (<code>&lt;button&gt;</code> vs <code>&lt;div&gt;</code>) gives screen readers the context they need.</p>

      <h3>Focus Management</h3>
      <p>For single-page applications (SPAs), managing focus is critical. When a user opens a modal or navigates to a new page, the focus should move appropriately to ensure a seamless keyboard navigation experience.</p>
    `,
    category: "Design",
    tags: ["Accessibility", "UX", "HTML5"],
    coverImage: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
    author: "Ariel Batoon",
    date: "September 28, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "4",
    title: "From Junior to Senior: A Developer's Journey",
    slug: "junior-to-senior-developer-journey",
    excerpt: "Navigating the tech industry can be daunting. I share my personal roadmap, the mistakes I made, and the key skills that helped me level up my career.",
    content: `
      <h3>It's Not Just About Code</h3>
      <p>While technical skills are important, soft skills often differentiate a Senior developer from a Junior. Communication, mentorship, and understanding business value are paramount.</p>

      <h3>Continuous Learning</h3>
      <p>The tech landscape changes rapidly. Developing a habit of continuous learning is essential. However, it's also important to avoid "tutorial hell" and focus on building real projects.</p>

      <h3>Taking Ownership</h3>
      <p>Senior developers take ownership of problems. They don't just write code; they ensure the solution solves the user's problem and is maintainable for the long term.</p>
    `,
    category: "Career",
    tags: ["Career Growth", "Soft Skills", "Mentorship"],
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    author: "Ariel Batoon",
    date: "August 12, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: "5",
    title: "Introduction to Rust for JavaScript Developers",
    slug: "rust-for-js-developers",
    excerpt: "Rust is known for its performance and safety, but its learning curve can be steep. This tutorial bridges the gap for JavaScript developers, explaining ownership and borrowing with familiar analogies.",
    content: `
      <h3>Why Rust?</h3>
      <p>Rust empowers developers to build reliable and efficient software. It eliminates entire classes of bugs at compile time, such as null pointer dereferences and buffer overflows.</p>

      <h3>The Borrow Checker</h3>
      <p>The concept of ownership is unique to Rust. Think of it like a real-world book. Only one person can hold the book (write access) at a time, or multiple people can read it (read access), but not both simultaneously.</p>

      <h3>Tooling</h3>
      <p>Rust's tooling is top-notch. Cargo, the package manager, handles dependencies, building, and testing seamlessly, much like npm but with more built-in features.</p>

    `,
    category: "Tutorial",
    tags: ["Rust", "JavaScript", "Programming Languages"],
    coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop",
    author: "Ariel Batoon",
    date: "December 05, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: "6",
    title: "Digital Minimalism in a Hyper-Connected World",
    slug: "digital-minimalism",
    excerpt: "How to reclaim your attention and focus in an age of constant notifications. Strategies for curating your digital environment to support your mental health and productivity.",
    content: `
      <h3>The Attention Economy</h3>
      <p>Apps are designed to keep us hooked. Reclaiming your attention requires deliberate effort. It starts with awareness of how much time we spend scrolling mindlessly.</p>

      <h3>Curating Your Feed</h3>
      <p>Unfollow accounts that don't add value or bring you joy. Turn off non-essential notifications. Your phone should be a tool that serves you, not a slot machine that distracts you.</p>

      <h3>Deep Work</h3>
      <p>Creating space for deep work allows us to solve hard problems and produce high-quality work. This often requires long blocks of uninterrupted time, free from digital distractions.</p>
    `,
    category: "Lifestyle",
    tags: ["Productivity", "Mental Health", "Minimalism"],
    coverImage: "https://images.unsplash.com/photo-1499750310159-5b600gy9329e?q=80&w=2070&auto=format&fit=crop",
    author: "Ariel Batoon",
    date: "January 10, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "7",
    title: "Understanding Docker Containers",
    slug: "understanding-docker-containers",
    excerpt: "Containers have revolutionized how we deploy applications. This post breaks down what containers are, how they differ from virtual machines, and how to get started with Docker.",
    content: `
      <h3>It works on my machine</h3>
      <p>The age-old problem of environment discrepancies is solved by Docker. By packaging the application with its dependencies, we ensure consistency across development, testing, and production environments.</p>

      <h3>Images vs Containers</h3>
      <p>A Docker image is a read-only template. A container is a runnable instance of that image. You can spin up multiple containers from a single image.</p>

      <h3>Docker Compose</h3>
      <p>Docker Compose simplifies the management of multi-container applications. You can define your database, backend, and frontend services in a single YAML file.</p>
    `,
    category: "Tutorial",
    tags: ["DevOps", "Docker", "Containers"],
    coverImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
    author: "Ariel Batoon",
    date: "February 20, 2025",
    readTime: "9 min read",
    featured: false,
  }
];
