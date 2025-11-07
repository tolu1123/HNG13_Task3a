export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: "headphones" | "earphones" | "speakers";
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
}

export interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludeItem {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

export interface OtherProduct {
  slug: string;
  name: string;
  image: ImageSet;
}

export interface ProductData {
  data: Product[];
}
