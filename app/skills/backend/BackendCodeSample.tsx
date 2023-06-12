'use client'

import { Tab } from '@headlessui/react'
import CodeSample from '@/components/sample/CodeSample'
import SampleTab from '@/components/sample/SampleTab'
import SampleTabGroup from '@/components/sample/SampleTabGroup'
import SampleTabList from '@/components/sample/SampleTabList'
import SampleTabPanels from '@/components/sample/SampleTabPanels'

export default function BackendCodeSample() {
  const restExample = `interface User {
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
}`

  const aspdotnetSample = `[ApiController]
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
}`

  const grpcSample = `syntax = "proto3";

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
}`

  return (
    <SampleTabGroup>
      <SampleTabList>
        <SampleTab>REST</SampleTab>
        <SampleTab>ASP.NET</SampleTab>
        <SampleTab>gRPC</SampleTab>
      </SampleTabList>
      <SampleTabPanels>
        <Tab.Panel>
          <CodeSample language="typescript">{restExample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="csharp">{aspdotnetSample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="protobuf">{grpcSample}</CodeSample>
        </Tab.Panel>
      </SampleTabPanels>
    </SampleTabGroup>
  )
}
