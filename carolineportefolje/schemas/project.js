export default {
  name: 'projects',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'string',
    },
    {
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [{type: 'reference', to: {type: 'role'}}],
    },

    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
      {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'userflow',
      title: 'Userflow',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subtitle2',
      title: 'Subtitle2',
      type: 'string',
    },
    {
      name: 'sketches',
      title: 'Sketches',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description2',
      title: 'Description2',
      type: 'blockContent',
    },
    {
      name: 'subtitle3',
      title: 'Subtitle3',
      type: 'string',
    },
    {
      name: 'wireframes',
      title: 'Wireframes',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subtitle4',
      title: 'Subtitle4',
      type: 'string',
    },
    {
      name: 'designsystem',
      title: 'Designsystem',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
