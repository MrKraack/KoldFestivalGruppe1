export default {
    name: 'festivalentry',
    title: 'FestivalEntry',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title / Artist',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'concertTime',
        title: 'Concert Time',
        type: 'datetime',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        
      }
    },
  }
  