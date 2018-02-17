class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :options

  has_many :variants

  def options
    self.object.option_types.includes(:values).map do |option_type|
      {
        id: option_type.id,
        name: option_type.name,
        values: option_type.values.map { |value| OptionValueSerializer.new(value) }
      }
    end
  end
end