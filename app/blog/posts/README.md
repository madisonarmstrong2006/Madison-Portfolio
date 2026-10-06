# Blog posts

Add a post by creating a new `.mdx` file in this folder (the file name becomes the web address,
e.g. `my-first-post.mdx` -> `/blog/my-first-post`). Start it with this header, then write below it:

```
---
title: 'Your post title'
publishedAt: '2026-10-06'
summary: 'One or two sentences shown on the Blog page.'
category: 'Topic label'
image: '/images/your-photo.jpg'
imageAlt: 'Describe the photo'
imagePosition: 'center 20%'
---
```

- Put the photo in `public/images/` and point `image` at it. `imagePosition` is optional: it picks which
  part of the photo stays in frame when it is cropped (for example `center top`).
- Use `##` for section headings and `[text](/work/some-project)` for links.
- Optional extras inside a post: `<Stat value="74%">text</Stat>` for a big number, and
  `<Image src="/images/x.jpg" alt="..." width="800" height="600" caption="..." />` for a photo
  (keep the width and height in quotes).
