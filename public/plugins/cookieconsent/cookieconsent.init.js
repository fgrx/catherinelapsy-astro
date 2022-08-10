// obtain cookieconsent plugin
var cookieconsent = initCookieConsent();

// run plugin with config object
cookieconsent.run({
  autorun: true,
  current_lang: "en",
  autoclear_cookies: true,
  page_scripts: true,

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
  },

  onAccept: function (cookie) {
    // ... cookieconsent accepted
  },

  onChange: function (cookie, changed_preferences) {
    // ... cookieconsent preferences were changed
  },

  languages: {
    en: {
      consent_modal: {
        title: "Cookies",
        description:
          "Nous utilisons des cookies d’origine et des cookies tiers. Ces cookies sont destinés à vous offrir une navigation optimisée sur ce site web et de nous donner un aperçu de son utilisation, en vue de l’amélioration des services que nous offrons. En poursuivant votre navigation, nous considérons que vous acceptez l’usage des cookies.",
        primary_btn: {
          color: "#ccc",
          text: "Accepter",
          role: "Tout accepter", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Préférences",
          role: "Préférences", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: "Gestion des cookies",
        save_settings_btn: "Sauvegarder",
        accept_all_btn: "Tout accepter",
        reject_all_btn: "Tout refuser", // optional, [v.2.5.0 +]
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Expiration" },
          { col4: "Description" },
          { col5: "Type" },
        ],
        blocks: [
          {
            title: "Utilisation des cookies",
            description:
              "Nous utilisons les cookies à des fins statistiques. Vous pouvez choisir ceux que vous souhaitez désactier.",
          },
          {
            title: "Cookies obligatoires",
            description:
              "Ces cookies sont nécessaires au fonctionnement du site. Sans eux son fonctionnement sera altéré.",
            toggle: {
              value: "nécessaires",
              enabled: true,
              readonly: true,
            },
          },
          {
            title: "Cookies et statistiques",
            description:
              "Nous utilisons l'outil Google Analytics à des fins statistiques afin d'améliorer nos services.",
            toggle: {
              value: "analytics",
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              {
                col1: "^_ga",
                col2: "google.com",
                col3: "2 years",
                col4: "description ...",
                col5: "Permanent cookie",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "google.com",
                col3: "1 day",
                col4: "description ...",
                col5: "Permanent cookie",
              },
            ],
          },
          {
            title: "Plus d'informations",
            description:
              'Pour toute question veuillez, veuillez nous contacter : <a class="cc-link" href="/contact/">Page de contact</a>.',
          },
        ],
      },
    },
  },
});
