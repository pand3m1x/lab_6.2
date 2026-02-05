getProductDetails()
  .then((product) => {
    console.log("Fetched product:", product);
    return getProductReviews(product);
  })
  .then((reviews) => {
    // Uncomment the line below if you want to throw an error
    // throw new Error("Can't fetch reviews");
    console.log("Fetched reviews:", reviews);
    return getRelatedProducts(reviews);
  })
  .then((relatedProducts) => {
    console.log("Fetched Related Products:", relatedProducts);
  })
  .catch((e) => {
    console.error(e);
  });

  // need network error
  // need data error