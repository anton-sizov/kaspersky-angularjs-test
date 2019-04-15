class AuthorsService {
  constructor ($localStorage) {
    this.$localStorage = $localStorage;
  }

  getAuthors() {
    return this.$localStorage.$getItem('authors');
  }

  getAuthor(authorId) {
    return this.$localStorage.$getItem('authors').find(author => author.id == authorId);
  }

  saveAuthor(author) {
    let authors = this.$localStorage.$getItem('authors');
    let lastIndex = this.$localStorage.$getItem('authorLastIndex');

    if (!author.id) {
      lastIndex += 1;
      author.id = lastIndex;
      authors = [...authors, author];
    } else {
      authors = authors.map(item => {
        return item.id === author.id ? author : item;
      })
    }

    this.$localStorage.$setItem('authors', authors);
    this.$localStorage.$setItem('authorLastIndex', lastIndex);

    return author;
  }

  deleteAuthor(authorId) {
    let authors = this.$localStorage.$getItem('authors').filter(author => author.id != authorId);
    this.$localStorage.$setItem('authors', authors);
  }
}

export default angular.module('library')
  .service('AuthorsService', AuthorsService).name;