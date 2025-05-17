# Blog Directory Structure

This document explains the structure of the blog directory and its files.

## Directory Structure

```
/blog/
  ├── index.html           # Main blog page listing all posts
  ├── archive/
  │   └── index.html       # Archive page organized by year
  ├── categories/
  │   └── index.html       # Categories index page
  │   └── [category].html  # Individual category pages (generated)
  └── tags/
      └── index.html       # Tags index page
      └── [tag].html       # Individual tag pages (generated)
```

## Important Files

- `blog.md`: This file in the root directory defines the blog's permalink and layout.
- `_layouts/blog.html`: The template for the main blog page.
- `_layouts/archive.html`: The template for the archive page.
- `_layouts/category.html` and `category_page.html`: Templates for category pages.
- `_layouts/tag.html` and `tag_page.html`: Templates for tag pages.

## Front Matter Requirements

Each page needs proper front matter. Examples:

```yaml
---
layout: blog
---
```

## URLs and Links

When linking to blog pages from the main site, always use the full path including the baseurl:

```html
<a href="{{ site.baseurl }}/blog/">المدونة</a>
```

In HTML files that are not processed by Jekyll, use the absolute path:

```html
<a href="/neofikr/blog/">المدونة</a>
```

## Troubleshooting

If blog pages return 404 errors:
1. Check that all directories exist and have index.html files
2. Verify that links include the correct baseurl
3. Make sure GitHub Pages is configured to the correct branch
4. Clear browser cache after making changes
