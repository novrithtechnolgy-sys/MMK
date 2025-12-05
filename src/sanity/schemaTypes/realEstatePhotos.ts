export default {
  name: "realEstatePhotos",
  title: "Real Estate Photos",
  type: "document",
  fields: [
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
