"use strict";

const presetFn = require("conventional-changelog-sprucelabs");
const Handlebars = require("handlebars");

const preset = presetFn();
const opts = preset.writerOpts;

const fields = ["mainTemplate", "headerPartial", "commitPartial", "footerPartial"];
let failed = false;

for (const field of fields) {
  if (typeof opts[field] !== "string") {
    console.error(`FAIL: writerOpts.${field} is ${typeof opts[field]}, expected string`);
    failed = true;
  }
}

if (!failed) {
  try {
    Handlebars.registerPartial("header", opts.headerPartial);
    Handlebars.registerPartial("commit", opts.commitPartial);
    Handlebars.registerPartial("footer", opts.footerPartial);
    const compiled = Handlebars.compile(opts.mainTemplate, { noEscape: true });
    compiled({ commitGroups: [] });
    console.log("PASS: changelog preset compiles and renders successfully");
  } catch (e) {
    console.error("FAIL: Handlebars compilation failed:", e.message);
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
