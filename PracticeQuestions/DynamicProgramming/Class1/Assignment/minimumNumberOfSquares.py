def solve(N):
    count = [0] * (N+1)
    for i in range(1, N+1):
        count[i] = i
        x = 1
        while x*x <= i:
            count[i] = min(count[i], 1 + count[i-(x*x)])
            x+=1
    return count[N]

print(solve(10))