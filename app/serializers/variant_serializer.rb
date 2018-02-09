class VariantSerializer < ActiveModel::Serializer
  attributes :id, :sku, :price, :position, :options

  def options
    self.object.option_values.includes(:option_type).map do |option|
      {
        type: option.option_type.name,
        value: option.name,
      }
    end
  end
end