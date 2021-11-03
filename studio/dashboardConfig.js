export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6182c71ba55a1330c16535af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uujqw7hs',
                  apiId: 'c6b55780-35ce-4080-a15f-82474db20f09'
                },
                {
                  buildHookId: '6182c71b50b30a104822443e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2cyainn5',
                  apiId: 'dd7a3434-994b-40a5-8735-cd64a3d9bdb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ROZAYBE/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2cyainn5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
