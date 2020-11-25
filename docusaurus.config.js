module.exports = {
  title: 'Falixnodes.net',
  tagline: 'Free Hosting For Everyone',
  url: 'https://falixnodes.net',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'BearTS', // Usually your GitHub org/user name.
  projectName: 'Falixnodes-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
       hideOnScroll: true,
      title: 'Falixnodes.net Help Page',
      logo: {
        alt: 'Falixnodes.net',
        src: 'img/favicon.ico',
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
