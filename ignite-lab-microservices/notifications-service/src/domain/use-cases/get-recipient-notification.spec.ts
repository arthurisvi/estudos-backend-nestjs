import { makeNotification } from "@test/factories/notification-factory";
import InMemoryNotificationsRepository from "../../../test/repositories/in-memory-notifications-repository";
import GetRecipientNotifications from "./get-recipient-notifications";

describe('Get notifications by recipient', () => {
  it('should be able to recipient notifications', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const recipientNotifications = new GetRecipientNotifications(fakeNotificationsRepository);

    await fakeNotificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id' }));

    await fakeNotificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id' }));

    const { notifications } = await recipientNotifications.execute({ recipientId: 'example-recipient-id' });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({recipientId: 'example-recipient-id'}),
      expect.objectContaining({recipientId: 'example-recipient-id'}),
    ]));
  });
});
