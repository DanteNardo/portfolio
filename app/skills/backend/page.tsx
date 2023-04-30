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

export default function Page() {
  const tabs: Array<CodeTab> = [
    {
      text: 'REST',
      language: 'json',
      code: `{
  "openapi": "3.0.1",
  "info": {
    "title": "Example API",
    "description": "Example API for my portfolio",
    "version": "v1.0"
  },
  "paths": {
    "/api/v1.0/users/{userId}": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Gets user by id.",
        "operationId": "GetUser",
        "parameters": [
          {
            "name": "userId",
            "in": "path",
            "description": "userId.",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Problem": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "nullable": true
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "status": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": {}
      },
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "userName": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }
    }
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
  ]

  return (
    <PageWrapper>
      <PageHeader>
        <PageBackButton />
        <PageSubtitle>Skills</PageSubtitle>
        <PageTitle>Backend</PageTitle>
      </PageHeader>
      <PageBody>
        <RenderIfQuery query="tab" value="REST" renderIfMissing>
          <PageParagraph>REST</PageParagraph>
        </RenderIfQuery>
        <RenderIfQuery query="tab" value="gRPC">
          <PageParagraphs>
            <PageParagraph>
              At Biosero Inc, I developed over ten high-performance
              microservices using the open-source gRPC framework.
            </PageParagraph>
            <PageParagraph>
              By writing our queries and commands in a simple protobuf
              definition, we could autogenerate client and server files with
              build tools to speed up development.
            </PageParagraph>
            <PageParagraph>
              We would also use the bi-directional streaming feature of gRPC for
              realtime communication between services.
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
              We used a combination of the mediator, command and query
              responsibility segregation, and event sourcing patterns to
              organize our code bases.
            </PageParagraph>
          </PageParagraphs>
        </RenderIfQuery>
        <CodeTabs href="/skills/backend" tabs={tabs} />
      </PageBody>
    </PageWrapper>
  )
}
