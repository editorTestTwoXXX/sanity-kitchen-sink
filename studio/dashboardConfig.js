export default {
  widgets: [
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
                  buildHookId: '5f83dbd0b8a91f6fce2a5a20',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-m4qpw3ph',
                  apiId: '996127f6-b76f-45ac-b154-5942414de5d4'
                },
                {
                  buildHookId: '5f83dbd1158e4b4e19eff1e7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ydv98acf',
                  apiId: 'c332cf5a-82b4-406b-b10d-4a885148519c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/editorTestTwoXXX/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ydv98acf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
