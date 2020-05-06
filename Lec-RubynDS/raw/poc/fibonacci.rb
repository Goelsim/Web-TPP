n = gets.chomp.to_i

def fibonacci(n)
    if(n <= 1)
        return n
    end
    return fibonacci(n - 1) + fibonacci(n - 2)
end

puts fibonacci(n)