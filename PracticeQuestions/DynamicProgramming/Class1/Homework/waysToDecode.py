# Ways to Decode

# Problem Description
# A message containing letters from A-Z is being encoded to numbers using the following mapping:

# 'A' -> 1
# 'B' -> 2
# ...
# 'Z' -> 26
# Given an encoded message denoted by string A containing digits, determine the total number of ways to decode it modulo 109 + 7.

# Problem Constraints
# 1 <= length(A) <= 10^5

# Input Format
# The first and the only argument is a string A.

# Output Format
# Return an integer, representing the number of ways to decode the string modulo 109 + 7.

# Example Input
# Input 1:

#  A = "12"
# Input 2:

#  A = "8"

# Example Output
# Output 1:

#  2
# Output 2:

#  1

# Example Explanation
# Explanation 1:

#  Given encoded message "8", it could be decoded as only "H" (8).
#  The number of ways decoding "8" is 1.
# Explanation 2:

#  Given encoded message "12", it could be decoded as "AB" (1, 2) or "L" (12).
#  The number of ways decoding "12" is 2.


def solve(A):
    N = len(A)
    MOD = pow(10, 9) + 7
    if A[0] == 0:
        return 0
    DP = [0] * (N + 1)
    DP[0] = 1
    DP[1] = 1
    for i in range(2, N + 1):
        numA = int(A[i - 1])
        print("numA", numA)
        numB = int(A[i - 2])
        if numA >= 1 & numA <= 9:
            print("inside", numA)
            DP[i] = DP[i - 1]
        if numB == 1 | numB == 2 & numA >= 0 & numA <= 6:
            DP[i] = (DP[i] + DP[i - 2]) % MOD
    print(DP)
    return DP[N]

A = "4126"
print(solve(A))
