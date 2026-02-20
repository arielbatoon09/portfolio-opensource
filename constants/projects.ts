export type ProjectType = "Personal" | "Business" | "Open Source";
export type ProjectCategory = "Website" | "Web App" | "Mobile App" | "Custom Software" | "Game Development";

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string; // HTML/Markdown content
  type: ProjectType;
  category: ProjectCategory;
  techStack: string[];
  thumbnail: string;
  demoUrl?: string; // Optional URL for live demo
  repoUrl?: string; // Optional URL for source code
  featured?: boolean;
};

export const Projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Optimus",
    slug: "portfolio-optimus",
    description: "A highly performant, open-source portfolio template built with Next.js, Tailwind CSS, and Framer Motion. Engineered for speed and accessibility, featuring a modern dark mode, responsive design, and robust animations that delight users without compromising performance.",
    content: `
      <h3>Overview</h3>
      <p>Portfolio Optimus is designed for developers who want a <strong>blazing fast</strong>, accessible, and visually stunning portfolio without starting from scratch. It leverages the power of Next.js App Router and Server Components to ensure optimal performance and SEO.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Modern Stack:</strong> Built with Next.js 14, React 18, and Tailwind CSS.</li>
        <li><strong>Animations:</strong> Smooth, non-intrusive animations using Framer Motion.</li>
        <li><strong>Dark Mode:</strong> Fully integrated dark mode support with system preference detection.</li>
        <li><strong>Responsive:</strong> Mobile-first design that looks great on all devices.</li>
      </ul>

      <h3>Technical Highlights</h3>
      <p>The project uses semantic HTML5 elements for better accessibility and includes a custom configured <code>sitemap.xml</code> and <code>robots.txt</code> generator. Images are optimized using <code>next/image</code> ensures fast load times even with high-resolution assets.</p>
    `,
    type: "Open Source",
    category: "Website",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    repoUrl: "https://github.com/arielbatoon09/portfolio-optimus",
    demoUrl: "https://portfolio-optimus.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    title: "Hysync Platform",
    slug: "hysync-platform",
    description: "The core web ecosystem for Hysync, designed to unify player experiences across multiple game servers. It features a comprehensive account management system, real-time server status monitoring, and an integrated community forum. The platform handles complex backend synchronization to ensure seamless data consistency.",
    content: `
      <h3>The Challenge</h3>
      <p>Managing player data across multiple distinct game servers creates fragmentation. Hysync needed a unified platform where players could manage their identities, view stats, and interact with the community in one place.</p>

      <h3>Solution Architecture</h3>
      <p>The platform is built on a microservices-inspired architecture. The frontend is a Next.js application that communicates with a Node.js backend API. Database consistency is managed via PostgreSQL, ensuring that player currency, ranks, and inventory are synchronized in real-time.</p>

      <h3>Core Modules</h3>
      <ul>
        <li><strong>Account Hub:</strong> Single Sign-On (SSO) and profile management.</li>
        <li><strong>Live Status:</strong> WebSocket-based server status and player count monitoring.</li>
        <li><strong>Forums:</strong> A custom-built discussion board with rich text editing and moderation tools.</li>
      </ul>
    `,
    type: "Personal",
    category: "Web App",
    techStack: ["Next.js", "Recoil", "Node.js", "PostgreSQL", "Docker", "Java"],
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    demoUrl: "https://hysync.org",
    featured: true,
  },
  {
    id: "3",
    title: "Nexus E-Commerce",
    slug: "nexus-ecommerce",
    description: "A scalable enterprise e-commerce dashboard built for high-volume retail management. It provides powerful tools for inventory tracking, order processing, and customer relationship management, visualization through real-time analytics charts and customizable reporting widgets.",
    content: `
      <h3>Dashboard Overview</h3>
      <p>Nexus E-Commerce empowers retailers with a command center for their operations. From tracking stock levels across multiple warehouses to analyzing customer lifetime value, the dashboard aggregates critical business data into actionable insights.</p>

      <h3>Real-Time Analytics</h3>
      <p>Using <strong>Chart.js</strong> integrations, the dashboard visualizes sales trends, conversion rates, and revenue streams in real-time. Store managers can generate custom reports and export them for stakeholder meetings.</p>

      <h3>Inventory Management</h3>
      <p>The system features a complex state management system using Redux Toolkit to handle thousands of SKUs without performance degradation. It supports bulk editing, low-stock alerts, and automated reordering workflows.</p>
    `,
    type: "Business",
    category: "Web App",
    techStack: ["React", "Redux Toolkit", "Material UI", "Firebase", "Chart.js"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "4",
    title: "DevTools CLI",
    slug: "devtools-cli",
    description: "A developer productivity tool designed to automate repetitive scaffolding and configuration tasks. It allows teams to enforce coding standards by generating boilerplate code for components, hooks, and services, significantly reducing setup time for new features.",
    content: `
      <h3>Why build a CLI?</h3>
      <p>Consistency is key in large development teams. DevTools CLI was created to eliminate the "copy-paste-modify" workflow that leads to subtle bugs and inconsistent file structures.</p>

      <h3>Commands</h3>
      <ul>
        <li><code>generate component &lt;name&gt;</code>: Creates a component with tests, styles, and Storybook files.</li>
        <li><code>init project</code>: Scaffolds a new project with the company's preferred linting and formatting rules.</li>
        <li><code>audit</code>: Runs a suite of static analysis tools to check for common issues.</li>
      </ul>

      <h3>Extensibility</h3>
      <p>The CLI is built with a plugin architecture, allowing individual teams to add their own generators without modifying the core codebase.</p>
    `,
    type: "Open Source",
    category: "Custom Software",
    techStack: ["Node.js", "Commander.js", "Inquirer.js", "Chalk"],
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1788&auto=format&fit=crop",
    repoUrl: "https://github.com/arielbatoon09/devtools-cli",
    featured: false,
  },
  {
    id: "5",
    title: "Visionary AI",
    slug: "visionary-ai",
    description: "An experimental generative art platform utilizing the OpenAI DALL-E API. Users can generate unique images from text prompts, save them to a personal gallery, and share them with the community. Include features like image variations and prompt history.",
    content: `
      <h3>Project Goal</h3>
      <p>To explore the creative potential of AI and build a user-friendly interface for the powerful DALL-E model. The goal was to make generative art accessible and shareable.</p>

      <h3>Community Gallery</h3>
      <p>Users can publish their creations to a public feed. The platform includes a voting system, allowing the best prompts and images to rise to the top. This social aspect encourages users to refine their prompt engineering skills.</p>

      <h3>Technical Challenges</h3>
      <p>Handling long-running API requests and managing image storage were the primary challenges. We implemented a robust queuing system and optimized image delivery using a CDN to ensure a smooth user experience.</p>
    `,
    type: "Personal",
    category: "Web App",
    techStack: ["SvelteKit", "OpenAI API", "Supabase", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "6",
    title: "TaskMaster Pro",
    slug: "taskmaster-pro",
    description: "A collaborative project management tool featuring intuitive Kanban boards, Gantt charts, and calendar views. Designed for remote teams, it supports real-time updates, task assignments, and integrated file sharing to keep everyone aligned.",
    content: `
      <h3>Agile Management</h3>
      <p>TaskMaster Pro adapts to your workflow, whether you use Scrum, Kanban, or a hybrid approach. The drag-and-drop interface makes it easy to move tasks through stages, while swimlanes organize work by assignee or priority.</p>

      <h3>Collaboration Features</h3>
      <ul>
        <li><strong>Real-time Updates:</strong> See changes instantly as teammates move cards or add comments.</li>
        <li><strong>Mentions:</strong> Tag team members to notify them of urgent items.</li>
        <li><strong>File Attachments:</strong> Drag and drop designs or documents directly onto tasks.</li>
      </ul>
    `,
    type: "Business",
    category: "Web App",
    techStack: ["Vue.js", "Pinia", "Socket.io", "Express", "MongoDB"],
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "7",
    title: "CoinTrack Mobile",
    slug: "cointrack-mobile",
    description: "A lightweight, cross-platform mobile application for tracking cryptocurrency portfolios. Users can monitor real-time prices, set custom alerts, and view historical performance charts. built with an offline-first architecture for reliability.",
    content: `
      <h3>Mobile First</h3>
      <p>Built with React Native and Expo, CoinTrack delivers a native experience on both iOS and Android. The app uses <strong>Reanimated</strong> 2 for 60fps gesture-based interactions and smooth chart transitions.</p>

      <h3>Features</h3>
      <ul>
        <li><strong>Portfolio Tracking:</strong> Manually add holdings or sync with exchange APIs (read-only).</li>
        <li><strong>Price Alerts:</strong> Push notifications when assets hit target prices.</li>
        <li><strong>Offline Mode:</strong> Caches data locally using SQLite so users can view their portfolio even without a signal.</li>
      </ul>
    `,
    type: "Open Source",
    category: "Mobile App",
    techStack: ["React Native", "Expo", "Reanimated", "SQLite"],
    thumbnail: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1769&auto=format&fit=crop",
    repoUrl: "https://github.com/arielbatoon09/crypto-tracker",
    featured: false,
  },
  {
    id: "8",
    title: "Galactic Defender",
    slug: "galactic-defender",
    description: "A fast-paced endless runner game set in deep space. Players navigate a spaceship through asteroid fields and enemy fleets. Features procedural level generation, power-up systems, and global leaderboards to challenge friends.",
    content: `
      <h3>Gameplay Loop</h3>
      <p>The core loop focuses on reflex-based evasion and shooting. As the player survives longer, the game speed increases and new enemy types are introduced. Procedural generation ensures no two runs are the same.</p>

      <h3>Development Stack</h3>
      <p>Developed in <strong>Unity 2022</strong>. The game utilizes the new Input System for responsive controls and Shader Graph for stunning visual effects without heavy performance costs.</p>

      <h3>Social Features</h3>
      <p>Integrated with Firebase for authentication and database services to power the global leaderboard and save player progress across devices.</p>
    `,
    type: "Personal",
    category: "Game Development",
    techStack: ["Unity", "C#", "WebGL", "Firebase"],
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "9",
    title: "HealthSyncer",
    slug: "health-syncer",
    description: "A healthcare portal allowing patients to securely view their medical records, schedule appointments, and communicate with doctors. Compliant with HIPAA standards, ensuring data privacy and security through end-to-end encryption.",
    content: `
      <h3>Security First</h3>
      <p>HealthSyncer was built with strict adherence to HIPAA guidelines. All sensitive data is encrypted at rest using AES-256 and in transit via TLS 1.3. Access logs are immutable and audited regularly.</p>

      <h3>Patient Empowerment</h3>
      <p>Patients can access their lab results, prescription history, and upcoming appointment details from a secure dashboard. The portal reduces administrative overhead for clinics by allowing patients to self-schedule.</p>

      <h3>Telehealth Integration</h3>
      <p>The platform includes a WebRTC-based video consultation module, allowing doctors to conduct virtual visits securely within the application context.</p>
    `,
    type: "Business",
    category: "Web App",
    techStack: ["Next.js", "AWS", "DynamoDB", "Cognito"],
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
];
