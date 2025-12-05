export default {
  name: "designPhotos",
  title: "Design Photos",
  type: "document",
  fields: [
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
