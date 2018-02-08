#products
Product.destroy_all
product_1 = Product.create!(name: "Bicycle 1", description: Faker::Lorem.paragraph(10))
puts "Products were created"

#option types
OptionType.destroy_all
wheel_size = OptionType.create!(name: "Wheel size")
rim_color = OptionType.create!(name: "Rim color", position: 1)
puts "Option types were created"

#option values
OptionValue.destroy_all
wheel_17 = OptionValue.create!(position: 0, name: "17", option_type_id: wheel_size.id)
wheel_18 = OptionValue.create!(position: 1, name: "18", option_type_id: wheel_size.id)
wheel_19 = OptionValue.create!(position: 2, name: "19", option_type_id: wheel_size.id)
puts "Wheel sizes values were creates"

black_rim = OptionValue.create!(position: 0, name: "Black", option_type_id: rim_color.id)
blue_rim = OptionValue.create!(position: 0, name: "Blue", option_type_id: rim_color.id)
green_rim = OptionValue.create!(position: 0, name: "Blue", option_type_id: rim_color.id)
puts "Rim colors values were created"

#variants
Variant.delete_all
variant_1 = Variant.create!(sku: "x001", product_id: product_1.id, price: 99.9, position: 0)
puts "Variants were created"

#option value variants
OptionValueVariant.delete_all
OptionValueVariant.create!(variant_id: variant_1.id, option_value_id: wheel_17.id)
puts "Option value variants were created"