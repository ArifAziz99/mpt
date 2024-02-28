export default {
    name: 'testimonials',
    title:  'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'compamy',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImageURl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },  
        {
            name: 'feedback',
            title: 'feedback',
            type: 'string'
        }
    ]
}