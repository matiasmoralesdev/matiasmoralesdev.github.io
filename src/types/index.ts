export interface JobExperience {
  id: number
  title: string
  company: string
  date: string
  description: string
  fullDescription: string
  technologies: string[]
  projects: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Education {
  id: number
  degree: string
  institution: string
  year: string
}

export interface CurriculumData {
  experience: JobExperience[]
  skills: SkillCategory[]
  education: Education[]
}
