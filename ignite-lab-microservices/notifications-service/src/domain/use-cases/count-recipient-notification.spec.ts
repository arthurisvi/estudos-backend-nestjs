import Content from "@domain/entities/notifications/content";
import Notification from "@domain/entities/notifications/notification";
import { makeNotification } from "@test/factories/notification-factory";
import InMemoryNotificationsRepository from "../../../test/repositories/in-memory-notifications-repository";
import CountRecipientNotifications from "./count-recipient-notifications";

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(fakeNotificationsRepository);

    await fakeNotificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id' }));
    
    await fakeNotificationsRepository.create(makeNotification({ recipientId: 'example-recipient-id-2' }));

    const { count } = await countRecipientNotifications.execute({recipientId: 'example-recipient-id'})

    expect(count).toEqual(1);
  });
});
