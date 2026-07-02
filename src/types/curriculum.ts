import type { 
  JobExperience, 
  SkillCategory, 
  Education, 
  Courses
} from './index'

export interface ProfileData {
  name: string
  title: string
  bio: string
  image: string
  cvPdf: string
  email: string
  phone: string
  location: string
  birthDate: string
  socialLinks: {
    platform: string
    url: string
    icon: string
  }[]
}

export interface CurriculumDataFile {
  profile: ProfileData
  experience: JobExperience[]
  skills: SkillCategory[]
  education: Education[]
  courses: Courses[]
}
