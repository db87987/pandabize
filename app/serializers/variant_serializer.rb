class VariantSerializer < ActiveModel::Serializer
  attributes :id, :sku, :price, :position, :options

  def options
    self.object.option_values.includes(:option_type).map do |option|
      {
        type: option.option_type.name,
        value: option.name,
        type_id: option.option_type_id,
        value_id: option.id,
      }
    end
  end
end