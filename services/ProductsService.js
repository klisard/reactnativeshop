const PRODUCTS = [
    {
        id: 100,
        name: 'Arduino Uno Rev3',
        price: 23,
        image: require('../assets/product.jpg'),
        description: 'The Arduino UNO is the best board to get started with electronics and coding. If this is your first experience tinkering with the platform, the UNO is the most robust board you can start playing with. The UNO is the most used and documented board of the whole Arduino family.'
    },
    {
        id: 101,
        name: 'Arduino Starter Kit Multi-language',
        price: 91.9,
        image: require('../assets/product.jpg'),
        description: 'Quickly and easily get started with learning electronics using the Arduino Starter Kit, which have a universal appeal to STEM fans at home, businesses in STEAM industries, and schools alike. No prior experience is required, as the kits introduce both coding and electronics through fun, engaging, and hands-on projects.'
    },
    {
        id: 102,
        name: 'Raspberry Pi 4 Model B 8GB RAM',
        price: 83,
        image: require('../assets/product.jpg'),
        description: 'Take speed & performance to a whole new level with the Pi 4 8GB, but in the same Raspberry Pi form factor you know and love. You can even design the board straight into end products as both the dual-band wireless LAN and Bluetooth have modular compliance certification reducing time to market and costs.'
    },
    {
        id: 103,
        name: 'Grove - Temperature & Humidity Sensor Pro',
        price: 10.7,
        image: require('../assets/product.jpg'),
        description: 'Grove-Temperature & Humidity Sensor Pro is a high accuracy temperature and humidity sensor based on the DHT22 module (also known as AM2302 or RHT03). High-cost performance and high precision make it ideal for temperature and humidity monitoring of Arduino and Raspberry Pi, you can also use it to make a thermometer and hygrometer.'
    },
    {
        id: 104,
        name: 'Digital Continuous Rotation (360) Servo',
        price: 14.9,
        image: require('../assets/product.jpg'),
        description: 'The Digital Continuous Rotation (360°) Servo Module is a high quality servo with the standard TinkerKit 3pin connector to be plugged in the Sensor Shield (remember that the Signal pin is ALWAYS the center pin).'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}