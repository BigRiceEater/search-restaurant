import lunr from 'lunr';

export default class RestaurantSearchIndex {
  constructor(documents) {
    console.log('got these documents', documents);

    this.idx = lunr(function() {
      this.ref('id');
      this.field('title');
      this.field('tags');

      documents.forEach(function(doc) {
        this.add(doc);
      }, this);
    });
  }

  getIndex() {
    return this.idx;
  }
}
