def subseq(str)
    if(str.length() == 0)
        bres = []
        bres.push("")
        return bres
    end
    ch = str[0, 1]
    newStr = str[1, str.length() - 1]
    rstr = subseq(newStr)
    finalResult = []
    for i in (0..rstr.length - 1)
        finalResult.push(ch + rstr[i])
        finalResult.push("" + rstr[i])
    end
    return finalResult
end

puts subseq("abc")