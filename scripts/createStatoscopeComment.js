const fs = require("fs");
const Mustache = require("mustache");
const createPRComment = require("./createPRComment");

const template = fs.readFileSync(
  "./.github/workflows/statoscope-comment.mustache",
  "utf8"
);

module.exports = async ({ github, context, core }) => {
  const data = JSON.parse(fs.readFileSync("result.json", "utf8"));
  const body = Mustache.render(template, data);

  await createPRComment({ github, context, core, body });
};
