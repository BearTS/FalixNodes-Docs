module.exports = {
  title: 'Falixnodes.net',
  tagline: 'Free Hosting For Everyone',
  url: 'https://falixnodes.net',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/logo.png',
  organizationName: 'BearTS', // Usually your GitHub org/user name.
  projectName: 'Falixnodes-Docs', // Usually your repo name.
  themeConfig: {
   announcementBar: {
    id: 'support_us', // Any value that will identify this message.
    content:
       '<a href="https://discord.gg/falixnodes">Discord Server</a> | <a href="https://gp.falixnodes.net">Game Panel</a> | <a href="https://client.falixnodes.net">Client Page</a>',
     backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
  },
    navbar: {
       hideOnScroll: true,
      title: 'Falixnodes.net Help Page',
      logo: {
        alt: 'Falixnodes.net',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://discord.gg/falixnodes',
          label: 'Discord Server',
          position: 'right',
        },
        {
          href: 'https://gp.falixnodes.net/',
          label: 'Game Panel',
          position: 'right',
        },
        {
          href: 'https://falixnodes.net/terms-and-conditions.php',
          label: 'Terms Of Services',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
  },
 plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {

        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
	indexDocs: true
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      },
    ],
  ],
};
