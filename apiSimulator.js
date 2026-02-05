// script
// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
// Resolve the Promise with an array of mock products after a 1-second delay.
// Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog".

// getProductDetails should simulate fetching product details (e.g., name, price).

const getProductDetails = (product) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Apple", price: 50 }), 1000);
  });
};

// getProductReviews should simulate fetching reviews for a product.
const getProductReviews = (reviews) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Review1", "Review2", "Review3"]), 1000);
  });
};

// getRelatedProducts should simulate fetching related products.
const getRelatedProducts = (products) => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { name: "Orange", price: 10 },
          { name: "Pear", price: 20 },
          { name: "Grape", price: 30 },
        ]),
      1000,
    );
  });
};

async function handleData() {
  try {
    const product = await getProductDetails();
    console.log("Fetched product:", product);

    const reviews = await getProductReviews(product);
    console.log("Fetched reviews:", reviews);

    const relatedProducts = await getRelatedProducts(reviews);
    console.log("Fetched related products:", relatedProducts);
  } catch (error) { //would I want an error for each variable?
    console.error("Error fetching data:", error);
  }
}

handleData();

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