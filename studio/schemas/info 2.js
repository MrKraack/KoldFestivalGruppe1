export default {
    name: 'info',
    title: 'Info og Faq',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'undertitle',
        title: 'Undertitel',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  }