export default {
  name: 'frontpage',
  title: 'Frontpage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'coverImage',
        title: 'Cover image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'project',
        title: 'Project',
        type: 'string',
      },
      {
        name: 'project1',
        title: 'Project 1',
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
        name: 'project2',
        title: 'Project 2',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description2',
        title: 'Description 2',
        type: 'blockContent',
      },
      {
        name: 'project3',
        title: 'Project 3',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description3',
        title: 'Description 3',
        type: 'blockContent',
      },
  ],

}
