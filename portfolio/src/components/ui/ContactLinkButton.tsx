import type { ReactNode } from 'react'

type ContactLinkButtonProps = {
  href: string
  label: string
  icon: ReactNode
  downloadName?: string
}

export const ContactLinkButton = ({
  href,
  label,
  icon,
  downloadName,
}: ContactLinkButtonProps) => {
  return (
    <a
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white
      transition  hover:border-white hover:border-1"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      download={downloadName}
    >
      <span className="flex h-5 w-5 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
        {icon}
      </span>
    </a>
  )
}