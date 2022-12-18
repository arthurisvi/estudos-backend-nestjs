import Content from "@domain/entities/notifications/content";
import Notification from "@domain/entities/notifications/notification";
import { makeNotification } from "@test/factories/notification-factory";
import InMemoryNotificationsRepository from "../../../test/repositories/in-memory-notifications-repository";
import CancelNotification from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found.error";

describe('Cancel notification', () => {
  it('should Cancel a notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(fakeNotificationsRepository);

    const notification = makeNotification();
    await fakeNotificationsRepository.create(notification);

    await fakeNotificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(fakeNotificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
  });

  it('should not be able to cancel a non existing notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(fakeNotificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-id',
      })
    }
    ).rejects.toThrowError(NotificationNotFound)

  })
});
