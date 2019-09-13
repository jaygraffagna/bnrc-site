module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Bettendorf Natural Resources Committee', // Navigation and Site Title
  titleAlt: 'BNRC', // Title for JSONLD
  description: 'Website for the Bettendorf Natural Resource Committee',
  url: 'https://bnrc-site.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://bnrc-site.netlify.com/', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'BNRC', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Jay Graffagna', // Author for schemaORGJSONLD
  themeColor: '#708238',
  backgroundColor: '#708238',
  twitter: '@twitter', // Twitter Username
};
