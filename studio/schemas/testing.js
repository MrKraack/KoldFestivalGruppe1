export default {
    name: 'testing',
    title: 'Testing',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}
