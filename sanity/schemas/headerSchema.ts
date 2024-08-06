export default {
  name: 'header',
  title: 'Header',
  type: 'document',

  fields: [
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',

      of: [
        {
          type: 'object',
          name: 'inline',

          fields: [
            {
              name: 'href',
              type: 'string',
            },

            {
              name: 'image',
              type: 'image',
            },

            {
              name: 'label',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
