import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const workItems: { title: string; href: string; description: string }[] = [
  {
    title: "Web Component Library",
    href: "/web-component-library",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {workItems.map((workItem) => (
                <li>
                  <NavigationLink
                    key={workItem.title}
                    title={workItem.title}
                    href={workItem.href}
                  >
                    {workItem.description}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/resume">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resume
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const NavigationLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});
NavigationLink.displayName = "NavigationLink";
