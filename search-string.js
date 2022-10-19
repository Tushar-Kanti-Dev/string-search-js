const products = [
        'Iphone 14Pro Max is best phone in the world',
        'Hp laptop is gorgeous laptop',
        'Samsung Phone is value for money',
        'Apple is best choose for Laptop & same brand of Iphone',
        'Laptop Lenevo is best for you',
        'I want to buy Dell laptop',
        'Iphone 13 is same to 14 ',
        '14 Pro Max is lattest Phone of Iphone'

    ]
    // search indeof 
const search = 'laptop';
const displayProduct = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
        // displayProduct.push(product);
    }
}
console.log(displayProduct);

for (const product of products) {
    if (product.toLowerCase().includes(search.toLowerCase())) {
        //displayProduct.push(product);
    }
}
console.log(displayProduct);
// startsWith 

const search2 = 'Iphone';
for (const product of products) {
    if (product.toLowerCase().startsWith(search2.toLowerCase())) {
        // displayProduct.push(product);
    }
}
console.log(displayProduct);

// ends with to search the end of the string 
const search3 = 'Iphone';
for (const product of products) {
    if (product.toLowerCase().endsWith(search3.toLowerCase())) {
        displayProduct.push(product);
    }
}
console.log(displayProduct);