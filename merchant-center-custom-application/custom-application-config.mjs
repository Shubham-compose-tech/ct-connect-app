import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Starter 60070b',
  entryPointUriPath,
  cloudIdentifier: 'gcp-au',
  env: {
    development: {
      initialProjectKey: 'ct-custom-app-demo',
    },
    production: {
      applicationId: 'clu2dej1z0004nia8g5xx6j0v',
      url: 'https://mc-app-428dc36c-12fd-4b56-8441-11691f09f8fc.australia-southeast1.gcp.preview.commercetools.app',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
