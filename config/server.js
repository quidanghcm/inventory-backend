module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1688),
  app: {
    keys: env.array('APP_KEYS', [
      'key1_super_secret',
      'key2_super_secret'
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
