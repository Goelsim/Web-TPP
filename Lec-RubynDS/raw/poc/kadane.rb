n = gets.chomp.to_i

arr = []

for i in (0..n - 1)
    val = gets.chomp.to_i
    arr.push(val)
end

def kadane(arr)
    currMax = -1
    maxEnd = 0

    for i in (0..arr.length - 1)
        maxEnd = maxEnd + arr[i]
        if(currMax < maxEnd)
            currMax = maxEnd
        end
        
        if(maxEnd < 0)
            maxEnd = 0
        end
    end
    return currMax
end

puts kadane(arr)