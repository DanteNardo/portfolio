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

export default function Home() {
  return (
    <main
      className="flex w-screen h-screen max-w-[100vw] max-h-screen p-8 items-start justify-center overflow-auto text-base-500 bg-black"
      style={{ colorScheme: 'dark' }}
    >
      <div className="flex flex-col w-[816px] h-[1056px] px-12 py-8 rounded border border-base-700 bg-gradient-to-b from-base-900 to-base-950">
        <div className="w-full pb-12">
          <h1 className="text-6xl tracking-tighter font-bold text-base-300">
            Dante Nardo
          </h1>
          <h1 className="text-6xl tracking-tighter font-bold text-base-500">
            I'm an Engineer
          </h1>
        </div>
        <div className="flex-auto grid grid-cols-3 gap-12 overflow-hidden">
          <Section>
            <SectionHeader>Skills</SectionHeader>
            <SectionSeparator />
            <SectionBody>
              <SectionItem>
                <SectionItemHeader>Programming</SectionItemHeader>
                <SectionItemParagraph>
                  C, C++, C#, JavaScript, TypeScript, Python, Lua
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Frontend</SectionItemHeader>
                <SectionItemParagraph>
                  React, Next.js, Angular, Blazor, Svelte, Sveltekit, HTML, CSS,
                  SCSS, Tailwind CSS, Vite, Webpack, PostCSS
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Backend</SectionItemHeader>
                <SectionItemParagraph>
                  REST APIs, NoSQL, SQL, .NET, Node, Deno, Spring Boot
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Cloud</SectionItemHeader>
                <SectionItemParagraph>
                  AWS, Azure, Kubernetes, Docker, Cosmos DB, S3, DynamoDB, Azure
                  Functions, AWS Lambda
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Architecture</SectionItemHeader>
                <SectionItemParagraph>
                  OOP, Microservice, Distributed Systems, Event Sourcing, CQRS
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Operating Systems</SectionItemHeader>
                <SectionItemParagraph>
                  Windows, Mac OS, Linux, BASH, WSL, Powershell
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Productivity</SectionItemHeader>
                <SectionItemParagraph>
                  Git, Perforce, Scrum, Kanban, Jira, GitHub, CI/CD
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Graphics & Design</SectionItemHeader>
                <SectionItemParagraph>
                  OpenGL, WebGL, Unity 3D, Direct X, Adobe Suite, Affinity Serif
                  Suite
                </SectionItemParagraph>
              </SectionItem>
            </SectionBody>
          </Section>
          <Section className="col-span-2">
            <SectionHeader>Education</SectionHeader>
            <SectionSeparator />
            <SectionBody>
              <SectionItem>
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
            <SectionHeader className="mt-8">Experience</SectionHeader>
            <SectionSeparator />
            <SectionBody>
              <SectionItem>
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
              <SectionItem>
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
              </SectionItem>
            </SectionBody>
            <SectionHeader className="mt-8">Projects</SectionHeader>
            <SectionSeparator />
            <SectionBody>
              <SectionItem>
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>Protean</SectionItemHeader>
                  <SectionItemSubtitle>
                    a Realtime Sveltekit App
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
                    Users connected to a game will receive realtime updates
                    using the Supabase Realtime API.
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
              <SectionItem>
                <SectionItemHeaderHorizontal>
                  <SectionItemHeader>Project Colorblind</SectionItemHeader>
                  <SectionItemSubtitle>
                    an Experimental Video Game
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
