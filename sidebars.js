module.exports = {
  docs: [
    'welcome',
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: false,
      items: [
          'Troubleshooting/render' ,
          'Troubleshooting/daemonerror',
          'Troubleshooting/serverjar',
          'Troubleshooting/servercreation'
      ]
    },
    {
      type: 'category',
      label: 'Making Minecraft Server (Java)',
      collapsed: true,
      items: [
          'McJava/normalmc',
          'McJava/bungeecord',
          'McJava/freeip',
          'McJava/optimize',
          'McJava/database',
          'McJava/customicon'
      ]
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'Resources/ram',
        'Resources/cores'
     ]
    }
  ],
};
