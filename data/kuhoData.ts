export interface Product {
    product_id: string;
    name: string;
    link: string;
    price?: string;
}

export interface Look {
    look_id: number;
    image_url: string;
    alt_text: string;
    description?: string;
    related_products: Product[];
}

export interface Collection {
    collection_id: string;
    title: string;
    description: string;
    looks: Look[];
}

export const kuhoCollections: Collection[] = [
    {
        collection_id: "2024_SS",
        title: "2024 Spring/Summer Collection",
        description: "Crossover of utility elements and feminine sensibilities. Exploring the balance between structure and fluidity.",
        looks: [
            {
                look_id: 1,
                image_url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", 
                alt_text: "Tangerine stripe dress with minimalist silhouette",
                description: "Vibrant tangerine meets structural minimalism. A dress that defines the season's energy.",
                related_products: [
                    {
                        product_id: "PROD_123",
                        name: "Stripe Belted Dress",
                        link: "/shop/product/123",
                        price: "890,000 KRW"
                    }
                ]
            },
            {
                look_id: 2,
                image_url: "https://images.unsplash.com/photo-1550614000-4b9519e09cd3?q=80&w=1000&auto=format&fit=crop",
                alt_text: "Lavender oversized blazer setup",
                description: "Soft lavender tailored into a sharp, architectural blazer. Perfect crossover of utility and feminine.",
                related_products: [
                    {
                        product_id: "PROD_124",
                        name: "Oversized Wool Blazer",
                        link: "/shop/product/124",
                        price: "1,200,000 KRW"
                    }
                ]
            },
            {
                look_id: 3,
                image_url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
                alt_text: "Modern structural coat in beige",
                description: "A signature KUHO structural coat. Volume and line coexist in harmony.",
                related_products: []
            },
             {
                look_id: 4,
                image_url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
                alt_text: "Asymmetric brown skirt pairing",
                description: "Earth tones grounded in asymmetric cuts. The new casual standard.",
                related_products: []
            },
             {
                look_id: 5,
                image_url: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop",
                alt_text: "White minimalist shirt dress",
                description: "Pure white, pure form. The essence of KUHO minimalism.",
                related_products: []
            }
        ]
    },
    {
        collection_id: "2023_FW",
        title: "2023 Fall/Winter Collection",
        description: "Reinterpreting archival classics with modern volume.",
        looks: [
            {
                look_id: 101,
                image_url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
                alt_text: "Heavy wool coat in charcoal",
                description: "Architectural warmth. Heavy wool sculpted for movement.",
                related_products: []
            }
        ]
    }
];
