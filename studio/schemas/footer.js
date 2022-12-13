export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'sponsors',
        title: 'Sponsorer',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'eventcoordinator',
        title: 'Koordinator Navn',
        type: 'string',
      },
      {
        name: 'phonenumber',
        title: 'Telefonnummer',
        type: 'number',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      }
    ]
}