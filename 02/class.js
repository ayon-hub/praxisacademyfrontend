class things {
    cunstructor(book, laptop, jar) {
        this.book = book;
        this.laptop = laptop;
        this.jar = jar;
    }
    school() {
        console.log(this.book + 'ada di dalam tas');
    }
};
const bag = new things('sketch book', 'pen', 'anything');
bag.school('sains book');

function breakfast(cereals, bread, rice) {
    this.cereals = cereals;
    this.bread = bread;
    this.rice = rice;
};

// const ayon = new makanan("kellogs", "milo", "honeystar");
// console.log(ayon);