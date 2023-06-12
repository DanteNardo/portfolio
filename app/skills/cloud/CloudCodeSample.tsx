'use client'

import { Tab } from '@headlessui/react'
import CodeSample from '@/components/sample/CodeSample'
import SampleTab from '@/components/sample/SampleTab'
import SampleTabGroup from '@/components/sample/SampleTabGroup'
import SampleTabList from '@/components/sample/SampleTabList'
import SampleTabPanels from '@/components/sample/SampleTabPanels'

export default function CloudCodeSample() {
  const typescriptSample = `// A custom React hook that acts as an HTML canvas reference and
// exposes callback methods on certain events
  
import { useEffect, useRef, useState } from 'react'
import { clearInterval, setInterval } from 'timers'

export const useCanvas = (
  onResize: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => void,
  onAnimate: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => void,
) => {
  const oneSecondInMilliseconds: number = 1000
  const FPS: number = 60

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [frames, setFrames] = useState<number>(0)

  // A function that is returned to clear the canvas when necessary
  function clear() {
    const canvas = canvasRef?.current
    if (!canvas) return

    const context = canvas?.getContext('2d')
    if (!context) return

    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  // Listens to the window resize event and fires the onResize callback
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef?.current
      const context = canvas?.getContext('2d')

      if (canvas && context) {
        const stageWidth = document.body.clientWidth
        const stageHeight = document.body.clientHeight
        canvas.width = stageWidth
        canvas.height = stageHeight

        onResize(canvas, context)
      }
    }

    window.addEventListener('resize', resize)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Fires the animate callback on a specified interval (60 FPS)
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef?.current
      const context = canvas?.getContext('2d')

      if (canvas && context) {
        onAnimate(canvas, context)
      }
    }

    const interval = setInterval(() => {
      setFrames((frames) => frames + 1)
      animate()
    }, oneSecondInMilliseconds / FPS)

    return () => {
      clearInterval(interval)
    }
  }, [onAnimate])

  return { canvasRef, clear }
}`

  const csharpSample = `[ApiController]
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

  const pythonSample = `# Two steps of a maze creation algorithm
  
# First step of generate_maze()
# Generate rooms of random size in the empty maze throughout
def generate_rooms(self, attempts):

  # Generate rooms until attempts are over
  while (attempts > 0):

    # Generate width and height (3, 7)
    w = randint(3, 7)
    h = randint(3, 7)

    # Generate x and y position (0, grid_size)
    x = randint(0, self.grid_size)
    y = randint(0, self.grid_size)

    valid_room = True

    # Iterate through maze and see if room is valid
    for i in range(y, y + h):
      for j in range(x, x + w):
      
        # If it isn't a valid square
        # If it isn't empty
        # If its neighbor is part of a room
        if (not self.valid_square(i, j) 
          or self.grid[i][j].cell_string != '.' 
          or self.room_neighbor(i, j) == True):		
          attempts -= 1
          valid_room = False
          break

    # If valid_room is true then we place the room
    # Iterate through maze and create room
    if valid_room:

      # Create room object
      r = Room(w, h, (y, x))
      r.generate_edges()
      self.rooms.append(r)

      for i in range(y, y + h):
        for j in range(x, x + w):
          self.grid[i][j].cell_string = '#'

    # Decrement
    attempts -= 1

# Second step of generate_maze()
# Fill the gaps between rooms with random passageways
# Does not connect the passageways to the rooms
def fill_maze(self):

  # Necessary variables
  startx = 0
  starty = 0
  
  # Iterate until we have a valid starting square
  while True:

    # Select a random starting spot
    startx = randint(0, self.grid_size-1)
    starty = randint(0, self.grid_size-1)

    # Location must not have a room nearby
    if self.room_neighbor(starty, startx) == False:
      break
    
  # ======================================
  # Generate a maze using prim's algorithm
  # ======================================

  # Rerun maze algorithm for each pocket in dungeon
  # Without this the maze may be blocked by certain rooms
  # Pockets of nothing will fill the dungeon instead of maze
  while True:

    cells = []
    count = 0

    # Select starting cell
    cc = self.grid[starty][startx]
    cells.append((cc.cell_y, cc.cell_x))

    # Add current cell's neighbors to cell list
    for cell in cc.neighbors:
      cells.append(cell)

    # While we still have walls in our list
    while len(cells) > 0:

      # Select a random cell from cell list
      rcell = randint(0, len(cells)-1)
      cc = self.grid[cells[rcell][0]][cells[rcell][1]]

      # If the cell is valid and does not neighbor a room
      if (self.valid_mazecell(cc) and 
        self.room_nearneighbor(cc.cell_y, cc.cell_x) == False):
      
        # Mark Cell
        self.grid[cc.cell_y][cc.cell_x].cell_string = 'o'

        # Add current cell's neighbors to cell list
        for cell in cc.neighbors:
          cells.append(cell)

      # At the end, remove the current cell from cell list
      cell = (cc.cell_y, cc.cell_x)
      cells.remove(cell)
    
    # ============================================
    # ========== End of Maze Algorithm ===========
    # ============================================
    # Search for pockets and repeat maze algorithm
    
    # Find pocket, save pocket data
    pocket = self.find_pockets()
    starty = pocket[0]
    startx = pocket[1]
    count  = pocket[2]

    # Check to see if we have checked every square
    # Condition: count == -1 when we can't find a pocket
    # If we have then break out of the loop (no pockets)
    # Else reset count
    if count == -1:
      break
    else: 
      count = 0`

  return (
    <SampleTabGroup>
      <SampleTabList>
        <SampleTab>Docker</SampleTab>
        <SampleTab>Cosmos DB</SampleTab>
        <SampleTab>Python</SampleTab>
      </SampleTabList>
      <SampleTabPanels>
        <Tab.Panel>
          <CodeSample language="typescript">{typescriptSample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="csharp">{csharpSample}</CodeSample>
        </Tab.Panel>
        <Tab.Panel>
          <CodeSample language="python">{pythonSample}</CodeSample>
        </Tab.Panel>
      </SampleTabPanels>
    </SampleTabGroup>
  )
}
