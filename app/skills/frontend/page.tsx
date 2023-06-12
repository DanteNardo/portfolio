import PageSubtitle from '@/components/page/PageSubtitle'
import PageTitle from '@/components/page/PageTitle'
import PageWrapper from '@/components/page/PageWrapper'
import PageHeader from '@/components/page/PageHeader'
import PageBody from '@/components/page/PageBody'
import PageParagraph from '@/components/page/PageParagraph'
import PageParagraphs from '@/components/page/PageParagraphs'
import PageBackButton from '@/components/page/PageBackButton'
import FrontendCodeSample from './FrontendCodeSample'

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageBackButton />
        <PageSubtitle>Skills</PageSubtitle>
        <PageTitle>Frontend</PageTitle>
      </PageHeader>
      <PageBody>
        <PageParagraphs>
          <PageParagraph>
            I engage in frontend development professionally and recreationally.
            I've worked on Angular and React applications at Viasat and Blazor
            applications at Biosero and enjoy Svelte work in my free time.
          </PageParagraph>
          <PageParagraph>
            I am very comfortable with fetching data client-side or server-side,
            setting up authentication, creating component libraries, and
            dynamically styling components.
          </PageParagraph>
          <PageParagraph>
            I have numerous frontend projects on GitHub that include everything
            from full-stack Sveltekit and Next.js applications to static
            Markdown site generators.{' '}
            <a
              href="https://github.com/TheDolentCity/portfolio"
              className="text-blue-500 decoration-blue-500 hover:underline"
              target="_blank"
            >
              This entire site is on GitHub too!
            </a>
          </PageParagraph>
        </PageParagraphs>
        <FrontendCodeSample />
      </PageBody>
    </PageWrapper>
  )
}
