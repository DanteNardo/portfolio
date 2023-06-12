import PageSubtitle from '@/components/page/PageSubtitle'
import PageTitle from '@/components/page/PageTitle'
import PageWrapper from '@/components/page/PageWrapper'
import PageHeader from '@/components/page/PageHeader'
import PageBody from '@/components/page/PageBody'
import PageParagraph from '@/components/page/PageParagraph'
import PageParagraphs from '@/components/page/PageParagraphs'
import PageBackButton from '@/components/page/PageBackButton'
import CloudCodeSample from './CloudCodeSample'

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageBackButton />
        <PageSubtitle>Skills</PageSubtitle>
        <PageTitle>Cloud</PageTitle>
      </PageHeader>
      <PageBody>
        <PageParagraphs>
          <PageParagraph>
            I learned C++ at the age of fourteen and have picked up many other
            programming languages over the years. In my career I've used
            TypeScript and Java extensively at Viasat and C# and JavaScript at
            Biosero.
          </PageParagraph>
          <PageParagraph>
            I've written chess engines in C++, dungeon generation algorithms in
            Python, many video games and web servers in C#, and innumerable web
            apps in JavaScript and TypeScript.
          </PageParagraph>
        </PageParagraphs>
        <CloudCodeSample />
      </PageBody>
    </PageWrapper>
  )
}
