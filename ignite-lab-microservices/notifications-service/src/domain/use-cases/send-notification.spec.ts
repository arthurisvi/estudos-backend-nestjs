import InMemoryNotificationsRepository from "../../../test/repositories/in-memory-notifications-repository";
import SendNotification from "./send-notification";

describe('Send notification', () => {
  it('should send a notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(fakeNotificationsRepository);
    const { notification } = await sendNotification.execute({
      recipientId: '123',
      content: 'Hello world',
      category: 'test',
    });

    expect(fakeNotificationsRepository.notifications).toHaveLength(1);
    expect(fakeNotificationsRepository.notifications[0]).toEqual(notification);
  });
});
