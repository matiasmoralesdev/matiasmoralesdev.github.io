export interface JobExperience {
  id: number
  title: string
  company: string
  date: string
  description: string
  fullDescription: string
  technologies: string[]
  projects: Project[]
  image: string
  logo: string
  website?: string
  linkedin?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Courses {
  name: string
  institution: string
  year: string
  description: string
  certifications: Certification[]
}

export interface Certification {
  name: string
  url: string
  thumbnail?: string
}

export interface Education {
  id: number
  degree: string
  institution: string
  year: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  contributions?: string[]
}

export interface CurriculumData {
  experience: JobExperience[]
  skills: SkillCategory[]
  education: Education[]
  courses: Courses[]
}
