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
      className="flex w-screen h-screen p-8 items-start justify-center text-base-500 bg-black"
      style={{ colorScheme: 'dark' }}
    >
      <div className="w-[816px] h-[1056px] px-12 py-8 rounded border border-base-700 bg-gradient-to-b from-base-900 to-base-950">
        <div className="w-full mb-12">
          <h1 className="text-6xl tracking-tighter font-bold text-base-300">
            Dante
            <br /> Nardo
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-12">
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
                  AWS, Azure, Kubernetes, Docker, Cosmos DB, DynamoDB,
                  Serverless Functions
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
                  Git, Perforce, Scrum, Kanban, GitHub
                </SectionItemParagraph>
              </SectionItem>
              <SectionItem>
                <SectionItemHeader>Design</SectionItemHeader>
                <SectionItemParagraph>
                  Adobe Suite, Affinity Serif Suite
                </SectionItemParagraph>
              </SectionItem>
            </SectionBody>
          </Section>
          <Section className="col-span-2">
            <SectionHeader>Experience</SectionHeader>
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
                    Worked on full stack web application for business aviation.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Designed computational geometry library and integrated this
                    library with back-end microservice architecture.
                  </SectionItemListItem>
                  <SectionItemListItem>
                    Implemented asynchronous microservice utilizing AWS Lambdas
                    to reduce web application processing time by multiple
                    magnitudes.
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
