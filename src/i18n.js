import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import TranslationZH from '/public/locales/zh/translation.json';
import TranslationEN from '/public/locales/en/translation.json';

const resources = {
    en: {
        transaction: TranslationEN,
    },
    zh: {
        transaction: TranslationZH,
    }
};

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'zh',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    }).then();

export default i18n;
