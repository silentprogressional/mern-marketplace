const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
  stripe_connect_test_client_id: "ca_JZeGmxBUfnIixyXfcCcjlROR1QxnjpIZ",
  stripe_test_secret_key:
    "sk_test_51I8Y6OEHyYgyFJMTs1st5JIu6OlMYYABkljhWxZTilitoGBHAPGJuFOv3d1hAsIy6CTOX79nWF6CdYJZZu8IPY0T00GBOznuvY",
  stripe_test_api_key:
    "pk_test_51I8Y6OEHyYgyFJMTTmKhy5Etk3hjPshGL9BznkDyT5lL4dKL3v6vJvZQIiQgu65xOAcm2moKuFmWIGoL7Lr2c7Vg00O3j87pbL",
};

export default config;
