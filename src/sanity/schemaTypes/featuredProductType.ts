import { defineField, defineType } from "sanity";

export const featuredProductType = defineType({
  name: "featuredProducts",
  title: "Featured Products Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Our Featured Products",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Featured Items",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "featuredItem",
          title: "Featured Item",
          fields: [
            defineField({
              name: "itemBackground",
              title: "Item Background Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "itemTitle",
              title: "Item Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "itemDescription",
              title: "Item Description",
              type: "text",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "itemLink",
              title: "Item Link",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https"],
                }),
            }),
          ],
          preview: {
            select: {
              title: "itemTitle",
              // media: "itemBackground",
              subtitle: "itemDescription",
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.min(1)
          .max(12)
          .error("You must have between 1 and 12 featured items"),
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      itemsCount: "items.length",
    },
    prepare(selection: { title?: string; itemsCount?: number }) {
      const { title, itemsCount } = selection;
      return {
        title: title || "Featured Products Section",
        subtitle: `${itemsCount || 0} items`,
      };
    },
  },
});
