"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";

export default function DocsMenu({ isSheet = false }) {
  return (
    <div className="flex flex-col gap-3.5 mt-5 pb-6 sm:text-base text-[14.5px] scrollbar-none">
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/docs${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
