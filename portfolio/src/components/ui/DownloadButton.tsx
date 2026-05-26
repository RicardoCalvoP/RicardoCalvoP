import type { MouseEvent } from 'react'

export const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

type DownloadButtonProps = {
  label: string
  href?: string
  filename?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const DownloadButton = ({
  label,
  href,
  filename,
  onClick,
  className,
}: DownloadButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e)

    if (href) {
      const a = document.createElement('a')
      a.href = href
      if (filename) a.download = filename
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      a.remove()
    }
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 rounded px-3 py-2 text-white
         hover:border-white hover:border-1
        ${className ?? ''
        }`}
      onClick={handleClick}
      aria-label={`Download ${label}`}
      title={`Download ${label}`}
    >
      <span>Download {label}</span>
      <span className="h-4 w-4">
        <DownloadIcon />
      </span>
    </button>
  )
}
