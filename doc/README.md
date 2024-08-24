# Documentation

## Local Development

Make sure you have [Node.js](https://nodejs.org/) installed. Install all
dependencies using npm:

```
npm install
```

To start the local development server, execute:

```
npm start
```

## Pages

For each page there is a directory in the `/src` directory, together with an
`index.md` file within. Nested pages can be represented by nested directories.
Titles will be extracted from the first level one header `#`.

To generate `index.html` for every `index.md` based on `/src/template.html`,
execute:

```
npm run build
```

## Hero Banner

Edit `/src/hero-banner.html` to customize the hero banner on the home page.

## Design Configuration

Colors and fonts can be configured in `/src/assets/styles/config.css`.

## Automatic Side Navigation Generation

Pages can automatically generate a side navigation based on the level two
headers `##` available on the page.

![Side Navigation](./side-navigation.png)

## Custom Components Usage

There are some common custom components that can be used within any page.

### Button Links

![Button Links](./button-links.png)

```html
<ul class="button-links">
  <li class="highlight">
    <a href="#" title="Download PDF">
      <img src="/assets/img/icons/file-lines.svg" alt="Download PDF" />
    </a>
  </li>
  <li>
    <a href="#" title="View Code">
      <img src="/assets/img/icons/code.svg" alt="View Code" />
    </a>
  </li>
</ul>
```

Icons are from [Font Awesome](https://fontawesome.com), downloaded as SVG, and
put in `/src/assets/img/icons`. You can
[download more free icons here](https://fontawesome.com/search?o=r&m=free).

### Publication List

![Publication List](./publication-list.png)

```html
<ul class="publication-list">
  <li>
    <span class="title">
      Visualizing single-cell data with the neighbor embedding spectrum
    </span>
    <span class="authors">
      S Damrich, MV Klockow, P Berens, FA Hamprecht, D Kobak
    </span>
    <span class="periodical">Preprint, 2024</span>

    <ul class="button-links">
      <li class="highlight">
        <a href="#" title="Download PDF">
          <img src="/assets/img/icons/file-lines.svg" alt="Download PDF" />
        </a>
      </li>
      <li>
        <a href="#" title="View Code">
          <img src="/assets/img/icons/code.svg" alt="View Code" />
        </a>
      </li>
    </ul>
  </li>
  <li>
    <span class="title">
      <a href="#">
        Persistent homology for high-dimensional data based on spectral methods
      </a>
    </span>
    <span class="authors">S Damrich, P Berens, D Kobak</span>
    <span class="periodical"> arXiv preprint arXiv:2311.03087, 2023 </span>

    <ul class="button-links">
      <li class="highlight">
        <a href="#" title="Download PDF">
          <img src="/assets/img/icons/file-lines.svg" alt="Download PDF" />
        </a>
      </li>
      <li>
        <a href="#" title="View Code">
          <img src="/assets/img/icons/code.svg" alt="View Code" />
        </a>
      </li>
    </ul>
  </li>
</ul>
```

### Teaching List

![Teaching List](./teaching-list.png)

```html
<ul class="teaching-list">
  <li>
    <span class="type">Course</span>
    <span class="title">
      <a href="/teaching/einfuehrung-ins-ml">
        Einführung ins Machinelle Lernen
      </a>
    </span>
    <span class="date">Wintersemester 2023/24, Universität Heidelberg</span>
  </li>
  <li>
    <span class="type">Seminar</span>
    <span class="title">
      <a href="#">
        Transformers, large language models, and their use in physics
      </a>
    </span>
    <span class="date">Wintersemester 2023/24, Universität Tübingen</span>
  </li>
</ul>
```
