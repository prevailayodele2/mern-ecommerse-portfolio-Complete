import { Construction, FitnessCenter, MapsHomeWork, Memory, MenuBook, Shop, TimeToLeave, Toys } from "@mui/icons-material"
import Star from '../src/Components/Star'

export const footer  = {
        about:[
            {
                id:1,
            title: 'Careers',
                link: '/careers' 
            },
            {
                id:2,
                title: 'Our Stores',
                link: '/category' 
            },
            {
                id:3,
                title: 'Our Cares',
                link: '/cares' 
            },
            {
                id:4,
                title: 'Terms & Condition',
                link: '/terms' 
            },
            {
                id:5,
                title: 'Privacy Policy',
                link: '/careers' 
            },
            
        ],
        customer: [
           {
               id:1,
               title: 'Help Center',
               link: '/help'
           },
           {
               id:2,
               title: 'How To Buy',
               link: '/Category'
           },
           {
               id:3,
               title: 'Track Your Order',
               link: '/order'
           },
           {
               id:4,
               title: 'Corporate & Bulk Purchasing',
               link: '/category'
           },
           {
               id:5,
               title: 'Return & Refunds',
               link: '/return'
           },
        ] ,
        Contact: [
            {
                id:1,
                address: '70 Washington Square South, New York, NY 10012, United States',
                email: 'prevail@gmail.com',
                phone: '+234 8134 7604 38'
            }
        ]
    }



export const data = {
    homeSlider: [
        {
            _id: 1,
            title: '50% Off For Your First Shopping',
            btnText: 'Visit Collections',
            desc: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat molestiae quam unde 
                mollitia, aliquid nisi, aliquam quis veritatis  cum.`,
            image: '/images/product/10-02.png',
        },
        {
            _id: 2,
            title: '50% Off For Your First Shopping',
            btnText: 'Visit Collections',
            desc: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat molestiae quam unde 
                mollitia, aliquid nisi, aliquam quis veritatis  cum.`,
            image: '/images/product/11-01.png',
        },
        {
            _id: 3,
            title: '50% Off For Your First Shopping',
            btnText: 'Visit Collections',
            desc: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat molestiae quam unde 
                mollitia, aliquid nisi, aliquam quis veritatis  cum.`,
            image: '/images/product/11-03.png',
        },
        {
            _id: 4,
            title: '50% Off For Your First Shopping',
            btnText: 'Visit Collections',
            desc: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat molestiae quam unde 
                mollitia, aliquid nisi, aliquam quis veritatis  cum.`,
            image: '/images/product/11-04.png',
        },
        {
            _id: 5,
            title: '50% Off For Your First Shopping',
            btnText: 'Visit Collections',
            desc: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat molestiae quam unde 
                mollitia, aliquid nisi, aliquam quis veritatis  cum.`,
            image: '/images/product/11-05.png',
        },
        {
            _id: 6,
            title: '50% Off For Your First Shopping',
            btnText: 'Visit Collections',
            desc: `Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat molestiae quam unde 
                mollitia, aliquid nisi, aliquam quis veritatis  cum.`,
            image: '/images/product/11-06.png',
        },
    ],
    itemsliderCategory: [
        {
            title: 'motors',
            icon: <TimeToLeave sx={{ fontSize: '32px'  }}/>,
            link: '/category'
        },
        {
            title: 'Electronics',
            icon: <Memory sx={{ fontSize: '32px' }}/>,
            link: '/category'
        },
        {
            title: 'Real Estate',
            icon: <MapsHomeWork sx={{ fontSize: '32px'  }}/>,
            link: '/category'
        },
        {
            title: 'Toys',
            icon: <Toys sx={{ fontSize: '32px'  }}/>,
            link: '/category'
        },
        {
            title: 'Fitness',
            icon:  <FitnessCenter sx={{ fontSize: '32px'  }}/>,
            link: '/category'
        },
        {
            title: 'Books',
            icon: <MenuBook sx={{ fontSize: '32px'  }}/>,
            link: '/category'
        },
        {
            title: 'Hand Tools',
            icon:  <Construction sx={{ fontSize: '32px'  }} />,
            link: '/category'
        },
        {
            title: 'Shop',
            icon: <Shop sx={{ fontSize: '32px'  }}/>,
            link: '/category'
        },
    ],
    star: [
        <Star step1 step2 step3 step4 />,
    ],
    product: [
        {
            _id: 1,
            image: 'images/product/1-01.png',
            price: '112',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'Jacob Jones',
            category: 'electronic'
        },
        {
            _id: 2,
            image: 'images/product/1-02.png',
            price: '111',
            title: 'Apple Watch Series 3 GPS',
            slug: 'Apple Watch Series 3 GPS',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'John Doe',
            category: 'electronic'
        },
        {
            _id: 3,
            image: 'images/product/1-03.png',
            price: '100',
            title: 'Apple iPhone 11 (128GB)',
            slug: 'Apple iPhone 11 (128GB)',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image3.png',
            posterName: 'Devon Lane',
            category: 'electronic'
        },
        {
            _id: 4,
            image: 'images/product/1-04.png',
            price: '111',
            title: 'Apple Airpods Pro',
            slug: 'Apple Airpods Pro',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image3.png',
            posterName: 'Teresa Webb',
            category: 'toys'
        },
        {
            _id: 5,
            image: 'images/product/1-05.png',
            price: '112',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'Anette Black',
            category: 'toys'
        },
        {
            _id: 6,
            image: 'images/product/1-06.png',
            price: '100',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image1.png',
            posterName: 'Prevail Ayodele',
            category: 'toys'
        },
        {
            _id: 7,
            image: 'images/product/2-01.png',
            price: '111.04',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image1.png',
            posterName: 'John Doe',
            category: 'motors'
        },
        {
            _id: 8,
            image: 'images/product/2-02.png',
            price: '107',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Innsurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'Jacob Jones',
            category: 'motors'
        },
        {
            _id: 9,
            image: 'images/product/2-03.png',
            price: '98',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image3.png',
            posterName: 'Jacob Jones',
            category: 'motors'
        },
        {
            _id: 10,
            image: 'images/product/2-04.png',
            price: '50',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image1.png',
            posterName: 'Jacob Jones',
            category: 'fittness'
        },
        {
            _id: 11,
            image: 'images/product/2-05.png',
            price: '150',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'Jacob Jones',
            category: 'fittness'
        },
        {
            _id: 12,
            image: 'images/product/2-06.png',
            price: '12',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image3.png',
            posterName: 'Jacob Jones',
            category: 'books'
        },
        {
            _id: 13,
            image: 'images/product/3-01.png',
            price: '102',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image1.png',
            posterName: 'Jacob Jones',
            category: 'books'
        },
        {
            _id: 14,
            image: 'images/product/3-02.png',
            price: '110',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'Jacob Jones',
            category: 'Hand tools'
        },
        {
            _id: 15,
            image: 'images/product/3-03.png',
            price: '112',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'John Doe',
            category: 'Real Estate'
        },
        {
            _id: 16,
            image: 'images/product/3-04.png',
            price: '1124',
            title: 'AirPods Max',
            slug: 'AirPods Max',
            description: 'Apple Watch Series 3 GPS',
            protected: 'Insurance Protected',
            adImage: '/images/poster/image2.png',
            posterName: 'Jacob Jones',
            category: 'Real Estate'
        },
    ]
}




const none = {

products: [
{
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    slug: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ]
},
{
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    slug: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
    ]
},
{
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    slug: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/3/1.jpg"
    ]
},
{
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    slug: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/4/1.jpg",
    "https://dummyjson.com/image/i/products/4/2.jpg",
    "https://dummyjson.com/image/i/products/4/3.jpg",
    "https://dummyjson.com/image/i/products/4/4.jpg",
    "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
    ]
},
{
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    slug: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/5/1.jpg",
    "https://dummyjson.com/image/i/products/5/2.jpg",
    "https://dummyjson.com/image/i/products/5/3.jpg"
    ]
},
{
    title: "MacBook Pro",
    description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    slug: 4.57,
    stock: 83,
    brand: "APPle",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
    images: [
    "https://dummyjson.com/image/i/products/6/1.png",
    "https://dummyjson.com/image/i/products/6/2.jpg",
    "https://dummyjson.com/image/i/products/6/3.png",
    "https://dummyjson.com/image/i/products/6/4.jpg"
    ]
},
{
    title: "Samsung Galaxy Book",
    description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    slug: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/7/1.jpg",
    "https://dummyjson.com/image/i/products/7/2.jpg",
    "https://dummyjson.com/image/i/products/7/3.jpg",
    "https://dummyjson.com/image/i/products/7/thumbnail.jpg"
    ]
},
{
    title: "Microsoft Surface Laptop 4",
    description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    slug: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/8/1.jpg",
    "https://dummyjson.com/image/i/products/8/2.jpg",
    "https://dummyjson.com/image/i/products/8/3.jpg",
    "https://dummyjson.com/image/i/products/8/4.jpg",
    "https://dummyjson.com/image/i/products/8/thumbnail.jpg"
    ]
},
{
    title: "Infinix INBOOK",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    slug: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/9/1.jpg",
    "https://dummyjson.com/image/i/products/9/2.png",
    "https://dummyjson.com/image/i/products/9/3.png",
    "https://dummyjson.com/image/i/products/9/4.jpg",
    "https://dummyjson.com/image/i/products/9/thumbnail.jpg"
    ]
},
{

    title: "HP Pavilion 15-DK1056WM",
    description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    slug: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
    images: [
    "https://dummyjson.com/image/i/products/10/1.jpg",
    "https://dummyjson.com/image/i/products/10/2.jpg",
    "https://dummyjson.com/image/i/products/10/3.jpg",
    "https://dummyjson.com/image/i/products/10/thumbnail.jpeg"
    ]
},
{

    title: "perfume Oil",
    description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    discountPercentage: 8.4,
    slug: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/11/1.jpg",
    "https://dummyjson.com/image/i/products/11/2.jpg",
    "https://dummyjson.com/image/i/products/11/3.jpg",
    "https://dummyjson.com/image/i/products/11/thumbnail.jpg"
    ]
},
{

    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    discountPercentage: 15.66,
    slug: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/12/1.jpg",
    "https://dummyjson.com/image/i/products/12/2.jpg",
    "https://dummyjson.com/image/i/products/12/3.png",
    "https://dummyjson.com/image/i/products/12/4.jpg",
    "https://dummyjson.com/image/i/products/12/thumbnail.jpg"
    ]
},
{

    title: "Fog Scent Xpressio Perfume",
    description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    discountPercentage: 8.14,
    slug: 4.59,
    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
    images: [
    "https://dummyjson.com/image/i/products/13/1.jpg",
    "https://dummyjson.com/image/i/products/13/2.png",
    "https://dummyjson.com/image/i/products/13/3.jpg",
    "https://dummyjson.com/image/i/products/13/4.jpg",
    "https://dummyjson.com/image/i/products/13/thumbnail.webp"
    ]
},
{

    title: "Non-Alcoholic Concentrated Perfume Oil",
    description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    discountPercentage: 15.6,
    slug: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/14/1.jpg",
    "https://dummyjson.com/image/i/products/14/2.jpg",
    "https://dummyjson.com/image/i/products/14/3.jpg",
    "https://dummyjson.com/image/i/products/14/thumbnail.jpg"
    ]
},
{

    title: "Eau De Perfume Spray",
    description: "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    discountPercentage: 10.99,
    slug: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/15/1.jpg",
    "https://dummyjson.com/image/i/products/15/2.jpg",
    "https://dummyjson.com/image/i/products/15/3.jpg",
    "https://dummyjson.com/image/i/products/15/4.jpg",
    "https://dummyjson.com/image/i/products/15/thumbnail.jpg"
    ]
},
{

    title: "Hyaluronic Acid Serum",
    description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    slug: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    thumbnail: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
    images: [
    "https://dummyjson.com/image/i/products/16/1.png",
    "https://dummyjson.com/image/i/products/16/2.webp",
    "https://dummyjson.com/image/i/products/16/3.jpg",
    "https://dummyjson.com/image/i/products/16/4.jpg",
    "https://dummyjson.com/image/i/products/16/thumbnail.jpg"
    ]
},
{

title: "Tree Oil 30ml",
description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
price: 12,
discountPercentage: 4.09,
slug: 4.52,
stock: 78,
brand: "Hemani Tea",
category: "skincare",
thumbnail: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/17/1.jpg",
"https://dummyjson.com/image/i/products/17/2.jpg",
"https://dummyjson.com/image/i/products/17/3.jpg",
"https://dummyjson.com/image/i/products/17/thumbnail.jpg"
]
},
{

title: "Oil Free Moisturizer 100ml",
description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
price: 40,
discountPercentage: 13.1,
slug: 4.56,
stock: 88,
brand: "Dermive",
category: "skincare",
thumbnail: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/18/1.jpg",
"https://dummyjson.com/image/i/products/18/2.jpg",
"https://dummyjson.com/image/i/products/18/3.jpg",
"https://dummyjson.com/image/i/products/18/4.jpg",
"https://dummyjson.com/image/i/products/18/thumbnail.jpg"
]
},
{

title: "Skin Beauty Serum.",
description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
price: 46,
discountPercentage: 10.68,
slug: 4.42,
stock: 54,
brand: "ROREC White Rice",
category: "skincare",
thumbnail: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/19/1.jpg",
"https://dummyjson.com/image/i/products/19/2.jpg",
"https://dummyjson.com/image/i/products/19/3.png",
"https://dummyjson.com/image/i/products/19/thumbnail.jpg"
]
},
{

title: "Freckle Treatment Cream- 15gm",
description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
price: 70,
discountPercentage: 16.99,
slug: 4.06,
stock: 140,
brand: "Fair & Clear",
category: "skincare",
thumbnail: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/20/1.jpg",
"https://dummyjson.com/image/i/products/20/2.jpg",
"https://dummyjson.com/image/i/products/20/3.jpg",
"https://dummyjson.com/image/i/products/20/4.jpg",
"https://dummyjson.com/image/i/products/20/thumbnail.jpg"
]
},
{

title: "- Daal Masoor 500 grams",
description: "Fine quality Branded Product Keep in a cool and dry place",
price: 20,
discountPercentage: 4.81,
slug: 4.44,
stock: 133,
brand: "Saaf & Khaas",
category: "groceries",
thumbnail: "https://dummyjson.com/image/i/products/21/thumbnail.png",
images: [
"https://dummyjson.com/image/i/products/21/1.png",
"https://dummyjson.com/image/i/products/21/2.jpg",
"https://dummyjson.com/image/i/products/21/3.jpg"
]
},
{

title: "Elbow Macaroni - 400 gm",
description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
price: 14,
discountPercentage: 15.58,
slug: 4.57,
stock: 146,
brand: "Bake Parlor Big",
category: "groceries",
thumbnail: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/22/1.jpg",
"https://dummyjson.com/image/i/products/22/2.jpg",
"https://dummyjson.com/image/i/products/22/3.jpg"
]
},
{

title: "Orange Essence Food Flavou",
description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
price: 14,
discountPercentage: 8.04,
slug: 4.85,
stock: 26,
brand: "Baking Food Items",
category: "groceries",
thumbnail: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/23/1.jpg",
"https://dummyjson.com/image/i/products/23/2.jpg",
"https://dummyjson.com/image/i/products/23/3.jpg",
"https://dummyjson.com/image/i/products/23/4.jpg",
"https://dummyjson.com/image/i/products/23/thumbnail.jpg"
]
},
{

title: "cereals muesli fruit nuts",
description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
price: 46,
discountPercentage: 16.8,
slug: 4.94,
stock: 113,
brand: "fauji",
category: "groceries",
thumbnail: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/24/1.jpg",
"https://dummyjson.com/image/i/products/24/2.jpg",
"https://dummyjson.com/image/i/products/24/3.jpg",
"https://dummyjson.com/image/i/products/24/4.jpg",
"https://dummyjson.com/image/i/products/24/thumbnail.jpg"
]
},
{

title: "Gulab Powder 50 Gram",
description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
price: 70,
discountPercentage: 13.58,
slug: 4.87,
stock: 47,
brand: "Dry Rose",
category: "groceries",
thumbnail: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/25/1.png",
"https://dummyjson.com/image/i/products/25/2.jpg",
"https://dummyjson.com/image/i/products/25/3.png",
"https://dummyjson.com/image/i/products/25/4.jpg",
"https://dummyjson.com/image/i/products/25/thumbnail.jpg"
]
},
{

title: "Plant Hanger For Home",
description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
price: 41,
discountPercentage: 17.86,
slug: 4.08,
stock: 131,
brand: "Boho Decor",
category: "home-decoration",
thumbnail: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/26/1.jpg",
"https://dummyjson.com/image/i/products/26/2.jpg",
"https://dummyjson.com/image/i/products/26/3.jpg",
"https://dummyjson.com/image/i/products/26/4.jpg",
"https://dummyjson.com/image/i/products/26/5.jpg",
"https://dummyjson.com/image/i/products/26/thumbnail.jpg"
]
},
{

title: "Flying Wooden Bird",
description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
price: 51,
discountPercentage: 15.58,
slug: 4.41,
stock: 17,
brand: "Flying Wooden",
category: "home-decoration",
thumbnail: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
images: [
"https://dummyjson.com/image/i/products/27/1.jpg",
"https://dummyjson.com/image/i/products/27/2.jpg",
"https://dummyjson.com/image/i/products/27/3.jpg",
"https://dummyjson.com/image/i/products/27/4.jpg",
"https://dummyjson.com/image/i/products/27/thumbnail.webp"
]
},
{

title: "3D Embellishment Art Lamp",
description: "3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)",
price: 20,
discountPercentage: 16.49,
slug: 4.82,
stock: 54,
brand: "LED Lights",
category: "home-decoration",
thumbnail: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/28/1.jpg",
"https://dummyjson.com/image/i/products/28/2.jpg",
"https://dummyjson.com/image/i/products/28/3.png",
"https://dummyjson.com/image/i/products/28/4.jpg",
"https://dummyjson.com/image/i/products/28/thumbnail.jpg"
]
},
{

title: "Handcraft Chinese style",
description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
price: 60,
discountPercentage: 15.34,
slug: 4.44,
stock: 7,
brand: "luxury palace",
category: "home-decoration",
thumbnail: "https://dummyjson.com/image/i/products/29/thumbnail.webp",
images: [
"https://dummyjson.com/image/i/products/29/1.jpg",
"https://dummyjson.com/image/i/products/29/2.jpg",
"https://dummyjson.com/image/i/products/29/3.webp",
"https://dummyjson.com/image/i/products/29/4.webp",
"https://dummyjson.com/image/i/products/29/thumbnail.webp"
]
},
{

title: "Key Holder",
description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
price: 30,
discountPercentage: 2.92,
slug: 4.92,
stock: 54,
brand: "Golden",
category: "home-decoration",
thumbnail: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
images: [
"https://dummyjson.com/image/i/products/30/1.jpg",
"https://dummyjson.com/image/i/products/30/2.jpg",
"https://dummyjson.com/image/i/products/30/3.jpg",
"https://dummyjson.com/image/i/products/30/thumbnail.jpg"
]
}
]
}