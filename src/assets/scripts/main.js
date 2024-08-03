const $ = (x) => document.querySelectorAll(x);

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
