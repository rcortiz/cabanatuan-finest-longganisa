import { defineType, defineField, defineArrayMember } from "sanity";

// Main navigation item (can only have navChildItem children)
export const navItemType = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "/", "/shop", "/about-us"',
    }),
    defineField({
      name: "children",
      title: "Submenu Items",
      type: "array",
      of: [defineArrayMember({ type: "navChildItem" })], // Only allows navChildItem, not navItem
      description: "Optional submenu items (only one level deep)",
    }),
  ],
});
