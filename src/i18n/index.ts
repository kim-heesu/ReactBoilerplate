import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "@/i18n/locales";

i18n.use(initReactI18next).init({
    resources,
    lng: "ko", // 초기 기본언어
    fallbackLng: "en", // 번역을 못찾았을때 대체언어(ko에 해당 키가 없으면 en에서 찾음)
    ns: ["menu"], // 사용한 namespace목록
    defaultNS: 'common', // nampespace 생략시 기본값
    interpolation: {
        escapeValue: false
    }
});

