const $ = (x) => document.querySelectorAll(x);
const h = (x) => document.createElement(x);

// Mark current main navigation entry

for (const a of $(".main-nav li a")) {
  const pathname = new URL(a.href).pathname;
  const isHome = pathname === "/";

  if (
    isHome
      ? window.location.pathname === pathname
      : window.location.pathname.startsWith(pathname)
  ) {
    a.parentElement.classList.add("current");
  }
}

// Hide main navigation icon if hero banner is visible

if ($(".hero-banner").length > 0) {
  for (const li of $(".main-nav .icon")) {
    li.remove();
  }
}

// Create side navigation

const sections = [...$(".main-content .inner h2")].filter((h2) => !!h2.id);

if (sections.length > 0 && $(".main-content .side-nav").length === 0) {
  const nav = h("nav");
  const ul = h("ul");

  nav.classList.add("side-nav");
  nav.append(ul);

  for (const section of sections) {
    const li = h("li");
    const a = h("a");

    a.textContent = section.textContent;
    a.href = "#" + section.id;

    li.append(a);
    ul.append(li);
  }

  $(".main-content")[0].prepend(nav);
}
