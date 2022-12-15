import SendNotification from "./send-notification";

describe('Send notification', () => {
  it('should send a notification', async () => {
    const sendNotification = new SendNotification();
    const { notification } = await sendNotification.execute({
      recipientId: '123',
      content: 'Hello world',
      category: 'test',
    });

    expect(notification).toBeTruthy();
  });
});
