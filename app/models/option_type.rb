class OptionType < ApplicationRecord
  has_many :values, class_name: "OptionValue"
end
