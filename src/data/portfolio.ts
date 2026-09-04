/**
 * ============================================================================
 * PORTFOLIO CONTENT
 * ============================================================================
 * Every piece of copy, link, and dummy image on this site lives in this one
 * file. Edit the values below — the exported types make sure the UI never
 * silently breaks if a field is renamed or removed.
 *
 * See the bottom of this file for the exact list of fields to personalize.
 * ============================================================================
 */

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email' | 'twitter'
}

export interface Hero {
  name: string
  title: string
  /** Roles cycled through with a typewriter effect under the name. Falls back to [title]. */
  roles?: string[]
  tagline: string
  avatar: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export interface About {
  heading: string
  paragraphs: string[]
  stats: { label: string; value: string }[]
}

export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
}

export interface EducationEntry {
  degree: string
  school: string
  location: string
  start: string
  end: string
  detail: string
}

export interface Certificate {
  title: string
  issuer: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  /** Which edge of the image to keep fully in frame when the card crops it to fit — e.g. 'top' to avoid clipping a title baked into the top of the image. */
  imageFocus?: 'top' | 'bottom' | 'center'
  tags: string[]
  links: { label: string; href: string }[]
  featured?: boolean
}

export interface Contact {
  heading: string
  description: string
  email: string
  phone: string
  location: string
  availability: string
}

export interface PortfolioData {
  meta: {
    siteTitle: string
    siteDescription: string
  }
  nav: NavLink[]
  social: SocialLink[]
  hero: Hero
  about: About
  skills: SkillGroup[]
  experience: ExperienceEntry[]
  education: EducationEntry[]
  certificates: Certificate[]
  projects: Project[]
  contact: Contact
}

export const portfolio: PortfolioData = {
  meta: {
    siteTitle: 'Rehman Ali — Software Engineer',
    siteDescription:
      'Portfolio of Rehman Ali, an Associate Software Engineer working across Python, React, and Flask, building web-scraping pipelines and full-stack apps.',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  social: [
    { label: 'GitHub', href: 'https://github.com/Rehman1064', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rehman-ali2/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:heyrehman11@gmail.com', icon: 'email' },
  ],

  hero: {
    name: 'Rehman Ali',
    title: 'Software Engineer',
    roles: ['Software Engineer', 'Data Engineer', 'Python Developer'],
    tagline:
      'I design and develop web applications, scalable backend systems, and data pipelines that turn rough ideas into working software.',
    avatar: '/avatar.png',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Get In Touch', href: '#contact' },
  },

  about: {
    heading: 'About Me',
    paragraphs: [
      "I'm a Software Engineer with hands-on experience in Python and Data Engineering. I build modern data pipelines for web scraping, ETL, and large-scale data processing.",
      'I work with Python, Scrapy, SQL, MySQL, Django, Flask, and PySpark, handling large datasets, automating data workflows, and optimizing pipeline performance.',
      'I also have experience building REST APIs and integrating data with backend systems. I enjoy solving data problems and building reliable, scalable data solutions.',
    ],
    stats: [
      { label: 'Years of Experience', value: '2+' },
      { label: 'Projects Delivered', value: '2+' },
      { label: 'CGPA', value: '3.0 / 4.0' },
    ],
  },

  skills: [
    {
      id: 'python',
      label: 'Python',
      skills: ['Web Scraping', 'ETL', 'Data Pipelines', 'Scrapy', 'SQLAlchemy'],
    },
    {
      id: 'languages',
      label: 'Languages',
      skills: ['Python', 'JavaScript', 'React', 'Node', 'C', 'C++', 'Java'],
    },
    {
      id: 'web',
      label: 'Web',
      skills: ['HTML', 'CSS', 'React', 'Node', 'Flask', 'Django'],
    },
    {
      id: 'databases',
      label: 'Databases',
      skills: ['Oracle', 'MySQL', 'MongoDB', 'SQL Server', 'DuckDB', 'SQLite'],
    },
    {
      id: 'data',
      label: 'Data Skills',
      skills: ['Amazon Web Services', 'PySpark', 'Databricks', 'Apache Spark'],
    },
    {
      id: 'soft',
      label: 'Soft Skills',
      skills: ['Quick Learner', 'Problem-Solving', 'Teamwork & Collaboration'],
    },
  ],

  experience: [
    {
      role: 'Associate Software Engineer (Python)',
      company: 'Big Byte Insights',
      location: 'Lahore, Pakistan',
      start: 'Mar 2025',
      end: 'Present',
      bullets: [
        'Built and maintained large-scale web scraping systems using Python and Scrapy.',
        'Developed and optimized ETL and batch processing pipelines for large datasets.',
        'Used SQLAlchemy and MySQL for efficient data storage and retrieval.',
        'Integrated scraping pipelines with Django backend services.',
        'Automated scheduled scraping jobs and monitored production data pipelines.',
        'Improved scraper reliability through debugging, logging, and performance optimization.',
      ],
    },
    {
      role: 'Associate Software Engineer (React & Flask)',
      company: 'BlackStack Software',
      location: 'Lahore, Pakistan',
      start: 'Jul 2024',
      end: 'Jan 2025',
      bullets: [
        'Developed backend services using Flask, including RESTful APIs and business logic.',
        'Designed and managed database interactions for CRUD operations.',
        'Integrated frontend applications with backend APIs to ensure smooth data flow.',
        'Collaborated on frontend features using React to support backend functionality.',
      ],
    },
    {
      role: 'Teacher Assistant (DSA)',
      company: 'PUCIT',
      location: 'Lahore, Pakistan',
      start: 'Oct 2022',
      end: 'Apr 2023',
      bullets: [
        'Assisted students with data structures, algorithms, and coding challenges.',
        'Supported labs and clarified complex concepts.',
        'Enhanced communication, problem-solving, and mentoring skills.',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor in Information Technology',
      school: 'Punjab University College of Information Technology (PUCIT)',
      location: 'Lahore, Pakistan',
      start: 'Dec 2020',
      end: 'Jun 2024',
      detail: 'CGPA: 3.0 / 4.0',
    },
  ],

  certificates: [],

  projects: [
    {
      id: 'virtual-delight-cafe',
      title: 'Virtual Delight Café (FYP)',
      description:
        'Final-year project reimagining the dining experience with QR-code ordering, online reservations, and customer feedback. Built a loyalty program for customers and staff, plus role-based access control for administration, staff management, and order tracking.',
      image: '/virtual-delight-cafe.png',
      imageFocus: 'top',
      tags: ['React', 'Django', 'SQLite'],
      links: [{ label: 'GitHub', href: 'https://github.com/AliRaza-10/FYP-Virtual-Delight' }],
      featured: true,
    },
    {
      id: 'student-interest-system',
      title: 'Student Interest System',
      description:
        'Enterprise system with a dynamic student-registration form and interest dropdown, paginated student list views (view / update / delete), and an admin dashboard displaying user-activity tracking through charts and statistics.',
      image: '/student-interest-system.png',
      tags: ['HTML', 'CSS', 'Flask', 'MySQL'],
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/Rehman1064/BITF20M030-ESys-PII/tree/main/BITF20M030-ESys-PII',
        },
      ],
    },
  ],

  contact: {
    heading: "Let's Build Something",
    description:
      "Open to Software Engineering roles and freelance work involving Python, Data, Scrapy, React, or Flask. If it involves messy data or a rough idea, I'm in.",
    email: 'heyrehman11@gmail.com',
    phone: '+92 308 4918065',
    location: 'Lahore, Pakistan',
    availability: 'Currently open to new opportunities',
  },
}

/**
 * ============================================================================
 * WHAT TO EDIT TO MAKE THIS YOURS
 * ============================================================================
 * meta.siteTitle / meta.siteDescription  — browser tab title + SEO description
 * hero.name, hero.title, hero.tagline, hero.avatar
 * social[]                                — real GitHub/LinkedIn/email URLs
 * about.paragraphs[], about.stats[]
 * skills[].skills[]                       — add/remove/reorder per group
 * experience[]                            — real roles, companies, dates, bullets
 * education[], certificates[]
 * projects[]                              — real projects, images, tags, links
 * contact.email, contact.phone, contact.location, contact.description, contact.availability
 * ============================================================================
 */
