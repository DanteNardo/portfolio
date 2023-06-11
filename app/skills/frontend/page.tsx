import { Suspense } from 'react'
import RenderIfQuery from '../RenderIfQuery'
import CodeTabs, { CodeTab } from '../CodeTabs'
import PageSubtitle from '@/app/PageSubtitle'
import PageTitle from '@/app/PageTitle'
import PageWrapper from '@/app/PageWrapper'
import PageHeader from '@/app/PageHeader'
import PageBody from '@/app/PageBody'
import PageParagraph from '@/app/PageParagraph'
import PageParagraphs from '@/app/PageParagraphs'
import PageBackButton from '@/app/PageBackButton'

function PageParagraphsFallback() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-64 h-32 rounded-md bg-base-900 animate-pulse" />
      <div className="w-64 h-32 rounded-md bg-base-900 animate-pulse" />
      <div className="w-64 h-32 rounded-md bg-base-900 animate-pulse" />
    </div>
  )
}

function CodeTabsFallback() {
  return <div className="w-xl h-lg rounded-md bg-base-900 animate-pulse" />
}

export default function Page() {
  const tabs: Array<CodeTab> = [
    {
      header: 'TypeScript',
      language: 'typescript',
      body: `TODO`,
      code: `TODO`,
    },
    {
      header: 'C#',
      language: 'csharp',
      body: `TODO`,
      code: `TODO`,
    },
    {
      header: 'gRPC',
      language: 'protobuf',
      body: `TODO`,
      code: `TODO`,
    },
  ]

  return (
    <PageWrapper>
      <PageHeader>
        <PageBackButton />
        <PageSubtitle>Skills</PageSubtitle>
        <PageTitle>Frontend</PageTitle>
      </PageHeader>
      <PageBody>
        <Suspense fallback={<PageParagraphsFallback />}>
          {tabs?.map((tab: CodeTab, i: number) => (
            <RenderIfQuery
              key={tab?.header}
              query="tab"
              value={tab?.header}
              renderIfMissing={i === 0}
            >
              <PageParagraphs>
                <PageParagraph>{tab?.body}</PageParagraph>
              </PageParagraphs>
            </RenderIfQuery>
          ))}
        </Suspense>
        <Suspense fallback={<CodeTabsFallback />}>
          <CodeTabs href="/skills/programming" tabs={tabs} />
        </Suspense>
      </PageBody>
    </PageWrapper>
  )
}
