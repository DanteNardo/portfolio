import PageSubtitle from '@/components/page/PageSubtitle'
import PageTitle from '@/components/page/PageTitle'
import PageWrapper from '@/components/page/PageWrapper'
import PageHeader from '@/components/page/PageHeader'
import PageBody from '@/components/page/PageBody'
import PageBackButton from '@/components/page/PageBackButton'

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageBackButton />
        <PageSubtitle>Skills</PageSubtitle>
        <PageTitle>Backend</PageTitle>
      </PageHeader>
      <PageBody>
        <div className="flex flex-col gap-6">
          <div className="w-64 h-32 rounded-md bg-base-900 animate-pulse" />
          <div className="w-64 h-32 rounded-md bg-base-900 animate-pulse" />
          <div className="w-64 h-32 rounded-md bg-base-900 animate-pulse" />
        </div>
        <div className="w-xl h-lg rounded-md bg-base-900 animate-pulse" />
      </PageBody>
    </PageWrapper>
  )
}
