export default {
  type: 'object',
  properties: {
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    rememberMe: {
      type: 'boolean'
    },
    server: {
      type: 'string'
    }
  },
  required: [
    'password',
    'username'
  ]
}
