/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  docs: [
    'Introduction',
    {
      type: 'category',
      // id: 'manta-overview/Intro',
      label: 'Manta Overview',
      items: ['manta/Intro', 'manta/Technology', 'manta/Whats-Next-For-Defi'],
    },
    // {
    //   type: 'category',
    //   // id: 'manta-overview/Intro',
    //   label: 'Calamari Overview',
    //   items: [
    //     'calamari/Intro',
    //     'calamari/Technology',
    //     'calamari/Whats-Next-For-Defi',
    //   ],
    // },
  ],
};
