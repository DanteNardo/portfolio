import ButtonResume from './ButtonPrint'
import ContactLink from './ContactLink'
import ContactLinkIcon from './ContactLinkIcon'
import ContactLinkText from './ContactLinkText'
import Section from './Section'
import SectionBody from './SectionBody'
import SectionHeader from './SectionHeader'
import SectionItem from './SectionItem'
import SectionItemDate from './SectionItemDate'
import SectionItemHeader from './SectionItemHeader'
import SectionItemHeaderHorizontal from './SectionItemHeaderHorizontal'
import SectionItemList from './SectionItemList'
import SectionItemListItem from './SectionItemListItem'
import SectionItemParagraph from './SectionItemParagraph'
import SectionItemSubtitle from './SectionItemSubtitle'
import SectionSeparator from './SectionSeparator'
import { FiLinkedin } from 'react-icons/fi'
import { GoLink, GoGlobe, GoMarkGithub } from 'react-icons/go'

export default function Home() {
  return (
    <main
      className="flex flex-col w-screen h-screen max-w-[100vw] max-h-screen gap-4 print:p-0 px-8 py-8 items-center justify-start overflow-auto font-sans text-default bg-black print:bg-white"
      style={{ colorScheme: 'dark' }}
    >
      <h3 className="print:hidden block md:hidden w-full px-3 py-1 rounded-full text-xs text-center text-black bg-white">
        I recommend viewing this site on desktop for a superior experience!
      </h3>
      <div className="print:hidden flex md:w-[816px] justify-end">
        <ButtonResume />
      </div>
      <div className="relative flex flex-col md:w-[816px] md:h-[1056px] print:w-[816px] print:h-[1056px] px-8 py-6 rounded print:border-[0px] border border-base-700 bg-gradient-to-b from-base-900 to-base-950 print:from-white print:to-white">
        <div className="flex flex-col md:flex-row print:flex-row w-full gap-8 px-2 pb-12 justify-between">
          <h1 className="grow text-6xl tracking-tighter font-bold text-focus">
            Dante Nardo
          </h1>
          <div className="shrink flex h-min gap-0.5">
            <div className="flex flex-col gap-0.5">
              <ContactLink href="https://github.com/TheDolentCity">
                <ContactLinkIcon>
                  <GoMarkGithub />
                </ContactLinkIcon>
                <ContactLinkText>TheDolentCity</ContactLinkText>
              </ContactLink>
              <ContactLink href="https://www.linkedin.com/in/dante-nardo/">
                <ContactLinkIcon>
                  <FiLinkedin />
                </ContactLinkIcon>
                <ContactLinkText>dante-nardo</ContactLinkText>
              </ContactLink>
            </div>
            <div className="flex flex-col gap-1">
              <ContactLink href="https://www.google.com/maps/place/San+Diego,+CA/@32.8242405,-117.3891468,10z/data=!3m1!4b1!4m6!3m5!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838!16zL20vMDcxdnI">
                <ContactLinkIcon>
                  <GoGlobe />
                </ContactLinkIcon>
                <ContactLinkText>San Diego, CA</ContactLinkText>
              </ContactLink>
              <ContactLink href="dantenardo.dev">
                <ContactLinkIcon>
                  <GoLink />
                </ContactLinkIcon>
                <ContactLinkText>https://dantenardo.dev</ContactLinkText>
              </ContactLink>
            </div>
          </div>
        </div>
        <div className="flex-auto grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-4 overflow-hidden">
          <Section>
            <SectionHeader>Skills</SectionHeader>
            <SectionSeparator />
            <SectionBody className="grid grid-cols-2 md:flex print:flex">
              <SectionItem href="/skills/programming">
                <SectionItemHeader>Programming</SectionItemHeader>
                <SectionItemParagraph>
                  C, C++, C#, JavaScript, TypeScript, Python, Lua
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem href="/skills/frontend">
                <SectionItemHeader>Frontend</SectionItemHeader>
                <SectionItemParagraph>
                  React, Next.js, Angular, Blazor, Svelte, Sveltekit, HTML, CSS,
                  SCSS, Tailwind CSS, Vite, Webpack, PostCSS
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem href="/skills/backend">
                <SectionItemHeader>Backend</SectionItemHeader>
                <SectionItemParagraph>
                  REST, gRPC, NoSQL, SQL, .NET, Node, Deno
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem href="/skills/cloud">
                <SectionItemHeader>Cloud</SectionItemHeader>
                <SectionItemParagraph>
                  AWS, Azure, Kubernetes, Docker, Cosmos DB, S3, DynamoDB, Azure
                  Functions, AWS Lambda, Apache Kafka
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem href="/skills/architecture">
                <SectionItemHeader>Architecture</SectionItemHeader>
                <SectionItemParagraph>
                  OOP, Microservices, Distributed Systems, Event Sourcing, CQRS
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem href="/skills/operating-systems">
                <SectionItemHeader>Operating Systems</SectionItemHeader>
                <SectionItemParagraph>
                  Windows, Mac OS, Linux, BASH, WSL, Powershell
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem href="/skills/productivity">
                <SectionItemHeader>Productivity</SectionItemHeader>
                <SectionItemParagraph>
                  Git, Perforce, Scrum, Kanban, Jira, GitHub, CI/CD
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem href="/skills/graphics-and-design">
                <SectionItemHeader>Graphics & Design</SectionItemHeader>
                <SectionItemParagraph>
                  OpenGL, WebGL, Unity 3D, Direct X, Adobe Suite, Affinity Serif
                  Suite
                </SectionItemParagraph>
              </SectionItem>
            </SectionBody>
          </Section>
          <Section className="md:col-span-2 print:col-span-2">
            <SectionHeader className="mt-6 md:mt-0 print:mt-0">
              Education
            </SectionHeader>
            <SectionSeparator />
            <SectionBody>
              <SectionItem href="/education">
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>
                    B.S. Game Design & Development
                  </SectionItemHeader>
                  <SectionItemDate>Dec 2018</SectionItemDate>
                </SectionItemHeaderHorizontal>
                <SectionItemParagraph>
                  Rochester Institute of Technology
                </SectionItemParagraph>
              </SectionItem>
            </SectionBody>
            <SectionHeader className="mt-6">Experience</SectionHeader>
            <SectionSeparator />
            <SectionBody>
              <SectionItem href="/experience/biosero">
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>
                    Senior Software Engineer
                  </SectionItemHeader>
                  <SectionItemSubtitle>at Biosero Inc.</SectionItemSubtitle>
                  <SectionItemDate>Nov 2020 - Present</SectionItemDate>
                </SectionItemHeaderHorizontal>
                <SectionItemList>
                  <SectionItemListItem>
                    Developed distributed SAAS cloud platform in Azure that
                    included multiple licensing models, internal management
                    portals, and web products for customers.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Developed and designed three Web Assembly applications.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Led development and design of web component library.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Developed multiple REST API gateways and gRPC based
                    microservices using the event sourcing and CQRS patterns.
                  </SectionItemListItem>
                </SectionItemList>
              </SectionItem>
              <SectionItem href="/experience/viasat">
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>Software Engineer</SectionItemHeader>
                  <SectionItemSubtitle>at Viasat Inc.</SectionItemSubtitle>
                  <SectionItemDate>Jan 2019 - Apr 2020</SectionItemDate>
                </SectionItemHeaderHorizontal>
                <SectionItemList>
                  <SectionItemListItem>
                    Developed realtime full-stack web app for business aviation.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Designed computational geometry library and integrated this
                    library with backend microservice architecture.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Implemented asynchronous microservice utilizing AWS Lambdas
                    to reduce web application processing time by multiple
                    magnitudes.
                  </SectionItemListItem>
                </SectionItemList>
              </SectionItem>
              {/* <SectionItem>
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>AR Internship</SectionItemHeader>
                  <SectionItemSubtitle>at Viasat Inc.</SectionItemSubtitle>
                  <SectionItemDate>May 2018 - Aug 2018</SectionItemDate>
                </SectionItemHeaderHorizontal>
                <SectionItemList>
                  <SectionItemListItem>
                    Created an entertainment system overlay for the close
                    quarters of private jets using Microsoft Hololens and Unity
                    3D.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Developed several experimental AR prototypes including a
                    program that displayed nearby terrain in-flight using Google
                    Maps integration.
                  </SectionItemListItem>
                </SectionItemList>
              </SectionItem> */}
            </SectionBody>
            <SectionHeader className="mt-6">Projects</SectionHeader>
            <SectionSeparator />
            <SectionBody>
              <SectionItem href="/projects/protean">
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>Protean</SectionItemHeader>
                  <SectionItemSubtitle>
                    a realtime Sveltekit web app
                  </SectionItemSubtitle>
                  <SectionItemDate>2022 - 2023</SectionItemDate>
                </SectionItemHeaderHorizontal>
                <SectionItemList>
                  <SectionItemListItem>
                    Authentication with Supabase (signup, login, reset
                    password).
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Users can view a list of games, join an active game, and
                    then send messages and roll virtual dice with other users.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Users receive realtime updates via websockets.
                  </SectionItemListItem>
                </SectionItemList>
              </SectionItem>
              {/* <SectionItem>
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>Zoft</SectionItemHeader>
                  <SectionItemSubtitle>
                    a Soft-body Physics Simulation
                  </SectionItemSubtitle>
                  <SectionItemDate>2018</SectionItemDate>
                </SectionItemHeaderHorizontal>
                <SectionItemParagraph>
                  Created a 2D soft body physics simulation using a mass-spring
                  system in the Unity 3D game engine.
                </SectionItemParagraph>
              </SectionItem> */}
              <SectionItem href="/projects/project-colorblind">
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>Project Colorblind</SectionItemHeader>
                  <SectionItemSubtitle>
                    an experimental video game
                  </SectionItemSubtitle>
                  <SectionItemDate>2018</SectionItemDate>
                </SectionItemHeaderHorizontal>
                <SectionItemList>
                  <SectionItemListItem>
                    Led development of a cooperative puzzle platformer where
                    users wore colored eyeglasses that hid game elements from
                    view.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Players must work together to convey information only they
                    can see with their glasses on.
                  </SectionItemListItem>
                </SectionItemList>
              </SectionItem>
            </SectionBody>
          </Section>
        </div>
      </div>
    </main>
  )
}
