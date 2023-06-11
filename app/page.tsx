import BackgroundLights from './BackgroundLights'
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
    <>
      <div className="z-30 print:hidden flex md:w-[816px] justify-end">
        <span className="print:hidden block md:hidden px-4 py-0.5 rounded-full text-xs text-black bg-white">
          Use desktop for a superior experience!
        </span>
      </div>
      <div className="relative md:w-[816px] md:h-[1056px] print:w-[816px] print:h-[1056px]">
        <BackgroundLights />
        <div className="flex flex-col w-full h-full px-8 py-6 rounded print:border-[0px] border border-base-700 bg-gradient-to-b from-base-900 via-base-950 to-base-950/50 backdrop-blur-xl print:from-white print:to-white">
          <div className="flex flex-col md:flex-row print:flex-row w-full gap-8 px-2 pb-12 justify-between">
            <h1 className="grow text-5xl md:text-6xl tracking-tighter font-bold text-focus">
              Dante Nardo
            </h1>
            <div className="shrink flex flex-col sm:flex-row print:flex-row h-min gap-0.5">
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
                <ContactLink href="https://dantenardo.dev">
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
              <SectionBody className="grid grid-cols-1 sm:grid-cols-2 md:flex print:flex">
                <SectionItem href="/skills/programming">
                  <SectionItemHeader>Programming</SectionItemHeader>
                  <SectionItemParagraph>
                    C, C++, C#, Java, JavaScript, TypeScript, Python, Lua
                  </SectionItemParagraph>
                </SectionItem>
                <SectionItem href="/skills/backend">
                  <SectionItemHeader>Backend</SectionItemHeader>
                  <SectionItemParagraph>
                    REST, gRPC, NoSQL, SQL, .NET, ASP.NET Core, Node, Deno
                  </SectionItemParagraph>
                </SectionItem>
                <SectionItem href="/skills/frontend">
                  <SectionItemHeader>Frontend</SectionItemHeader>
                  <SectionItemParagraph>
                    React, Next.js, Blazor, Svelte, Sveltekit, Angular, HTML,
                    CSS, SCSS, Tailwind CSS, PostCSS, Vite, Webpack
                  </SectionItemParagraph>
                </SectionItem>
                <SectionItem href="/skills/cloud">
                  <SectionItemHeader>Cloud</SectionItemHeader>
                  <SectionItemParagraph>
                    Kubernetes, Docker, Apache Kafka, AWS, AWS KMS, AWS SQS, AWS
                    S3, AWS Lambda, DynamoDB, Azure, Cosmos DB, Azure Functions,
                    Key Vault
                  </SectionItemParagraph>
                </SectionItem>
                <SectionItem href="/skills/architecture">
                  <SectionItemHeader>Architecture</SectionItemHeader>
                  <SectionItemParagraph>
                    OOP, Microservices, Distributed Systems, Event Sourcing,
                    CQRS
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
                    OpenGL, WebGL, Unity 3D, Adobe Suite, Affinity Serif Suite
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
                      {`Led development of multiple microservices and web
                      applications, ushering in the company's SAAS Azure cloud
                      transition.`}
                    </SectionItemListItem>
                    <SectionItemListItem>
                      Created scalable REST API gateways and gRPC microservices
                      using the event sourcing and CQRS patterns.
                    </SectionItemListItem>
                    <SectionItemListItem>
                      Led development of internal web portal to create
                      subscription plans, products, and licenses for customers.
                    </SectionItemListItem>
                    <SectionItemListItem>
                      Led development of customer web portal to access
                      subscriptions, assign seats to users, and navigate to
                      external web apps.
                    </SectionItemListItem>
                    {/* <SectionItemListItem>
                      Led development of multiple web portals including an
                      internal portal to manage product offerings and licensing
                      as well as a customer portal to access products and assign
                      licenses to users.
                    </SectionItemListItem> */}
                    {/* <SectionItemListItem>
                      Led development of multiple web portals that allowed
                      internal users and external customers to manage products
                      in real time.
                    </SectionItemListItem> */}
                    <SectionItemListItem>
                      Architected and maintained two company-wide Blazor
                      component libraries, one for general purpose with a new
                      design system of my making, and another for flow
                      visualizations that could be used for visual programming
                      user interfaces.
                    </SectionItemListItem>
                    {/* <SectionItemListItem>
                      Developed multiple API gateways and gRPC based
                      microservices using the event sourcing and CQRS patterns.
                    </SectionItemListItem> */}
                  </SectionItemList>
                </SectionItem>
                <SectionItem href="/experience/viasat-web">
                  <SectionItemHeaderHorizontal>
                    <SectionItemHeader>Software Engineer</SectionItemHeader>
                    <SectionItemSubtitle>at Viasat Inc.</SectionItemSubtitle>
                    <SectionItemDate>Jan 2019 - Apr 2020</SectionItemDate>
                  </SectionItemHeaderHorizontal>
                  <SectionItemList>
                    <SectionItemListItem>
                      Developed realtime web app for business aviation customers
                      that provided accurate internet outages and quality based
                      on a flight plan or their live trajectory.
                    </SectionItemListItem>
                    <SectionItemListItem>
                      {`Architected computational geometry library and integrated
                      this library with webhooks, Amazon's S3, SQS, and
                      serverless Lambdas which cached results in DynamoDB, 
                      reducing the web application's processing time on file uploads 
                      by multiple magnitudes.`}
                    </SectionItemListItem>
                  </SectionItemList>
                </SectionItem>
              </SectionBody>
              <SectionHeader className="mt-6">Projects</SectionHeader>
              <SectionSeparator />
              <SectionBody>
                <SectionItem href="/projects/protean">
                  <SectionItemHeaderHorizontal>
                    <SectionItemHeader>Protean RPG</SectionItemHeader>
                    <SectionItemSubtitle>
                      a realtime Sveltekit web app
                    </SectionItemSubtitle>
                    <SectionItemDate>2022 - 2023</SectionItemDate>
                  </SectionItemHeaderHorizontal>
                  <SectionItemList>
                    <SectionItemListItem>
                      Users can view a list of games, join an active game, and
                      then send messages and roll virtual dice with other users
                      via web sockets.
                    </SectionItemListItem>
                    <SectionItemListItem>
                      {`Supports authentication (signup, login, reset password)
                      and authorization with PostgreSQL's Row Level Security.`}
                    </SectionItemListItem>
                  </SectionItemList>
                </SectionItem>
                {/* <SectionItem href="/projects/project-colorblind">
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
                </SectionItem> */}
              </SectionBody>
            </Section>
          </div>
        </div>
      </div>
    </>
  )
}
