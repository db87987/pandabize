Product.destroy_all
puts "All products were deleted"

20.times do
  Product.create(name: Faker::Lorem.words(3).join(" ").titleize, description: Faker::Lorem.paragraph(10))
  puts "Product created"
end
