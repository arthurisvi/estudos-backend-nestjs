import { makeNotification } from "@test/factories/notification-factory";
import InMemoryNotificationsRepository from "../../../test/repositories/in-memory-notifications-repository";
import UnreadNotification from "./unread-notification";
import { NotificationNotFound } from "./errors/notification-not-found.error";

describe('Unread notification', () => {
  it('should Unread a notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(fakeNotificationsRepository);

    const notification = makeNotification({readAt: new Date()});
 
    await fakeNotificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(fakeNotificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to read a non existing notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(fakeNotificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-id',
      })
    }
    ).rejects.toThrowError(NotificationNotFound)

  })
});
