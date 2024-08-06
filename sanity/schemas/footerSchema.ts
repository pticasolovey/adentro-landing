export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',

  fields: [
    {
      name: 'list',
      title: 'List',
      type: 'array',

      of: [
        {
          type: 'string',
        },
      ],
    },

    {
      name: 'background',
      title: 'Background',
      type: 'image',
    },
  ],
}
