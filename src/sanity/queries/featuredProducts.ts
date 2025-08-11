export const featuredProductsQuery = `
  *[_type == "featuredProducts"][0] {
    sectionTitle,
    sectionDescription,
    items[] {
      itemBackground{
        asset->{
          url
        }
      },
      itemTitle,
      itemDescription,
      itemLink
    }
  }
`;
