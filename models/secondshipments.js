// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models

module.exports = (mongoose, Mongoose) => {
  // This section contains the properties of your model, mapped to your collection's properties.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const schema = Mongoose.Schema(
    {
      order_number: String,
      store_name: String,
      shipping_carrier: String,
      shipping_method: String,
      shipment_labelURL: String,
      apiService: String,
      label_status: String,
      cost: String,
      to_address: String,
      zip: String,
      tracking_number: String,
      tracking_url: String,
      date: Date,
      shipment_type: String,
      packages: Array,
      label_id: String,
    },
    {
      timestamps: false,
    }
  );

  return mongoose.model("secondshipments", schema, "secondshipments");
};
