export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Luan V. C. Martins',
      description: '',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 1,
    },
    header: {
      title: 'Luan V. C. Martins',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/file.jpg',
        dark: '/file.jpg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/luanvcmartins',
        target: '_blank',
      }],
    },
    sidebar: {

    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: '',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/luanvcmartins',
        target: '_blank',
      }],
    },
    toc: {
      enable: false,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/luanvcmartins',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});