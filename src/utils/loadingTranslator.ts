export class LoadingTranslator {
  language: string;
  constructor(language: string) {
    this.language = language;
  }

  i18n(key: string) {
    switch (this.language) {
      case "english":
        return this.englishLanguage[key];
      case "france":
        return this.franceLanguage[key];
    }
  }

  englishLanguage: any = {
    "Loading.First": "Widget loading",
    "Loading.Second": "Widget still loading",
    "Loading.Third": "Loading takes longer than usual. Wait, please",
    "Error.Timeout": "Error while loading. Please refresh the window",
    "Success.LoadingFinished": "Widget is loaded!",
  };

  franceLanguage: any = {
    "Loading.First": "Chargement des widgets",
    "Loading.Second": "Le widget est toujours en cours de chargement",
    "Loading.Third":
      "Le chargement prend plus de temps que d'habitude. Attendez s'il vous plaît",
    "Error.Timeout":
      "Erreur lors du chargement. Veuillez actualiser la fenêtre",
    "Success.LoadingFinished": "Le widget est chargé!",
  };
}
