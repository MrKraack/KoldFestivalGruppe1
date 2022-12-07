export default {
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Artist name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'playTime',
            title: 'Play time',
            type: 'datetime',
            options: {
                dateFormat:'DD-MM-YYYY',
                timeFormat: 'HH:mm',
                timeStep: 15,
            }
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Artist image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

    preview: {
        select: {
            title: 'name',
            media: 'image',
        }
    },
}
