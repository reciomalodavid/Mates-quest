(() => {
  const config = window.MATES_QUEST_CONFIG;
  if (!config) throw new Error('Falta la configuración de Mates Quest Beta');

  const byId = (id) => document.getElementById(id);
  const i18n = window.MatesQuestI18n;
  const environmentLabel = () => i18n.t(config.environment === 'beta' ? 'beta.environment.beta' : 'beta.environment.production');

  document.title = config.appName;
  document.querySelector('meta[name="application-name"]')?.setAttribute('content', config.appName);
  byId('appDisplayName').textContent = config.appName;
  byId('betaVersionBadge').textContent = `${config.environment.toUpperCase()} · ${config.version}`;
  byId('aboutTitle').textContent = config.appName;
  byId('aboutVersion').textContent = config.version;
  byId('aboutEnvironment').textContent = environmentLabel();
  byId('aboutBuildDate').textContent = new Date(config.buildDate).toLocaleString('es-ES');
  byId('aboutGitCommit').textContent = config.gitCommit;
  byId('aboutStorage').textContent = config.storagePrefix;

  i18n.start();
  window.addEventListener('matesquest:languagechange', () => {
    byId('aboutEnvironment').textContent = environmentLabel();
    byId('aboutBuildDate').textContent = new Date(config.buildDate).toLocaleString(i18n.getLanguage() === 'ca' ? 'ca-ES' : 'es-ES');
  });

  byId('aboutOpenBtn').addEventListener('click', () => byId('aboutDialog').showModal());
  byId('aboutCloseBtn').addEventListener('click', () => byId('aboutDialog').close());
  byId('aboutDialog').addEventListener('click', (event) => {
    if (event.target === byId('aboutDialog')) byId('aboutDialog').close();
  });

  const swStatus = byId('aboutServiceWorker');
  if (!('serviceWorker' in navigator)) {
    swStatus.textContent = i18n.t('beta.sw.unsupported');
  } else {
    navigator.serviceWorker.getRegistration()
      .then((registration) => { swStatus.textContent = i18n.t(registration ? 'beta.sw.active' : 'beta.sw.pending'); })
      .catch(() => { swStatus.textContent = i18n.t('beta.sw.unavailable'); });
  }
})();
