class Variant < ApplicationRecord
  belongs_to :product

  has_many :option_value_variants
  has_many :option_values, through: :option_value_variants
end
