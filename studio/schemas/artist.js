export default {
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Artist name',
            type: 'string',
            validation: Rule => Rule.required().error('You must enter an artist name')
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
            type: 'object',
            fields: [
                {
                    name: 'day',
                    type: 'string',
                    options: {
                        list: ['Fredag', 'Lørdag'],
                    },
                    validation: Rule => Rule.required().error('You must choose a day')
                },
                {
                    name: 'time',
                    title: 'Time',
                    type: 'object',
                    fields: [
                        {
                            name: 'hour',
                            title: 'Hour',
                            type: 'string',
                            options: {
                                list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' , '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
                            },
                            validation: Rule => Rule.required().error('Please enter hour')
                        },
                        {
                            name: 'minute',
                            title: 'Minute',
                            type: 'string',
                            options: {
                                list: ['00', '15', '30', '45']
                            },
                            validation: Rule => Rule.required().error('Please enter hour')

                        },

                    ]
                }
            ]
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required().error('Please enter location')

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
