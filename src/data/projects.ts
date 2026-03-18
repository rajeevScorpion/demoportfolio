export interface Project {
  slug: string;
  title: string;
  category: string;
  desc: string;
  impact: string;
  image: string;
  year: string;
  type: string;
  duration: string;
  role: string;
  focus: string;
  outcome: string;
  challenge: string;
  approach: string;
  process: string[];
  gallery: { url: string; caption: string }[];
  reflection: string;
  projectLink: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "jury-evaluation-system",
    title: "Jury Evaluation System",
    category: "Digital Product",
    desc: "A structured evaluation platform enabling rubric-based grading and AI feedback.",
    impact: "Reduced evaluation time by 40%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    year: "2023",
    type: "Web Application",
    duration: "6 Months",
    role: "Lead UX/UI Designer",
    focus: "System Design, User Workflows",
    outcome: "Adopted by 3 major design schools",
    challenge: "Academic evaluations are often subjective and time-consuming. Juries needed a way to standardize grading without losing the nuance of qualitative feedback.",
    approach: "We designed a modular rubric system that allows educators to define criteria dynamically, paired with an AI assistant that synthesizes qualitative notes into actionable feedback.",
    process: [
      "Conducted contextual inquiries with 20+ design educators.",
      "Mapped the end-to-end evaluation journey to identify bottlenecks.",
      "Prototyped a tablet-first interface for on-the-go grading during physical juries.",
      "Integrated a lightweight LLM to summarize evaluator comments."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        caption: "Early wireframes mapping the evaluation logic."
      },
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        caption: "Final tablet interface used by jury members."
      }
    ],
    reflection: "This project reinforced my belief that good design doesn't just make things look better; it fundamentally changes how people work and make decisions.",
    projectLink: "https://figma.com/placeholder"
  },
  {
    slug: "academic-documentation-platform",
    title: "Academic Documentation Platform",
    category: "Systems Design",
    desc: "A unified system for managing OBE and academic workflows.",
    impact: "Streamlined academic processes",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    year: "2022",
    type: "Enterprise System",
    duration: "8 Months",
    role: "Systems Architect",
    focus: "Information Architecture, Process Optimization",
    outcome: "100% compliance with new accreditation standards",
    challenge: "Faculty were spending over 15 hours a week manually mapping course outcomes to program objectives using fragmented spreadsheets.",
    approach: "Created a centralized, relational database with a frontend designed specifically for academic mental models, turning a chore into a seamless part of course planning.",
    process: [
      "Audited existing documentation workflows across 5 departments.",
      "Developed a unified data model for Outcomes-Based Education (OBE).",
      "Designed an intuitive interface for mapping and tracking outcomes.",
      "Piloted the system with a core group of early adopters."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        caption: "Mapping the complex academic workflows."
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        caption: "The centralized dashboard for faculty."
      }
    ],
    reflection: "Designing for enterprise means designing for adoption. The system had to feel less like a compliance tool and more like a helpful assistant.",
    projectLink: "https://figma.com/placeholder"
  },
  {
    slug: "ai-interactive-narratives",
    title: "AI for Interactive Narratives",
    category: "Education",
    desc: "A module exploring storytelling through AI-powered interaction.",
    impact: "Enhanced student engagement",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    year: "2024",
    type: "Curriculum Design",
    duration: "1 Semester",
    role: "Course Creator & Instructor",
    focus: "Pedagogy, Emerging Tech",
    outcome: "Highest rated elective of the year",
    challenge: "Design students needed to understand AI not just as a tool for generation, but as a medium for interaction and storytelling.",
    approach: "Developed a hands-on curriculum where students built their own AI-driven narrative experiences, moving from prompt engineering to system design.",
    process: [
      "Researched the intersection of generative AI and interactive fiction.",
      "Designed a 14-week syllabus balancing theory and technical prototyping.",
      "Created custom starter kits and frameworks for students.",
      "Facilitated a public showcase of student projects."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        caption: "Students experimenting with prompt structures."
      },
      {
        url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=800&q=80",
        caption: "Showcase of the final interactive narratives."
      }
    ],
    reflection: "Teaching AI requires constant adaptation. The most valuable lesson was teaching students how to think critically about the systems they were using, not just how to use them.",
    projectLink: "https://figma.com/placeholder"
  },
  {
    slug: "gui-visual-trends-research",
    title: "GUI & Visual Trends Research",
    category: "Research",
    desc: "A study on OS interfaces influencing visual communication.",
    impact: "Doctoral research",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    year: "2021-2024",
    type: "Academic Research",
    duration: "3 Years",
    role: "Lead Researcher",
    focus: "Visual Culture, HCI",
    outcome: "Published in 3 peer-reviewed journals",
    challenge: "Understanding how the aesthetic paradigms of major operating systems (like iOS and Android) shape broader visual culture and graphic design trends.",
    approach: "Conducted a longitudinal visual analysis of digital artifacts, combined with qualitative interviews of practicing designers.",
    process: [
      "Compiled a dataset of 5,000+ digital interfaces over a 10-year period.",
      "Developed a framework for categorizing visual motifs (e.g., skeuomorphism, flat design, neumorphism).",
      "Analyzed the correlation between OS updates and shifts in branding and web design.",
      "Authored a comprehensive dissertation on the findings."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        caption: "Analyzing visual motifs across different OS versions."
      },
      {
        url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
        caption: "Synthesizing the timeline of interface aesthetics."
      }
    ],
    reflection: "This research highlighted the immense power platform creators hold over global visual language. It made me a more critical consumer and creator of digital interfaces.",
    projectLink: "https://figma.com/placeholder"
  },
  {
    slug: "next-gen-advertising-campaign",
    title: "Next-Gen Advertising Campaign",
    category: "Advertising",
    desc: "A multi-channel advertising campaign designed to bridge the gap between digital and physical brand experiences.",
    impact: "Increased brand engagement by 150%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    year: "2025",
    type: "Marketing Campaign",
    duration: "4 Months",
    role: "Creative Director",
    focus: "Brand Strategy, Interactive Media",
    outcome: "Winner of the Digital Innovation Award",
    challenge: "The client needed a fresh approach to reach Gen Z consumers who are increasingly ad-blind and skeptical of traditional marketing.",
    approach: "We developed an interactive, narrative-driven campaign that rewarded user curiosity rather than interrupting their content consumption.",
    process: [
      "Conducted deep ethnographic research to understand target audience media consumption.",
      "Developed a core narrative that could be fragmented across different platforms.",
      "Created interactive AR experiences triggered by physical billboards.",
      "Produced a hero video to anchor the campaign's emotional core."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
        caption: "Behind the scenes of the AR billboard integration."
      },
      {
        url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
        caption: "Final campaign analytics and engagement dashboard."
      },
      {
        url: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
        caption: "Storyboarding the multi-channel narrative."
      }
    ],
    reflection: "Advertising is no longer about shouting the loudest; it's about creating spaces where consumers actually want to spend their time.",
    projectLink: "https://figma.com/placeholder",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4"
  }
];
