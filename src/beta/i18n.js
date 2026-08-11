(() => {
  const STORAGE_KEY = 'mates-quest-beta:language';
  const exact = new Map(Object.entries({
    'Práctica guiada de matemáticas':'Pràctica guiada de matemàtiques','Perfil':'Perfil','Elegir perfil':'Tria un perfil','+ Nuevo perfil':'+ Perfil nou','Crear perfil nuevo':'Crea un perfil nou','Energía':'Energia','Valoración':'Valoració','Tu perfil':'El teu perfil','Elige o crea un perfil arriba para guardar tu progreso.':'Tria o crea un perfil a dalt per desar el teu progrés.','Sincronización entre dispositivos':'Sincronització entre dispositius','Comprobando configuración…':'Comprovant la configuració…','Crear código nuevo':'Crea un codi nou','Código de este perfil:':'Codi d’aquest perfil:','Usa este código en tus otros dispositivos para que se sincronicen solos.':'Fes servir aquest codi als altres dispositius perquè se sincronitzin automàticament.','Dejar de sincronizar este dispositivo':'Deixa de sincronitzar aquest dispositiu','Vamos paso a paso.':'Anem pas a pas.','¿Qué quieres practicar?':'Què vols practicar?','Elige libremente una materia':'Tria lliurement una matèria','Suma y resta':'Suma i resta','Tablas de multiplicar':'Taules de multiplicar','Multiplicación':'Multiplicació','División':'Divisió','Raíces cuadradas':'Arrels quadrades','Raíces':'Arrels','Jerarquía':'Jerarquia','Aprende':'Aprèn','Columnas, llevadas y préstamos':'Columnes, portades i préstecs','Productos parciales paso a paso':'Productes parcials pas a pas','Exactas, estimación y simplificación':'Exactes, estimació i simplificació','El orden correcto de las operaciones':'L’ordre correcte de les operacions','Crea tu división':'Crea la teva divisió','Sin decimales':'Sense decimals','Paso 1: elige el primer grupo.':'Pas 1: tria el primer grup.','¿Qué grupo debemos coger primero?':'Quin grup hem d’agafar primer?','↶ Paso atrás':'↶ Pas enrere','Multiplicación personalizada':'Multiplicació personalitzada','Suma':'Suma','Con llevadas':'Amb portades','Resta':'Resta','Con préstamo':'Amb préstec','Suma personalizada':'Suma personalitzada','Número de cifras:':'Nombre de xifres:','Sin llevadas':'Sense portades','1. Elige el tipo de ejercicio':'1. Tria el tipus d’exercici','2. Escribe el número que irá dentro de la raíz':'2. Escriu el nombre que anirà dins de l’arrel','1. Elige la operación':'1. Tria l’operació','Número de fracciones:':'Nombre de fraccions:','Estamos aquí':'Som aquí','Sí, se puede reducir':'Sí, es pot simplificar','Puedes responder con un entero o una fracción:':'Pots respondre amb un enter o una fracció:','Jerarquía de operaciones':'Jerarquia d’operacions','Elige el nivel':'Tria el nivell','Básico':'Bàsic','Sin paréntesis ni potencias':'Sense parèntesis ni potències','Paréntesis':'Parèntesis','Primero lo de dentro':'Primer el que hi ha dins','Paréntesis y potencias combinados':'Parèntesis i potències combinats','Sí, permitir negativos':'Sí, permet negatius','Nueva operación':'Operació nova','Ecuaciones de primer grado':'Equacions de primer grau','Una operación':'Una operació','Más opciones':'Més opcions','Tamaño de los números':'Mida dels nombres','Generar ecuación':'Genera una equació','Nueva lección completa':'Lliçó completa nova','Siguiente':'Següent','Comprobar':'Comprova','Continuar':'Continua','Empezar':'Comença','Volver':'Torna','Correcto':'Correcte','¡Correcto!':'Correcte!','Inténtalo de nuevo':'Torna-ho a provar','Resultado':'Resultat','Puntos':'Punts','Aciertos':'Encerts','Errores':'Errors','Tiempo':'Temps','Nivel':'Nivell','Fácil':'Fàcil','Medio':'Mitjà','Difícil':'Difícil','Sí':'Sí','No':'No','Cancelar':'Cancel·la','Guardar':'Desa','Cerrar':'Tanca','Acerca de':'Informació','Versión':'Versió','Entorno':'Entorn','Compilación':'Compilació','Almacenamiento':'Emmagatzematge','No utilizado actualmente':'No s’utilitza actualment','Comprobando…':'Comprovant…','Activo':'Actiu','Pendiente de instalación':'Pendent d’instal·lació','No disponible':'No disponible','No compatible':'No compatible','Información técnica de esta instalación':'Informació tècnica d’aquesta instal·lació','Esta Beta utiliza almacenamiento, caché y documentos de sincronización separados de Producción.':'Aquesta Beta utilitza emmagatzematge, memòria cau i documents de sincronització separats de Producció.','Castellano':'Castellà','Idioma':'Idioma'
  }));
  const moreExact = {
    'Actividad actual':'Activitat actual','Cambiar actividad':'Canvia d’activitat','Volver a la selección de actividades':'Torna a la selecció d’activitats',
    'Elige la actividad que quieres practicar.':'Tria l’activitat que vols practicar.','Empieza por la que quieras':'Comença per la que vulguis','Elige un tema':'Tria un tema',
    'Selecciona una casilla':'Selecciona una casella','Elige al menos una tabla para practicar.':'Tria com a mínim una taula per practicar.',
    'Elige o crea un perfil antes de empezar.':'Tria o crea un perfil abans de començar.','Elige o crea un perfil arriba antes de empezar.':'Tria o crea un perfil a dalt abans de començar.',
    'Elige un perfil para guardar el progreso de cada tabla.':'Tria un perfil per desar el progrés de cada taula.','Crear':'Crea','Aún sin datos':'Encara no hi ha dades',
    'Listo. Crea un código o vincula uno de otro dispositivo.':'Tot a punt. Crea un codi o vincula’n un d’un altre dispositiu.','Escribe un código válido.':'Escriu un codi vàlid.',
    'Ese código no existe. Revísalo.':'Aquest codi no existeix. Revisa’l.','No se pudo conectar con la sincronización (revisa tu conexión).':'No s’ha pogut connectar amb la sincronització (revisa la connexió).',
    'No se pudo crear el código. Revisa tu conexión o la configuración.':'No s’ha pogut crear el codi. Revisa la connexió o la configuració.',
    'No se pudo guardar en la nube (revisa tu conexión).':'No s’ha pogut desar al núvol (revisa la connexió).','No se pudo vincular. Revisa el código y tu conexión.':'No s’ha pogut vincular. Revisa el codi i la connexió.',
    'Sincronización desactivada en este dispositivo. Tus datos locales se mantienen.':'Sincronització desactivada en aquest dispositiu. Les dades locals es conserven.',
    'Crea una división y empieza':'Crea una divisió i comença','División en curso':'Divisió en curs','Primer grupo':'Primer grup','Elige las primeras cifras':'Tria les primeres xifres',
    '¿Cuántas veces cabe?':'Quantes vegades hi cap?','Elige la cifra del cociente.':'Tria la xifra del quocient.','Cifra por cifra':'Xifra per xifra','Columna por columna':'Columna per columna',
    'Decide si hace falta pedir prestado':'Decideix si cal demanar prestat','Sí, hace falta pedir prestado.':'Sí, cal demanar prestat.','No hace falta, arriba ya es suficiente.':'No cal, la xifra de dalt ja és prou gran.',
    '¿Necesitamos pedir prestado en esta columna?':'Hem de demanar prestat en aquesta columna?','Resta esa columna':'Resta aquesta columna','Restar columna':'Resta la columna',
    'Baja cifra':'Baixa una xifra','Baja la siguiente cifra':'Baixa la xifra següent','Termina la división':'Acaba la divisió','¡División terminada!':'Divisió acabada!',
    'Paso completado':'Pas completat','Volvemos a decidir el préstamo de esta columna.':'Tornem a decidir el préstec d’aquesta columna.',
    'Volvemos a elegir la cifra del cociente.':'Tornem a triar la xifra del quocient.','Volvemos al último mini-paso de la multiplicación.':'Tornem a l’últim minipas de la multiplicació.',
    'Paso 1: elige el primer grupo.':'Pas 1: tria el primer grup.','Paso 5: baja la siguiente cifra.':'Pas 5: baixa la xifra següent.',
    'Elige el primer grupo de cifras que sea igual o mayor que el divisor.':'Tria el primer grup de xifres que sigui igual o més gran que el divisor.',
    'Calcula cuántas veces cabe el divisor sin pasarte.':'Calcula quantes vegades hi cap el divisor sense passar-te.',
    'El cociente ya está escrito. Ahora multiplica esa cifra por cada cifra del divisor.':'El quocient ja està escrit. Ara multiplica aquesta xifra per cada xifra del divisor.',
    'Compara las dos cifras de la columna antes de decidir si necesitas préstamo.':'Compara les dues xifres de la columna abans de decidir si necessites un préstec.',
    'Resuelve la resta de derecha a izquierda, una columna cada vez.':'Resol la resta de dreta a esquerra, una columna cada vegada.',
    'Repite siempre el ciclo: dividir, multiplicar, restar y bajar.':'Repeteix sempre el cicle: dividir, multiplicar, restar i baixar.',
    'Reglas rápidas':'Regles ràpides','Trabaja paso a paso.':'Treballa pas a pas.','Revisa solo la parte activa.':'Revisa només la part activa.',
    'Elige el primer grupo.':'Tria el primer grup.','Piensa cuántas veces cabe.':'Pensa quantes vegades hi cap.','Multiplica.':'Multiplica.','Resta.':'Resta.','Baja la siguiente cifra.':'Baixa la xifra següent.',
    'Revisa el paso activo y usa el botón Pista.':'Revisa el pas actiu i fes servir el botó Pista.','Todavía cabe alguna vez más.':'Encara hi cap alguna vegada més.',
    'Esa no es la siguiente cifra.':'Aquesta no és la xifra següent.','Correcto. Podemos restar directamente.':'Correcte. Podem restar directament.',
    'Correcto. Cambiamos una unidad de la columna izquierda por 10 de esta columna.':'Correcte. Canviem una unitat de la columna de l’esquerra per 10 d’aquesta columna.',
    'Resta de columna correcta.':'Resta de la columna correcta.','Revisa esa resta de columna.':'Revisa aquesta resta de la columna.','Revisa solo esta columna.':'Revisa només aquesta columna.',
    'Escribimos el resultado y seguimos una columna a la izquierda.':'Escrivim el resultat i continuem una columna cap a l’esquerra.',
    'Vamos paso a paso. No hay prisa.':'Anem pas a pas. No hi ha pressa.','Muy bien':'Molt bé','¡Muy bien! Sigue así.':'Molt bé! Continua així.',
    'Correcto.':'Correcte.','Incorrecto.':'Incorrecte.','Pista':'Pista','Objetivo':'Objectiu','A reforzar':'Per reforçar','En progreso':'En progrés','Sin practicar':'Sense practicar','Necesita repaso':'Cal repassar'
  };
  for (const [source, target] of Object.entries(moreExact)) exact.set(source, target);

  // Whole-sentence templates. Never translate isolated words: that produced mixed
  // Spanish/Catalan sentences and made the explanations harder to understand.
  const templates = [
    [/^¿Cuánto es (.+)\?$/,'Quant és $1?'],
    [/^¿Cuántas veces cabe (.+) en (.+)\?$/,'Quantes vegades hi cap $1 en $2?'],
    [/^Paso 2: ¿cuántas veces cabe (.+) en (.+)\?$/,'Pas 2: quantes vegades hi cap $1 en $2?'],
    [/^Paso 3: construye (.+) cifra por cifra\.$/,'Pas 3: construeix $1 xifra per xifra.'],
    [/^Paso 3: multiplica (.+) y añade la llevada (.+)\.$/,'Pas 3: multiplica $1 i suma-hi la portada $2.'],
    [/^Paso 3: multiplica (.+)\.$/,'Pas 3: multiplica $1.'],
    [/^Paso 4: resta las (.+): (.+)\.$/,'Pas 4: resta les $1: $2.'],
    [/^Paso 4: resta las (.+)\.$/,'Pas 4: resta les $1.'],
    [/^Columna (.+): arriba tienes (.+), abajo (.+)\.$/,'Columna $1: a dalt tens $2 i a baix $3.'],
    [/^Resta esta columna: (.+)\.$/,'Resta aquesta columna: $1.'],
    [/^Revisa solo esta columna: (.+)\.$/,'Revisa només aquesta columna: $1.'],
    [/^(.+) es menor que (.+): necesitamos pedir prestado\.$/,'$1 és més petit que $2: hem de demanar prestat.'],
    [/^(.+) ya es mayor o igual que (.+): no hace falta préstamo\.$/,'$1 ja és més gran o igual que $2: no cal cap préstec.'],
    [/^Bajamos el (.+)\. Ahora tenemos (.+)\.$/,'Baixem el $1. Ara tenim $2.'],
    [/^(.+) cabe (.+) veces\. Escribimos (.+) en el cociente\.$/,'$1 hi cap $2 vegades. Escrivim $3 al quocient.'],
    [/^(.+) × (.+) = (.+), se pasa\.$/,'$1 × $2 = $3, es passa.'],
    [/^(.+) es menor que (.+)\.$/,'$1 és més petit que $2.'],
    [/^Producto construido: (.+)\.$/,'Producte construït: $1.'],
    [/^Resultado: (.+)$/,'Resultat: $1'],
    [/^Resta terminada: (.+)\.$/,'Resta acabada: $1.'],
    [/^Correcto\. (.+) es el primer grupo que ya se puede dividir\.$/,'Correcte. $1 és el primer grup que ja es pot dividir.']
  ];
  let language = 'es';
  let applying = false;
  const originals = new WeakMap();
  const attrs = ['placeholder','title','aria-label'];
  function translate(text){
    if(language === 'es' || !text.trim()) return text;
    const lead=text.match(/^\s*/)?.[0]||'', tail=text.match(/\s*$/)?.[0]||'', core=text.trim();
    if(exact.has(core)) return lead+exact.get(core)+tail;
    for(const [pattern,replacement] of templates){if(pattern.test(core))return lead+core.replace(pattern,replacement)+tail;}
    return text;
  }
  function translateNode(node){
    if(node.nodeType===Node.TEXT_NODE){
      if(!originals.has(node)) originals.set(node,node.nodeValue);
      const source=originals.get(node); const next=language==='es'?source:translate(source);
      if(node.nodeValue!==next) node.nodeValue=next;
      return;
    }
    if(node.nodeType!==Node.ELEMENT_NODE || ['SCRIPT','STYLE','CODE'].includes(node.tagName)) return;
    for(const attr of attrs){if(node.hasAttribute(attr)){const key=`@${attr}`;let data=originals.get(node)||{};if(typeof data!=='object')data={};if(!(key in data))data[key]=node.getAttribute(attr);originals.set(node,data);node.setAttribute(attr,language==='es'?data[key]:translate(data[key]));}}
    for(const child of node.childNodes) translateNode(child);
  }
  function apply(root=document.body){applying=true;translateNode(root);document.documentElement.lang=language;const select=document.getElementById('languageSelect');if(select)select.value=language;applying=false;}
  const observer=new MutationObserver(records=>{if(applying||language==='es')return;for(const record of records)for(const node of record.addedNodes)translateNode(node);});
  function setLanguage(next){language=next==='ca'?'ca':'es';localStorage.setItem(STORAGE_KEY,language);apply();}
  function start(){language=localStorage.getItem(STORAGE_KEY)==='ca'?'ca':'es';const select=document.getElementById('languageSelect');select?.addEventListener('change',event=>setLanguage(event.target.value));apply();observer.observe(document.body,{subtree:true,childList:true});}
  window.MatesQuestI18n={start,setLanguage,getLanguage:()=>language,translate};
})();
