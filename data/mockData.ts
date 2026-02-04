import type { Product, Category, CategoryId } from '../types';
import { imageAssets } from './images';

export const products: Product[] = [
  {
    id: 1,
    name: "product_1_name",
    category: "Men",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product1.main,
    images: imageAssets.product1.gallery,
    colors: [
        { name: 'color_oatmeal', hex: '#E2D5C3', image: imageAssets.colors.oatmeal }, 
        { name: 'color_charcoal', hex: '#595959', image: imageAssets.colors.charcoal }, 
        { name: 'color_navy', hex: '#3A485E', image: imageAssets.colors.navy },
        { name: 'color_navy', hex: '#6697e6ff', image: imageAssets.colors.navy },
        { name: 'color_navy', hex: '#959daaff', image: imageAssets.colors.navy },
        
        
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "product_1_description",
    material: "product_1_material",
    care: "product_1_care",
    event: 'couple',
  },
  {
    id: 2,
    name: "product_2_name",
    category: "Men",
    subcategory: "Sweaters",
    price: 275,
    imageUrl: imageAssets.product2.main,
    images: imageAssets.product2.gallery,
    colors: [
        { name: 'color_light_grey', hex: '#D3D3D3', image: imageAssets.colors.light_grey }, 
        { name: 'color_camel', hex: '#C19A6B', image: imageAssets.colors.camel }, 
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "product_2_description",
    material: "product_2_material",
    care: "product_2_care"
  },
  {
    id: 3,
    name: "product_3_name",
    category: "Men",
    subcategory: "Sweaters",
    price: 290,
    imageUrl: imageAssets.product3.main,
    images: [
        imageAssets.product3.gallery[0],
        imageAssets.product1.gallery[1],
        imageAssets.product2.gallery[2],
    ],
    colors: [
        { name: 'color_espresso', hex: '#4B3621', image: imageAssets.colors.espresso }, 
        { name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }
    ],
    sizes: ["M", "L", "XL"],
    description: "product_3_description",
    material: "product_3_material",
    care: "product_3_care"
  },
  {
    id: 4,
    name: "product_4_name",
    category: "Women",
    subcategory: "Cardigans",
    price: 320,
    imageUrl: imageAssets.product4.main,
    images: imageAssets.product4.gallery,
    colors: [
        { name: 'color_cream', hex: '#FFFDD0', image: imageAssets.colors.cream }
    ],
    sizes: ["S", "M", "L"],
    description: "product_4_description",
    material: "product_4_material",
    care: "product_4_care",
    event: 'couple',
  },
  {
    id: 5,
    name: "product_5_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 34,
    imageUrl: imageAssets.product5.main,
    images: imageAssets.product5.gallery,
    colors: [
        { name: 'color_beige', hex: '#F5F5DC', image: imageAssets.colors.beige }, 
        { name: 'color_grey', hex: '#808080', image: imageAssets.colors.grey }
    ],
    sizes: ["One Size"],
    description: "product_5_description",
    material: "product_5_material",
    care: "product_5_care",
    event: 'christmas',
  },
  {
    id: 6,
    name: "product_6_name",
    category: "Men",
    subcategory: "Bottoms",
    price: 180,
    imageUrl: imageAssets.product6.main,
    images: imageAssets.product6.gallery,
    colors: [{ name: 'color_charcoal', hex: '#595959', image: imageAssets.colors.charcoal }],
    sizes: ["30", "32", "34", "36"],
    description: "product_6_description",
    material: "product_6_material",
    care: "product_6_care",
    event: 'company',
  },
  {
    id: 7,
    name: "product_7_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product7.main,
    images: imageAssets.product7.gallery,
    colors: [
        { name: 'color_forest_green', hex: 'rgba(160, 178, 212, 1)', image: imageAssets.colors.forest_green }, 
        { name: 'color_mustard', hex: 'rgba(180, 182, 187, 1)', image: imageAssets.colors.mustard }
    ],
    sizes: ["Free Size"],
    description: "product_7_description",
    material: "product_7_material",
    care: "product_7_care",
    event: 'christmas',
  },
  {
    id: 8,
    name: "product_8_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 120,
    imageUrl: imageAssets.product8.main,
    images: imageAssets.product8.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["S", "M", "L"],
    description: "product_8_description",
    material: "product_8_material",
    care: "product_8_care"
  },
    {
    id: 9,
    name: "product_9_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 78.23,
    imageUrl: imageAssets.product9.main,
    images: imageAssets.product9.gallery,
    colors: [{ name: 'color_light_pink', hex: '#FFB6C1', image: imageAssets.colors.light_pink }],
    sizes: ["S", "M", "L"],
    description: "product_9_description",
    material: "product_9_material",
    care: "product_9_care"
  },
  {
    id: 10,
    name: "product_10_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 65,
    imageUrl: imageAssets.product10.main,
    images: imageAssets.product10.gallery,
    colors: [{ name: 'color_cream', hex: '#FFFDD0', image: imageAssets.colors.cream }],
    sizes: ["One Size"],
    description: "product_10_description",
    material: "product_10_material",
    care: "product_10_care"
  },
    {
    id: 11,
    name: "product_11_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 71.15,
    imageUrl: imageAssets.product11.main,
    images: imageAssets.product11.gallery,
    colors: [{ name: 'color_ivory', hex: '#FFFFF0', image: imageAssets.colors.ivory }],
    sizes: ["S", "M", "L" ],
    description: "product_11_description",
    material: "product_11_material",
    care: "product_11_care",
    event: 'christmas',
  },
  {
    id: 12,
    name: "product_12_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 101.02,
    imageUrl: imageAssets.product12.main,
    images: imageAssets.product12.gallery,
    colors: [{ name: 'color_sand', hex: '#C2B280', image: imageAssets.colors.sand }],
    sizes: ["S", "M", "L", "XL"],
    description: "product_12_description",
    material: "product_12_material",
    care: "product_12_care",
    event: 'company',
  },
  {
    id: 13,
    name: "product_13_name",
    category: "Women",
    subcategory: "Dresses",
    price: 83.52,
    imageUrl: imageAssets.product13.main,
    images: imageAssets.product13.gallery,
    colors: [{ name: 'color_black', hex: '#000000', image: imageAssets.colors.black }],
    sizes: ["S", "M", "L"],
    description: "product_13_description",
    material: "product_13_material",
    care: "product_13_care"
  },
  {
    id: 14,
    name: "product_14_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 30.39,
    imageUrl: imageAssets.product14.main,
    images: imageAssets.product14.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_14_description",
    material: "product_14_material",
    care: "product_14_care"
  },
  {
    id: 15,
    name: "product_15_name",
    category: "Women",
    subcategory: "Bottoms",
    price: 320,
    imageUrl: imageAssets.product15.main,
    images: imageAssets.product15.gallery,
    colors: [{ name: 'color_oatmeal', hex: '#E2D5C3', image: imageAssets.colors.oatmeal }],
    sizes: ["S", "M", "L"],
    description: "product_15_description",
    material: "product_15_material",
    care: "product_15_care"
  },
  {
    id: 16,
    name: "product_16_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 112,
    imageUrl: imageAssets.product16.main,
    images: imageAssets.product16.gallery,
    colors: [{ name: 'color_camel', hex: '#C19A6B', image: imageAssets.colors.camel }],
    sizes: ["S", "M", "L"],
    description: "product_16_description",
    material: "product_16_material",
    care: "product_16_care"
  },
  {
    id: 17,
    name: "product_17_name",
    category: "Men",
    subcategory: "Coats",
    price: 980,
    imageUrl: imageAssets.product17.main,
    images: imageAssets.product17.gallery,
    colors: [{ name: 'color_navy', hex: '#3A485E', image: imageAssets.colors.navy }],
    sizes: ["S", "M", "L", "XL"],
    description: "product_17_description",
    material: "product_17_material",
    care: "product_17_care"
  },
  {
    id: 18,
    name: "product_18_name",
    category: "Men",
    subcategory: "Cardigans",
    price: 999,
    imageUrl: imageAssets.product18.main,
    images: imageAssets.product18.gallery,
    colors: [{ name: 'color_charcoal', hex: '#595959', image: imageAssets.colors.charcoal }],
    sizes: ["S", "M", "L"],
    description: "product_18_description",
    material: "product_18_material",
    care: "product_18_care"
  },
  {
    id: 19,
    name: "product_19_name",
    category: "Men",
    subcategory: "Vests",
    price: 220,
    imageUrl: imageAssets.product19.main,
    images: imageAssets.product19.gallery,
    colors: [{ name: 'color_olive_green', hex: '#556B2F', image: imageAssets.colors.olive_green }],
    sizes: ["M", "L", "XL"],
    description: "product_19_description",
    material: "product_19_material",
    care: "product_19_care"
  },
  {
    id: 20,
    name: "product_20_name",
    category: "Women",
    subcategory: "Cardigans",
    price: 330,
    imageUrl: imageAssets.product20.main,
    images: imageAssets.product20.gallery,
    colors: [
        { name: 'color_ivory', hex: '#FFFFF0', image: imageAssets.colors.ivory }, 
        { name: 'color_light_pink', hex: '#FFB6C1', image: imageAssets.colors.light_pink }
    ],
    sizes: ["S", "M", "L"],
    description: "product_20_description",
    material: "product_20_material",
    care: "product_20_care"
  },
  {
    id: 21,
    name: "product_21_name",
    category: "Women",
    subcategory: "Cardigans",
    price: 100,
    imageUrl: imageAssets.product21.main,
    images: imageAssets.product21.gallery,
    colors: [
        { name: 'color_heather_grey_lavender', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }
    ],
    sizes: ["S", "M", "L"],
    description: "product_21_description",
    material: "product_21_material",
    care: "product_21_care"
  },
  {
    id: 22,
    name: "product_22_name",
    category: "Women",
    subcategory: "Cardigans",
    price: 42,
    imageUrl: imageAssets.product21.main,
    images: imageAssets.product21.gallery,
    colors: [
        { name: 'color_heather_grey_lavender', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }
    ],
    sizes: ["S", "M", "L"],
    description: "product_22_description",
    material: "product_22_material",
    care: "product_22_care"
  },
  {
    id: 23,
    name: "product_23_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 14,
    imageUrl: imageAssets.product23.main,
    images: imageAssets.product23.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_23_description",
    material: "product_23_material",
    care: "product_23_care"
  },
  {
    id: 24,
    name: "product_24_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 14,
    imageUrl: imageAssets.product24.main,
    images: imageAssets.product24.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_24_description",
    material: "product_24_material",
    care: "product_24_care"
  },
  {
    id: 25,
    name: "product_25_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 14,
    imageUrl: imageAssets.product25.main,
    images: imageAssets.product25.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_25_description",
    material: "product_25_material",
    care: "product_25_care"
  },
  {
    id: 26,
    name: "product_26_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product26.main,
    images: imageAssets.product26.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_26_description",
    material: "product_26_material",
    care: "product_26_care"
  },
   {
    id: 27,
    name: "product_27_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 30.,
    imageUrl: imageAssets.product27.main,
    images: imageAssets.product27.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_27_description",
    material: "product_27_material",
    care: "product_27_care"
  },
   {
    id: 28,
    name: "product_28_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 28,
    imageUrl: imageAssets.product28.main,
    images: imageAssets.product28.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_28_description",
    material: "product_28_material",
    care: "product_28_care"
  },
  {
    id: 29,
    name: "product_29_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product29.main,
    images: imageAssets.product29.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_29_description",
    material: "product_29_material",
    care: "product_29_care"
  },
  {
    id: 30,
    name: "product_30_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product30.main,
    images: imageAssets.product30.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_30_description",
    material: "product_30_material",
    care: "product_30_care"
  },
  {
    id: 31,
    name: "product_31_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product31.main,
    images: imageAssets.product31.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_31_description",
    material: "product_31_material",
    care: "product_31_care"
  },
  {
    id: 32,
    name: "product_32_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product32.main,
    images: imageAssets.product32.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_32_description",
    material: "product_32_material",
    care: "product_32_care"
  },
   {
    id: 33,
    name: "product_33_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 19,
    imageUrl: imageAssets.product33.main,
    images: imageAssets.product33.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_33_description",
    material: "product_33_material",
    care: "product_33_care"
  },
   {
    id: 34,
    name: "product_34_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product34.main,
    images: imageAssets.product34.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_34_description",
    material: "product_34_material",
    care: "product_34_care"
  },
   {
    id: 35,
    name: "product_35_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product35.main,
    images: imageAssets.product35.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_35_description",
    material: "product_35_material",
    care: "product_35_care"
  },
     {
    id: 36,
    name: "product_36_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 24.80,
    imageUrl: imageAssets.product36.main,
    images: imageAssets.product36.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_36_description",
    material: "product_36_material",
    care: "product_36_care"
  },
   {
    id: 37,
    name: "product_37_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 14,
    imageUrl: imageAssets.product37.main,
    images: imageAssets.product37.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_37_description",
    material: "product_37_material",
    care: "product_37_care"
  },
  {
    id: 38,
    name: "product_38_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product38.main,
    images: imageAssets.product38.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_38_description",
    material: "product_38_material",
    care: "product_38_care"
  },
{
    id: 39,
    name: "product_39_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 22,
    imageUrl: imageAssets.product39.main,
    images: imageAssets.product39.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_39_description",
    material: "product_39_material",
    care: "product_39_care"
  },
  {
    id: 40,
    name: "product_40_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 30,
    imageUrl: imageAssets.product40.main,
    images: imageAssets.product40.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_40_description",
    material: "product_40_material",
    care: "product_40_care"
  },
  {
    id: 41,
    name: "product_41_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 0,
    imageUrl: imageAssets.product41.main,
    images: imageAssets.product41.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_41_description",
    material: "product_41_material",
    care: "product_41_care"
  },
  {
    id: 42,
    name: "product_42_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 34,
    imageUrl: imageAssets.product42.main,
    images: imageAssets.product42.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_42_description",
    material: "product_42_material",
    care: "product_42_care"
  },
  {
    id: 43,
    name: "product_43_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 30,
    imageUrl: imageAssets.product43.main,
    images: imageAssets.product43.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_43_description",
    material: "product_43_material",
    care: "product_43_care"
  },
  {
    id: 44,
    name: "product_44_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 30,
    imageUrl: imageAssets.product44.main,
    images: imageAssets.product44.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_44_description",
    material: "product_44_material",
    care: "product_44_care"
  },
  {
    id: 45,
    name: "product_45_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 28,
    imageUrl: imageAssets.product45.main,
    images: imageAssets.product45.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_45_description",
    material: "product_45_material",
    care: "product_45_care"
  },
  {
    id: 46,
    name: "product_46_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product46.main,
    images: imageAssets.product46.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_46_description",
    material: "product_46_material",
    care: "product_46_care"
  },
  {
    id: 47,
    name: "product_47_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 34,
    imageUrl: imageAssets.product47.main,
    images: imageAssets.product47.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_47_description",
    material: "product_47_material",
    care: "product_47_care"
  },
  {
    id: 48,
    name: "product_48_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 54,
    imageUrl: imageAssets.product48.main,
    images: imageAssets.product48.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_48_description",
    material: "product_48_material",
    care: "product_48_care"
  },
  {
    id: 49,
    name: "product_49_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product49.main,
    images: imageAssets.product49.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_49_description",
    material: "product_49_material",
    care: "product_49_care"
  },
  {
    id: 50,
    name: "product_50_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 0,
    imageUrl: imageAssets.product50.main,
    images: imageAssets.product50.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_50_description",
    material: "product_50_material",
    care: "product_50_care"
  },
  {
    id: 51,
    name: "product_51_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 0,
    imageUrl: imageAssets.product51.main,
    images: imageAssets.product51.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_51_description",
    material: "product_51_material",
    care: "product_51_care"
  },
  {
    id: 52,
    name: "product_52_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 22,
    imageUrl: imageAssets.product52.main,
    images: imageAssets.product52.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_52_description",
    material: "product_52_material",
    care: "product_52_care"
  },
  {
    id: 53,
    name: "product_53_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product53.main,
    images: imageAssets.product53.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_53_description",
    material: "product_53_material",
    care: "product_53_care"
  },
  {
    id: 54,
    name: "product_54_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 34,
    imageUrl: imageAssets.product54.main,
    images: imageAssets.product54.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_54_description",
    material: "product_54_material",
    care: "product_54_care"
  },
  {
    id: 55,
    name: "product_55_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 36,
    imageUrl: imageAssets.product55.main,
    images: imageAssets.product55.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_55_description",
    material: "product_55_material",
    care: "product_55_care"
  },
{
    id: 56,
    name: "product_56_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 74,
    imageUrl: imageAssets.product56.main,
    images: imageAssets.product56.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_56_description",
    material: "product_56_material",
    care: "product_56_care"
  },
  {
    id: 57,
    name: "product_57_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 42,
    imageUrl: imageAssets.product57.main,
    images: imageAssets.product57.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_57_description",
    material: "product_57_material",
    care: "product_57_care"
  },
   {
    id: 58,
    name: "product_58_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 0,
    imageUrl: imageAssets.product58.main,
    images: imageAssets.product58.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_58_description",
    material: "product_58_material",
    care: "product_58_care"
  },
   {
    id: 59,
    name: "product_59_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 46,
    imageUrl: imageAssets.product59.main,
    images: imageAssets.product59.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_59_description",
    material: "product_59_material",
    care: "product_59_care"
  },

  {
    id: 60,
    name: "product_60_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 28,
    imageUrl: imageAssets.product60.main,
    images: imageAssets.product60.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_60_description",
    material: "product_60_material",
    care: "product_60_care"
  },
  {
    id: 61,
    name: "product_61_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 48,
    imageUrl: imageAssets.product61.main,
    images: imageAssets.product61.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_61_description",
    material: "product_61_material",
    care: "product_61_care"
  },
  {
    id: 62,
    name: "product_62_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 62,
    imageUrl: imageAssets.product62.main,
    images: imageAssets.product62.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_62_description",
    material: "product_62_material",
    care: "product_62_care"
  },
  {
    id: 63,
    name: "product_63_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 0,
    imageUrl: imageAssets.product63.main,
    images: imageAssets.product63.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_63_description",
    material: "product_63_material",
    care: "product_63_care"
  },

  {
    id: 64,
    name: "product_64_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product64.main,
    images: imageAssets.product64.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_64_description",
    material: "product_64_material",
    care: "product_64_care"
  },

  {
    id: 65,
    name: "product_65_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 0,
    imageUrl: imageAssets.product65.main,
    images: imageAssets.product65.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_65_description",
    material: "product_65_material",
    care: "product_65_care"
  },

  {
    id: 66,
    name: "product_66_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 48,
    imageUrl: imageAssets.product66.main,
    images: imageAssets.product66.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_66_description",
    material: "product_66_material",
    care: "product_66_care"
  },

  {
    id: 67,
    name: "product_67_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 30,
    imageUrl: imageAssets.product67.main,
    images: imageAssets.product67.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_66_description",
    material: "product_66_material",
    care: "product_66_care"
  },
  {
    id: 68,
    name: "product_68_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 42,
    imageUrl: imageAssets.product68.main,
    images: imageAssets.product68.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_68_description",
    material: "product_68_material",
    care: "product_68_care"
  },

  {
    id: 69,
    name: "product_69_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 30,
    imageUrl: imageAssets.product69.main,
    images: imageAssets.product69.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_69_description",
    material: "product_69_material",
    care: "product_69_care"
  },
  {
    id: 70,
    name: "product_70_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 42,
    imageUrl: imageAssets.product70.main,
    images: imageAssets.product70.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_70_description",
    material: "product_70_material",
    care: "product_70_care"
  },

  {
    id: 71,
    name: "product_71_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 28,
    imageUrl: imageAssets.product71.main,
    images: imageAssets.product71.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_71_description",
    material: "product_71_material",
    care: "product_71_care"
  },

  {
    id: 72,
    name: "product_72_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 54,
    imageUrl: imageAssets.product72.main,
    images: imageAssets.product72.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_72_description",
    material: "product_72_material",
    care: "product_72_care"
  },

  {
    id: 73,
    name: "product_73_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 28,
    imageUrl: imageAssets.product73.main,
    images: imageAssets.product73.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_73_description",
    material: "product_73_material",
    care: "product_73_care"
  },

  {
    id: 74,
    name: "product_74_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 54,
    imageUrl: imageAssets.product74.main,
    images: imageAssets.product74.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_74_description",
    material: "product_74_material",
    care: "product_74_care"
  },

  {
    id: 75,
    name: "product_75_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 48,
    imageUrl: imageAssets.product75.main,
    images: imageAssets.product75.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_75_description",
    material: "product_75_material",
    care: "product_75_care"
  },

  {
    id: 76,
    name: "product_76_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 48,
    imageUrl: imageAssets.product76.main,
    images: imageAssets.product76.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_76_description",
    material: "product_76_material",
    care: "product_76_care"
  },

  {
    id: 77,
    name: "product_77_name",
    category: "Accessories",
    subcategory: "Hats",
    price: 26,
    imageUrl: imageAssets.product77.main,
    images: imageAssets.product77.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_77_description",
    material: "product_77_material",
    care: "product_77_care"
  },

  {
    id: 78,
    name: "product_78_name",
    category: "Accessories",
    subcategory: "Scarves",
    price: 56,
    imageUrl: imageAssets.product78.main,
    images: imageAssets.product78.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_78_description",
    material: "product_78_material",
    care: "product_78_care"
  },

  {
    id: 79,
    name: "product_79_name",
    category: "Accessories",
    subcategory: "Gloves",
    price: 8,
    imageUrl: imageAssets.product79.main,
    images: imageAssets.product79.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_79_description",
    material: "product_79_material",
    care: "product_79_care"
  },

  {
    id: 80,
    name: "product_80_name",
    category: "Accessories",
    subcategory: "Gloves",
    price: 8,
    imageUrl: imageAssets.product80.main,
    images: imageAssets.product80.gallery,
    colors: [
        { name: 'color_black', hex: '#000000', image: imageAssets.colors.black }, 
        { name: 'color_brown', hex: '#8B4513', image: imageAssets.colors.brown }
    ],
    sizes: ["Free Size"],
    description: "product_80_description",
    material: "product_80_material",
    care: "product_80_care"
  },

   {
    id: 81,
    name: "product_81_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product81.main,
    images: imageAssets.product81.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_81_description",
    material: "product_81_material",
    care: "product_81_care"
  },

  {
    id: 82,
    name: "product_82_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product82.main,
    images: imageAssets.product82.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_82_description",
    material: "product_82_material",
    care: "product_82_care"
  },

  {
    id: 83,
    name: "product_83_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product83.main,
    images: imageAssets.product83.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_83_description",
    material: "product_83_material",
    care: "product_83_care"
  },

  {
    id: 84,
    name: "product_84_name",
    category: "Women",
    subcategory: "Bottoms",
    price: 0,
    imageUrl: imageAssets.product84.main,
    images: imageAssets.product84.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_84_description",
    material: "product_84_material",
    care: "product_84_care"
  },
{
    id: 85,
    name: "product_85_name",
    category: "Women",
    subcategory: "Bottoms",
    price: 0,
    imageUrl: imageAssets.product85.main,
    images: imageAssets.product85.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_85_description",
    material: "product_85_material",
    care: "product_85_care"
  },

  {
    id: 86,
    name: "product_86_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product86.main,
    images: imageAssets.product86.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_86_description",
    material: "product_86_material",
    care: "product_86_care"
  },

  {
    id: 87,
    name: "product_87_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product87.main,
    images: imageAssets.product87.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_87_description",
    material: "product_87_material",
    care: "product_87_care"
  },

  {
    id: 88,
    name: "product_88_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product88.main,
    images: imageAssets.product88.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_88_description",
    material: "product_88_material",
    care: "product_88_care"
  },

  {
    id: 89,
  name: "product_89_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product89.main,
    images: imageAssets.product89.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_89_description",
    material: "product_89_material",
    care: "product_89_care"
},

{
    id: 90,
  name: "product_90_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product90.main,
    images: imageAssets.product90.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_90_description",
    material: "product_90_material",
    care: "product_90_care"
},

{
    id: 91,
  name: "product_91_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product91.main,
    images: imageAssets.product91.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_91_description",
    material: "product_91_material",
    care: "product_91_care"
},

{
    id: 92,
  name: "product_92_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product92.main,
    images: imageAssets.product92.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_92_description",
    material: "product_92_material",
    care: "product_92_care"
},

{
    id: 93,
  name: "product_93_name",
    category: "Women",
    subcategory: "Sweaters",
    price: 0,
    imageUrl: imageAssets.product93.main,
    images: imageAssets.product93.gallery,
    colors: [{ name: 'color_heather_grey', hex: '#B2B2B2', image: imageAssets.colors.heather_grey }],
    sizes: ["S/M", "M/L"],
    description: "product_93_description",
    material: "product_93_material",
    care: "product_93_care"
},
  






];

export const categories: { [key in CategoryId]: Category } = {
  men: {
    id: "men",
    name: "category_men_name",
    productCount: products.filter(p => p.category === 'Men').length,
    subcategories: [
      { id: 'sweaters', name: 'nav_sweaters' },
      { id: 'coat', name: 'nav_coat' },
      { id: 'cardigan', name: 'nav_cardigan' },
      { id: 'vest', name: 'nav_vest' },
      { id: 'bottoms', name: 'nav_bottoms' },
    ]
  },
  women: {
    id: "women",
    name: "category_women_name",
    productCount: products.filter(p => p.category === 'Women').length,
     subcategories: [
      { id: 'sweaters', name: 'nav_sweaters' },
      { id: 'cardigan', name: 'nav_cardigan' },
      { id: 'dress', name: 'nav_dress' },
      { id: 'vest', name: 'nav_vest' },
      { id: 'bottoms', name: 'nav_bottoms' },
      { id: 'coat', name: 'nav_coat' },
    ]
  },
  accessories: {
    id: "accessories",
    name: "category_accessories_name",
    productCount: products.filter(p => p.category === 'Accessories').length,
     subcategories: [
      { id: 'scarves', name: 'nav_scarves' },
      { id: 'hats', name: 'nav_hats' },
      { id: 'gloves', name: 'nav_gloves' },
      { id: 'socks', name: 'nav_socks' },
    ]
  },
  sweaters: {
    id: "sweaters",
    name: "category_sweaters_name",
    productCount: products.filter(p => p.subcategory === 'Sweaters').length
  },
  scarves: {
    id: "scarves",
    name: "category_scarves_name",
    productCount: products.filter(p => p.subcategory === 'Scarves').length
  },
  hats: {
    id: "hats",
    name: "category_hats_name",
    productCount: products.filter(p => p.subcategory === 'Hats').length
  },
  gloves: {
    id: "gloves",
    name: "category_gloves_name",
    productCount: products.filter(p => p.subcategory === 'Gloves').length
  },
  socks: {
    id: "socks",
    name: "category_socks_name",
    productCount: products.filter(p => p.subcategory === 'Socks').length
  },
  couple: {
    id: "couple",
    name: "category_couple_name",
    productCount: products.filter(p => p.event === 'couple').length,
  },
  christmas: {
    id: "christmas",
    name: "category_christmas_name",
    productCount: products.filter(p => p.event === 'christmas').length,
  },
  company: {
    id: "company",
    name: "category_company_name",
    productCount: products.filter(p => p.event === 'company').length,
  },
  cardigan: {
    id: "cardigan",
    name: "category_cardigan_name",
    productCount: products.filter(p => p.subcategory === 'Cardigans').length
  },
  dress: {
    id: "dress",
    name: "category_dress_name",
    productCount: products.filter(p => p.subcategory === 'Dresses').length
  },
  vest: {
    id: "vest",
    name: "category_vest_name",
    productCount: products.filter(p => p.subcategory === 'Vests').length
  },
  bottoms: {
    id: "bottoms",
    name: "category_bottoms_name",
    productCount: products.filter(p => p.subcategory === 'Bottoms').length
  },
  coat: {
    id: "coat",
    name: "category_coat_name",
    productCount: products.filter(p => p.subcategory === 'Coats').length
  },
  new_collection: {
    id: "new_collection",
    name: "category_new_collection_name",
    productCount: 1,
  },
};

// Collection page - New Collection products
// Display single featured product for New Collection
export const collectionProductIds = [2];
export const collectionProducts = products.filter(p => collectionProductIds.includes(p.id));

// Recommended products for homepage (customize IDs to change which products show)
export const recommendedProductIds = [1, 2, 3, 4, 5, 6, 7, 8];
export const recommendedProducts = products.filter(p => recommendedProductIds.includes(p.id));