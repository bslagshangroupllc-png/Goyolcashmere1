// ====================================================================================
// ✨ IMPORTANT: HOW TO ADD IMAGES ✨
// ====================================================================================
// This application loads images from a special folder named `public/product-images`.
// You MUST create this folder structure in your project's root directory.
//
// FOLDER STRUCTURE:
// 
// your-project-root/
// ├── public/                 <-- CREATE THIS FOLDER if it doesn't exist
// │   └── product-images/     <-- CREATE THIS FOLDER and place all images inside
// │       ├── product-1-main.png
// │       ├── product-1-gallery-1.png
// │       ├── hero-1.jpg
// │       └── logo.png
// │
// ├── src/
// ├── index.html
// └── ... other files
//
// ====================================================================================
// FILE NAMING RULES:
//
// - Product Main Image:      `product-[ID]-main.png`
// - Product Gallery Image:   `product-[ID]-gallery-[NUMBER].png`
// - Color Swatch:            `color-[COLOR_NAME].png`
// - Other images (logo, etc): Use the exact name as below (e.g., 'logo.png', 'hero-1.jpg')
// ====================================================================================

// NOTE: Using local images from the `public/product-images` folder.
const imagePath = (fileName: string) => `/product-images/${fileName}`;

const generateProductAssets = (id: number, galleryCount: number) => ({
  main: imagePath(`product-${id}-main.png`),
  gallery: Array.from({ length: galleryCount }, (_, i) => imagePath(`product-${id}-gallery-${i + 1}.png`))
});

export const imageAssets = {
  logo: imagePath('logo.png'),
  kakao: imagePath('kakao.png'),
  
  // Product Images
  product1: generateProductAssets(1, 3),
  product2: generateProductAssets(2, 3),
  product3: generateProductAssets(3, 1),
  product4: generateProductAssets(4, 2),
  product5: generateProductAssets(5, 2),
  product6: generateProductAssets(6, 1),
  product7: generateProductAssets(7, 4),
  product8: generateProductAssets(8, 2),
  product9: generateProductAssets(9, 5),
  product10: generateProductAssets(10, 4),
  product11: generateProductAssets(11, 4),
  product12: generateProductAssets(12, 4),
  product13: generateProductAssets(13, 3),
  product14: generateProductAssets(14, 2),
  product15: generateProductAssets(15, 3),
  product16: generateProductAssets(16, 3),
  product17: generateProductAssets(17, 1),
  product18: generateProductAssets(18, 1),
  product19: generateProductAssets(19, 1),
  product20: generateProductAssets(20, 2),
  product21: generateProductAssets(21, 3),
  product22: generateProductAssets(22, 3),
  product23: generateProductAssets(23, 2),
  product24: generateProductAssets(24, 2),
  product25: generateProductAssets(25, 2),
  product26: generateProductAssets(26, 2),
  product27: generateProductAssets(27, 2),
  product28: generateProductAssets(28, 2),
  product29: generateProductAssets(29, 2),
  product30: generateProductAssets(30, 1),
  product31: generateProductAssets(31, 4),
  product32: generateProductAssets(32, 2),
  product33: generateProductAssets(33, 2),
  product34: generateProductAssets(34, 2),
  product35: generateProductAssets(35, 4),
  product36: generateProductAssets(36, 2),
  product37: generateProductAssets(37, 2),
  product38: generateProductAssets(38, 2),
  product39: generateProductAssets(39, 2),
  product40: generateProductAssets(40, 2),
  product41: generateProductAssets(41, 2),
  product42: generateProductAssets(42, 2),
  product43: generateProductAssets(43, 2),
  product44: generateProductAssets(44, 2),
  product45: generateProductAssets(45, 2),
  product46: generateProductAssets(46, 2),
  product47: generateProductAssets(47, 2),
  product48: generateProductAssets(48, 2),
  product49: generateProductAssets(49, 2),
  product50: generateProductAssets(50, 1),
  product51: generateProductAssets(51, 1),
  product52: generateProductAssets(52, 2),
  product53: generateProductAssets(53, 2),
  product54: generateProductAssets(54, 2),
  product55: generateProductAssets(55, 2),
  product56: generateProductAssets(56, 1),
  product57: generateProductAssets(57, 1),
  product58: generateProductAssets(58, 2),
  product59: generateProductAssets(59, 2),
  product60: generateProductAssets(60, 2),
  product61: generateProductAssets(61, 2),
  product62: generateProductAssets(62, 2),
  product63: generateProductAssets(63, 2),
  product64: generateProductAssets(64, 2),
  product65: generateProductAssets(65, 2),
  product66: generateProductAssets(66, 2),
  product67: generateProductAssets(67, 2),
  product68: generateProductAssets(68, 2),
  product69: generateProductAssets(69, 2),
  product70: generateProductAssets(70, 2),
  product71: generateProductAssets(71, 2),
  product72: generateProductAssets(72, 2),
  product73: generateProductAssets(73, 2),
  product74: generateProductAssets(74, 2),
  product75: generateProductAssets(75, 2),
  product76: generateProductAssets(76, 2),
  product77: generateProductAssets(77, 2),
  product78: generateProductAssets(78, 2),
  product79: generateProductAssets(79, 2),
  product80: generateProductAssets(80, 2),
  product81: generateProductAssets(81, 5),
  product82: generateProductAssets(82, 7),
  product83: generateProductAssets(83, 4),
  product84: generateProductAssets(84, 4),
  product85: generateProductAssets(85,2 ),
  product86: generateProductAssets(86, 2),
  product87: generateProductAssets(87, 2),
  product88: generateProductAssets(88, 2),
  product89: generateProductAssets(89, 2),
  product90: generateProductAssets(90, 1),
  product91: generateProductAssets(91, 1),
  product92: generateProductAssets(92, 1),
  product93: generateProductAssets(93, 2),


  
  // Page Images
  homePage: {
    heroImages: [
      imagePath('hero-1.png'), 
      imagePath('hero-2.png'), 
      imagePath('hero-3.png')
    ],
    promo: imagePath('promo.png'),
  },
  
  // Color Swatch Images
  colors: {
    oatmeal: imagePath('color-oatmeal.png'),
    charcoal: imagePath('color-charcoal.png'),
    navy: imagePath('color-navy.png'),
    light_grey: imagePath('color-light-grey.png'),
    camel: imagePath('color-camel.png'),
    black: imagePath('color-black.png'),
    espresso: imagePath('color-espresso.png'),
    heather_grey: imagePath('color-heather-grey.png'),
    cream: imagePath('color-cream.png'),
    dusty_rose: imagePath('color-dusty-rose.png'),
    beige: imagePath('color-beige.png'),
    grey: imagePath('color-grey.png'),
    forest_green: imagePath('color-forest-green.png'),
    mustard: imagePath('color-mustard.png'),
    brown: imagePath('color-brown.png'),
    light_pink: imagePath('color-light-pink.png'),
    ivory: imagePath('color-ivory.png'),
    sand: imagePath('color-sand.png'),
    olive_green: imagePath('color-olive-green.png'),
    blue: imagePath('color-blue.png'),
  }
};