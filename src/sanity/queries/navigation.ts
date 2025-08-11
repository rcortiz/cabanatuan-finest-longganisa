export const navigationQuery = `*[_type == "navigation"][0]{
  title,
  items[]{
    label,
    href,
    children[]{
      label,
      href
    }
  }
}`;