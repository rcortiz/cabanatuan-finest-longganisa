import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface FeaturedItem {
  itemBackground: {
    asset: {
      url: string;
    };
  };
  itemTitle: string;
  itemDescription: string;
  itemLink: string;
}

export interface FeaturedProducts {
  sectionTitle: string;
  sectionDescription: string;
  items: FeaturedItem[];
}
