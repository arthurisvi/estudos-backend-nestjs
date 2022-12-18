import Content from "@domain/entities/notifications/content"
import { NotificationProps } from "@domain/entities/notifications/notification"
import Notification from "@domain/entities/notifications/notification"

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'example-recipient-id',
    ...override,
  })
}