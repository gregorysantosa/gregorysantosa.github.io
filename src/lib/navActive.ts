export function normalizePath(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/";
}

/** True if `pathname` is the index or a nested page under `navHref` (e.g. /experiences/foo). */
export function isNavActive(pathname: string, navHref: string): boolean {
  const cur = normalizePath(pathname);
  const target = normalizePath(navHref);
  if (target === "/") return cur === "/";
  return cur === target || cur.startsWith(`${target}/`);
}
