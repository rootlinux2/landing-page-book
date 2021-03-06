import backers from '../backers';

export default {
  name: 'Backers',
  summary:
    'A person, institution, or country that supports something, especially financially. Its important show the people who support your idea.',
  import: ``,
  withStyles: true,
  extractProps: ['backer'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Backers
    backers={${JSON.stringify(backers, null, 8)}}
/>`,
      tabsActive: ['code']
    }
  ]
};
