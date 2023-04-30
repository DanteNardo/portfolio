import RenderIfQuery from '../RenderIfQuery'
import CodeTabs, { CodeTab } from '../CodeTabs'

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
  message User
  {
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
    <>
      <div className="flex w-full h-full justify-center">
        <div className="w-6xl max-w-full px-2 pt-12 md:pt-64 pb-4 overflow-y-auto">
          <div className="mb-6 text-left">
            <h2 className="mb-2 text-xl font-bold tracking-tighter font-mono">
              <span className="">Skills</span>
            </h2>
            <h1 className="mb-6 text-6xl font-bold tracking-tighter text-focus">
              Backend
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <RenderIfQuery query="tab" value="REST" renderIfMissing>
              <p className="text-lg">REST</p>
            </RenderIfQuery>
            <RenderIfQuery query="tab" value="gRPC">
              <p className="text-lg">gRPC</p>
            </RenderIfQuery>
            <CodeTabs href="/skills/backend" tabs={tabs} />
          </div>
        </div>
      </div>
    </>
  )
}
