#products
Product.destroy_all
product_1 = Product.create!(id: 1, name: "Bicycle 1", description: Faker::Lorem.paragraph(10))
puts "Products were created"

#option types
OptionType.destroy_all
wheel_size = OptionType.create!(name: "Wheel size")
rim_color = OptionType.create!(name: "Rim color", position: 1)
puts "Option types were created"

#product option types
ProductOptionType.delete_all
product_1.option_types << wheel_size
product_1.option_types << rim_color

#option values
OptionValue.destroy_all
wheel_17 = OptionValue.create!(position: 0, name: "17", option_type_id: wheel_size.id)
wheel_19 = OptionValue.create!(position: 1, name: "19", option_type_id: wheel_size.id)
wheel_21 = OptionValue.create!(position: 2, name: "21", option_type_id: wheel_size.id)
puts "Wheel sizes values were creates"

green_rim = OptionValue.create!(position: 0, name: "Green", option_type_id: rim_color.id)
blue_rim = OptionValue.create!(position: 0, name: "Blue", option_type_id: rim_color.id)
black_rim = OptionValue.create!(position: 0, name: "Black", option_type_id: rim_color.id)

puts "Rim colors values were created"

#variants
Variant.delete_all
# 17-green
variant_1 = Variant.create!(sku: "x001", product_id: product_1.id, price: 99.9, position: 0)
# 19-green
variant_2_1 = Variant.create!(sku: "x002", product_id: product_1.id, price: 189.9, position: 1)
# 19-blue
variant_2_2 = Variant.create!(sku: "x003", product_id: product_1.id, price: 199.9, position: 2)
# 21-green
variant_3_1 = Variant.create!(sku: "x004", product_id: product_1.id, price: 279.9, position: 3)
# 21-blue
variant_3_2 = Variant.create!(sku: "x005", product_id: product_1.id, price: 289.9, position: 4)
# 21-black
variant_3_3 = Variant.create!(sku: "x006", product_id: product_1.id, price: 299.9, position: 5)
puts "Variants were created"

#option value variants
OptionValueVariant.delete_all
# 17-green
OptionValueVariant.create!(variant_id: variant_1.id, option_value_id: wheel_17.id)
OptionValueVariant.create!(variant_id: variant_1.id, option_value_id: green_rim.id)
# 19-green
OptionValueVariant.create!(variant_id: variant_2_1.id, option_value_id: wheel_19.id)
OptionValueVariant.create!(variant_id: variant_2_1.id, option_value_id: green_rim.id)
# 19-blue
OptionValueVariant.create!(variant_id: variant_2_2.id, option_value_id: wheel_19.id)
OptionValueVariant.create!(variant_id: variant_2_2.id, option_value_id: blue_rim.id)
# 21-green
OptionValueVariant.create!(variant_id: variant_3_1.id, option_value_id: wheel_21.id)
OptionValueVariant.create!(variant_id: variant_3_1.id, option_value_id: green_rim.id)
# 21-blue
OptionValueVariant.create!(variant_id: variant_3_2.id, option_value_id: wheel_21.id)
OptionValueVariant.create!(variant_id: variant_3_2.id, option_value_id: blue_rim.id)
# 21-black
OptionValueVariant.create!(variant_id: variant_3_3.id, option_value_id: wheel_21.id)
OptionValueVariant.create!(variant_id: variant_3_3.id, option_value_id: black_rim.id)
puts "Option value variants were created"
