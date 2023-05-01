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
      text: 'REST',
      language: 'typescript',
      code: `interface User {
  id: string;
  email: string;
  userName: string;
}

async function getUser(userId: string): Promise<User> {
  try {
    const url = "https://example.com/api/v1/users/" + userId;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Response was invalid");
    }

    const user: User = await response.json();
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}`,
    },
    {
      text: 'ASP.NET',
      language: 'csharp',
      code: `[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/users")]

public class UsersController : ControllerBase
{
    private readonly QueryClient _queryClient;

    public UsersController(QueryClient queryClient)
    {
        _queryClient = queryClient ?? throw new ArgumentNullException(nameof(queryClient));
    }

    /// <summary>
    /// Gets user by id.
    /// </summary>
    /// <param name="userId">userId.</param>
    /// <param name="cancellationToken">The cancellation token.</param>
    /// <returns>
    /// User.
    /// </returns>
    [HttpGet("{userId}")]
    [ProducesResponseType(typeof(User), (int)HttpStatusCode.OK)]
    public async Task<ActionResult<User>> GetUser(string userId, CancellationToken cancellationToken = default)
    {
        var request = new GetUserRequest()
        {
            Id = userId,
        };

        var result = await _queryClient.GetUserAsync(request);

        return new User()
        {
            Id = result.User.Id,
            Email = result.User.Email,
            UserName = result.User.UserName,
        };

        return Ok(user);
    }
}`,
    },
    {
      text: 'gRPC',
      language: 'protobuf',
      code: `syntax = "proto3";

service Query {
  rpc GetUser(GetUserRequest) returns (GetUserResponse);
}

message GetUserRequest {
  string id = 1;
}

message GetUserResponse {
  message User {
    string id = 1;
    string email = 2;
    string userName = 3;
  }
  User user = 1;
}`,
    },
  ]

  return (
    <PageWrapper>
      <PageHeader>
        <PageBackButton />
        <PageSubtitle>Skills</PageSubtitle>
        <PageTitle>Backend</PageTitle>
      </PageHeader>
      <PageBody>
        <Suspense fallback={<PageParagraphsFallback />}>
          <RenderIfQuery query="tab" value="REST" renderIfMissing>
            <PageParagraphs>
              <PageParagraph>
                At Biosero Inc, I developed several public REST API gateways.
              </PageParagraph>
              <PageParagraph>
                By implementing RESTful practices, I created scalable and
                flexible APIs with easy to understand behavior for consuming
                developers.
              </PageParagraph>
              <PageParagraph>
                I was responsible for configuring each gateway with an
                authentication solution like Azure AD or Azure AD B2C and
                updating Docker and CI/CD configurations for our cloud
                Kubernetes deployment.
              </PageParagraph>
            </PageParagraphs>
          </RenderIfQuery>
          <RenderIfQuery query="tab" value="ASP.NET">
            <PageParagraphs>
              <PageParagraph>
                At Biosero Inc, I maintained three ASP.NET REST API gateways for
                distributed systems.
              </PageParagraph>
              <PageParagraph>
                I used a combination of the mediator, command and query
                responsibility segregation, and event sourcing patterns to
                organize our code bases.
              </PageParagraph>
            </PageParagraphs>
          </RenderIfQuery>
          <RenderIfQuery query="tab" value="gRPC">
            <PageParagraphs>
              <PageParagraph>
                At Biosero Inc, I developed over ten high-performance
                microservices using the open-source gRPC framework.
              </PageParagraph>
              <PageParagraph>
                By writing queries and commands in a simple protobuf definition,
                I could autogenerate and distribute both client and server files
                with build tools to speed up development.
              </PageParagraph>
              <PageParagraph>
                I also utilized the bi-directional streaming feature of gRPC for
                realtime communication between services to support features like
                a progress bar on file upload.
              </PageParagraph>
            </PageParagraphs>
          </RenderIfQuery>
        </Suspense>
        <Suspense fallback={<CodeTabsFallback />}>
          <CodeTabs href="/skills/backend" tabs={tabs} />
        </Suspense>
      </PageBody>
    </PageWrapper>
  )
}
