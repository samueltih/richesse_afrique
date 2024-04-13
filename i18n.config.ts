import en from './assets/i18n/en-GB.json';
import fr from './assets/i18n/fr-FR.json';

export default {
    legacy: false,
    strategy: 'no-prefix',

    detectBrowserLanguage: false,

    locales: ['fr-FR', 'en-GB'],
    locale: 'en-GB',

    messages: {
      'en-GB': en,
      'fr-FR': fr
    }
  }