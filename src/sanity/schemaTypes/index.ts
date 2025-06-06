import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { navChildItemType } from "./navChildItemType";
import { navItemType } from "./navItemType";
import { navigationType } from "./navigationType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    navChildItemType,
    navItemType,
    navigationType,
  ],
};
