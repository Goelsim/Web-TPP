def is_prime(num)
    div = 2
    while(div * div <= num)
        if(num % div == 0)
            return false
        end
        div = div + 1
    end
    return true
end

a = is_prime(21)
puts "Number 21 is " + a.to_s()