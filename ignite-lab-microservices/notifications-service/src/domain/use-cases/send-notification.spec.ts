import Notification from "../entities/notifications/notification";
import SendNotification from "./send-notification";

const notifications: Notification[] = [];

const fakeNotificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should send a notification', async () => {
    const sendNotification = new SendNotification(fakeNotificationsRepository);
    await sendNotification.execute({
      recipientId: '123',
      content: 'Hello world',
      category: 'test',
    });

    expect(notifications).toHaveLength(1);
  });
});
