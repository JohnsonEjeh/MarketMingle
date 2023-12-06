/*const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config*/

const config = {
  env: "development",
  port: 3000,
  jwtSecret: "YOUR_secret_key",
  mongoUri:
    "mongodb+srv://marketmingle:6mODVrpJ96kUET5w@cluster0.dlwzq1d.mongodb.net/test?retryWrites=true&w=majority",
    stripe_connect_test_client_id: 'acct_1OK4o6JVEhNDvGmB',
    stripe_test_secret_key: 'sk_test_51OK4o6JVEhNDvGmBJBu0e6NHQk9rRDE8qF3cGTUcEuAnsKyQv9lol9N6iFr0AsuCuagPSJZd8PGlW8c2hQhgLN5F00OW2tWrRe',
    stripe_test_api_key: 'pk_test_51OK4o6JVEhNDvGmBNjJ4i3gD5nOgbtdWEEV3cKVsP1iTVxId1Ybd8DClU6C0U1lYoIVN1bZZPqwNiqMZfzKB3YCj00KIZuMErn' 
};
export default config;

/*const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'acct_1OK4o6JVEhNDvGmB',
  stripe_test_secret_key: 'vvda-ifqg-urhj-feuq-lgxy',
  stripe_test_api_key: 'pk_live_51OK4o6JVEhNDvGmB171hErZIDWHqviYTaDPMxyoMvEvnQyGJGSxkqrUUkDBozRrBlruKBhtemCxTGsGEkSVY8fMe00FJtZ3wTK' 
}

export default config*/
