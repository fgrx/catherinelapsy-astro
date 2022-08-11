window.cookieconsent.initialise({
  palette: {
    popup: {
      background: "#2f2d2e",
    },
    button: {
      background: "#177e84",
    },
  },
  theme: "classic",
  type: "opt-out",
  content: {
    message: "Ce site utilise des cookies pour son fonctionnement",
    allow: "Ok pour moi",
    deny: "Non merci",
    link: "En savoir plus",
    href: "https://catherinelapsy.com/mentions-legales/",
  },
  onInitialise: function(status) {
      if(status == cookieconsent.status.allow) myScripts();
    },
    onStatusChange: function(status) {
      if (this.hasConsented()) myScripts();
    }
});

function myScripts() {

   // Paste here your scripts that use cookies requiring consent. See examples below

   // Google Analytics, you need to change 'UA-00000000-1' to your ID
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-221308343-1', 'auto');
      ga('send', 'pageview');



}
