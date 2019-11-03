# a = "test"
# text = <<EOB
# h#{a}ello
# hello2
# hello3
# EOB
# puts text

# puts `ls`

# a = "abcdefg"
# puts a[2, 3]

s = "Ruby is an object oriented programming language"
ar = s.split
# p ar
# ar.sort!
# ar.sort_by! { |s| s.downcase }
# p ar
# ar2 = ar.collect { |w| w.capitalize }
# p ar2.join(" ")
ans = {}
s.each_char do |c|
  ans[c] = 0 if !ans[c]
  ans[c] += 1
end
ans.keys.sort.each do |c|
  puts "#{c} : #{'*' * ans[c]}"
end
