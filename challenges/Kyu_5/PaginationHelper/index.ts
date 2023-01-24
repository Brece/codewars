class PaginationHelper {
    collection;
    itemsPerPage;

	constructor(collection: any[], itemsPerPage: number) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}

	itemCount(): number {
	    // returns the number of items within the entire collection
        return this.collection.length;
	}

	pageCount(): number {
	    // returns the number of pages
        return Math.ceil(this.itemCount() / this.itemsPerPage)
	}

	pageItemCount(pageIndex: number): number {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        let start = pageIndex * this.itemsPerPage;
        let pageItems = this.collection.slice(start, start + this.itemsPerPage);

        return pageItems.length && pageIndex >= 0 ? pageItems.length : -1;
	}

	pageIndex(itemIndex: number): number {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range

        return itemIndex >= 0 && itemIndex <= this.itemCount() - 1 ? Math.floor(itemIndex / this.itemsPerPage) : -1;
	}
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const helper = new PaginationHelper(collection, 10);
const empty = new PaginationHelper([], 10);


console.log(helper.pageCount(), 3);
console.log(helper.itemCount(), 24);

console.log(helper.pageItemCount(1), 10);
console.log(helper.pageItemCount(2), 4);
console.log(helper.pageItemCount(3), -1);
console.log(helper.pageIndex(40), -1);
console.log(helper.pageIndex(22), 2);
console.log(helper.pageIndex(3), 0);
console.log(helper.pageIndex(0), 0);
console.log(helper.pageIndex(-1), -1);
console.log(helper.pageIndex(-23), -1);
console.log(helper.pageIndex(-15), -1);

console.log(empty.pageCount(), 0);
console.log(empty.itemCount(), 0);
console.log(empty.pageIndex(0), -1);
console.log(empty.pageItemCount(0), -1);