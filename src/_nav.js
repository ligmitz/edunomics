export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-home',
    },
    {
      name: 'Class',
      url: '',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Class 11',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Mathematics',
              icon: 'icon-puzzle',
              children: [
                {
                  name: 'Set',
                  icon: 'icon-puzzle'
                },
                {
                  name: 'Trigonometry',
                  icon: 'icon-puzzle'
                }
              ]
            },
            {
              name: 'Physics',
              icon: 'icon-puzzle',
              children: [
                {
                  name: '2-D',
                  icon: 'icon-puzzle'
                },
                {
                  name: '3-D motion',
                  icon: 'icon-puzzle'
                }
              ]
            }
          ]
        },
        {
          name: 'Class 12',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Mathematics',
              icon: 'icon-puzzle',
              children: [
                {
                  name: 'Differential Calculus',
                  icon: 'icon-puzzle'
                },
                {
                  name: 'Integral Calculus',
                  icon: 'icon-puzzle'
                }
              ]
            },
            {
              name: 'Physics',
              icon: 'icon-puzzle',
              children: [
                {
                  name: 'Light',
                  icon: 'icon-puzzle'
                },
                {
                  name: 'Ray-Optics',
                  icon: 'icon-puzzle'
                }
              ]
            }
          ]
        }
      ],
    },
    {
      name: 'Settings',
      url: '',
      icon: 'icon-settings',
    },
    {
      name: 'Sessions',
      url: '',
      icon: 'icon-list',
    },
    {
      name: 'Downloads',
      url: '',
      icon: 'icon-download',
    },
    {
      name: 'About',
      url: '',
      icon: 'icon-about',
    },
  ],
};
