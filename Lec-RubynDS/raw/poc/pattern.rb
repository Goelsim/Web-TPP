n = gets.chomp.to_i

def pattern(n)
    for i in (0..n - 1)
        for j in (0..i)
            print("* ")
        end
        puts
    end
end

pattern(n)