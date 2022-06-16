const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProduct1',
        price: 350,
        image: require('../assets/icon.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et rutrum augue. Nullam sapien diam, feugiat a feugiat sit amet, mollis eget nisi.'
    },
    {
        id: 101,
        name: 'Prod2',
        price: 600,
        image: require('../assets/icon.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et rutrum augue. Nullam sapien diam, feugiat a feugiat sit amet, mollis eget nisi.'
    },
    {
        id: 102,
        name: 'Cupcake',
        price: 2,
        image: require('../assets/icon.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et rutrum augue. Nullam sapien diam, feugiat a feugiat sit amet, mollis eget nisi.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}