const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

// export default {
//   config,
//   bootstrap,
// };
export default {
  config: {
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcomep",
        "Auth.form.welcome.subtitle": "Hãy đăng nhập để tiếp tục",
      },
      vi: {
        "Auth.form.welcome.title": "Welcome",
        "Auth.form.welcome.subtitle": "Hãy đăng nhập để tiếp tục",
      },
    },
  },
  bootstrap() {},
};
