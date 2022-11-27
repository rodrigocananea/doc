export default {
  title: "Java Brasil",
  description: "An awesome docs template built by me",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Java Brasil",
    // Navbar Link
    nav: [
      { text: "Sobre", link: "/about" },
      {
        // Dropdown Menu
        text: "Documentações",
        items: [
          { text: "Java-Certificado", link: "/certificado/index" },
          { text: "Java-NFe", link: "/nfe/index" },
          { text: "Java-CTe", link: "/cte/index" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "github.com/evavic44" },
      { icon: "discord", link: "https://discord.gg/ZXpqnaV" },
      {
        icon: "youtube",
        link: "https://www.youtube.com/user/0SaMs/streams",
      },
    ],
    // Sidebar
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/certificado/': [
        {
          text: 'Inicio',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Pagina Inicial', link: '/certificado/index' }, 
          ]
        },
        {
          text: 'Configuração',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Certificado A1', link: '/certificado/certificado-a1' }, 
            { text: 'Certificado A3', link: '/certificado/certificado-a3' },
            { text: 'Certificado Por CNPJ/CPF', link: '/certificado/certificado-por-cnpjcpf' }, 
            { text: 'Repositórios', link: '/certificado/repositorios' } 
          ]
        },
      ],

      '/nfe/': [
        {
          text: 'Inicio',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Pagina Inicial', link: '/nfe/index' }, 
          ]
        },
        {
          text: 'Configuração',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Certificado', link: '/nfe/configuracoes' }, 
          ]
        },
        {
          text: 'NFe',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Status Serviço Sefaz', link: '/nfe/status-servico' },
            { text: 'Consulta Situação', link: '/nfe/consulta-situacao' },
            { text: 'Envio', link: '/nfe/envio' },
            { text: 'Cancelamento', link: '/nfe/cancelamento' },
            { text: 'Carta de Correção Eletrônica', link: '/nfe/cce' },
            { text: 'Inutilização', link: '/nfe/inutilizacao' },
            { text: 'Manifestação', link: '/nfe/manifestacao' },
            { text: 'Baixar Documento (DistDfe)', link: '/nfe/baixar-documento' },
            { text: 'Consulta Cadastro', link: '/nfe/consulta-cadastro' },
            { text: 'Envio Epec', link: '/nfe/envio-epec' },
          ]
        },
      ],

      '/cte/': [
        {
          text: 'Inicio',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Pagina Inicial', link: '/cte/index' }, 
          ]
        },
        {
          text: 'Configuração',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Certificado', link: '/cte/configuracoes' }, 
          ]
        },
        {
          text: 'CTe',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Status Serviço Sefaz', link: '/cte/status-servico' },
            { text: 'Consulta Situação', link: '/cte/consulta-situacao' },
            { text: 'Envio', link: '/cte/envio' },
            { text: 'Cancelamento', link: '/cte/cancelamento' },
            { text: 'Inutilização', link: '/cte/inutilizacao' },
            { text: 'Carta de Correção Eletrônica', link: '/cte/carta-correcao' },
            { text: 'Baixar Documento', link: '/cte/baixar-documento' },
          ]
        },
      ],

    },
    footer: {
      message: "MIT License.",
      copyright: "Copyright © 2022 Java Brasil",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};