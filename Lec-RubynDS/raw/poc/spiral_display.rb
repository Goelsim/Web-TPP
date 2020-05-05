m = gets.chomp.to_i
n = gets.chomp.to_i

arr = []
for i in (0..m - 1)
    row = []
    for j in (0..n - 1)
        val = gets.chomp.to_i
        row.push(val)
    end
    arr.push(row)
end

puts "******************"

def spiral_display(arr)
    cntr = 0
    m = arr.length
    n = arr[0].length
    tn = m * n
    minr = 0
    minc = 0
    maxr = m - 1
    maxc = n - 1

    while(cntr < tn)
        for i in (minr..maxr)
            while(cntr < tn)
                print(arr[i][minc].to_s + " ")
                cntr = cntr + 1
            end
        end
        minc = minc + 1
        for i in (minc..maxc)
            while(cntr < tn)
            print(arr[maxr][i].to_s + " ")
            cntr = cntr + 1
            end
        end
        maxr = maxr - 1
        for i in (maxr).downto(minr)
            while(cntr < tn)
            print(arr[i][maxc].to_s + " ")
            cntr = cntr + 1
            end
        end
        maxc = maxc - 1
        for i in (maxc).downto(minc)
            while(cntr < tn)
            print(arr[minr][i].to_s + " ")
            cntr = cntr + 1
            end
        end
        minr = minr + 1
    end
    puts
end

spiral_display(arr)