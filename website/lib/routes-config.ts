// for page navigation & to sort on leftbar
export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Get started",
    href: "/get-started",
    noLink: true,
    items: [
      { title: "Think", href: "/think" },
      { title: "Installation", href: "/installation" },
      { title: "Create", href: "/create" },
    ],
  },
  {
    title: "Website",
    href: "/website",
    noLink: true,
    items: [
      { title: "React", href: "/react" },
      { title: "Svelte", href: "/svelte" },
    ],
  },
  {
    title: "Server",
    href: "/server",
    noLink: true,
    items: [
      { title: "ExpressJS", href: "/expressjs" },
      { title: "Hono", href: "/hono" },
      { title: "Gin", href: "/gin" },
    ],
  },
  {
    title: "SSG",
    href: "/ssg",
    noLink: true,
    items: [
      { title: "Astro", href: "/astro", tag: "fast" },
      { title: "NextJS", href: "/nextjs" },
    ],
  },
  {
    title: "More",
    href: "/more",
    noLink: true,
    items: [
      { title: "Slidev", href: "/slidev" },
      { title: "Typescript", href: "/typescript" },
    ],
  },
  {
    title: "Native",
    href: "/native",
    noLink: true,
    items: [
      { title: "React Native", href: "/react-native" },
      { title: "Tauri", href: "/tauri" },
    ],
  },
  {
    title: "Network Port",
    href: "/network-port",
    noLink: true,
    items: [
      { title: "scan", href: "/scan" },
      { title: "kill", href: "/kill" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
