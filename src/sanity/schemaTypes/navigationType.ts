import { defineType, defineField, defineArrayMember } from "sanity";

// Main navigation document
export const navigationType = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Menu Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [defineArrayMember({ type: "navItem" })],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
