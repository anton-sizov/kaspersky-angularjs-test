const ORDERS_DIRECTIONS = {
  'asc': '+',
  'desc': '-'
};

export default class BooksListController {
  constructor ($rootScope, $state, $localStorage, BooksService) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$localStorage = $localStorage;
    this.BooksService = BooksService;
  }

  $onInit () {
    this.order = {};
    this.ordersList = [];

    this.loadBooks();
    this.loadOrder();

    this.$rootScope.$on('localStorageInitialized', () => {
      this.loadBooks();
      this.loadOrder();
    })
  }

  toggleOrder (orderType) {
    if (this.order[orderType] == 'asc') {
      this.order[orderType] = 'desc';
    } else if (this.order[orderType] == 'desc') {
      this.order[orderType] = null;
    } else {
      this.order[orderType] = 'asc';
    }

    this.buildOrdersList();
    this.BooksService.saveOrder(this.order);
  }

  buildOrdersList () {
    const orderKeysOrder = ['published', 'name'];
    this.ordersList = [];

    orderKeysOrder.forEach((key) => {
      if (this.order.hasOwnProperty(key) && this.order[key]) {
        const order = `${ORDERS_DIRECTIONS[this.order[key]]}${key}`;
        this.ordersList.push(order);
      }
    });
  }

  loadBooks () {
    this.books = this.BooksService.getBooks() || [];
  }

  loadOrder () {
    this.order = this.BooksService.getOrder() || this.order;
    this.buildOrdersList();
  }

  deleteBook (bookId) {
    this.BooksService.deleteBook(bookId);
    this.loadBooks();
  }

  goToBook (bookId) {
    this.$state.go('book-form', { id: bookId });
  }
}