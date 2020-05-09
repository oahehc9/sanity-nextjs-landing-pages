export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb60c6f1842f5a7f80a60ae',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wf1n5aa4',
                  apiId: 'c893d47c-5c0b-4cd8-be41-4114966cf910'
                },
                {
                  buildHookId: '5eb60c6f9b13492a0529201f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jggopgjn',
                  apiId: 'c3a88aac-7f25-4846-8c4d-3dbdc42c6d3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oahehc9/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jggopgjn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
