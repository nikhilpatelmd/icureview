const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'icureview.co',
  siteName: 'ICU Review',
  siteDescription:
    'A living repository of influential literature in critical care medicine',
  siteType: 'Person', // schema
  locale: 'en_US',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Nikhil Patel', // i.e. Nikhil - author's name. Must be set.
  authorEmail: '', // i.e. bob@bob.com - email of the author
  authorWebsite: '', // i.e. www.bob.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  trials: {
    // this is for the rss feed
    name: 'Trial Summaries',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
