import PageSubtitle from '@/components/page/PageSubtitle'
import PageTitle from '@/components/page/PageTitle'
import PageWrapper from '@/components/page/PageWrapper'
import PageHeader from '@/components/page/PageHeader'
import PageBody from '@/components/page/PageBody'
import PageParagraph from '@/components/page/PageParagraph'
import PageParagraphs from '@/components/page/PageParagraphs'
import PageBackButton from '@/components/page/PageBackButton'
import BackendCodeSample from './BackendCodeSample'

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageBackButton />
        <PageSubtitle>Skills</PageSubtitle>
        <PageTitle>Backend</PageTitle>
      </PageHeader>
      <PageBody>
        <PageParagraphs>
          <PageParagraph>
            At Biosero Inc, I developed several public REST API gateways. By
            implementing RESTful practices, I created scalable and flexible APIs
            with easy to understand behavior for consuming developers.
          </PageParagraph>
          <PageParagraph>
            I was responsible for configuring each gateway with an
            authentication solution like Azure AD and updating Docker and CI/CD
            configurations for our cloud Kubernetes deployment.
          </PageParagraph>
          <PageParagraph>
            Over ten high-performance gRPC microservices backed the gateways. By
            writing queries and commands in a simple protobuf definition, I
            could autogenerate and distribute client and server files with build
            tools to speed up development.
          </PageParagraph>
        </PageParagraphs>
        <BackendCodeSample />
      </PageBody>
    </PageWrapper>
  )
}
