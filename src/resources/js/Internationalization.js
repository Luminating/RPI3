import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translations: {
                    "Belarusian directors": "Кинорежиссёры Беларуси",
                    "Directors": "Кинорежиссёры",
                    "EN": "RU",
                    "Search...": "Поиск...",
                    "We hope here you will learn a lot of new and interesting things": "Надеемся здесь вы узнаете много нового и интересного",
                    "This resource is dedicated to Belarusian directors": "Данный ресурс посвящён белорусским кинорежиссёрам",
                    "Read": "Читать",
                    "Anton Dolgopolik": "Антон Долгополик",
                    "Artemy Tev": "Артемий Тев",
                    "Savva Rolevich": "Савва Ролевич",
                }
            }
        },
        fallbackLng: "en",
        debug: false,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: false
    });

export function changeLanguage() {
    if (i18n.language === "en") {
        i18n.changeLanguage("ru");
    } else {
        i18n.changeLanguage("en");
    }
}

export default i18n;