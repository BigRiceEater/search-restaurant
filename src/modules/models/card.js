export default class Card {
  constructor({ id, imageUrl, title, description, tags }) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.tags = tags;
  }
}
