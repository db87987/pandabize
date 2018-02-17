class OptionValueVariant < ApplicationRecord
  belongs_to :variant
  belongs_to :option_value

  validate :check_product_option_type

  def check_product_option_type
    unless variant.product.option_types.include?(option_value.option_type)
      errors.add(:product_type, "doen't exist")
    end
  end
end
