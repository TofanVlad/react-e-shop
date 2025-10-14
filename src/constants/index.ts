export const navLinks = Object.freeze([
    { title: 'Home', link: '/' },
    { title: 'Catalog', link: '/catalog' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
])

export const homeFeatures = Object.freeze([
    {
        icon: 'lucide:truck',
        title: 'Free Shipping',
        text: `Upgrade your style today and get FREE shipping on all orders! Don't miss out.`,
    },
    {
        icon: 'lucide:circle-star',
        title: 'Satisfaction Guarantee',
        text: 'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.',
    },
    {
        icon: 'lucide:shield-check',
        title: 'Secure Payment',
        text: 'Your security is our priority. Your payments are secure with us.',
    },
])

export const footerLinks = [
    {
        title: "SUPPORT",
        items: [
            { text: "FAQ" },
            { text: "Terms of use" },
            { text: "Privacy Policy" },
        ],
    },
    {
        title: "COMPANY",
        items: [
            { text: "About us", link: "/about" },
            { text: "Contact", link: "/contact" },
            { text: "Careers", link: "/about" },
        ],
    },
    {
        title: "SHOP",
        items: [
            { text: "My Account", link: "/profile" },
            { text: "Checkout", link: "/cart" },
            { text: "Cart", link: "/cart" },
        ],
    },
];

export const products = Object.freeze([
    {
        title: "Test product",
        price: 24,
        slug: "test1",
    },
    {
        title: "Test product",
        price: 24,
        slug: "test2",
    },
    {
        title: "Test product",
        price: 24,
        slug: "test3",
    },
    {
        title: "Test product",
        price: 24,
        slug: "test4",
    },
]);

import Browse from '@assets/Browse.webp'

export const mockProductData = Object.freeze({
    image: Browse,
    title: 'Raw Black T-Shirt Lineup',
    price: 75,
    size: 'S',
    reviews: 52,
    description: `Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.
The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.`,
})