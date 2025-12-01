export default {
  name: "whatWeCreate",
  title: "What We Create",
  type: "document",
  fields: [
    {
      name: "number",
      title: "Card Number",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
