class OptionType < ApplicationRecord
  has_many :values, class_name: "OptionValue"
  has_many :product_option_types
  has_many :products, through: :product_option_types
end
