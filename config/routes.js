module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: (req, res) => {
        return res('Server is up and running');
      },
      description: 'Root of the thing',
      notes: 'Just testing',
      tags: ['api']
    }
  },

  {
    method: 'GET',
    path: '/profile',
    config: {
      handler: (req, res) => {
        return res('Profile endpoint');
      },
      description: 'Get profile information',
      notes: 'Just messing around with Swagger really',
      tags: ['api']
    }
  },

  {
    method: 'PUT',
    path: '/profile',
    config: {
      handler: (req, res) => {
        return res('You just put that thing in')
      },
      description: 'Update profile information',
      notes: 'I guess this could be one way to do it',
      tags: ['api']
    }
  }
];