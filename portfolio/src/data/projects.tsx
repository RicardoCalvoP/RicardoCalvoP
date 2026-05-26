import type { ReactNode } from 'react'
import BanamexLite from '../pages/Projects/BanamexLite'

export type Project = {
  id: string
  title: string
  shortDescription: string
  technologies: string[]
  startDate: Date
  endDate?: Date
  repositoryUrl?: string
  demoUrl?: string
  imageUrl?: string
  featured?: boolean
  page: ReactNode
}
export const projects: Project[] = [
  {
    id: 'banamex-lite',
    title: 'Banamex Lite',
    shortDescription:
      'Multidisciplinary project focused on developing a solution for Banamex, to enhance their digital banking experience.',
    technologies: [
      'Lovable'
    ],
    startDate: new Date('2026-02-16'),
    endDate: new Date('2026-03-09'),
    demoUrl: 'https://lite-credit-quest.lovable.app',
    featured: true,
    page: <BanamexLite />,
  },

]

export const getProjectById = (projectId: string) =>
  projects.find((project) => project.id === projectId)
