const fs = require("node:fs/promises");
const { sep } = require("node:path");
const readdir = require("recursive-readdir");
const { marked } = require("marked");
const { gfmHeadingId } = require("marked-gfm-heading-id");
const { markedSmartypants } = require("marked-smartypants");

marked.use(gfmHeadingId());
marked.use(markedSmartypants());

async function main() {
  const template = await fs.readFile("./src/template.html", "utf-8");
  const heroBanner = await fs.readFile("./src/hero-banner.html", "utf-8");

  const files = await readdir("./src", [
    (file, stats) => !stats.isDirectory() && !file.endsWith("index.md"),
  ]);

  for (const file of files) {
    const home = file === `src${sep}index.md`;
    const markdown = await fs.readFile(file, "utf-8");
    const title = markdown.match(/^#\s+(.*)$/m)?.[1];

    let html = template
      .replace("<hero-banner></hero-banner>", home ? heroBanner : "")
      .replace("<main-content></main-content>", await marked(markdown));

    if (!home && title != null) {
      html = html.replace(
        /<title>(.*)<\/title>/,
        (_, match) => `<title>${title} « ${match}</title>`
      );
    }

    await fs.writeFile(file.slice(0, -3) + ".html", html);
  }
}

main().catch(console.error);
