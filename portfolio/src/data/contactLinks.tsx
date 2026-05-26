import type { ReactNode } from 'react'
import { EmailIcon, GitHubIcon, LinkedInIcon } from '../assets/ContactLinkIcon'
import { DownloadIcon } from '../components/ui/DownloadButton'

export type ContactItem = {
  id: string
  href: string
  label: string
  icon: ReactNode
  downloadName?: string
}

const contactLinks: ContactItem[] = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/ricardo-calvo-95b82a234/',
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
  },
  {
    id: 'github',
    href: 'https://github.com/RicardoCalvoP/',
    label: 'GitHub',
    icon: <GitHubIcon />,
  },
  {
    id: 'email',
    href: 'mailto:r.calvoperez@outlook.com',
    label: 'Email',
    icon: <EmailIcon />,
  },
  {
    id: 'resume',
    href: '/RicardoCalvo_Resume.pdf',
    label: 'Resume',
    icon: <DownloadIcon />,
    downloadName: 'RicardoCalvo_Resume.pdf',
  },
]

export default contactLinks