export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        icon: 'user',
        path: '/profile'
      },
      {
        text: 'Tasks',
        icon: 'verticalaligntop',
        path: '/tasks'
      }
    ]
  },
  {
    text: 'Country',
    icon: 'folder',
    items: [
      {
        text: 'Add country',
        icon: 'plus',
        path: '/country/add'
      },
      {
        text: 'List of countries',
        icon: 'globe',
        path: '/country/list'
      },
      {
        text: 'Consult',
        icon: 'find',
        path: '/country/consult'
      },
      {
        text: 'Update',
        icon: 'refresh',
        path: '/country/modify'
      }
    ]
  }
];
