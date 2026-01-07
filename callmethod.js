//callmethod
const productInfo = {
  //productId: 1001,
  //productName: "Samsung",
  productDetails: function (rating, price) {
    return this.productId + " " + this.productName + " " + rating + " " + price;
  },
};
//console.log(productInfo.productDetails(4, 1000000));
const product = {
  productId: 10001,
  productName: "Samsung",
};
console.log(productInfo.productDetails.call(product, 4, 100000));
