const $ = (x) => document.querySelectorAll(x);
const h = (x) => document.createElement(x);

document.addEventListener("DOMContentLoaded", () => {
  // Mark current main navigation entry

  let currentMainNavigationLink;

  for (const a of $(".main-nav li a")) {
    const pathname = new URL(a.href).pathname;
    const isHome = pathname === "/";

    if (
      isHome
        ? window.location.pathname === pathname
        : window.location.pathname.startsWith(pathname)
    ) {
      a.parentElement.classList.add("current");
      currentMainNavigationLink = a;
      break;
    }
  }

  // Hide main navigation icon if hero banner is visible

  if ($(".hero-banner").length > 0) {
    for (const li of $(".main-nav .icon")) {
      li.remove();
    }
  }

  // Create back link

  const urlSegments = window.location.pathname.slice(1).split("/");

  if (urlSegments[urlSegments.length - 1] === "") {
    urlSegments.pop();
  }

  if (urlSegments.length > 1 && currentMainNavigationLink != null) {
    const p = h("p");
    const a = h("a");

    a.textContent = "« " + currentMainNavigationLink.textContent;
    a.href = currentMainNavigationLink.href;

    p.classList.add("back");
    p.append(a);

    $(".main-content .inner")[0].prepend(p);
  }

  // Create side navigation

  const sections = [...$(".main-content .inner h2")].filter((h2) => !!h2.id);

  if (sections.length > 0 && $(".main-content .side-nav").length === 0) {
    const nav = h("nav");
    const ol = h("ol");

    nav.classList.add("side-nav");
    nav.append(ol);

    for (const section of sections) {
      const li = h("li");
      const a = h("a");

      a.textContent = section.textContent;
      a.href = "#" + section.id;

      li.append(a);
      ol.append(li);
    }

    $(".main-content")[0].prepend(nav);
  }
});
