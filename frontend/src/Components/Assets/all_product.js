import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  // 🏠 HOME DECOR (1–12)
  {
    id: 1,
    name: "Handwoven Bamboo Basket",
    category: "home_decor",
    image: p1_img,
    new_price: 450,
    old_price: 700,
    description: "Eco-friendly handwoven bamboo basket ideal for storage and decor.",
    tags: ["bamboo", "eco-friendly", "handmade", "storage"]
  },
  {
    id: 2,
    name: "Terracotta Clay Flower Vase",
    category: "home_decor",
    image: p2_img,
    new_price: 650,
    old_price: 900,
    description: "Traditional terracotta vase perfect for flowers and home styling.",
    tags: ["terracotta", "vase", "clay", "decor"]
  },
  {
    id: 3,
    name: "Wooden Carved Elephant Decor",
    category: "home_decor",
    image: p3_img,
    new_price: 1200,
    old_price: 1600,
    description: "Beautifully carved wooden elephant symbolizing strength and luck.",
    tags: ["wooden", "elephant", "carved", "decor"]
  },
  {
    id: 4,
    name: "Handmade Wall Hanging Macrame",
    category: "home_decor",
    image: p4_img,
    new_price: 850,
    old_price: 1200,
    description: "Stylish handmade macrame wall hanging for modern interiors.",
    tags: ["macrame", "wall", "decor", "handmade"]
  },
  {
    id: 5,
    name: "Block Printed Cushion Covers",
    category: "home_decor",
    image: p5_img,
    new_price: 550,
    old_price: 800,
    description: "Traditional block printed cushion covers with vibrant patterns.",
    tags: ["cushion", "block print", "fabric", "decor"]
  },
  {
    id: 6,
    name: "Handcrafted Brass Diya Set",
    category: "home_decor",
    image: p6_img,
    new_price: 750,
    old_price: 1100,
    description: "Elegant brass diya set perfect for festive and spiritual decor.",
    tags: ["brass", "diya", "festival", "traditional"]
  },
  {
    id: 7,
    name: "Clay Decorative Pots Set",
    category: "home_decor",
    image: p7_img,
    new_price: 600,
    old_price: 900,
    description: "Set of handcrafted clay pots ideal for decorative purposes.",
    tags: ["clay", "pots", "decor", "handmade"]
  },
  {
    id: 8,
    name: "Handmade Wooden Photo Frame",
    category: "home_decor",
    image: p8_img,
    new_price: 500,
    old_price: 750,
    description: "Rustic wooden photo frame to showcase your memories.",
    tags: ["frame", "wood", "photo", "decor"]
  },
  {
    id: 9,
    name: "Traditional Lantern Decor",
    category: "home_decor",
    image: p9_img,
    new_price: 950,
    old_price: 1300,
    description: "Vintage-style lantern adding warm ambiance to your home.",
    tags: ["lantern", "light", "decor", "traditional"]
  },
  {
    id: 10,
    name: "Handwoven Jute Floor Mat",
    category: "home_decor",
    image: p10_img,
    new_price: 1100,
    old_price: 1500,
    description: "Durable and eco-friendly jute mat for everyday use.",
    tags: ["jute", "mat", "floor", "eco"]
  },
  {
    id: 11,
    name: "Decorative Tribal Mask",
    category: "home_decor",
    image: p11_img,
    new_price: 1400,
    old_price: 1800,
    description: "Unique tribal mask showcasing traditional craftsmanship.",
    tags: ["tribal", "mask", "wall decor"]
  },
  {
    id: 12,
    name: "Handcrafted Wooden Wall Clock",
    category: "home_decor",
    image: p12_img,
    new_price: 1600,
    old_price: 2200,
    description: "Elegant wooden wall clock combining style and functionality.",
    tags: ["clock", "wood", "wall", "decor"]
  },

  {
    id: 13,
    name: "Madhubani Painting Frame",
    category: "art",
    image: p13_img,
    new_price: 1800,
    old_price: 2500,
    description: "Authentic Madhubani artwork with intricate detailing.",
    tags: ["madhubani", "painting", "art"]
  },
  {
    id: 14,
    name: "Warli Art Canvas Painting",
    category: "art",
    image: p14_img,
    new_price: 1500,
    old_price: 2100,
    description: "Minimalistic Warli art reflecting tribal life and culture.",
    tags: ["warli", "tribal", "canvas"]
  },
  {
    id: 15,
    name: "Pattachitra Traditional Painting",
    category: "art",
    image: p15_img,
    new_price: 2200,
    old_price: 3000,
    description: "Detailed Pattachitra painting inspired by mythology.",
    tags: ["pattachitra", "traditional", "art"]
  },
  {
    id: 16,
    name: "Miniature Rajasthani Painting",
    category: "art",
    image: p16_img,
    new_price: 2000,
    old_price: 2800,
    description: "Classic miniature art showcasing royal Rajasthani culture.",
    tags: ["rajasthani", "miniature", "painting"]
  },
  {
    id: 17,
    name: "Hand Painted Canvas Artwork",
    category: "art",
    image: p17_img,
    new_price: 1700,
    old_price: 2300,
    description: "Modern hand-painted canvas to enhance your interiors.",
    tags: ["canvas", "painting", "modern"]
  },
  {
    id: 18,
    name: "Abstract Handmade Wall Art",
    category: "art",
    image: p18_img,
    new_price: 1300,
    old_price: 1800,
    description: "Creative abstract wall art for contemporary homes.",
    tags: ["abstract", "wall art"]
  },
  {
    id: 19,
    name: "Folk Art Decorative Frame",
    category: "art",
    image: p19_img,
    new_price: 1600,
    old_price: 2100,
    description: "Traditional folk art frame with vibrant colors.",
    tags: ["folk", "art", "frame"]
  },
  {
    id: 20,
    name: "Handcrafted Calligraphy Art",
    category: "art",
    image: p20_img,
    new_price: 900,
    old_price: 1400,
    description: "Elegant calligraphy artwork for aesthetic appeal.",
    tags: ["calligraphy", "art"]
  },
  {
    id: 21,
    name: "Blue Pottery Decorative Plate",
    category: "art",
    image: p21_img,
    new_price: 950,
    old_price: 1300,
    description: "Handcrafted blue pottery plate with intricate designs.",
    tags: ["pottery", "blue", "decor"]
  },
  {
    id: 22,
    name: "Tribal Wall Painting Panel",
    category: "art",
    image: p22_img,
    new_price: 1400,
    old_price: 1900,
    description: "Beautiful tribal painting panel for wall decoration.",
    tags: ["tribal", "panel", "wall"]
  },
  {
    id: 23,
    name: "Handmade Canvas Portrait Art",
    category: "art",
    image: p23_img,
    new_price: 2100,
    old_price: 2800,
    description: "Handmade portrait artwork crafted with precision.",
    tags: ["portrait", "canvas"]
  },
  {
    id: 24,
    name: "Traditional Indian Scroll Painting",
    category: "art",
    image: p24_img,
    new_price: 1900,
    old_price: 2600,
    description: "Scroll painting depicting Indian heritage themes.",
    tags: ["scroll", "indian", "art"]
  },

  {
    id: 25,
    name: "Handloom Cotton Dupatta",
    category: "fashion",
    image: p25_img,
    new_price: 700,
    old_price: 1050,
    description: "Soft handloom cotton dupatta with traditional design.",
    tags: ["dupatta", "cotton", "fashion"]
  },
  {
    id: 26,
    name: "Jute Handmade Shopping Bag",
    category: "fashion",
    image: p26_img,
    new_price: 350,
    old_price: 600,
    description: "Eco-friendly jute bag perfect for everyday shopping.",
    tags: ["jute", "bag", "eco"]
  },
  {
    id: 27,
    name: "Handcrafted Leather Wallet",
    category: "fashion",
    image: p27_img,
    new_price: 900,
    old_price: 1300,
    description: "Premium leather wallet with durable craftsmanship.",
    tags: ["leather", "wallet"]
  },
  {
    id: 28,
    name: "Embroidered Sling Bag",
    category: "fashion",
    image: p28_img,
    new_price: 800,
    old_price: 1200,
    description: "Stylish embroidered sling bag for casual outings.",
    tags: ["sling", "embroidered"]
  },
  {
    id: 29,
    name: "Handmade Beaded Necklace",
    category: "fashion",
    image: p29_img,
    new_price: 500,
    old_price: 800,
    description: "Colorful handmade beaded necklace for trendy looks.",
    tags: ["necklace", "beads"]
  },
  {
    id: 30,
    name: "Clay Kulhad Tea Cups Set",
    category: "kitchen",
    image: p30_img,
    new_price: 500,
    old_price: 750,
    description: "Traditional clay kulhad cups for authentic tea experience.",
    tags: ["kulhad", "tea", "clay"]
  },
  {
    id: 31,
    name: "Handcrafted Wooden Kitchen Spoons",
    category: "kitchen",
    image: p31_img,
    new_price: 400,
    old_price: 650,
    description: "Eco-friendly wooden spoons for everyday cooking.",
    tags: ["spoons", "wood"]
  },
  {
    id: 32,
    name: "Brass Handcrafted Serving Bowl",
    category: "kitchen",
    image: p32_img,
    new_price: 1200,
    old_price: 1700,
    description: "Elegant brass serving bowl for dining occasions.",
    tags: ["brass", "bowl"]
  },
  {
    id: 33,
    name: "Handmade Leather Journal",
    category: "stationery",
    image: p33_img,
    new_price: 850,
    old_price: 1200,
    description: "Vintage leather journal for writing and sketching.",
    tags: ["journal", "leather"]
  },
  {
    id: 34,
    name: "Recycled Paper Diary Notebook",
    category: "stationery",
    image: p34_img,
    new_price: 450,
    old_price: 700,
    description: "Eco-friendly notebook made from recycled paper.",
    tags: ["notebook", "eco"]
  },
  {
    id: 35,
    name: "Handcrafted Wooden Pen Stand",
    category: "stationery",
    image: p35_img,
    new_price: 600,
    old_price: 900,
    description: "Wooden pen stand to organize your desk neatly.",
    tags: ["pen stand", "wood"]
  },
  {
    id: 36,
    name: "Artisan Handmade Bookmark Set",
    category: "stationery",
    image: p36_img,
    new_price: 300,
    old_price: 500,
    description: "Set of artistic bookmarks for book lovers.",
    tags: ["bookmark", "handmade"]
  }
];

export default all_product;