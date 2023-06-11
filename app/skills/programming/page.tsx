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
      header: 'C#',
      language: 'csharp',
      body: `TODO`,
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
      header: 'gRPC',
      language: 'protobuf',
      body: `TODO`,
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
        <PageTitle>Programming</PageTitle>
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
