(() => {
  const STORAGE_KEY = 'mates-quest:language';
  const exact = new Map(Object.entries({
    'Práctica guiada de matemáticas':'Pràctica guiada de matemàtiques','Perfil':'Perfil','Elegir perfil':'Tria un perfil','+ Nuevo perfil':'+ Perfil nou','Crear perfil nuevo':'Crea un perfil nou','Energía':'Energia','Valoración':'Valoració','Tu perfil':'El teu perfil','Elige o crea un perfil arriba para guardar tu progreso.':'Tria o crea un perfil a dalt per desar el teu progrés.','Sincronización entre dispositivos':'Sincronització entre dispositius','Comprobando configuración…':'Comprovant la configuració…','Crear código nuevo':'Crea un codi nou','Código de este perfil:':'Codi d’aquest perfil:','Usa este código en tus otros dispositivos para que se sincronicen solos.':'Fes servir aquest codi als altres dispositius perquè se sincronitzin automàticament.','Dejar de sincronizar este dispositivo':'Deixa de sincronitzar aquest dispositiu','Vamos paso a paso.':'Anem pas a pas.','¿Qué quieres practicar?':'Què vols practicar?','Elige libremente una materia':'Tria lliurement una matèria','Suma y resta':'Suma i resta','Tablas de multiplicar':'Taules de multiplicar','Multiplicación':'Multiplicació','División':'Divisió','Raíces cuadradas':'Arrels quadrades','Raíces':'Arrels','Jerarquía':'Jerarquia','Aprende':'Aprèn','Columnas, llevadas y préstamos':'Columnes, portades i préstecs','Productos parciales paso a paso':'Productes parcials pas a pas','Exactas, estimación y simplificación':'Exactes, estimació i simplificació','El orden correcto de las operaciones':'L’ordre correcte de les operacions','Crea tu división':'Crea la teva divisió','Sin decimales':'Sense decimals','Paso 1: elige el primer grupo.':'Pas 1: tria el primer grup.','¿Qué grupo debemos coger primero?':'Quin grup hem d’agafar primer?','↶ Paso atrás':'↶ Pas enrere','Multiplicación personalizada':'Multiplicació personalitzada','Suma':'Suma','Con llevadas':'Amb portades','Resta':'Resta','Con préstamo':'Amb préstec','Suma personalizada':'Suma personalitzada','Número de cifras:':'Nombre de xifres:','Sin llevadas':'Sense portades','1. Elige el tipo de ejercicio':'1. Tria el tipus d’exercici','2. Escribe el número que irá dentro de la raíz':'2. Escriu el nombre que anirà dins de l’arrel','1. Elige la operación':'1. Tria l’operació','Número de fracciones:':'Nombre de fraccions:','Estamos aquí':'Som aquí','Sí, se puede reducir':'Sí, es pot simplificar','Puedes responder con un entero o una fracción:':'Pots respondre amb un enter o una fracció:','Jerarquía de operaciones':'Jerarquia d’operacions','Elige el nivel':'Tria el nivell','Básico':'Bàsic','Sin paréntesis ni potencias':'Sense parèntesis ni potències','Paréntesis':'Parèntesis','Primero lo de dentro':'Primer el que hi ha dins','Paréntesis y potencias combinados':'Parèntesis i potències combinats','Sí, permitir negativos':'Sí, permet negatius','Nueva operación':'Operació nova','Ecuaciones de primer grado':'Equacions de primer grau','Una operación':'Una operació','Más opciones':'Més opcions','Tamaño de los números':'Mida dels nombres','Generar ecuación':'Genera una equació','Nueva lección completa':'Lliçó completa nova','Siguiente':'Següent','Comprobar':'Comprova','Continuar':'Continua','Empezar':'Comença','Volver':'Torna','Correcto':'Correcte','¡Correcto!':'Correcte!','Inténtalo de nuevo':'Torna-ho a provar','Resultado':'Resultat','Puntos':'Punts','Aciertos':'Encerts','Errores':'Errors','Tiempo':'Temps','Nivel':'Nivell','Fácil':'Fàcil','Medio':'Mitjà','Difícil':'Difícil','Sí':'Sí','No':'No','Cancelar':'Cancel·la','Guardar':'Desa','Cerrar':'Tanca','Acerca de':'Informació','Versión':'Versió','Entorno':'Entorn','Compilación':'Compilació','Almacenamiento':'Emmagatzematge','No utilizado actualmente':'No s’utilitza actualment','Comprobando…':'Comprovant…','Activo':'Actiu','Pendiente de instalación':'Pendent d’instal·lació','No disponible':'No disponible','No compatible':'No compatible','Información técnica de esta instalación':'Informació tècnica d’aquesta instal·lació','Esta Beta utiliza almacenamiento, caché y documentos de sincronización separados de Producción.':'Aquesta Beta utilitza emmagatzematge, memòria cau i documents de sincronització separats de Producció.','Castellano':'Castellà','Idioma':'Idioma'
  }));
  exact.set('Català', 'Català');
  const moreExact = {
    'Català':'Català','Sincronización':'Sincronització',
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
    'Crea una división y empieza':'Crea una divisió i comença','División en curso':'Divisió en curs','Primer grupo':'Primer grup','Elige las primeras cifras':'Tria les primeres xifres','Grupo inicial':'Grup inicial','Forma el dividendo parcial':'Forma el dividend parcial',
    '¿Cuántas veces cabe?':'Quantes vegades hi cap?','Elige la cifra del cociente.':'Tria la xifra del quocient.','Cifra por cifra':'Xifra per xifra','Columna por columna':'Columna per columna',
    'Decide si hace falta pedir prestado':'Decideix si cal demanar prestat','Sí, hace falta pedir prestado.':'Sí, cal demanar prestat.','No hace falta, arriba ya es suficiente.':'No cal, la xifra de dalt ja és prou gran.',
    '¿Necesitamos pedir prestado en esta columna?':'Hem de demanar prestat en aquesta columna?','Resta esa columna':'Resta aquesta columna','Restar columna':'Resta la columna',
    'Baja cifra':'Baixa una xifra','Baja la siguiente cifra':'Baixa la xifra següent','Termina la división':'Acaba la divisió','¡División terminada!':'Divisió acabada!',
    'Paso completado':'Pas completat','Volvemos a decidir el préstamo de esta columna.':'Tornem a decidir el préstec d’aquesta columna.',
    'Volvemos a elegir la cifra del cociente.':'Tornem a triar la xifra del quocient.','Volvemos al último mini-paso de la multiplicación.':'Tornem a l’últim minipas de la multiplicació.',
    'Volvemos al paso de bajar la cifra.':'Tornem al pas de baixar la xifra.','Volvemos al principio de la operación.':'Tornem al principi de l’operació.','Volvemos a la última columna de la resta.':'Tornem a l’última columna de la resta.',
    'Paso 1: elige el primer grupo.':'Pas 1: tria el primer grup.','Paso 1: forma el dividendo parcial inicial.':'Pas 1: forma el dividend parcial inicial.','Paso 5: baja la siguiente cifra.':'Pas 5: baixa la xifra següent.',
    'Elige el primer grupo de cifras que sea igual o mayor que el divisor.':'Tria el primer grup de xifres que sigui igual o més gran que el divisor.','Busca el primer grupo de cifras en el que ya cabe el divisor.':'Busca el primer grup de xifres en què ja hi cap el divisor.','¿Con qué grupo empezamos?':'Amb quin grup comencem?',
    'Calcula cuántas veces cabe el divisor sin pasarte.':'Calcula quantes vegades hi cap el divisor sense passar-te.',
    'Ya no quedan cifras enteras. Decide cómo continuar la división.':'Ja no queden xifres enteres. Decideix com continuar la divisió.','¿Qué hacemos para obtener un resultado con decimales?':'Què fem per obtenir un resultat amb decimals?','Continuar con decimales':'Continua amb decimals','Terminar aquí':'Acaba aquí',
    'Para obtener decimales debemos añadir una coma y continuar con un cero.':'Per obtenir decimals hem d’afegir una coma i continuar amb un zero.','Correcto. Escribimos la coma en el cociente y continuamos la división.':'Correcte. Escrivim la coma al quocient i continuem la divisió.',
    'Para continuar con decimales, añadimos una cifra al dividendo.':'Per continuar amb decimals, afegim una xifra al dividend.','Paso 5: añade una cifra decimal y bájala.':'Pas 5: afegeix una xifra decimal i baixa-la.','¿Qué cifra añadimos y bajamos ahora?':'Quina xifra afegim i baixem ara?',
    'Quitamos la coma y volvemos a decidir cómo continuar.':'Traiem la coma i tornem a decidir com continuar.','Para conservar el valor del dividendo añadimos un cero a la derecha.':'Per conservar el valor del dividend, afegim un zero a la dreta.','Quitamos el cero decimal y volvemos al paso anterior.':'Traiem el zero decimal i tornem al pas anterior.',
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
  for (const [source, target] of Object.entries({
    'Pensar':'Pensa',
    'Sentido numérico y estrategias visuales':'Sentit numèric i estratègies visuals',
    'LABORATORIO DE NÚMEROS':'LABORATORI DE NOMBRES',
    'Entiende los números jugando con cantidades':'Entén els nombres jugant amb quantitats',
    'Aquí no se trata de correr ni memorizar un procedimiento. Mira, construye y encuentra una estrategia.':'Aquí no es tracta de córrer ni memoritzar un procediment. Mira, construeix i troba una estratègia.',
    'Conteo visual':'Comptatge visual',
    'Reconoce cantidades sin contar una a una.':'Reconeix quantitats sense comptar-les una a una.',
    'Formar números':'Forma nombres',
    'Construye números con decenas y unidades.':'Construeix nombres amb desenes i unitats.',
    'Completar hasta 10':'Completa fins a 10',
    'Descubre cuánto falta para llegar a diez.':'Descobreix quant falta per arribar a deu.',
    'Elige una actividad para empezar.':'Tria una activitat per començar.',
    '¿Cuántos puntos ves?':'Quants punts veus?',
    'Nueva cantidad':'Quantitat nova',
    'Añadir una decena':'Afegeix una desena',
    'Añadir una unidad':'Afegeix una unitat',
    'Vaciar':'Buida',
    'Decenas':'Desenes',
    'Unidades':'Unitats',
    '¿Cuánto falta para llegar a 10?':'Quant falta per arribar a 10?',
    'Otro número':'Un altre nombre',
    'Exacto. Has reconocido la cantidad.':'Exacte. Has reconegut la quantitat.',
    'Míralos por grupos y prueba otra vez.':'Mira’ls per grups i torna-ho a provar.',
    'Exacto. Has construido el número.':'Exacte. Has construït el nombre.',
    'Todavía no. Revisa las decenas y las unidades.':'Encara no. Revisa les desenes i les unitats.',
    'Exacto. Ya has completado 10.':'Exacte. Ja has completat 10.',
    'Piensa qué pareja de números suma 10.':'Pensa quina parella de nombres suma 10.',
    'Nivel de práctica':'Nivell de pràctica',
    'Duración de la sesión':'Durada de la sessió','5 retos':'5 reptes','10 retos':'10 reptes','20 retos':'20 reptes','Sin límite':'Sense límit',
    '2.º de Primaria':'2n de Primària',
    '4.º de Primaria':'4t de Primària',
    'Ruta de la actividad':'Ruta de l’activitat',
    '0 de 5 retos comprendidos':'0 de 5 reptes compresos','0 de 5 retos completados':'0 de 5 reptes completats',
    'Reconocer cantidades':'Reconeix quantitats',
    'Mira por grupos de cinco y de diez.':'Mira per grups de cinc i de deu.',
    'Valor posicional':'Valor posicional',
    'Construye centenas, decenas y unidades.':'Construeix centenes, desenes i unitats.',
    'Usar números amigos':'Fes servir nombres amics',
    'Llega al siguiente 10 de forma eficiente.':'Arriba al següent 10 de manera eficient.',
    'Saltos en la recta':'Salts a la recta',
    'Descompón para calcular mentalmente.':'Descompon per calcular mentalment.',
    'Mira la cantidad. Después desaparecerá.':'Mira la quantitat. Després desapareixerà.',
    'Mostrar otra vez':'Mostra-ho una altra vegada',
    'Centenas':'Centenes',
    'Añadir una centena':'Afegeix una centena',
    '¿A qué número llegamos?':'A quin nombre arribem?',
    'Otro salto':'Un altre salt',
    'Reto comprendido. Vamos con otro.':'Repte comprès. Anem-ne a fer un altre.',
    'Busca primero los grupos completos de 5.':'Busca primer els grups complets de 5.',
    'Cada barra vale 10 y cada cuadrado grande vale 100.':'Cada barra val 10 i cada quadrat gran val 100.',
    'Cuenta centenas, decenas y unidades por separado.':'Compta centenes, desenes i unitats per separat.',
    'Completa primero el siguiente múltiplo de 10.':'Completa primer el múltiple de 10 següent.',
    'Separa el salto en decenas y unidades.':'Separa el salt en desenes i unitats.',
    'Actividad completada: cinco retos comprendidos.':'Activitat completada: cinc reptes compresos.',
    'Completa cada salto':'Completa cada salt',
    '¿Dónde aterriza este salto?':'On aterra aquest salt?',
    'Siguiente salto':'Salt següent',
    'Has completado todos los saltos.':'Has completat tots els salts.',
    'Revisa desde qué número empieza el arco.':'Revisa des de quin nombre comença l’arc.',
    'Primero saltamos las decenas; después, las unidades.':'Primer saltem les desenes; després, les unitats.',
    'Nivel 1 · Cantidades pequeñas':'Nivell 1 · Quantitats petites',
    'Nivel 2 · Grupos de 5 y 10':'Nivell 2 · Grups de 5 i 10',
    'Nivel 3 · Decenas y unidades':'Nivell 3 · Desenes i unitats',
    'Nivel 4 · Centenas y saltos':'Nivell 4 · Centenes i salts',
    'Nivel 5 · Estrategias eficientes':'Nivell 5 · Estratègies eficients',
    'Nivel 6 · Cálculo flexible':'Nivell 6 · Càlcul flexible',
    'Quitar una centena':'Treu una centena',
    'Quitar una decena':'Treu una desena',
    'Quitar una unidad':'Treu una unitat',
    'Mira la cantidad, construye el número y explica tu estrategia.':'Mira la quantitat, construeix el nombre i explica la teva estratègia.',
    'Pensar':'Pensa',
    'Busca grupos de 5 y 10, comprende el valor posicional y descompón los saltos.':'Busca grups de 5 i 10, entén el valor posicional i descompon els salts.',
    'Ideas útiles':'Idees útils',
    'Busca estructuras antes de contar.':'Busca estructures abans de comptar.',
    'Relaciona cada cifra con su valor.':'Relaciona cada xifra amb el seu valor.',
    'Usa el siguiente múltiplo de 10 como apoyo.':'Fes servir el múltiple de 10 següent com a suport.',
    'Descompón saltos grandes.':'Descompon els salts grans.',
    'Recta numérica con saltos':'Recta numèrica amb salts',
    'Actividades de pensamiento matemático':'Activitats de pensament matemàtic',
    'Todavía no. Revisa cada salto.':'Encara no. Revisa cada salt.',
    'Grupo de puntos para reconocer':'Grup de punts per reconèixer'
  })) exact.set(source, target);

  for (const [source, target] of Object.entries({
    "1. Entiende":"1. Entén",
    "2. Deshaz":"2. Desfés",
    "3. Equilibra":"3. Equilibra",
    "4. Comprueba":"4. Comprova",
    "ANTES DE EMPEZAR":"ABANS DE COMENÇAR",
    "¿Qué estamos buscando?":"Què estem buscant?",
    "Una ecuación es como una balanza equilibrada. Los dos lados del signo igual valen lo mismo, pero hay un número que todavía no conocemos.":"Una equació és com una balança equilibrada. Els dos costats del signe igual valen el mateix, però hi ha un nombre que encara no coneixem.",
    "Incógnita":"Incògnita",
    "El número desconocido. Normalmente lo llamamos x.":"El nombre desconegut. Normalment l’anomenem x.",
    "Término":"Terme",
    "Cada número o expresión separada por una suma o una resta.":"Cada nombre o expressió separada per una suma o una resta.",
    "Resolver":"Resoldre",
    "Descubrir qué número debe valer x para que la igualdad sea verdadera.":"Descobrir quin nombre ha de valer x perquè la igualtat sigui certa.",
    "Si cambias un lado, debes hacer exactamente lo mismo en el otro.":"Si canvies un costat, has de fer exactament el mateix a l’altre.",
    "LA HERRAMIENTA CLAVE":"L’EINA CLAU",
    "¿Qué es una operación inversa?":"Què és una operació inversa?",
    "Es una operación que deshace otra. La usamos para retirar lo que acompaña a x sin romper el equilibrio.":"És una operació que en desfà una altra. La fem servir per retirar el que acompanya x sense trencar l’equilibri.",
    "se deshace con":"es desfà amb",
    "Sumar ↔ restar":"Sumar ↔ restar",
    "Multiplicar ↔ dividir":"Multiplicar ↔ dividir",
    "x + 5: restamos 5.":"x + 5: restem 5.",
    "x − 7: sumamos 7.":"x − 7: sumem 7.",
    "3x: dividimos entre 3.":"3x: dividim entre 3.",
    "x ÷ 4: multiplicamos por 4.":"x ÷ 4: multipliquem per 4.",
    "No pasamos números mágicamente al otro lado. Aplicamos la operación inversa en los dos lados.":"No passem nombres màgicament a l’altre costat. Apliquem l’operació inversa als dos costats.",
    "EJEMPLO GUIADO":"EXEMPLE GUIAT",
    "Resolver x + 5 = 12":"Resoldre x + 5 = 12",
    "¿Qué impide que x esté sola?":"Què impedeix que x estigui sola?",
    "El + 5.":"El + 5.",
    "¿Qué operación deshace + 5?":"Quina operació desfà + 5?",
    "− 5, porque restar deshace sumar.":"− 5, perquè restar desfà sumar.",
    "¿Dónde restamos 5?":"On restem 5?",
    "En los dos lados, para mantener la balanza equilibrada.":"Als dos costats, per mantenir la balança equilibrada.",
    "La ecuación inicial.":"L’equació inicial.",
    "La misma operación en ambos lados.":"La mateixa operació als dos costats.",
    "x ya está sola.":"x ja està sola.",
    "Comprobación: sustituimos x por 7. Como 7 + 5 = 12, la solución es correcta.":"Comprovació: substituïm x per 7. Com que 7 + 5 = 12, la solució és correcta.",
    "EL MAPA":"EL MAPA",
    "Cuatro preguntas, siempre en este orden":"Quatre preguntes, sempre en aquest ordre",
    "¿Qué operación acompaña a x?":"Quina operació acompanya x?",
    "¿Cuál es su operación inversa?":"Quina és la seva operació inversa?",
    "¿La he aplicado en los dos lados?":"L’he aplicada als dos costats?",
    "¿El resultado funciona en la ecuación original?":"El resultat funciona a l’equació original?",
    "Ver un ejemplo de dos pasos":"Mostra un exemple de dos passos",
    "Primero deshacemos el +5 restando 5 en ambos lados: 3x = 15.":"Primer desfem el +5 restant 5 als dos costats: 3x = 15.",
    "Después deshacemos el ×3 dividiendo ambos lados entre 3: x = 5.":"Després desfem el ×3 dividint els dos costats entre 3: x = 5.",
    "Comprobamos: 3 × 5 + 5 = 20.":"Comprovem: 3 × 5 + 5 = 20.",
    "Errores frecuentes":"Errors freqüents",
    "Cambiar un número de lado sin escribir qué operación hacemos.":"Canviar un nombre de costat sense escriure quina operació fem.",
    "Aplicar una operación solo en uno de los lados.":"Aplicar una operació només en un dels costats.",
    "Dividir entre el número equivocado.":"Dividir pel nombre equivocat.",
    "No comprobar la solución al terminar.":"No comprovar la solució en acabar.",
    "PRUÉBALO TÚ":"PROVA-HO TU",
    "Restar deshace sumar, y debemos hacerlo en ambos lados para mantener la igualdad.":"Restar desfà sumar, i ho hem de fer als dos costats per mantenir la igualtat."
  })) exact.set(source, target);

  const moduleExact = {
    // Navegació i estat general
    'Fracciones':'Fraccions','Ecuaciones':'Equacions','Academia':'Acadèmia','Misión completada':'Missió completada',
    '¡Misión completada!':'Missió completada!','¡Operación terminada!':'Operació acabada!','¡Multiplicación terminada!':'Multiplicació acabada!',
    '¡Suma terminada!':'Suma acabada!','¡Resta terminada!':'Resta acabada!','¡Raíz completada!':'Arrel completada!',
    '¡Expresión terminada!':'Expressió acabada!','¡Ecuación resuelta y comprobada!':'Equació resolta i comprovada!',
    'Energía disponible':'Energia disponible','Valoración del reto':'Valoració del repte','Resumen de la misión':'Resum de la missió',
    'Mejor racha':'Millor ratxa','Estrellas':'Estrelles','Misiones':'Missions','Ver desglose':'Mostra el detall','Rango actual:':'Rang actual:',
    'Nombre del perfil':'Nom del perfil','— elegir perfil —':'— tria un perfil —','Código de otro dispositivo':'Codi d’un altre dispositiu',
    'Teclado numérico de Mates Quest':'Teclat numèric de Mates Quest','Borrar última cifra':'Esborra l’última xifra',
    'Nueva operación':'Operació nova','Comprueba el resultado':'Comprova el resultat','Verifica el resultado':'Verifica el resultat',
    'Comprueba la expresión':'Comprova l’expressió','Paso actual':'Pas actual','Primer número':'Primer nombre','Segundo número':'Segon nombre',
    'Número':'Nombre','Operación':'Operació','Fracción':'Fracció','Qué recordar':'Què cal recordar','Lee la idea':'Llegeix la idea',
    'Sigue el ejemplo':'Segueix l’exemple','Entiende qué significa':'Entén què significa','Aprende el tip':'Aprèn el truc',
    'Abre una página completa':'Obre una pàgina completa','Selecciona una casilla':'Selecciona una casella','Coloca los números':'Col·loca els nombres',
    'No pasa nada. Mira la pista y prueba otra vez.':'No passa res. Mira la pista i torna-ho a provar.',
    'Te he devuelto un intento. Mira la pista y prueba otra vez.':'T’he retornat un intent. Mira la pista i torna-ho a provar.',
    'Revisa este paso.':'Revisa aquest pas.','Piénsalo otra vez.':'Pensa-hi una altra vegada.','Terminado. Este es el resultado final.':'Acabat. Aquest és el resultat final.',

    // Suma, resta i multiplicació
    'Elige suma o resta y empieza':'Tria suma o resta i comença','Elige con o sin llevadas':'Tria amb portades o sense',
    'Elige con o sin préstamo':'Tria amb préstec o sense','Sin préstamo':'Sense préstec','con al menos una llevada':'amb almenys una portada',
    'con al menos un préstamo':'amb almenys un préstec','sin préstamos':'sense préstecs','sin llevadas':'sense portades',
    'Crea una multiplicación y empieza':'Crea una multiplicació i comença','Suma cifra a cifra':'Suma xifra per xifra',
    'Suma los productos parciales columna por columna.':'Suma els productes parcials columna per columna.',
    'Empezamos por la derecha, columna a columna.':'Comencem per la dreta, columna per columna.',
    'Empezamos por las unidades, igual que en una suma normal.':'Comencem per les unitats, com en una suma normal.',
    'Multiplicaremos de derecha a izquierda.':'Multiplicarem de dreta a esquerra.',
    'Multiplica solo los dos números resaltados.':'Multiplica només els dos nombres ressaltats.',
    'Suma únicamente los dos números resaltados.':'Suma només els dos nombres ressaltats.',
    'Resta únicamente los dos números resaltados.':'Resta només els dos nombres ressaltats.',
    'Haz solo la multiplicación de las cifras activas y añade la llevada.':'Fes només la multiplicació de les xifres actives i afegeix-hi la portada.',
    'Suma únicamente las cifras de la columna marcada y añade la llevada si la hay.':'Suma només les xifres de la columna marcada i afegeix-hi la portada si n’hi ha.',
    'La resta por columnas no coincide. Vamos a revisarla.':'La resta per columnes no coincideix. La revisarem.',
    'Bajamos la última llevada.':'Baixem l’última portada.','El único producto parcial ya es el resultado.':'L’únic producte parcial ja és el resultat.',
    'Completamos el producto':'Completem el producte','Completamos el resultado':'Completem el resultat',
    'Comprobamos el producto':'Comprovem el producte','Comprobamos el resultado':'Comprovem el resultat',
    'Suma final':'Suma final','Suma la llevada':'Suma la portada','Préstamos:':'Préstecs:','¿Prestamos?':'Demanem prestat?',
    'Revisa esa multiplicación y la llevada.':'Revisa aquesta multiplicació i la portada.',
    'Revisa esa suma de columna.':'Revisa aquesta suma de columna.','¡Perfecto! Todo queda en su columna.':'Perfecte! Tot queda a la seva columna.',

    // Fraccions
    'Trabajaremos las fracciones paso a paso.':'Treballarem les fraccions pas a pas.',
    'Fracciones Para sumar o restar, iguala denominadores antes de operar numeradores.':'Fraccions Per sumar o restar, iguala els denominadors abans d’operar els numeradors.',
    'Elegimos denominador común':'Triem un denominador comú','Operamos los numeradores':'Operem els numeradors',
    'Simplificamos el producto':'Simplifiquem el producte','Transformamos la división':'Transformem la divisió',
    'Buscamos el primer múltiplo común de los denominadores.':'Busquem el primer múltiple comú dels denominadors.',
    'Buscamos si numerador y denominador comparten algún divisor mayor que 1.':'Comprovem si el numerador i el denominador comparteixen algun divisor més gran que 1.',
    'Conseguir que todas las fracciones hablen de partes del mismo tamaño.':'Aconseguir que totes les fraccions representin parts de la mateixa mida.',
    'Cambiar el denominador sin cambiar el valor de la fracción.':'Canviar el denominador sense canviar el valor de la fracció.',
    'Operar las partes ahora que todas tienen el mismo tamaño.':'Operar les parts ara que totes tenen la mateixa mida.',
    'Completar la fracción resultante.':'Completar la fracció resultant.','Reducir la fracción sin cambiar su valor.':'Reduir la fracció sense canviar-ne el valor.',
    'Decidir si la fracción ya está en su forma más sencilla.':'Decidir si la fracció ja està en la forma més senzilla.',
    'Convertir la división en una multiplicación.':'Convertir la divisió en una multiplicació.',
    'Construir el numerador del producto.':'Construir el numerador del producte.','Construir el numerador del resultado.':'Construir el numerador del resultat.',
    'Multiplicamos arriba por arriba.':'Multipliquem els numeradors.','Multiplicamos abajo por abajo.':'Multipliquem els denominadors.',
    'Multiplicamos numerador por numerador.':'Multipliquem numerador per numerador.','Multiplicamos denominador por denominador.':'Multipliquem denominador per denominador.',
    'Sumamos o restamos solo los numeradores; el denominador se conserva.':'Sumem o restem només els numeradors; el denominador es conserva.',
    'Mantenemos la primera fracción y damos la vuelta a la segunda.':'Mantenim la primera fracció i girem la segona.',
    'Ahora tiene el mismo denominador que las demás.':'Ara té el mateix denominador que les altres.',
    'Ya tenemos la fracción provisional.':'Ja tenim la fracció provisional.','Escribe la forma más sencilla':'Escriu la forma més senzilla',
    'Escribe la fracción completa, por ejemplo 3/4 .':'Escriu la fracció completa, per exemple 3/4.',
    'Escribe todas las fracciones como 3/4. El denominador no puede ser cero.':'Escriu totes les fraccions com 3/4. El denominador no pot ser zero.',
    'No se puede dividir entre una fracción igual a cero.':'No es pot dividir per una fracció igual a zero.',
    'Revisa numerador y denominador.':'Revisa el numerador i el denominador.','Sí, se puede reducir':'Sí, es pot simplificar',
    'No. El único divisor común es 1; por eso ya es irreducible.':'No. L’únic divisor comú és 1; per això ja és irreductible.',

    // Arrels
    'Una raíz cuadrada busca el número que, multiplicado por sí mismo, produce el radicando.':'Una arrel quadrada busca el nombre que, multiplicat per si mateix, produeix el radicand.',
    'Busca los dos enteros consecutivos entre los que está la raíz.':'Busca els dos enters consecutius entre els quals es troba l’arrel.',
    'Busca el mayor cuadrado perfecto que sea factor del radicando.':'Busca el quadrat perfecte més gran que sigui factor del radicand.',
    'Calcula la raíz del factor cuadrado perfecto.':'Calcula l’arrel del factor quadrat perfecte.',
    'Completa la descomposición del radicando.':'Completa la descomposició del radicand.',
    'La raíz conserva el mismo orden que los cuadrados positivos.':'L’arrel conserva el mateix ordre que els quadrats positius.',
    'La raíz cuadrada es justo ese número que se repite dos veces al multiplicar.':'L’arrel quadrada és precisament el nombre que es repeteix dues vegades en multiplicar.',
    'La raíz ya está simplificada.':'L’arrel ja està simplificada.','Dentro de la raíz':'Dins de l’arrel','Extraemos el cuadrado':'Traiem el quadrat',
    'Multiplicación inversa':'Multiplicació inversa','Reconocemos el tipo':'Reconeixem el tipus','Intervalo de la raíz':'Interval de l’arrel',
    'Bien. Ahora buscamos qué número se repite al multiplicarse por sí mismo.':'Bé. Ara busquem quin nombre es repeteix en multiplicar-se per si mateix.',
    'Bien. Ahora expresamos el intervalo.':'Bé. Ara expressem l’interval.','Perfecto. Ya tienes el número; ahora escríbelo como raíz.':'Perfecte. Ja tens el nombre; ara escriu-lo com a arrel.',
    'Muy bien. Ahora extraemos la raíz exacta.':'Molt bé. Ara traiem l’arrel exacta.','Correcto. Separamos el radicando.':'Correcte. Separem el radicand.',
    'Correcto. Ya sabemos dónde está la raíz.':'Correcte. Ja sabem on és l’arrel.','¡Exacto! La raíz deshace el cuadrado.':'Exacte! L’arrel desfà el quadrat.',
    'Usa un cuadrado perfecto, como 81 o 144.':'Fes servir un quadrat perfecte, com 81 o 144.',
    'Usa un número cuya raíz no sea exacta, como 30.':'Fes servir un nombre que no tingui arrel exacta, com 30.',
    'Usa un número simplificable, como 72.':'Fes servir un nombre simplificable, com 72.',

    // Jerarquia i equacions
    'Mira toda la expresión antes de calcular.':'Mira tota l’expressió abans de calcular.','Mirar paréntesis':'Mira els parèntesis',
    'Localiza los factores':'Localitza els factors','Haz solo esa mini-operación y luego sustituye el resultado en la expresión.':'Fes només aquesta minioperació i després substitueix-ne el resultat a l’expressió.',
    'Haz solo este paso. No mires toda la operación.':'Fes només aquest pas. No miris tota l’operació.',
    'Resuelve únicamente el pequeño cálculo del paso actual.':'Resol només el petit càlcul del pas actual.',
    'Resuelve únicamente el pequeño cálculo mostrado.':'Resol només el petit càlcul que es mostra.',
    'Revisa únicamente la operación resaltada.':'Revisa només l’operació ressaltada.',
    'Sustituimos esa parte por su resultado.':'Substituïm aquesta part pel seu resultat.',
    'Primero hay que trabajar dentro del paréntesis.':'Primer cal treballar dins del parèntesi.',
    'Las potencias van antes que multiplicaciones, divisiones, sumas y restas.':'Les potències van abans que les multiplicacions, divisions, sumes i restes.',
    'Multiplicaciones y divisiones van antes que sumas y restas.':'Les multiplicacions i divisions van abans que les sumes i restes.',
    'Cuando tienen la misma prioridad, se resuelve de izquierda a derecha.':'Quan tenen la mateixa prioritat, es resol d’esquerra a dreta.',
    'La multiplicación se resuelve antes que la suma.':'La multiplicació es resol abans que la suma.',
    'Una ecuación es una balanza: haz siempre lo mismo en ambos lados.':'Una equació és una balança: fes sempre el mateix als dos costats.',
    'Balanza de la ecuación':'Balança de l’equació','Ecuación inicial':'Equació inicial','Construye una operación en ambos lados':'Construeix una operació als dos costats',
    'Construye un movimiento en ambos lados y después resuelve la cuenta.':'Construeix un moviment als dos costats i després resol el càlcul.',
    '¿Qué operación quieres aplicar en ambos lados?':'Quina operació vols aplicar als dos costats?',
    'Busca un término que desaparezca al aplicar su operación inversa.':'Busca un terme que desaparegui en aplicar-hi l’operació inversa.',
    'Busca un término que puedas hacer desaparecer por completo.':'Busca un terme que puguis fer desaparèixer del tot.',
    'Simplifica el movimiento que acabas de construir.':'Simplifica el moviment que acabes de construir.',
    'Simplifica la nueva igualdad':'Simplifica la nova igualtat','Sustituye el valor de x':'Substitueix el valor de x',
    'Correcto. La igualdad sigue equilibrada.':'Correcte. La igualtat continua equilibrada.',
    'Buen movimiento. Ahora simplifica la nueva igualdad.':'Bon moviment. Ara simplifica la nova igualtat.',
    'El movimiento es correcto; revisa solo la cuenta.':'El moviment és correcte; revisa només el càlcul.',
    'La idea del paso es correcta; revisa solo la cuenta.':'La idea del pas és correcta; revisa només el càlcul.',
    'Ese movimiento no simplifica la ecuación.':'Aquest moviment no simplifica l’equació.','Esta operación no es válida.':'Aquesta operació no és vàlida.',
    'La solución puede ser negativa. El método no cambia.':'La solució pot ser negativa. El mètode no canvia.',
    'Por ahora usa una resta cuyo resultado final sea positivo.':'De moment, fes servir una resta amb resultat final positiu.',

    // Taules
    '¡Hola! ¿Qué tablas practicamos hoy?':'Hola! Quines taules practiquem avui?','Tiempo restante':'Temps restant',
    'No pasa nada. La racha vuelve a 0 y seguimos.':'No passa res. La ratxa torna a 0 i continuem.',
    'Primero elige un perfil para detectar tus puntos débiles.':'Primer tria un perfil per detectar els punts febles.',
    'Todavía no tienes suficientes datos de puntos débiles: juega alguna ronda primero.':'Encara no tens prou dades de punts febles: juga alguna ronda primer.',
    'Seleccionadas tus tablas con más fallos, en modo Puntos débiles.':'S’han seleccionat les taules amb més errors, en mode Punts febles.',
    'Cada tabla tiene 10 cuentas. Solo será verde cuando las 10 estén dominadas.':'Cada taula té 10 operacions. Només serà verda quan les 10 estiguin dominades.',
    'Las tablas practicadas están completamente dominadas: todas sus cuentas están verdes.':'Les taules practicades estan completament dominades: totes les operacions són verdes.',
    'No has fallado ninguna combinación.':'No has fallat cap combinació.','Para repasar:':'Per repassar:','Resumen':'Resum',
    'Sin practicar':'Sense practicar','Practicada':'Practicada','Muy bien':'Molt bé','Necesita repaso':'Cal repassar'
  };
  for (const [source, target] of Object.entries(moduleExact)) exact.set(source, target);

  // Static interface and Academy lessons. These are complete DOM text nodes,
  // including short fragments split by pedagogical emphasis tags.
  const academyExact = {
    '⌂ Inicio':'⌂ Inici','Estado del reto':'Estat del repte','Puntos totales acumulados':'Punts totals acumulats','Tres intentos':'Tres intents','Aciertos consecutivos':'Encerts consecutius','Racha':'Ratxa','Tres estrellas posibles':'Tres estrelles possibles','Vincular':'Vincula','Pasos':'Passos','Actividades de Mates Quest':'Activitats de Mates Quest','ACTIVIDADES':'ACTIVITATS',
    '➕➖ Suma y resta':'➕➖ Suma i resta','🔢 Tablas de multiplicar':'🔢 Taules de multiplicar','✖️ Multiplicación':'✖️ Multiplicació','➗ División':'➗ Divisió','√ Raíces cuadradas':'√ Arrels quadrades','🍰 Fracciones':'🍰 Fraccions','🧩 Jerarquía':'🧩 Jerarquia','⚖️ Ecuaciones':'⚖️ Equacions','📘 Aprende':'📘 Aprèn','Tablas':'Taules','Memoria, patrones y rapidez':'Memòria, patrons i rapidesa','Dividir, multiplicar, restar y bajar':'Dividir, multiplicar, restar i baixar','MCM, MCD y operaciones':'MCM, MCD i operacions','Equilibrar y dejar x sola':'Equilibrar i deixar la x sola','Conceptos, ejemplos y mini pruebas':'Conceptes, exemples i miniproves',
    'Dividendo':'Dividend','Divisor':'Divisor','1 decimal':'1 decimal','2 decimales':'2 decimals','3 decimales':'3 decimals','Generar':'Genera','2 cifras':'2 xifres','3 cifras':'3 xifres','4 cifras':'4 xifres','Llevadas:':'Portades:','Mezcladas':'Barrejades','Generar ejercicio':'Genera un exercici','Exactas':'Exactes','Cuadrados perfectos':'Quadrats perfectes','Entre enteros':'Entre enters','Localiza una raíz no exacta':'Localitza una arrel no exacta','Simplificar':'Simplifica','Extrae cuadrados perfectos':'Extreu quadrats perfectes','Dificultad:':'Dificultat:','Hasta 12²':'Fins a 12²','Hasta 20²':'Fins a 20²','Menor':'Menor','Mayor':'Major','Sumar':'Sumar','Restar':'Restar','Multiplicar':'Multiplicar','Dividir':'Dividir','2 fracciones':'2 fraccions','3 fracciones':'3 fraccions','4 fracciones':'4 fraccions','Denominadores:':'Denominadors:','Iguales':'Iguals','Diferentes':'Diferents','Mezclados':'Barrejats','2. Escribe las fracciones con una barra, por ejemplo':'2. Escriu les fraccions amb una barra, per exemple','Ver pasos anteriores':'Mostra els passos anteriors','No, ya es irreducible':'No, ja és irreductible','💡 Pista':'💡 Pista','Potencias':'Potències','Incluye exponentes sencillos':'Inclou exponents senzills','Mixto':'Mixt','Longitud:':'Longitud:','3 operaciones':'3 operacions','4 operaciones':'4 operacions','5 operaciones':'5 operacions','Resultados negativos:':'Resultats negatius:','No, mantener resultados positivos':'No, mantén resultats positius','Recomendado para empezar: ninguna operación intermedia dará un número negativo.':'Recomanat per començar: cap operació intermèdia donarà un nombre negatiu.','⚖️ Ecuaciones de primer grado':'⚖️ Equacions de primer grau','Dos pasos':'Dos passos','En ambos lados':'Als dos costats','Inicial: hasta 10':'Inicial: fins a 10','Normal: hasta 20':'Normal: fins a 20','Soluciones negativas':'Solucions negatives','No, solo positivas':'No, només positives','Sí, permitir negativas':'Sí, permet negatives','Izquierda':'Esquerra','Derecha':'Dreta','Dejar x sola sin romper la igualdad':'Deixar la x sola sense trencar la igualtat',
    'ACADEMIA MATES QUEST':'ACADÈMIA MATES QUEST','Aprende cada operación desde cero':'Aprèn cada operació des de zero','Cada tema empieza por la idea, construye el método sin saltos, incluye una chuleta clara y termina con una comprobación antes de practicar.':'Cada tema comença per la idea, construeix el mètode sense salts, inclou un resum clar i acaba amb una comprovació abans de practicar.','1. Entiende':'1. Entén','Qué significa la operación y cuándo se usa.':'Què significa l’operació i quan es fa servir.','2. Sigue el mapa':'2. Segueix el mapa','Un plan fijo para no perderse.':'Un pla fix per no perdre’s.','3. Mira cada paso':'3. Mira cada pas','Ejemplos explicados sin resultados mágicos.':'Exemples explicats sense resultats màgics.','4. Usa la chuleta':'4. Fes servir el resum','Reglas breves para recordar mientras practicas.':'Regles breus per recordar mentre practiques.','5. Comprueba':'5. Comprova','Aprende a saber si tu respuesta tiene sentido.':'Aprèn a saber si la teva resposta té sentit.','Bases del cálculo':'Bases del càlcul','Columnas, préstamos y hechos numéricos.':'Columnes, préstecs i fets numèrics.','Sumas':'Sumes','Alineación, llevadas y comprobación.':'Alineació, portades i comprovació.','Concepto · Ejemplo · Mini prueba':'Concepte · Exemple · Miniprova','Restas':'Restes','Préstamos, ceros y verificación.':'Préstecs, zeros i verificació.','Patrones, estrategias y memoria.':'Patrons, estratègies i memòria.','Operaciones completas':'Operacions completes','Procedimientos escritos que se construyen línea a línea.':'Procediments escrits que es construeixen línia a línia.','Multiplicaciones':'Multiplicacions','Productos parciales, desplazamiento y suma final.':'Productes parcials, desplaçament i suma final.','Divisiones':'Divisions','Dividir, multiplicar, restar y bajar.':'Dividir, multiplicar, restar i baixar.','Equivalentes, MCM, MCD y operaciones.':'Equivalents, MCM, MCD i operacions.','Razonamiento matemático':'Raonament matemàtic','Ideas que conectan varias operaciones.':'Idees que connecten diverses operacions.','Cuadrados perfectos, estimación y simplificación.':'Quadrats perfectes, estimació i simplificació.','Qué operación se resuelve primero y por qué.':'Quina operació es resol primer i per què.','La igualdad como balanza y operaciones inversas.':'La igualtat com una balança i operacions inverses.','← Temas':'← Temes',
    '1. Desde cero':'1. Des de zero','2. Mapa':'2. Mapa','3. Ejemplo visual':'3. Exemple visual','4. Chuleta':'4. Resum','¿QUÉ PROBLEMA RESUELVE?':'QUIN PROBLEMA RESOL?','La idea antes del procedimiento':'La idea abans del procediment','Sumar significa juntar cantidades del mismo tipo para saber cuánto hay en total.':'Sumar significa ajuntar quantitats del mateix tipus per saber quant n’hi ha en total.','Palabras como':'Paraules com','en total':'en total','juntos':'junts','añadir':'afegir','aumentar':'augmentar','En vertical, unidades con unidades, decenas con decenas y centenas con centenas.':'En vertical, unitats amb unitats, desenes amb desenes i centenes amb centenes.','EL MAPA QUE SIEMPRE SE REPITE':'EL MAPA QUE SEMPRE ES REPETEIX','Plan de ataque':'Pla d’atac','Alinea las cifras por columnas.':'Alinea les xifres per columnes.','Empieza por las unidades.':'Comença per les unitats.','Suma la columna y añade la llevada si existe.':'Suma la columna i afegeix-hi la portada si n’hi ha.','Escribe la unidad del resultado.':'Escriu la unitat del resultat.','Si sale 10 o más, lleva la decena a la columna siguiente.':'Si surt 10 o més, porta la desena a la columna següent.','EJEMPLO CON RAZONAMIENTO':'EXEMPLE RAONAT','Ahora sí: mirémoslo bien puesto':'Ara sí: mirem-ho ben col·locat','Las':'Les','llevadas':'portades','son pequeñitas y van arriba, justo sobre la':'són petites i van a dalt, just damunt de la','columna siguiente':'columna següent','Unidades':'Unitats','en unidades y llevamos':'a les unitats i en portem','a las decenas.':'a les desenes.','Decenas':'Desenes','en decenas y llevamos':'a les desenes i en portem','a las centenas.':'a les centenes.','Centenas':'Centenes','. Ya no hay más columnas: el resultado final es':'. Ja no hi ha més columnes: el resultat final és','💡 En qué fijarte':'💡 En què t’has de fixar','El resultado debe ser':'El resultat ha de ser','más grande':'més gran','que cada sumando.':'que cada sumand.','Si una columna da 10 o más, solo escribes la':'Si una columna dona 10 o més, només escrius la','unidad':'unitat','y la':'i la','decena se lleva':'desena es porta','La llevada nunca se escribe grande dentro de la cuenta.':'La portada mai no s’escriu gran dins de l’operació.','⚠️ Errores frecuentes':'⚠️ Errors freqüents','Olvidar la llevada.':'Oblidar la portada.','Desalinear una cifra y sumarla en la columna que no toca.':'Desalinear una xifra i sumar-la a la columna que no toca.','entero dentro de la columna de unidades.':'sencer dins de la columna d’unitats.','CHEAT SHEET':'RESUM','Lo que debes recordar':'El que has de recordar','Siempre de derecha a izquierda.':'Sempre de dreta a esquerra.','Las llevadas se escriben pequeñas arriba.':'Les portades s’escriuen petites a dalt.','Solo escribes la unidad de cada columna.':'Només escrius la unitat de cada columna.','Comprueba estimando: 270 + 160 ≈ 430.':'Comprova-ho estimant: 270 + 160 ≈ 430.','COMPRUEBA SI LO HAS ENTENDIDO':'COMPROVA SI HO HAS ENTÈS','En 47 + 38, ¿qué cifra escribimos primero en las unidades?':'A 47 + 38, quina xifra escrivim primer a les unitats?',
    '1. Qué significa':'1. Què significa','2. Sin préstamo':'2. Sense préstec','3. Con préstamo':'3. Amb préstec','EMPEZAMOS DESDE CERO':'COMENCEM DES DE ZERO','¿Qué significa restar?':'Què significa restar?','Restar significa':'Restar significa','quitar':'treure',', comparar dos cantidades o descubrir cuánto falta.':', comparar dues quantitats o descobrir quant falta.','significa: empezamos con 52 y quitamos 28.':'significa que comencem amb 52 i en traiem 28.','En vertical, cada cifra va en su columna: unidades debajo de unidades y decenas debajo de decenas.':'En vertical, cada xifra va a la seva columna: unitats sota unitats i desenes sota desenes.','EL MAPA DE LA RESTA':'EL MAPA DE LA RESTA','La pregunta que hacemos en cada columna':'La pregunta que fem a cada columna','Empieza por la columna de la derecha.':'Comença per la columna de la dreta.','Pregunta:':'Pregunta:','¿la cifra de arriba alcanza?':'la xifra de dalt és suficient?','Si sí, resta normalmente.':'Si és així, resta normalment.','Si no, pide':'Si no, demana','a la columna de la izquierda.':'a la columna de l’esquerra.','Ese':'Aquest','vale':'val','en la columna actual.':'a la columna actual.','PRIMERO: SIN PEDIR PRESTADO':'PRIMER: SENSE DEMANAR PRESTAT','Ejemplo sencillo: 64 − 21':'Exemple senzill: 64 − 21','Arriba hay 4 y abajo hay 1. Como':'A dalt hi ha 4 i a baix hi ha 1. Com que','4 alcanza':'4 és suficient',', hacemos':', fem','Arriba hay 6 y abajo hay 2. Hacemos':'A dalt hi ha 6 i a baix hi ha 2. Fem','La idea importante':'La idea important','Si la cifra de arriba es mayor o igual que la de abajo, no necesitamos cambiar nada.':'Si la xifra de dalt és més gran o igual que la de baix, no hem de canviar res.','Comprobamos:':'Comprovem:','AHORA: CON UN PRÉSTAMO':'ARA: AMB UN PRÉSTEC','Ejemplo: 52 − 28':'Exemple: 52 − 28','porque presta 1 decena':'perquè presta 1 desena','porque recibe 10 unidades':'perquè rep 10 unitats','No estamos “inventando” números: solo cambiamos':'No ens “inventem” nombres: només canviem','1 decena':'1 desena','por':'per','10 unidades':'10 unitats','. La cantidad total sigue siendo la misma.':'. La quantitat total continua sent la mateixa.','Miramos las unidades':'Mirem les unitats','Queremos hacer':'Volem fer','. Como':'. Com que','2 no alcanza':'2 no és suficient',', necesitamos ayuda de la columna de al lado.':', necessitem ajuda de la columna del costat.','Pedimos 1 decena':'Demanem 1 desena','La columna de decenas tenía':'La columna de desenes tenia','. Presta':'. En presta',', así que se queda en':', així que es queda en','Convertimos esa decena':'Convertim aquesta desena','Esa decena vale':'Aquesta desena val','. Se la damos al 2, que pasa a ser':'. La donem al 2, que passa a ser','Restamos las unidades':'Restem les unitats','Ahora sí:':'Ara sí:','Restamos las decenas':'Restem les desenes','Ya no quedan 5 decenas, quedan':'Ja no queden 5 desenes, en queden','. Hacemos':'. Fem','¿Por qué funciona?':'Per què funciona?','también puede escribirse como':'també es pot escriure com','4 decenas y 12 unidades':'4 desenes i 12 unitats','La frase clave':'La frase clau','No pienses solo “pido prestado”. Piensa:':'No pensis només “demano prestat”. Pensa:','cambio 1 decena por 10 unidades':'canvio 1 desena per 10 unitats','¿Y SI HAY UN CERO?':'I SI HI HA UN ZERO?','Ese es un caso posterior':'Aquest és un cas posterior','Cuando aparece un cero, como en':'Quan apareix un zero, com a',', hay que buscar una columna más a la izquierda que pueda prestar.':', cal buscar una columna més a l’esquerra que pugui prestar.','Primero domina bien el préstamo sencillo de':'Primer domina bé el préstec senzill de','Después, en el caso con cero, el préstamo pasa por la columna intermedia. Ese cero termina convertido en 9.':'Després, en el cas amb zero, el préstec passa per la columna intermèdia. Aquest zero acaba convertit en 9.','La idea de fondo no cambia:':'La idea de fons no canvia:','cambiar una unidad de una columna por 10 unidades de la columna siguiente':'canviar una unitat d’una columna per 10 unitats de la columna següent','Pregunta si la cifra de arriba alcanza.':'Pregunta si la xifra de dalt és suficient.','Una decena prestada se convierte en 10 unidades.':'Una desena prestada es converteix en 10 unitats.','Al prestar, la cifra de la izquierda disminuye en 1.':'En prestar, la xifra de l’esquerra disminueix en 1.','Los cambios del préstamo se escriben pequeños arriba.':'Els canvis del préstec s’escriuen petits a dalt.','Comprueba sumando resultado + número restado.':'Comprova-ho sumant resultat + nombre restat.','Practicar restas':'Practica restes','En 52 − 28, ¿por qué el 2 se convierte en 12?':'A 52 − 28, per què el 2 es converteix en 12?','Porque recibe una decena, que vale 10 unidades':'Perquè rep una desena, que val 10 unitats','Porque sumamos 12 al resultado':'Perquè sumem 12 al resultat','Porque siempre añadimos 10 en todas las restas':'Perquè sempre afegim 10 a totes les restes',
    '3. Sin saltos':'3. Sense salts','¿QUÉ HACE UNA MULTIPLICACIÓN LARGA?':'QUÈ FA UNA MULTIPLICACIÓ LLARGA?','Descompone un número en unidades, decenas y centenas, calcula cada parte y vuelve a juntarlas.':'Descompon un nombre en unitats, desenes i centenes, calcula cada part i torna a ajuntar-les.','Hay un número de varias cifras multiplicado por otro.':'Hi ha un nombre de diverses xifres multiplicat per un altre.','Necesitamos productos parciales, uno por cada cifra del multiplicador.':'Necessitem productes parcials, un per cada xifra del multiplicador.','Alinea los números a la derecha.':'Alinea els nombres a la dreta.','Multiplica la cifra inferior por cada cifra superior, de derecha a izquierda.':'Multiplica la xifra inferior per cada xifra superior, de dreta a esquerra.','Gestiona la llevada dentro de cada producto parcial.':'Gestiona la portada dins de cada producte parcial.','Al pasar a decenas, desplaza una posición; al pasar a centenas, dos.':'En passar a desenes, desplaça una posició; en passar a centenes, dues.','Suma los productos parciales por columnas.':'Suma els productes parcials per columnes.','Una línea cada vez':'Una línia cada vegada','Primer producto parcial, unidades.':'Primer producte parcial, unitats.','Segundo parcial: multiplicar por 3 decenas, por eso se desplaza.':'Segon parcial: multiplicar per 3 desenes; per això es desplaça.','Sumamos los parciales.':'Sumem els parcials.','Cada fila corresponde a una cifra inferior.':'Cada fila correspon a una xifra inferior.','La segunda fila empieza una columna a la izquierda.':'La segona fila comença una columna a l’esquerra.','La llevada de multiplicar no es la misma que la de la suma final.':'La portada de multiplicar no és la mateixa que la de la suma final.','Estima: 240×40 ≈ 9600; 8748 es razonable.':'Estima: 240×40 ≈ 9600; 8748 és raonable.','SI ALGO SALE MAL':'SI ALGUNA COSA SURT MALAMENT','Errores que conviene detectar':'Errors que convé detectar','No hagas esto':'No facis això','Olvidar el desplazamiento de la segunda fila.':'Oblidar el desplaçament de la segona fila.','Mezclar llevadas entre productos parciales.':'Barrejar portades entre productes parcials.','No alinear la suma final.':'No alinear la suma final.','Comprobación de sentido':'Comprovació de sentit','Multiplica aproximadamente los números redondeados para detectar resultados imposibles.':'Multiplica aproximadament els nombres arrodonits per detectar resultats impossibles.','Ahora profundiza con más ejemplos y práctica':'Ara aprofundeix amb més exemples i pràctica','Qué significa multiplicar':'Què significa multiplicar','Multiplicar es sumar varias veces la misma cantidad. Con varias cifras calculamos productos parciales y después los sumamos.':'Multiplicar és sumar diverses vegades la mateixa quantitat. Amb diverses xifres calculem productes parcials i després els sumem.','Ejemplo alineado':'Exemple alineat','243 × 1 decena = 2430.':'243 × 1 desena = 2430.','💡 Tip:':'💡 Consell:','cada nueva fila se desplaza una columna a la izquierda.':'cada fila nova es desplaça una columna a l’esquerra.','⚠️ Error frecuente:':'⚠️ Error freqüent:','escribir el segundo producto parcial sin el cero de posición.':'escriure el segon producte parcial sense el zero de posició.','Practicar ahora: multiplicaciones':'Practica ara: multiplicacions','Al multiplicar 23 × 14, ¿la segunda línea comienza una columna a la izquierda?':'En multiplicar 23 × 14, la segona línia comença una columna a l’esquerra?',
    '¿QUÉ SIGNIFICA DIVIDIR?':'QUÈ SIGNIFICA DIVIDIR?','Dividir es repartir en grupos iguales o averiguar cuántas veces cabe una cantidad dentro de otra.':'Dividir és repartir en grups iguals o esbrinar quantes vegades hi cap una quantitat dins d’una altra.',': la cantidad que tenemos.':': la quantitat que tenim.',': el tamaño del grupo.':': la mida del grup.','El':'El','cociente':'quocient','dice cuántas veces cabe, y el':'diu quantes vegades hi cap, i el','resto':'residu','dice lo que sobra.':'diu el que sobra.','Busca el primer grupo del dividendo donde el divisor ya cabe.':'Busca el primer grup del dividend on el divisor ja hi cap.','Decide cuántas veces cabe y escribe esa cifra en el cociente.':'Decideix quantes vegades hi cap i escriu aquesta xifra al quocient.','Multiplica para comprobar.':'Multiplica per comprovar.','Resta para ver qué sobra.':'Resta per veure què sobra.','Baja la siguiente cifra y repite.':'Baixa la xifra següent i repeteix.','Ejemplo visual de 156 ÷ 12':'Exemple visual de 156 ÷ 12','Miramos el primer grupo':'Mirem el primer grup','no cabe en':'no hi cap a',', pero sí cabe en':', però sí que hi cap a','. Así que trabajamos con el grupo':'. Per tant, treballem amb el grup','cabe 1 vez':'hi cap 1 vegada','Escribimos el cociente':'Escrivim el quocient','arriba porque':'a dalt perquè','12 cabe 1 vez en 15':'12 hi cap 1 vegada a 15','. No podemos poner 2, porque':'. No podem posar 2, perquè','y nos pasaríamos.':'i ens passaríem.','cociente: 1':'quocient: 1','Multiplicamos y restamos':'Multipliquem i restem','Restamos lo que hemos usado:':'Restem el que hem fet servir:','. Ese 3 es el resto provisional.':'. Aquest 3 és el residu provisional.','Bajamos la siguiente cifra':'Baixem la xifra següent','Bajamos el':'Baixem el','y lo colocamos al lado del 3. Así formamos el nuevo grupo':'i el col·loquem al costat del 3. Així formem el grup nou','Repetimos':'Repetim','Ahora preguntamos otra vez: ¿cuántas veces cabe':'Ara tornem a preguntar: quantes vegades hi cap','? Cabe':'? Hi cap','veces, porque':'vegades, perquè','Terminamos':'Acabem','. Ya no queda nada por bajar, así que el resultado final es':'. Ja no queda res per baixar, per tant el resultat final és','resultado: 13':'resultat: 13','💡 Cómo saber si vas bien':'💡 Com saber si vas bé','El producto':'El producte','divisor × cifra del cociente':'divisor × xifra del quocient','nunca puede ser mayor que el grupo que estás usando.':'mai no pot ser més gran que el grup que fas servir.','El resto siempre debe ser':'El residu sempre ha de ser','menor que el divisor':'més petit que el divisor','Bajar una cifra no es sumar: es':'Baixar una xifra no és sumar: és','juntarla al resto':'ajuntar-la al residu','para crear el nuevo grupo.':'per crear el grup nou.','Elegir una cifra del cociente demasiado grande.':'Triar una xifra del quocient massa gran.','Bajar una cifra antes de haber multiplicado y restado.':'Baixar una xifra abans d’haver multiplicat i restat.','Olvidar un 0 en el cociente cuando hace falta.':'Oblidar un 0 al quocient quan cal.','Ciclo fijo: dividir → multiplicar → restar → bajar.':'Cicle fix: dividir → multiplicar → restar → baixar.','El cociente responde: “¿cuántas veces cabe?”.':'El quocient respon: “quantes vegades hi cap?”.','El resto nunca puede ser mayor o igual que el divisor.':'El residu mai no pot ser més gran o igual que el divisor.','Comprobación: divisor × cociente + resto = dividendo.':'Comprovació: divisor × quocient + residu = dividend.','¿Cuánto es 84 ÷ 7?':'Quant és 84 ÷ 7?',
    '¿QUÉ PREGUNTA HACE UNA RAÍZ CUADRADA?':'QUINA PREGUNTA FA UNA ARREL QUADRADA?','√n pregunta qué número multiplicado por sí mismo produce n.':'√n pregunta quin nombre multiplicat per si mateix produeix n.','Es la operación inversa de elevar al cuadrado.':'És l’operació inversa d’elevar al quadrat.','Los cuadrados perfectos son 1,4,9,16,25,36…':'Els quadrats perfectes són 1, 4, 9, 16, 25, 36…','Comprueba si el radicando es cuadrado perfecto.':'Comprova si el radicand és un quadrat perfecte.','Si no lo es, busca los cuadrados perfectos cercanos para estimar.':'Si no ho és, busca els quadrats perfectes propers per estimar.','Para simplificar, busca el mayor factor cuadrado perfecto.':'Per simplificar, busca el factor quadrat perfecte més gran.','Separa √(a×b)=√a×√b cuando a es cuadrado perfecto.':'Separa √(a×b)=√a×√b quan a és un quadrat perfecte.','Comprueba elevando el resultado al cuadrado o reconstruyendo el radicando.':'Comprova-ho elevant el resultat al quadrat o reconstruint el radicand.','72 no es cuadrado perfecto.':'72 no és un quadrat perfecte.','36 es el mayor factor cuadrado perfecto.':'36 és el factor quadrat perfecte més gran.','Separamos factores.':'Separem factors.','Porque √36 = 6.':'Perquè √36 = 6.','√25=5 porque 5×5=25.':'√25=5 perquè 5×5=25.','Entre 6²=36 y 7²=49 está √40.':'Entre 6²=36 i 7²=49 hi ha √40.','Busca factores 4,9,16,25,36…':'Busca factors 4, 9, 16, 25, 36…','Solo sale fuera de la raíz la raíz exacta del factor cuadrado.':'Només surt fora de l’arrel l’arrel exacta del factor quadrat.','Dividir el radicando sin que sea un factor.':'Dividir el radicand sense que sigui un factor.','Pensar que √(a+b)=√a+√b.':'Pensar que √(a+b)=√a+√b.','Sacar un número fuera sin tomar su raíz.':'Treure un nombre fora sense calcular-ne l’arrel.','Qué significa una raíz cuadrada':'Què significa una arrel quadrada','La raíz cuadrada de un número es el valor que, multiplicado por sí mismo, produce ese número. Por ejemplo, √49 = 7 porque 7 × 7 = 49.':'L’arrel quadrada d’un nombre és el valor que, multiplicat per si mateix, produeix aquest nombre. Per exemple, √49 = 7 perquè 7 × 7 = 49.','La raíz cuadrada deshace una potencia de exponente 2:':'L’arrel quadrada desfà una potència d’exponent 2:','1. Cuadrados perfectos':'1. Quadrats perfectes','Un cuadrado perfecto es el resultado de multiplicar un número entero por sí mismo: 1, 4, 9, 16, 25, 36, 49…':'Un quadrat perfecte és el resultat de multiplicar un nombre enter per si mateix: 1, 4, 9, 16, 25, 36, 49…','porque 12 × 12 = 144':'perquè 12 × 12 = 144','conocer los cuadrados del 1 al 15 hace que las raíces exactas sean mucho más rápidas.':'conèixer els quadrats de l’1 al 15 fa que les arrels exactes siguin molt més ràpides.','2. Raíces que no son exactas':'2. Arrels que no són exactes','Si el número no es un cuadrado perfecto, buscamos los cuadrados perfectos que quedan justo por debajo y por encima.':'Si el nombre no és un quadrat perfecte, busquem els quadrats perfectes que queden just per sota i per sobre.','Como 30 está más cerca de 25 que de 36, √30 está más cerca de 5 que de 6.':'Com que 30 és més a prop de 25 que de 36, √30 és més a prop de 5 que de 6.','3. Simplificar una raíz':'3. Simplificar una arrel','Buscamos dentro del radicando el mayor factor que sea un cuadrado perfecto. Después usamos √(a × b) = √a × √b.':'Busquem dins del radicand el factor més gran que sigui un quadrat perfecte. Després fem servir √(a × b) = √a × √b.','prueba primero con 4, 9, 16, 25, 36… buscando el mayor que divida exactamente al número.':'prova primer amb 4, 9, 16, 25, 36… i busca el més gran que divideixi exactament el nombre.','⚠️ Errores frecuentes:':'⚠️ Errors freqüents:','• Pensar que √a + √b = √(a+b).':'• Pensar que √a + √b = √(a+b).','• Confundir √36 con 18.':'• Confondre √36 amb 18.','• Extraer un factor que no sea cuadrado perfecto.':'• Extreure un factor que no sigui un quadrat perfecte.','Practicar ahora: raíces':'Practica ara: arrels','¿Cuál es √81?':'Quant és √81?',
    '¿QUÉ REPRESENTA UNA FRACCIÓN?':'QUÈ REPRESENTA UNA FRACCIÓ?','Una fracción representa partes iguales de una unidad. El':'Una fracció representa parts iguals d’una unitat. El','denominador':'denominador','dice en cuántas partes se divide; el':'diu en quantes parts es divideix; el','numerador':'numerador','dice cuántas tomamos.':'diu quantes en prenem.','Numerador arriba, denominador abajo.':'Numerador a dalt, denominador a baix.','Para sumar o restar, las partes tienen que tener el mismo tamaño.':'Per sumar o restar, les parts han de tenir la mateixa mida.','Identifica la operación.':'Identifica l’operació.','En suma o resta, busca un denominador común.':'En una suma o resta, busca un denominador comú.','Convierte las fracciones en equivalentes.':'Converteix les fraccions en equivalents.','Opera los numeradores y conserva el denominador.':'Opera els numeradors i conserva el denominador.','Al final pregunta: ¿se puede simplificar?':'Al final pregunta’t: es pot simplificar?','EMPEZAMOS POR LA IDEA':'COMENCEM PER LA IDEA','¿Por qué hace falta un denominador común?':'Per què cal un denominador comú?','No puedes sumar directamente':'No pots sumar directament','porque un tercio y un cuarto no tienen el mismo tamaño.':'perquè un terç i un quart no tenen la mateixa mida.','→ primero igualamos las partes':'→ primer igualem les parts','Cómo hallamos el MCM':'Com trobem el MCM','Una forma muy clara es escribir varios':'Una manera molt clara és escriure diversos','múltiplos':'múltiples','de cada denominador y buscar el':'de cada denominador i buscar el','primero que aparece en ambos':'primer que apareix en tots dos','Múltiplos de 3':'Múltiples de 3','Múltiplos de 4':'Múltiples de 4','El primer número común es 12, así que ese será nuestro denominador común.':'El primer nombre comú és 12, així que aquest serà el nostre denominador comú.','Suma con distinto denominador':'Suma amb denominadors diferents','Los denominadores son distintos, así que no podemos sumar todavía.':'Els denominadors són diferents, així que encara no podem sumar.','Usaremos doceavos.':'Farem servir dotzens.','Multiplicamos arriba y abajo por 4.':'Multipliquem a dalt i a baix per 4.','Multiplicamos arriba y abajo por 3.':'Multipliquem a dalt i a baix per 3.','Ahora sí: sumamos solo los numeradores y mantenemos el denominador.':'Ara sí: sumem només els numeradors i mantenim el denominador.','Cómo simplificamos con el MCD':'Com simplifiquem amb el MCD','Para saber si una fracción se puede simplificar, buscamos si':'Per saber si una fracció es pot simplificar, comprovem si','numerador y denominador comparten divisores':'el numerador i el denominador comparteixen divisors','. El mayor de ellos es el':'. El més gran és el','Divisores de 8':'Divisors de 8','Divisores de 12':'Divisors de 12','Como ambos comparten 4, podemos dividir arriba y abajo entre 4: 8/12 = 2/3.':'Com que tots dos comparteixen el 4, podem dividir a dalt i a baix entre 4: 8/12 = 2/3.','Idea clave:':'Idea clau:','solo simplificamos si':'només simplifiquem si','comparten':'comparteixen','un divisor mayor que 1.':'un divisor més gran que 1.','Error frecuente:':'Error freqüent:','sumar los denominadores o dividir solo una parte de la fracción.':'sumar els denominadors o dividir només una part de la fracció.','Practicar ahora: fracciones':'Practica ara: fraccions','En suma y resta: primero iguala denominadores.':'En suma i resta: primer iguala els denominadors.','Las fracciones equivalentes cambian de aspecto, no de valor.':'Les fraccions equivalents canvien d’aspecte, no de valor.','En multiplicación: arriba × arriba, abajo × abajo.':'En multiplicació: a dalt × a dalt, a baix × a baix.','En división: invierte la segunda y multiplica.':'En divisió: inverteix la segona i multiplica.','Para sumar 1/3 + 1/6, ¿qué denominador común mínimo usamos?':'Per sumar 1/3 + 1/6, quin denominador comú mínim fem servir?',
    '¿POR QUÉ EXISTE UN ORDEN?':'PER QUÈ HI HA UN ORDRE?','Sin un acuerdo, una misma expresión podría dar respuestas distintas. La jerarquía garantiza una única interpretación.':'Sense un acord, una mateixa expressió podria donar respostes diferents. La jerarquia garanteix una única interpretació.','Una expresión contiene varias operaciones.':'Una expressió conté diverses operacions.','No siempre se calcula simplemente de izquierda a derecha.':'No sempre es calcula simplement d’esquerra a dreta.','Resuelve primero los paréntesis.':'Resol primer els parèntesis.','Después las potencias.':'Després, les potències.','Luego multiplicaciones y divisiones, de izquierda a derecha.':'Després, multiplicacions i divisions, d’esquerra a dreta.','Finalmente sumas y restas, de izquierda a derecha.':'Finalment, sumes i restes, d’esquerra a dreta.','Sustituye solo la parte resuelta y vuelve a mirar toda la expresión.':'Substitueix només la part resolta i torna a mirar tota l’expressió.','Primero paréntesis.':'Primer, parèntesis.','Sustituimos.':'Substituïm.','Potencia.':'Potència.','Multiplicación.':'Multiplicació.','Resultado.':'Resultat.','P → Potencias → ×÷ → +−.':'P → Potències → ×÷ → +−.','× y ÷ tienen la misma prioridad: izquierda a derecha.':'× i ÷ tenen la mateixa prioritat: d’esquerra a dreta.','+ y − también: izquierda a derecha.':'+ i − també: d’esquerra a dreta.','Después de cada mini-operación, vuelve a leer la expresión completa.':'Després de cada minioperació, torna a llegir l’expressió completa.','Hacer primero la operación que parece más fácil.':'Fer primer l’operació que sembla més fàcil.','Resolver toda la expresión de golpe.':'Resoldre tota l’expressió de cop.','Olvidar izquierda a derecha cuando la prioridad es igual.':'Oblidar l’ordre d’esquerra a dreta quan la prioritat és igual.','Escribe una línea nueva tras cada operación; solo debe cambiar la parte resuelta.':'Escriu una línia nova després de cada operació; només ha de canviar la part resolta.','El orden correcto':'L’ordre correcte','Paréntesis.':'Parèntesis.','Potencias.':'Potències.','Multiplicaciones y divisiones, de izquierda a derecha.':'Multiplicacions i divisions, d’esquerra a dreta.','Sumas y restas, de izquierda a derecha.':'Sumes i restes, d’esquerra a dreta.','Ejemplo con potencia':'Exemple amb potència','Primero resolvemos 2² = 4. Después 4 × 5 = 20. Por último 3 + 20 = 23.':'Primer resolem 2² = 4. Després 4 × 5 = 20. Finalment 3 + 20 = 23.','piensa en una potencia como una multiplicación repetida: 2³ = 2 × 2 × 2.':'pensa en una potència com una multiplicació repetida: 2³ = 2 × 2 × 2.','confundir 3² con 3 × 2. En realidad 3² = 3 × 3.':'confondre 3² amb 3 × 2. En realitat, 3² = 3 × 3.','Practicar ahora: jerarquía':'Practica ara: jerarquia','En 3 + 2 × 5, ¿qué operación va primero?':'A 3 + 2 × 5, quina operació va primer?',
    '¿QUÉ ES UNA ECUACIÓN?':'QUÈ ÉS UNA EQUACIÓ?','Es una igualdad con un valor desconocido. Resolverla significa descubrir qué valor hace verdadera la igualdad.':'És una igualtat amb un valor desconegut. Resoldre-la significa descobrir quin valor fa certa la igualtat.','Hay un signo igual y una incógnita, normalmente x.':'Hi ha un signe igual i una incògnita, normalment x.','Los dos lados deben conservar siempre el mismo valor.':'Els dos costats han de conservar sempre el mateix valor.','Piensa en una balanza: haz lo mismo en ambos lados.':'Pensa en una balança: fes el mateix als dos costats.','Elige un término que impide dejar x sola.':'Tria un terme que impedeix deixar la x sola.','Usa la operación inversa para deshacerlo.':'Fes servir l’operació inversa per desfer-lo.','Simplifica ambos lados.':'Simplifica tots dos costats.','Repite hasta obtener x = número.':'Repeteix fins a obtenir x = nombre.','Sustituye el número en la ecuación original para comprobar.':'Substitueix el nombre a l’equació original per comprovar-ho.','Queremos dejar x sola.':'Volem deixar la x sola.','Restamos 5 en ambos lados':'Restem 5 als dos costats','Dividimos ambos lados entre 3':'Dividim tots dos costats entre 3','Comprobamos':'Comprovem','3×5+5=20; verdadero.':'3×5+5=20; cert.','+a se deshace con −a.':'+a es desfà amb −a.','−a se deshace con +a.':'−a es desfà amb +a.','×a se deshace con ÷a.':'×a es desfà amb ÷a.','Nunca cambies algo en un solo lado.':'No canviïs mai res només en un costat.','No “pasa cambiando signo”: escribe la operación en ambos lados.':'No “passa canviant de signe”: escriu l’operació als dos costats.','Cambiar de signo sin comprender la operación inversa.':'Canviar de signe sense entendre l’operació inversa.','Operar solo un lado.':'Operar només un costat.','No comprobar la solución en la ecuación original.':'No comprovar la solució a l’equació original.','Una solución es correcta solo si al sustituirla ambos lados dan exactamente lo mismo.':'Una solució és correcta només si, en substituir-la, tots dos costats donen exactament el mateix.','IDEA FUNDAMENTAL':'IDEA FONAMENTAL','Una ecuación es una balanza':'Una equació és una balança','El signo igual no significa «aquí viene la respuesta». Significa que el lado izquierdo y el derecho tienen exactamente el mismo valor.':'El signe igual no significa «aquí ve la resposta». Significa que el costat esquerre i el dret tenen exactament el mateix valor.','Para que la balanza siga equilibrada, cualquier operación que hagamos en un lado debemos hacerla también en el otro.':'Perquè la balança continuï equilibrada, qualsevol operació que fem en un costat també l’hem de fer a l’altre.','Lo mismo en los dos lados.':'El mateix als dos costats.','HERRAMIENTA':'EINA','Las operaciones inversas deshacen':'Les operacions inverses desfan','se deshace con':'es desfà amb','El objetivo es dejar a':'L’objectiu és deixar la','x sola':'x sola','. No «pasamos» números mágicamente: aplicamos la operación inversa en ambos lados.':'. No «passem» nombres màgicament: apliquem l’operació inversa als dos costats.','EJEMPLO 1':'EXEMPLE 1','Una operación: x + 5 = 12':'Una operació: x + 5 = 12','Queremos quitar el +5.':'Volem treure el +5.','Restamos 5 en ambos lados.':'Restem 5 als dos costats.','La incógnita ya está sola.':'La incògnita ja està sola.','Comprobación:':'Comprovació:','sustituimos x por 7 → 7 + 5 = 12. Es verdadero.':'substituïm x per 7 → 7 + 5 = 12. És cert.','EJEMPLO 2':'EXEMPLE 2','Dos pasos: 3x + 5 = 20':'Dos passos: 3x + 5 = 20','Primero deshacemos la suma.':'Primer desfem la suma.','Ahora deshacemos el ×3.':'Ara desfem el ×3.','Dividimos ambos lados entre 3.':'Dividim tots dos costats entre 3.','Solución.':'Solució.','EJEMPLO 3':'EXEMPLE 3','La incógnita en ambos lados':'La incògnita als dos costats','Juntamos las x en un lado.':'Ajuntem les x en un costat.','Restamos 3x en ambos lados.':'Restem 3x als dos costats.','Ahora quitamos el +2.':'Ara traiem el +2.','Dividimos entre 2.':'Dividim entre 2.','Comprobamos en la ecuación original.':'Comprovem-ho a l’equació original.','cambiar un signo al «pasarlo» sin entender por qué. Es más seguro escribir la misma operación debajo de los dos lados.':'canviar un signe en «passar-lo» sense entendre per què. És més segur escriure la mateixa operació sota els dos costats.','Practicar ahora: ecuaciones':'Practica ara: equacions','Para empezar a resolver x + 5 = 12, ¿qué hacemos?':'Per començar a resoldre x + 5 = 12, què fem?','Restar 5 en ambos lados':'Restar 5 als dos costats','Restar 5 solo a la izquierda':'Restar 5 només a l’esquerra','Dividir entre 5':'Dividir entre 5',
    '¿QUÉ SIGNIFICA MULTIPLICAR?':'QUÈ SIGNIFICA MULTIPLICAR?','Multiplicar es contar grupos iguales. 6 × 4 significa 6 grupos de 4.':'Multiplicar és comptar grups iguals. 6 × 4 significa 6 grups de 4.','Misma cantidad repetida varias veces.':'La mateixa quantitat repetida diverses vegades.','Filas y columnas iguales, paquetes o grupos.':'Files i columnes iguals, paquets o grups.','Entiende qué representan los dos factores.':'Entén què representen els dos factors.','Construye el resultado con suma repetida o un dibujo.':'Construeix el resultat amb una suma repetida o un dibuix.','Usa patrones conocidos.':'Fes servir patrons coneguts.','Relaciona hechos cercanos.':'Relaciona fets propers.','Practica recuperar la respuesta sin contar desde cero.':'Practica recuperar la resposta sense comptar des de zero.','Seis grupos de cuatro.':'Sis grups de quatre.','Suma repetida.':'Suma repetida.','Usamos una tabla conocida para obtener otra.':'Fem servir una taula coneguda per obtenir-ne una altra.','×2: doblar.':'×2: doblar.','×4: doblar dos veces.':'×4: doblar dues vegades.','×5: termina en 0 o 5.':'×5: acaba en 0 o 5.','×9: ×10 y resta una vez el número.':'×9: ×10 i resta una vegada el nombre.','Cambiar el orden no cambia el producto: 6×4 = 4×6.':'Canviar l’ordre no canvia el producte: 6×4 = 4×6.','Memorizar sonidos sin entender grupos.':'Memoritzar sons sense entendre els grups.','Confundir 6×4 con 6+4.':'Confondre 6×4 amb 6+4.','Empezar siempre desde cero aunque conozcas una tabla cercana.':'Començar sempre des de zero encara que coneguis una taula propera.','6 grupos de 4 deben dar más que 6 y más que 4: 24 tiene sentido.':'6 grups de 4 han de donar més que 6 i més que 4: 24 té sentit.','Entender antes de memorizar':'Entendre abans de memoritzar','6 × 4 significa seis grupos de cuatro. También puede verse como 4 × 6 gracias a la propiedad conmutativa.':'6 × 4 significa sis grups de quatre. També es pot veure com 4 × 6 gràcies a la propietat commutativa.','Descomposición':'Descomposició','usa dobles, cincos y dieces para construir tablas difíciles.':'fes servir dobles, cincs i deus per construir taules difícils.','practicar siempre las fáciles y evitar las combinaciones débiles.':'practicar sempre les fàcils i evitar les combinacions febles.','Practicar ahora: tablas':'Practica ara: taules','¿Cuánto es 7 × 8?':'Quant és 7 × 8?','1. ¿Qué tablas quieres practicar?':'1. Quines taules vols practicar?','Todas (1–10)':'Totes (1–10)','Ninguna':'Cap','Pares':'Parells','Impares':'Senars','Mis puntos débiles 🔍':'Els meus punts febles 🔍','Selección rápida':'Selecció ràpida','Elige las tablas que quieras practicar. He quitado el mapa de dominio para dejar esta pantalla más limpia y directa.':'Tria les taules que vulguis practicar. He tret el mapa de domini per deixar aquesta pantalla més neta i directa.','2. Modo de juego':'2. Mode de joc','Aleatorio':'Aleatori','Preguntas al azar de las tablas elegidas':'Preguntes a l’atzar de les taules triades','Puntos débiles':'Punts febles','Repite más las que peor dominas':'Repeteix més les que domines pitjor','Contrarreloj':'Contra rellotge','60 segundos, las que puedas':'60 segons, tantes com puguis','3. Duración':'3. Durada','Número de preguntas:':'Nombre de preguntes:','Empezar a practicar':'Comença a practicar','¡Ronda completada!':'Ronda completada!','Precisión':'Precisió','⭐ ganadas':'⭐ guanyades','Otra ronda igual':'Una altra ronda igual','Cambiar configuración':'Canvia la configuració','💡 Ayuda':'💡 Ajuda','Consejo del módulo':'Consell del mòdul','Elige una actividad y te mostraré aquí la idea clave.':'Tria una activitat i et mostraré aquí la idea clau.','Teclado':'Teclat','Teclado numérico':'Teclat numèric','Cerrar teclado':'Tanca el teclat','Comprobar o continuar':'Comprova o continua','También puedes seguir escribiendo con el teclado normal.':'També pots continuar escrivint amb el teclat normal.'
  };
  for (const [source, target] of Object.entries(academyExact)) exact.set(source, target);
  const staticRemainder = {
    'Mates Quest':'Mates Quest','XP':'XP','Ej.: 144':'Ex.: 144','Ej.: 3/4 o 5':'Ex.: 3/4 o 5',
    '25 < 30 < 36':'25 < 30 < 36','5² < 30 < 6²':'5² < 30 < 6²','5 < √30 < 6':'5 < √30 < 6',
    'x + 5 = 12 · 3x = 18':'x + 5 = 12 · 3x = 18','3x + 5 = 20':'3x + 5 = 20','5x + 2 = 3x + 12':'5x + 2 = 3x + 12',
    'igual':'igual','➕ Sumas':'➕ Sumes','o':'o','. Escribimos':'. Escrivim','Escribir':'Escriu','➖ Restas':'➖ Restes',
    'Empieza siempre por la derecha.':'Comença sempre per la dreta.','✖️ Multiplicaciones':'✖️ Multiplicacions','➗ Divisiones':'➗ Divisions',
    ': la cantidad que tenemos.':': la quantitat que tenim.',': el tamaño del grupo.':': la mida del grup.','Escribimos':'Escrivim','en':'a','Restamos':'Restem',
    'MCM(3,4) = 12':'MCM(3,4) = 12','MCM(3,4)=12':'MCM(3,4)=12','MCD':'MCD','MCD(8,12) = 4':'MCD(8,12) = 4',
    '3x = 15.':'3x = 15.','x = 5.':'x = 5.','3x + 5':'3x + 5','x + 5':'x + 5','x + 5 − 5':'x + 5 − 5','x':'x',
    '3x + 5 − 5':'3x + 5 − 5','3x':'3x','3x ÷ 3':'3x ÷ 3','5x + 2':'5x + 2','3x + 12':'3x + 12',
    '5x + 2 − 3x':'5x + 2 − 3x','3x + 12 − 3x':'3x + 12 − 3x','2x + 2':'2x + 2','2x':'2x',
    '🔢 Tablas':'🔢 Taules','3 × 4 = 12; el doble es 6 × 4 = 24':'3 × 4 = 12; el doble és 6 × 4 = 24','Pregunta 1/15':'Pregunta 1/15','C':'C'
  };
  for (const [source, target] of Object.entries(staticRemainder)) exact.set(source, target);
  const dynamicExact = {
    'El 5 presta una decena: pasa a 4, y esa decena se convierte en 10 unidades. Por eso 2 pasa a 12.':'El 5 presta una desena: passa a 4, i aquesta desena es converteix en 10 unitats. Per això el 2 passa a 12.',
    'Sí. Esa línea corresponde a las decenas: en realidad multiplicamos por 10.':'Sí. Aquesta línia correspon a les desenes: en realitat multipliquem per 10.',
    '6 es el mínimo común múltiplo de 3 y 6.':'6 és el mínim comú múltiple de 3 i 6.','¡Muy bien! Seguimos.':'Molt bé! Continuem.',
    'Podemos empezar antes.':'Podem començar abans.','Hemos deshecho solo la última cifra del producto.':'Només hem desfet l’última xifra del producte.',
    'Añadimos un cero para continuar con decimales.':'Afegim un zero per continuar amb decimals.','Introduce números positivos y un divisor distinto de cero.':'Introdueix nombres positius i un divisor diferent de zero.',
    'Piensa solo en las cifras resaltadas.':'Pensa només en les xifres ressaltades.','Introduce dos números enteros positivos.':'Introdueix dos nombres enters positius.',
    'Resta personalizada':'Resta personalitzada','Escribe los dos números o pulsa ‘Aleatoria según nivel’.':'Escriu els dos nombres o prem «Aleatòria segons el nivell».',
    'Introduce números enteros positivos.':'Introdueix nombres enters positius.','En la resta, el primer número debe ser mayor o igual que el segundo.':'En la resta, el primer nombre ha de ser més gran o igual que el segon.',
    'Busca el primer múltiplo que se repite':'Busca el primer múltiple que es repeteix','El primer número común a todas las filas es el MCM.':'El primer nombre comú a totes les files és el MCM.',
    'Regla:':'Regla:','una fracción se puede simplificar cuando numerador y denominador comparten algún divisor mayor que 1.':'una fracció es pot simplificar quan el numerador i el denominador comparteixen algun divisor més gran que 1.',
    'Bien. Mira cómo ha cambiado la operación y seguimos.':'Bé. Mira com ha canviat l’operació i continuem.','Busca un divisor mayor que 1 que aparezca en los dos grupos.':'Busca un divisor més gran que 1 que aparegui als dos grups.',
    'Comprueba si existe algún divisor común mayor que 1.':'Comprova si hi ha algun divisor comú més gran que 1.','¿Qué operación debemos resolver ahora?':'Quina operació hem de resoldre ara?',
    'Correcto. Ahora calcula esa operación.':'Correcte. Ara calcula aquesta operació.','Divide solo los dos números resaltados.':'Divideix només els dos nombres ressaltats.',
    '¡Misión completada! Has seguido el orden correcto.':'Missió completada! Has seguit l’ordre correcte.','Jerarquía avanzada':'Jerarquia avançada','En este reto pueden aparecer resultados negativos.':'En aquest repte poden aparèixer resultats negatius.',
    'Jerarquía inicial':'Jerarquia inicial','Todos los pasos están preparados para mantener resultados positivos.':'Tots els passos estan preparats per mantenir resultats positius.',
    'Nivel avanzado: algunos pasos pueden producir números negativos.':'Nivell avançat: alguns passos poden produir nombres negatius.','Fíjate especialmente en:':'Fixa’t especialment en:',
    'Haz solo la cuenta numérica del movimiento que acabas de construir. No cambies la x: simplifica únicamente los números.':'Fes només el càlcul numèric del moviment que acabes de construir. No canviïs la x: simplifica únicament els nombres.',
    'Todavía no. Vuelve al ejemplo y prueba otra opción.':'Encara no. Torna a l’exemple i prova una altra opció.','Busca cuadrados perfectos':'Busca quadrats perfectes','Halla las raíces necesarias':'Calcula les arrels necessàries',
    'Introduce un número entero positivo.':'Introdueix un nombre enter positiu.','El número es demasiado grande para este nivel.':'El nombre és massa gran per a aquest nivell.',
    'En el modo Exactas, el número debe ser un cuadrado perfecto. Usa Aleatoria o cambia de modo.':'En el mode Exactes, el nombre ha de ser un quadrat perfecte. Fes servir Aleatòria o canvia de mode.',
    'En “Entre enteros” usa un número cuya raíz no sea exacta.':'A «Entre enters», fes servir un nombre que no tingui arrel exacta.',
    'Para simplificar, usa un número con un factor cuadrado perfecto, pero que no sea ya una raíz exacta.':'Per simplificar, fes servir un nombre amb un factor quadrat perfecte, però que no sigui ja una arrel exacta.',
    'Revisa los dos valores y colócalos de menor a mayor.':'Revisa els dos valors i col·loca’ls de menor a major.','Antes de resolver, decide si la raíz es exacta o si habría que aproximarla.':'Abans de resoldre, decideix si l’arrel és exacta o si caldria aproximar-la.',
    'Sí, es exacta':'Sí, és exacta','Piensa en la multiplicación inversa: buscamos un número que, repetido dos veces, produzca el radicando.':'Pensa en la multiplicació inversa: busquem un nombre que, repetit dues vegades, produeixi el radicand.',
    'Escribe un número o pulsa Aleatoria.':'Escriu un nombre o prem Aleatòria.','Elige una o varias tablas y practica con el modo que prefieras.':'Tria una o diverses taules i practica amb el mode que prefereixis.',
    'Elige o crea un perfil para guardar tu progreso, sumar XP y avanzar por los rangos científicos.':'Tria o crea un perfil per desar el teu progrés, sumar XP i avançar pels rangs científics.',
    'Cualquier número × 1 es él mismo:':'Qualsevol nombre × 1 és ell mateix:','No se pudo cargar Firestore':'No s’ha pogut carregar Firestore','No se pudo cargar Firebase':'No s’ha pogut carregar Firebase',
    'Se perdió la conexión con la sincronización.':'S’ha perdut la connexió amb la sincronització.','Todavía no está listo, espera un momento.':'Encara no està llest; espera un moment.'
  };
  for (const [source, target] of Object.entries(dynamicExact)) exact.set(source, target);

  // Textos renderizados por los paneles de pasos y ayudas contextuales.
  // Se mantienen como frases completas para evitar mezclas castellano/catalán.
  const renderedExact = {
    'Haz la resta':'Fes la resta',
    'Llevadas':'Portades',
    'Suma la llevada':'Suma-hi la portada',
    'Productos parciales':'Productes parcials',
    'Desplaza cada fila':'Desplaça cada fila',
    'Entiende la idea, sigue el ejemplo y comprueba antes de practicar.':'Entén la idea, segueix l’exemple i comprova-ho abans de practicar.',
    'Paso actual':'Pas actual',
    'División en curso':'Divisió en curs',
    'Multiplicación en curso':'Multiplicació en curs',
    'Suma de productos parciales':'Suma de productes parcials',
    'Suma únicamente la columna marcada. Si solo hay una cifra, se suma con 0.':'Suma només la columna marcada. Si només hi ha una xifra, se suma amb 0.',
    'Resuelve la resta de derecha a izquierda, una columna cada vez.':'Resol la resta de dreta a esquerra, una columna cada vegada.',
    'Multiplica la cifra inferior por la cifra superior activa y añade la llevada.':'Multiplica la xifra inferior per la xifra superior activa i afegeix-hi la portada.',
    'Empieza por la derecha y desplaza cada producto parcial una columna.':'Comença per la dreta i desplaça cada producte parcial una columna.',
    'Entiende la idea principal.':'Entén la idea principal.',
    'Sigue cada línea del ejemplo.':'Segueix cada línia de l’exemple.',
    'Responde la mini prueba.':'Respon la miniprova.',
    'Practica el mismo concepto.':'Practica el mateix concepte.',
    'Cómo aprender':'Com aprendre',
    'Cada lección combina concepto, ejemplo trabajado, mini prueba y práctica.':'Cada lliçó combina concepte, exemple resolt, miniprova i pràctica.',
    'Elige el primer grupo.':'Tria el primer grup.',
    'Piensa cuántas veces cabe.':'Pensa quantes vegades hi cap.',
    'Baja la siguiente cifra.':'Baixa la xifra següent.'
  };
  for (const [source, target] of Object.entries(renderedExact)) exact.set(source, target);

  // Whole-sentence templates. Never translate isolated words: that produced mixed
  // Spanish/Catalan sentences and made the explanations harder to understand.
  const templates = [
    [/^Construye el número (.+)$/,'Construeix el nombre $1'],
    [/^Has formado (.+)$/,'Has format $1'],
    [/^(.+) de 5 retos comprendidos$/,'$1 de 5 reptes compresos'],
    [/^(.+) de (.+) retos completados$/,'$1 de $2 reptes completats'],
    [/^1 reto completado$/,'1 repte completat'],
    [/^(.+) retos completados$/,'$1 reptes completats'],
    [/^Completa hasta (.+)$/,'Completa fins a $1'],
    [/^Empieza en (.+) y da los saltos (.+)$/,'Comença a $1 i fes els salts $2'],
    [/^Salto (.+) de (.+): (.+)$/,'Salt $1 de $2: $3'],
    [/^(.+) aterriza en (.+).$/,'$1 aterra a $2.'],
    [/^(.+) centenas, (.+) decenas y (.+) unidades.$/,'$1 centenes, $2 desenes i $3 unitats.'],
    [/^(.+) centenas, (.+) decenas y (.+) unidades: (.+)$/,'$1 centenes, $2 desenes i $3 unitats: $4'],
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
    [/^Correcto\. (.+) es el primer grupo que ya se puede dividir\.$/,'Correcte. $1 és el primer grup que ja es pot dividir.'],
    [/^Paso 1: empezamos con (.+)\.$/,'Pas 1: comencem amb $1.'],
    [/^Colocamos (.+) como primer dividendo parcial\.$/,'Col·loquem $1 com a primer dividend parcial.'],
    [/^Correcto\. Empezamos con (.+) como dividendo parcial inicial\.$/,'Correcte. Comencem amb $1 com a dividend parcial inicial.']
    ,[/^El resto es (.+) y ya no quedan cifras por bajar\.$/,'El residu és $1 i ja no queden xifres per baixar.']
    ,[/^Añadimos y bajamos el 0\. El nuevo dividendo parcial es (.+)\.$/,'Afegim i baixem el 0. El dividend parcial nou és $1.']
    ,[/^Pregunta (.+)\/(.+)$/,'Pregunta $1/$2']
    ,[/^¡Racha de (.+)! Imparable 🔥$/,'Ratxa de $1! Imparable 🔥']
    ,[/^¡Racha de (.+)! 🔥$/,'Ratxa de $1! 🔥']
    ,[/^✅ ¡Correcto! (.+)$/,'✅ Correcte! $1']
    ,[/^Operación (.+) generada\.$/,'Operació $1 generada.']
    ,[/^Operación con (.+) fracciones generada\.$/,'Operació amb $1 fraccions generada.']
    ,[/^Resultado final: (.+)$/,'Resultat final: $1']
    ,[/^Suma en curso (.+)\. Empieza por las unidades y recuerda las llevadas\.$/,'Suma en curs $1. Comença per les unitats i recorda les portades.']
    ,[/^Resta en curso (.+)\. Comprueba en cada columna si necesitas pedir prestado\.$/,'Resta en curs $1. Comprova a cada columna si cal demanar prestat.']
    ,[/^Multiplicación en curso (.+)\. Trabaja cifra a cifra y controla las llevadas\.$/,'Multiplicació en curs $1. Treballa xifra per xifra i controla les portades.']
    ,[/^En las (.+): ¿cuánto es (.+)\?$/,'A les $1: quant és $2?']
    ,[/^Suma la columna de (.+)\.$/,'Suma la columna de $1.']
    ,[/^Escribimos (.+) y seguimos una columna a la izquierda\.$/,'Escrivim $1 i continuem una columna cap a l’esquerra.']
    ,[/^Primero calcula (.+)\. Después añade la llevada (.+)\.$/,'Primer calcula $1. Després afegeix-hi la portada $2.']
    ,[/^Hazlo en dos mini-pasos: (.+), y después añade (.+)\.$/,'Fes-ho en dos minipassos: $1, i després afegeix-hi $2.']
    ,[/^Revisa solo esta cuenta: primero (.+) y después suma la llevada (.+)\.$/,'Revisa només aquest càlcul: primer $1 i després suma-hi la portada $2.']
    ,[/^¿Entre qué dos enteros está (.+)\?$/,'Entre quins dos enters es troba $1?']
    ,[/^Antes de calcular: ¿(.+) es un cuadrado perfecto\?$/,'Abans de calcular: $1 és un quadrat perfecte?']
    ,[/^¿Cuál es el mayor factor cuadrado perfecto de (.+)\?$/,'Quin és el factor quadrat perfecte més gran de $1?']
    ,[/^Sí\. (.+) es un cuadrado perfecto, así que su raíz será un número entero\.$/,'Sí. $1 és un quadrat perfecte, per tant la seva arrel serà un nombre enter.']
    ,[/^Compara (.+) con (.+)\.$/,'Compara $1 amb $2.']
    ,[/^¿Se puede simplificar (.+)\?$/,'Es pot simplificar $1?']
    ,[/^Divide (.+) y (.+) entre (.+)\. ¿Qué fracción queda\?$/,'Divideix $1 i $2 entre $3. Quina fracció queda?']
    ,[/^Todas las fracciones pasarán a denominador (.+)\.$/,'Totes les fraccions passaran a tenir denominador $1.']
    ,[/^Los denominadores ya son iguales \((.+)\)\.$/,'Els denominadors ja són iguals ($1).']
    ,[/^Multiplicamos arriba y abajo por (.+)\.$/,'Multipliquem a dalt i a baix per $1.']
    ,[/^Comprobación: ambos lados valen (.+)\.$/,'Comprovació: tots dos costats valen $1.']
    ,[/^Una opción válida es (.+) en ambos lados\.$/,'Una opció vàlida és $1 als dos costats.']
    ,[/^Movimiento (.+): decide cómo simplificar la igualdad\.$/,'Moviment $1: decideix com simplificar la igualtat.']
    ,[/^Tabla del (.+): todavía sin practicar\.$/,'Taula del $1: encara sense practicar.']
    ,[/^Tabla del (.+): (.+) aciertos de (.+) respuestas \((.+)%\)\.$/,'Taula del $1: $2 encerts de $3 respostes ($4%).']
    ,[/^(.+)\/10 cuentas dominadas$/,'$1/10 operacions dominades']
    ,[/^(.+) cargas de energía disponibles$/,'$1 càrregues d’energia disponibles']
    ,[/^Todavía no está listo, espera un momento\.$/,'Encara no està llest; espera un moment.']
    ,[/^Se perdió la conexión con la sincronización\.$/,'S’ha perdut la connexió amb la sincronització.']
    ,[/^✅ Sincronizado \(código (.+)\)$/,'✅ Sincronitzat (codi $1)']
    ,[/^(.+) cargas de energía disponibles$/,'$1 càrregues d’energia disponibles']
    ,[/^(.+) ¡Reto perfecto, sin errores! · \+(.+) puntos$/,'$1 Repte perfecte, sense errors! · +$2 punts']
    ,[/^(.+) ¡Muy bien! Solo hubo un error\. · \+(.+) puntos$/,'$1 Molt bé! Només hi ha hagut un error. · +$2 punts']
    ,[/^(.+) ¡Reto completado! · \+(.+) puntos$/,'$1 Repte completat! · +$2 punts']
    ,[/^Correcto\. (.+) es el primer grupo que ya se puede dividir\.$/,'Correcte. $1 és el primer grup que ja es pot dividir.']
    ,[/^Paso 3: multiplica (.+) × (.+) y añade la llevada (.+)\.$/,'Pas 3: multiplica $1 × $2 i afegeix-hi la portada $3.']
    ,[/^En las (.+): ¿cuánto es (.+) × (.+) \+ (.+)\?$/,'A les $1: quant és $2 × $3 + $4?']
    ,[/^En las (.+): ¿cuánto es (.+) × (.+)\?$/,'A les $1: quant és $2 × $3?']
    ,[/^Revisa solo la tabla del (.+): (.+) × (.+)\.$/,'Revisa només la taula del $1: $2 × $3.']
    ,[/^¿Qué cifra baja ahora\?$/,'Quina xifra baixa ara?']
    ,[/^Divide (.+) entre (.+)$/,'Divideix $1 entre $2']
    ,[/^Multiplica (.+) × (.+)$/,'Multiplica $1 × $2']
    ,[/^Suma (.+) \+ (.+)$/,'Suma $1 + $2']
    ,[/^Resta (.+) − (.+)$/,'Resta $1 − $2']
    ,[/^Multiplica (.+) × (.+) y suma la llevada (.+)\.$/,'Multiplica $1 × $2 i suma-hi la portada $3.']
    ,[/^Piensa solo en (.+) × (.+)\. Ese producto te dirá qué escribir en esta casilla\.$/,'Pensa només en $1 × $2. Aquest producte et dirà què has d’escriure en aquesta casella.']
    ,[/^Suma la columna de (.+)\.$/,'Suma la columna de $1.']
    ,[/^Suma solo esta columna: (.+)\. Si el total pasa de 9, escribe la unidad y guarda la llevada\.$/,'Suma només aquesta columna: $1. Si el total passa de 9, escriu la unitat i guarda la portada.']
    ,[/^Suma (.+) y la llevada (.+)\.$/,'Suma $1 i la portada $2.']
    ,[/^Fíjate: arriba \((.+)\) es menor que abajo \((.+)\), sí hace falta\.$/,'Fixa’t: a dalt ($1) és més petit que a baix ($2); sí que cal.']
    ,[/^Operación (.+) generada\.$/,'Operació $1 generada.']
    ,[/^¿Se puede simplificar (.+)\?$/,'Es pot simplificar $1?']
    ,[/^Sí\. Comparten (.+); por eso se puede reducir\.$/,'Sí. Comparteixen $1; per això es pot simplificar.']
    ,[/^Dividimos numerador y denominador entre (.+); la fracción vale lo mismo, pero queda más sencilla\.$/,'Dividim el numerador i el denominador entre $1; la fracció val el mateix, però queda més senzilla.']
    ,[/^¿Cuál es el primer múltiplo que aparece en todas las filas\?$/,'Quin és el primer múltiple que apareix a totes les files?']
    ,[/^El primer múltiplo repetido es (.+)\.$/,'El primer múltiple repetit és $1.']
    ,[/^En (.+), ¿cuánto es (.+) × (.+)\?$/,'A $1, quant és $2 × $3?']
    ,[/^Transformamos la fracción (.+)$/,'Transformem la fracció $1']
    ,[/^El denominador sigue siendo (.+)\.$/,'El denominador continua sent $1.']
    ,[/^El resultado provisional es (.+)\.$/,'El resultat provisional és $1.']
    ,[/^¿Cuál es la inversa de (.+)\?$/,'Quina és la inversa de $1?']
    ,[/^¡Racha de (.+)! Ya sabes por qué hacemos cada paso\.$/,'Ratxa de $1! Ja saps per què fem cada pas.']
    ,[/^¿Qué operación debemos resolver ahora\?$/,'Quina operació hem de resoldre ara?']
    ,[/^Correcto\. ¡Racha de (.+)! 🔥 Ahora calcula esa operación\.$/,'Correcte. Ratxa de $1! 🔥 Ara calcula aquesta operació.']
    ,[/^¿Cuánto es (.+)\?$/,'Quant és $1?']
    ,[/^Movimiento (.+): decide cómo simplificar la igualdad\.$/,'Moviment $1: decideix com simplificar la igualtat.']
    ,[/^Comprobación: ambos lados valen (.+)\.$/,'Comprovació: tots dos costats valen $1.']
    ,[/^Antes de calcular: ¿(.+) es un cuadrado perfecto\?$/,'Abans de calcular: $1 és un quadrat perfecte?']
    ,[/^Sí\. (.+) es un cuadrado perfecto, así que su raíz será un número entero\.$/,'Sí. $1 és un quadrat perfecte, per tant la seva arrel serà un nombre enter.']
    ,[/^(.+) sí es un cuadrado perfecto\.$/,'$1 sí que és un quadrat perfecte.']
    ,[/^Completa: (.+)\. ¿Qué número va en los dos huecos\?$/,'Completa: $1. Quin nombre va als dos espais?']
    ,[/^Entonces, ¿cuál es (.+)\?$/,'Aleshores, quant és $1?']
    ,[/^¿Cuál es el mayor factor cuadrado perfecto de (.+)\?$/,'Quin és el factor quadrat perfecte més gran de $1?']
    ,[/^(.+) = (.+) × ¿qué número\?$/,'$1 = $2 × quin nombre?']
    ,[/^Tabla del (.+): todavía sin practicar\.$/,'Taula del $1: encara sense practicar.']
    ,[/^Pregunta (.+)\/(.+)$/,'Pregunta $1/$2']
    ,[/^Cualquier número × 1 es él mismo: (.+)\.$/,'Qualsevol nombre × 1 és ell mateix: $1.']
    ,[/^✅ ¡Correcto! (.+)$/,'✅ Correcte! $1']

    ,[/^Escribimos (.+) y llevamos (.+)\.$/,'Escrivim $1 i en portem $2.']
    ,[/^Usa solo la tabla: (.+)\.$/,'Fes servir només la taula: $1.']
    ,[/^columna (.+) desde la derecha$/,'columna $1 des de la dreta']
    ,[/^Arriba \((.+)\) ya es mayor o igual que abajo \((.+)\), no hace falta\.$/,'A dalt ($1) ja és més gran o igual que a baix ($2); no cal.']
    ,[/^La operación escrita no es (.+)\. Cambia los números o el nivel\.$/,'L’operació escrita no és $1. Canvia els nombres o el nivell.']
    ,[/^Como ya sabemos que es reducible, dividimos arriba y abajo entre su MCD: (.+)\.$/,'Com que ja sabem que es pot reduir, dividim a dalt i a baix pel seu MCD: $1.']
    ,[/^Calcula los numeradores: (.+)\.$/,'Calcula els numeradors: $1.']
    ,[/^(.+) = (.+)\. El denominador sigue siendo (.+)\.$/,'$1 = $2. El denominador continua sent $3.']
    ,[/^Intercambia arriba y abajo: (.+)\.$/,'Intercanvia a dalt i a baix: $1.']
    ,[/^Piensa en la potencia como multiplicación repetida: (.+) multiplicado por sí mismo (.+) veces\.$/,'Pensa en la potència com una multiplicació repetida: $1 multiplicat per si mateix $2 vegades.']
    ,[/^Correcto\. ¡Racha de (.+)! 🔥$/,'Correcte. Ratxa de $1! 🔥']
    ,[/^Prueba con cuadrados conocidos: (.+)$/,'Prova amb quadrats coneguts: $1']
    ,[/^Prueba 4, 9, 16, 25, 36… El mayor que divide exactamente a (.+) es (.+)\.$/,'Prova 4, 9, 16, 25, 36… El més gran que divideix exactament $1 és $2.']
    ,[/^¿Cuál es √(.+)\?$/,'Quant és √$1?']
    ,[/^Empieza en (.+)\. Primero saltamos las decenas; después, las unidades\.$/,'Comença a $1. Primer saltem les desenes; després, les unitats.']
    ,[/^(.+) grupos de 5 y (.+) más\.$/,'$1 grups de 5 i $2 més.']
    ,[/^Tabla del (.+): (.+)\. (.+)\.$/,'Taula del $1: $2. $3.']
    ,[/^Tabla del (.+): (.+)\.$/,'Taula del $1: $2.']

    ,[/^(.+) ÷ (.+)\. Busca primero el grupo mínimo que sea igual o mayor que el divisor\.$/,'$1 ÷ $2. Busca primer el grup mínim que sigui igual o més gran que el divisor.']
    ,[/^(.+) × (.+)\. Trabaja cifra a cifra y controla las llevadas\.$/,'$1 × $2. Treballa xifra per xifra i controla les portades.']
    ,[/^(.+) \+ (.+)\. Empieza por las unidades y recuerda las llevadas\.$/,'$1 + $2. Comença per les unitats i recorda les portades.']
    ,[/^(.+) − (.+)\. Comprueba en cada columna si necesitas pedir prestado\.$/,'$1 − $2. Comprova a cada columna si cal demanar prestat.']
    ,[/^Escalera del MCM de (.+)$/,'Escala del MCM de $1']
    ,[/^Múltiplos de (.+)$/,'Múltiples de $1']
    ,[/^Divisores de (.+)$/,'Divisors de $1']
    ,[/^¿hay algún número mayor que 1 que divida exactamente tanto a (.+) como a (.+)\?$/,'hi ha cap nombre més gran que 1 que divideixi exactament tant $1 com $2?']
    ,[/^Si comparten un divisor > 1$/,'Si comparteixen un divisor > 1']
    ,[/^(.+) es el mayor divisor que comparten\. Dividir arriba y abajo entre (.+) mantiene el mismo valor\.$/,'$1 és el divisor més gran que comparteixen. Dividir a dalt i a baix entre $2 manté el mateix valor.']
    ,[/^× (.+) arriba y abajo$/,'× $1 a dalt i a baix']
    ,[/^Como todas las partes tienen tamaño (.+), solo contamos cuántas partes hay\.$/,'Com que totes les parts tenen mida $1, només comptem quantes parts hi ha.']
    ,[/^Completa: ___ < √(.+) < ___$/,'Completa: ___ < √$1 < ___']
    ,[/^(.+) XP para (.+)$/,'$1 XP per a $2']
    ,[/^Rango actual: (.+)$/,'Rang actual: $1']
    ,[/^➕ (.+) sumas · ➖ (.+) restas$/,'➕ $1 sumes · ➖ $2 restes']
    ,[/^✖️ (.+) multiplicaciones · ➗ (.+) divisiones$/,'✖️ $1 multiplicacions · ➗ $2 divisions']
    ,[/^√ (.+) raíces · 🍰 (.+) fracciones$/,'√ $1 arrels · 🍰 $2 fraccions']
    ,[/^🧩 (.+) jerarquía · ⚖️ (.+) ecuaciones$/,'🧩 $1 jerarquia · ⚖️ $2 equacions']
    ,[/^(.+) × (.+) = (.+) — fallada (.+) (.+)$/,'$1 × $2 = $3 — fallada $4 $5']
  ];
  for (const [source, target] of Object.entries({
    "El número desconocido. Normalmente lo llamamos":"El nombre desconegut. Normalment l’anomenem",
    "Es una operación que":"És una operació que",
    "deshace":"desfà",
    "otra. La usamos para retirar lo que acompaña a x sin romper el equilibrio.":"una altra. La fem servir per retirar el que acompanya x sense trencar l’equilibri.",
    ": restamos 5.":": restem 5.",
    "x − 7":"x − 7",
    ": sumamos 7.":": sumem 7.",
    ": dividimos entre 3.":": dividim entre 3.",
    "x ÷ 4":"x ÷ 4",
    ": multiplicamos por 4.":": multipliquem per 4.",
    ", porque restar deshace sumar.":", perquè restar desfà sumar.",
    "sustituimos x por 7. Como 7 + 5 = 12, la solución es correcta.":"substituïm x per 7. Com que 7 + 5 = 12, la solució és correcta.",
    "Primero deshacemos el":"Primer desfem el",
    "restando 5 en ambos lados:":"restant 5 als dos costats:",
    "3x = 15":"3x = 15",
    "Después deshacemos el":"Després desfem el",
    "dividiendo ambos lados entre 3:":"dividint els dos costats entre 3:",
    "x = 5":"x = 5"
  })) exact.set(source, target);

  for (const [source, target] of Object.entries({
    "Cociente":"Quocient",
    "Reconocer cantidades":"Reconeix quantitats",
    "Usar números amigos":"Fes servir nombres amics",
    "Saltos en la recta":"Salts a la recta",
    "tabla":"taula"
  })) exact.set(source, target);

  for (const [source, target] of Object.entries({
    "💡 Pensar":"💡 Pensa",
    "👀 Reconocer cantidades":"👀 Reconeix quantitats",
    "🧱 Valor posicional":"🧱 Valor posicional",
    "🔟 Usar números amigos":"🔟 Fes servir nombres amics",
    "↗️ Saltos en la recta":"↗️ Salts a la recta",
    "Construye el número 34":"Construeix el nombre 34",
    "Completa hasta 10":"Completa fins a 10",
    "7 + 8 = 15: escribimos 5 y llevamos 1.":"7 + 8 = 15: escrivim 5 i en portem 1.",
    "Mates Quest Beta":"Mates Quest Beta",
    "Beta":"Beta",
    "Commit":"Commit",
    "IndexedDB":"IndexedDB",
    "Service Worker":"Service Worker"
  })) exact.set(source, target);

  for (const [source, target] of Object.entries({
    "Terminado.":"Acabat.",
    "Empieza por la cifra de la derecha.":"Comença per la xifra de la dreta.",
    "Escribe las unidades.":"Escriu les unitats.",
    "Guarda la llevada.":"Guarda la portada.",
    "Desplaza cada nueva fila una columna.":"Desplaça cada fila nova una columna.",
    "Suma los productos parciales.":"Suma els productes parcials.",
    "Suma o resta esa columna.":"Suma o resta aquesta columna.",
    "En la suma: si pasa de 9, anota la llevada.":"A la suma: si passa de 9, anota la portada.",
    "En la resta: si arriba es menor, pide prestado.":"A la resta: si a dalt és menor, demana prestat.",
    "Sigue columna a columna hacia la izquierda.":"Continua columna a columna cap a l’esquerra.",
    "Busca cuadrados perfectos.":"Busca quadrats perfectes.",
    "Comprueba multiplicando un número por sí mismo.":"Comprova-ho multiplicant un nombre per si mateix.",
    "Para estimar, localiza los cuadrados vecinos.":"Per estimar, localitza els quadrats veïns.",
    "Para simplificar, extrae el mayor factor cuadrado perfecto.":"Per simplificar, extreu el factor quadrat perfecte més gran.",
    "Para sumar o restar, iguala denominadores.":"Per sumar o restar, iguala els denominadors.",
    "Para multiplicar, multiplica arriba y abajo.":"Per multiplicar, multiplica a dalt i a baix.",
    "Para dividir, invierte la segunda fracción.":"Per dividir, inverteix la segona fracció.",
    "Simplifica siempre al final.":"Simplifica sempre al final.",
    "Identifica qué acompaña a x.":"Identifica què acompanya la x.",
    "Usa la operación inversa.":"Fes servir l’operació inversa.",
    "Hazla en ambos lados.":"Fes-la als dos costats.",
    "Deja x sola.":"Deixa la x sola.",
    "Comprueba sustituyendo.":"Comprova-ho substituint.",
    "Elige las tablas.":"Tria les taules.",
    "Empieza con una ronda corta.":"Comença amb una ronda curta.",
    "Usa Puntos débiles para repetir más las cuentas que fallas.":"Fes servir Punts febles per repetir més les operacions que falles.",
    "Prioriza acertar antes que correr.":"Prioritza encertar abans que córrer.",
    "entre":"entre",
    "Suma en curso":"Suma en curs",
    "Resta en curso":"Resta en curs",
    "Objetivo:":"Objectiu:",
    "Dividimos por números primos hasta que todos llegan a 1. Después multiplicamos los factores de la izquierda.":"Dividim per nombres primers fins que tots arriben a 1. Després multipliquem els factors de l’esquerra.",
    "Todos los divisores del denominador sirven.":"Tots els divisors del denominador serveixen.",
    "Buscamos el MCD":"Busquem el MCD",
    "Divisores comunes":"Divisors comuns",
    "El mayor divisor que aparece en los dos grupos es el MCD.":"El divisor més gran que apareix als dos grups és el MCD.",
    "La pregunta clave:":"La pregunta clau:",
    "Se puede simplificar":"Es pot simplificar",
    "Si solo comparten el 1":"Si només comparteixen l’1",
    "Es irreducible":"És irreductible",
    "Ya lo hemos comprobado:":"Ja ho hem comprovat:",
    "¿Por qué?":"Per què?",
    "No podemos sumar o restar tercios con sextos hasta expresar todas las fracciones con partes del mismo tamaño.":"No podem sumar o restar terços amb sisens fins a expressar totes les fraccions amb parts de la mateixa mida.",
    "Multiplicar numerador y denominador por el mismo número crea una fracción equivalente.":"Multiplicar el numerador i el denominador pel mateix nombre crea una fracció equivalent.",
    "Como todas las partes tienen tamaño X, solo contamos cuántas partes hay.":"Com que totes les parts tenen mida X, només comptem quantes parts hi ha.",
    "En una multiplicación de fracciones, arriba se multiplica con arriba.":"En una multiplicació de fraccions, a dalt es multiplica amb a dalt.",
    "El denominador indica en cuántas partes queda dividido el entero.":"El denominador indica en quantes parts queda dividit l’enter.",
    "Dividir entre una fracción equivale a multiplicar por su inversa.":"Dividir entre una fracció equival a multiplicar per la seva inversa.",
    "Ya hemos convertido la división en una multiplicación normal de fracciones.":"Ja hem convertit la divisió en una multiplicació normal de fraccions.",
    "El denominador se obtiene multiplicando los denominadores.":"El denominador s’obté multiplicant els denominadors.",
    "Construye el movimiento":"Construeix el moviment",
    "Se aplicará exactamente igual a los dos lados.":"S’aplicarà exactament igual als dos costats.",
    "1. Elige una operación":"1. Tria una operació",
    "2. Elige el término":"2. Tria el terme",
    "Primero elige una operación":"Primer tria una operació",
    "En ambos lados:":"Als dos costats:",
    "Aplicar a ambos lados":"Aplica als dos costats"
  })) exact.set(source, target);

  for (const [source, target] of Object.entries({
    "unidades de millar":"unitats de miler",
    "decenas de millar":"desenes de miler",
    "centenas de millar":"centenes de miler",
    "Primero construimos el numerador.":"Primer construïm el numerador.",
    "Numerador del producto":"Numerador del producte",
    "Ya tenemos numerador y denominador.":"Ja tenim numerador i denominador.",
    "Intercambia numerador y denominador.":"Intercanvia el numerador i el denominador.",
    "Primero multiplicamos los numeradores.":"Primer multipliquem els numeradors.",
    "Has seguido la historia completa: preparar, transformar, operar y simplificar.":"Has seguit tota la història: preparar, transformar, operar i simplificar.",
    "Has elegido denominadores iguales, pero las fracciones no los tienen.":"Has triat denominadors iguals, però les fraccions no els tenen.",
    "Has elegido denominadores diferentes, pero alguno se repite.":"Has triat denominadors diferents, però algun es repeteix.",
    "Resuelve primero lo de dentro":"Resol primer el que hi ha dins",
    "Antes de multiplicar o dividir":"Abans de multiplicar o dividir",
    "Multiplicar y dividir":"Multiplicar i dividir",
    "De izquierda a derecha":"D’esquerra a dreta",
    "Sumar y restar":"Sumar i restar",
    "Comprueba":"Comprova",
    "Leemos la igualdad con x a la izquierda.":"Llegim la igualtat amb la x a l’esquerra.",
    "Has elegido y calculado cada movimiento sin romper la igualdad.":"Has triat i calculat cada moviment sense trencar la igualtat.",
    "Mira cada columna":"Mira cada columna",
    "No, no es exacta":"No, no és exacta",
    "la tabla del":"la taula del",
    "error":"error",
    "No configurado todavía. Mira INSTRUCCIONES.md para activarlo (gratis).":"Encara no està configurat. Consulta INSTRUCCIONES.md per activar-lo (de franc).",
    "Multiplica":"Multiplica",
    "Sumar columna":"Suma la columna",
    "No pasa nada. Repasa y prueba otra vez.":"No passa res. Repassa-ho i torna-ho a provar.",
    "Primero mira la expresión completa: paréntesis, potencias, multiplicaciones y divisiones, sumas y restas.":"Primer mira l’expressió completa: parèntesis, potències, multiplicacions i divisions, sumes i restes."
  })) exact.set(source, target);

  exact.set("y", "i");

  for (const [source, target] of Object.entries({
    "Suma la columna activa y añade la llevada anterior si existe.":"Suma la columna activa i afegeix-hi la portada anterior si n’hi ha.",
    "Este es el resultado final.":"Aquest és el resultat final.",
    "Escribe la fracción completa, por ejemplo":"Escriu la fracció completa, per exemple",
    "Mira toda la expresión y elige la operación con mayor prioridad.":"Mira tota l’expressió i tria l’operació amb més prioritat.",
    "Busca cuadrados perfectos y trabaja solo con la parte que te pide el ejercicio.":"Busca quadrats perfectes i treballa només amb la part que et demana l’exercici.",
    "Alinea las cifras por columnas y empieza por las unidades.":"Alinea les xifres per columnes i comença per les unitats.",
    "Busca cuadrados perfectos y comprueba multiplicando un número por sí mismo.":"Busca quadrats perfectes i comprova-ho multiplicant un nombre per si mateix.",
    "Para sumar o restar, iguala denominadores antes de operar numeradores.":"Per sumar o restar, iguala els denominadors abans d’operar els numeradors.",
    "Paréntesis → potencias → multiplicación/división → suma/resta.":"Parèntesis → potències → multiplicació/divisió → suma/resta.",
    "Primero eliges la operación inversa; después resuelves el cálculo.":"Primer tries l’operació inversa; després resols el càlcul.",
    "Divide":"Divideix"
  })) exact.set(source, target);

  for (const [source, target] of Object.entries({
    "Conseguida":"Aconseguida",
    "En progreso":"En progrés"
  })) exact.set(source, target);

  const keyedMessages = {
    'beta.environment.beta': { es: 'Beta', ca: 'Beta' },
    'beta.environment.production': { es: 'Producción', ca: 'Producció' },
    'beta.sw.unsupported': { es: 'No compatible', ca: 'No compatible' },
    'beta.sw.active': { es: 'Activo', ca: 'Actiu' },
    'beta.sw.pending': { es: 'Pendiente de instalación', ca: 'Pendent d’instal·lació' },
    'beta.sw.unavailable': { es: 'No disponible', ca: 'No disponible' }
  };
  const catalogs = new Map([['es', new Map()], ['ca', new Map()]]);
  const sourceKeys = new Map();
  const stableKey = (source) => {
    let hash = 2166136261;
    for (let index = 0; index < source.length; index += 1) {
      hash ^= source.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return `legacy.${(hash >>> 0).toString(36)}`;
  };
  for (const [es, ca] of exact) {
    const key = stableKey(es);
    sourceKeys.set(es, key);
    catalogs.get('es').set(key, es);
    catalogs.get('ca').set(key, ca);
  }
  for (const [key, messages] of Object.entries(keyedMessages)) {
    for (const [locale, message] of Object.entries(messages)) {
      if (!catalogs.has(locale)) catalogs.set(locale, new Map());
      catalogs.get(locale).set(key, message);
    }
  }

  let language = 'es';
  let applying = false;
  const textBindings = new WeakMap();
  const missingSources = new Set();
  const attributeBindings = new WeakMap();
  const attrs = ['placeholder', 'title', 'aria-label'];
  const interpolate = (message, params = {}) => message.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? `{${name}}`);
  function t(key, params = {}) {
    const message = catalogs.get(language)?.get(key) ?? catalogs.get('es')?.get(key);
    return interpolate(message ?? key, params);
  }
  function translateSource(text) {
    if (language === 'es' || !text.trim()) return text;
    const lead = text.match(/^\s*/)?.[0] || '';
    const tail = text.match(/\s*$/)?.[0] || '';
    const core = text.trim();
    const key = sourceKeys.get(core);
    if (key) return lead + t(key) + tail;
    for (const [pattern, replacement] of templates) {
      pattern.lastIndex = 0;
      if (pattern.test(core)) {
        pattern.lastIndex = 0;
        return lead + core.replace(pattern, replacement) + tail;
      }
    }
    if (/[A-Za-zÁÉÍÓÚáéíóúÑñ¿¡]/.test(core)) missingSources.add(core);
    return text;
  }
  function translate(text) {
    return translateSource(text);
  }
  function renderTextBinding(binding) {
    if (language === 'es') return binding.source;
    if (binding.key) {
      const lead = binding.source.match(/^\s*/)?.[0] || '';
      const tail = binding.source.match(/\s*$/)?.[0] || '';
      return lead + t(binding.key) + tail;
    }
    return translateSource(binding.source);
  }
  function createTextBinding(source) {
    return { source, key: sourceKeys.get(source.trim()) || null, rendered: source };
  }
  function translateTextNode(node) {
    let binding = textBindings.get(node);
    if (!binding) {
      binding = createTextBinding(node.nodeValue);
      textBindings.set(node, binding);
    } else if (node.nodeValue !== binding.rendered) {
      binding = createTextBinding(node.nodeValue);
      textBindings.set(node, binding);
    }
    const next = renderTextBinding(binding);
    if (node.nodeValue !== next) node.nodeValue = next;
    binding.rendered = next;
  }
  function translateAttribute(element, attr) {
    let bindings = attributeBindings.get(element);
    if (!bindings) {
      bindings = new Map();
      attributeBindings.set(element, bindings);
    }
    const current = element.getAttribute(attr);
    let binding = bindings.get(attr);
    if (!binding) {
      binding = createTextBinding(current);
      bindings.set(attr, binding);
    } else if (current !== binding.rendered) {
      binding = createTextBinding(current);
      bindings.set(attr, binding);
    }
    const next = renderTextBinding(binding);
    if (current !== next) element.setAttribute(attr, next);
    binding.rendered = next;
  }
  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || ['SCRIPT', 'STYLE', 'CODE'].includes(node.tagName)) return;
    for (const attr of attrs) if (node.hasAttribute(attr)) translateAttribute(node, attr);
    for (const child of node.childNodes) translateNode(child);
  }
  function apply(root = document.body) {
    applying = true;
    translateNode(root);
    document.documentElement.lang = language;
    const select = document.getElementById('languageSelect');
    if (select) select.value = language;
    applying = false;
    window.dispatchEvent(new CustomEvent('matesquest:languagechange', { detail: { language } }));
  }
  const observer = new MutationObserver((records) => {
    if (applying) return;
    for (const record of records) {
      if (record.type === 'characterData') translateTextNode(record.target);
      else if (record.type === 'attributes') translateAttribute(record.target, record.attributeName);
      else for (const node of record.addedNodes) translateNode(node);
    }
  });
  function setLanguage(next) {
    language = catalogs.has(next) ? next : 'es';
    localStorage.setItem(STORAGE_KEY, language);
    apply();
  }
  function addMessages(locale, messages) {
    if (!catalogs.has(locale)) catalogs.set(locale, new Map());
    const catalog = catalogs.get(locale);
    for (const [key, message] of Object.entries(messages)) catalog.set(key, message);
  }
  function start() {
    const saved = localStorage.getItem(STORAGE_KEY);
    language = catalogs.has(saved) ? saved : 'es';
    const select = document.getElementById('languageSelect');
    select?.addEventListener('change', (event) => setLanguage(event.target.value));
    apply();
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: attrs
    });
  }
  window.MatesQuestI18n = {
    start,
    setLanguage,
    getLanguage: () => language,
    t,
    translate,
    addMessages,
    has: (key, locale = language) => catalogs.get(locale)?.has(key) || false,
    getMissingTranslations: () => [...missingSources].sort(),
    resetMissingTranslations: () => missingSources.clear()
  };
})();
