export default class Content {
  private readonly content: string;

  constructor(content: string) {
    if (!this.validadeContentLength(content)) {
      throw new Error('Content length must be between 5 and 240 characters');
    }
    this.content = content;
  }

  get value() {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
