(() => {
  const config = window.MATES_QUEST_CONFIG;
  if (!config) throw new Error('Falta la configuración de Mates Quest Beta');

  const byId = (id) => document.getElementById(id);
  const environmentLabel = config.environment === 'beta' ? 'Beta' : 'Producción';

  document.title = config.appName;
  document.querySelector('meta[name="application-name"]')?.setAttribute('content', config.appName);
  byId('appDisplayName').textContent = config.appName;
  byId('betaVersionBadge').textContent = `${config.environment.toUpperCase()} · ${config.version}`;
  byId('aboutTitle').textContent = config.appName;
  byId('aboutVersion').textContent = config.version;
  byId('aboutEnvironment').textContent = environmentLabel;
  byId('aboutBuildDate').textContent = new Date(config.buildDate).toLocaleString('es-ES');
  byId('aboutGitCommit').textContent = config.gitCommit;
  byId('aboutStorage').textContent = config.storagePrefix;

  window.MatesQuestI18n?.start();

  byId('aboutOpenBtn').addEventListener('click', () => byId('aboutDialog').showModal());
  byId('aboutCloseBtn').addEventListener('click', () => byId('aboutDialog').close());
  byId('aboutDialog').addEventListener('click', (event) => {
    if (event.target === byId('aboutDialog')) byId('aboutDialog').close();
  });

  const swStatus = byId('aboutServiceWorker');
  if (!('serviceWorker' in navigator)) {
    swStatus.textContent = 'No compatible';
  } else {
    navigator.serviceWorker.getRegistration()
      .then((registration) => { swStatus.textContent = registration ? 'Activo' : 'Pendiente de instalación'; })
      .catch(() => { swStatus.textContent = 'No disponible'; });
  }
})();
