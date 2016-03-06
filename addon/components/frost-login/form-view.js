export default {
  version: '1.0',
  type: 'form',
  rootContainers: [
    {
      label: 'Main',
      container: 'main'
    }
  ],
  containers: [
    {
      id: 'main',
      rows: [
        [{model: 'username'}],
        [{
          model: 'password',
          properties: {
            type: 'password'
          }
        }]
      ]
    }
  ]
}
