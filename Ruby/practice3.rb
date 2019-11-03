numbers = [1, 2, 3, 4, 5, 6]
sum = 0
numbers.each do |n|
  sum += n
end
puts sum

sum = 0
menus = {'a': 100, 'b': 200, 'c': 500}
menus.each do |menu|
  sum += menu[1]
end
puts sum

ar = ["Ruby", "PHP", "Python", "Perl"]
sorted = ar.sort { |a, b| a <=> b }
p sorted
ar = ["Ruby", "PHP", "Python", "Perl"]
sorted = ar.sort { |a, b| b <=> a }
p sorted

hello = Proc.new do |name|
  puts "Hello, #{name}!"
end
hello.call("Ruby")
hello.call("World")