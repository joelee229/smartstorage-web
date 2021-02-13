import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import { messages } from './languages';
// LanguageDetector pega a linguagem padrão do browser
// Backend carrega as traduções da pasta public/locales/<language-code>
// Mas tem como carregar pelo resources tb
i18n
    // .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'pt',
        // ns: ['translation'],
        // defaultNS: 'translation',
        resources: messages
    });

// export { i18n };