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
  const observer=new MutationObserver(records=>{if(applying||language==='es')return;for(const record of records){if(record.type==='characterData')translateNode(record.target);else for(const node of record.addedNodes)translateNode(node);}});
  function setLanguage(next){language=next==='ca'?'ca':'es';localStorage.setItem(STORAGE_KEY,language);apply();}
  function start(){language=localStorage.getItem(STORAGE_KEY)==='ca'?'ca':'es';const select=document.getElementById('languageSelect');select?.addEventListener('change',event=>setLanguage(event.target.value));apply();observer.observe(document.body,{subtree:true,childList:true,characterData:true});}
  window.MatesQuestI18n={start,setLanguage,getLanguage:()=>language,translate};
})();
