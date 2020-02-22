
# https://www.tutorialspoint.com/GCD-of-an-array-of-numbers-in-java
def generalizedGCD(num, arr):
  def gcd(a, b):
    while(b>0):
      temp = b
      b = a%b
      a = temp
      
    return a

  result = gcd(arr[0], arr[1])

  for i in range(2, len(arr)):
    result = gcd(result, arr[i])

  return result

a = generalizedGCD(5, [12,18,24])
b = generalizedGCD(5, [10,4,24])
print(a,b)