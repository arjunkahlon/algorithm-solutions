/* eslint-disable no-unused-vars */

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }

  pageCount() {
    // returns the number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex < 0 || pageIndex + 1 > this.pageCount()) {
      return -1;
    } else if (pageIndex + 1 < this.pageCount()) {
      return this.itemsPerPage;
    } else if (pageIndex + 1 === this.pageCount()) {
      return this.itemCount() % this.itemsPerPage;
    }
  }

  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range

    if (itemIndex < 0 || itemIndex + 1 > this.itemCount()) {
      return -1;
    }

    return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
  }
}
