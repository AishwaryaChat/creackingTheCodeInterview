class Solution:
    def minPushBox(self, grid):
        player = None
	    box = None
        target = None

	    n = len(grid)
	    if n == 0:
		return -1
	    m = len(grid[0])
	    if m == 0:
		    return -1
	    for i in range(n):
		    for j in range(m):
			    if grid[i][j] == 'S':
				    player = (i, j)
			    if grid[i][j] == 'T':
				    target = (i, j)
			    if grid[i][j] == 'B':
				    box = (i, j)
			    if player != None and target != None and box != None:
				    break
		    if player != None and target != None and box != None:
			    break

	queue = [(box, target, player, 0)]
	visited = set([(box, player)])
	while len(queue) > 0:
		box, target, player, steps = queue.pop()
		if target == box:
			return steps
		i, j = box
		if i > 0 and i < (n-1) and grid[i-1][j] != '#' and grid[i+1][j] != '#':
			if ((i+1, j), (i, j)) not in visited:
				if self.canGoToBox(grid, (i-1, j), player, box):
					queue.insert(0, ((i+1, j), target, (i, j), steps + 1))
					visited.add(((i+1, j), (i, j)))
			if ((i-1, j), (i, j)) not in visited:
				if self.canGoToBox(grid, (i+1, j), player, box):
					queue.insert(0, ((i-1, j), target, (i, j), steps + 1))
					visited.add(((i-1, j), (i, j)))

		if j > 0 and j < (m-1) and grid[i][j-1] != '#' and grid[i][j+1] != '#':
			if ((i, j-1), (i, j)) not in visited:
				if self.canGoToBox(grid, (i, j+1), player, box):
					queue.insert(0, ((i, j-1), target, (i, j), steps + 1))
					visited.add(((i, j-1), (i, j)))
			if ((i, j+1), (i, j)) not in visited:
				if self.canGoToBox(grid, (i, j-1), player, box):
					queue.insert(0, ((i, j+1), target, (i, j), steps + 1))
					visited.add(((i, j+1), (i, j)))
	return -1

def canGoToBox(self, grid, loc, player, box):
	if loc == player:
		return True
	rows = len(grid)
	cols = len(grid[0])
	queue = [player]
	visited = [player]

	while len(queue) != 0:
		i, j = queue.pop()
		if (i, j) == loc:
			return True
		neighbors = [(i-1, j), (i+1, j), (i, j-1), (i, j+1)]
		for x, y in neighbors:
			if x >= 0 and x < rows and y >= 0 and y < cols:
				if (x, y) != box and grid[x][y] != "#" and (x, y) not in visited:
					queue.append((x, y))
					visited.append((x, y))
	return False