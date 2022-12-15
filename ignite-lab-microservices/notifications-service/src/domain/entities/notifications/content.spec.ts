import Content from "./content";

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Test content');

    expect(content.value).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => {
      new Content('Test');
    }).toThrow();
  });

  it('should not be able to create a notification content with less than 240 characters', () => {
    expect(() => {
      new Content('T'.repeat(241));
    }).toThrow();
  });
});
