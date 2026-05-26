import contactLinks from '../../data/contactLinks'
import { ContactLinkButton } from './ContactLinkButton'
import { DownloadButton } from './DownloadButton'

export const ContactContainer = () => {
  return (
    <div className="flex items-center space-x-2 mt-2">
      {contactLinks.map((contact) =>
        contact.downloadName ? (
          <DownloadButton
            key={contact.id}
            label={contact.label}
            href={contact.href}
            filename={contact.downloadName}
            className="!inline-flex h-8 items-center justify-center px-3 py-1 text-sm"
          />
        ) : (
          <ContactLinkButton
            key={contact.id}
            href={contact.href}
            label={contact.label}
            icon={contact.icon}
          />
        ),
      )}
    </div>
  )
}