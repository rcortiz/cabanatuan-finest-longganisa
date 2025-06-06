import { defineType, defineField, defineArrayMember } from "sanity";

// Child navigation item (no nesting allowed)
export const navChildItemType = defineType({
  name: "navChildItem",
  title: "Navigation Child Item",
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
      description: 'e.g. "/shop/men", "/shop/women"',
    }),
  ],
});
