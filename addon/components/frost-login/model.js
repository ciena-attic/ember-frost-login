export default {
  type: 'object',
  properties: {
    password: {
      type: 'string'
    },
    username: {
      type: 'string'
    }
  },
  required: [
    'password',
    'username'
  ]
}
