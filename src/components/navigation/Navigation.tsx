import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const workItems: { title: string; href: string; description: string }[] = [
  {
    title: 'Biosero Cloud Platform',
    href: '/work/cloud-platform',
    description: "Built Biosero's SAAS cloud platform from the ground up",
  },
  {
    title: 'Viasat Outage Predictions',
    href: '/work/viasat-outages',
    description:
      'Created web app to predict internet outages for in-flight wifi',
  },
  {
    title: 'Component Library',
    href: '/work/component-library',
    description: 'Developed and designed general use web component library',
  },
  {
    title: 'Flow Library',
    href: '/work/flow-library',
    description:
      'Implemented library for visualizing programming flows on the web',
  },
];

const projectItems: { title: string; href: string; description: string }[] = [
  {
    title: 'Protean App',
    href: '/projects/protean',
    description:
      'Allows anyone to roll dice and send messages in real-time with friends',
  },
  {
    title: 'Portfolio',
    href: '/projects/portfolio',
    description:
      'Built this portfolio site from the ground up for user experience',
  },
  {
    title: 'Cerberus',
    href: '/projects/cerberus',
    description:
      'A microservice that polls RSS feeds and sends new posts to discord users',
  },
];

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[20rem] gap-3 p-4 md:w-[36rem] md:grid-cols-2 lg:w-[600px] ">
              {workItems.map((workItem) => (
                <li key={workItem.title}>
                  <NavigationLink title={workItem.title} href={workItem.href}>
                    {workItem.description}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[20rem] gap-3 p-4 md:w-[36rem] md:grid-cols-2 lg:w-[600px] ">
              {projectItems.map((projectItem) => (
                <li key={projectItem.title}>
                  <NavigationLink
                    title={projectItem.title}
                    href={projectItem.href}
                  >
                    {projectItem.description}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/education"
            className={navigationMenuTriggerStyle()}
          >
            Education
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const NavigationLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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
NavigationLink.displayName = 'NavigationLink';
