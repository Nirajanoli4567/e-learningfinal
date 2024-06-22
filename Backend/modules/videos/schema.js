const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    video: {
      type: "String",
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("video", videoSchema);
