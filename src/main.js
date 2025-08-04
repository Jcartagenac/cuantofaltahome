import './style.css'

// Data for events
const events = [
    {
        name: "Año Nuevo 2026",
        date: new Date("2026-01-01T00:00:00"),
        description: "Celebra la llegada del nuevo año"
    },
    {
        name: "Día de San Valentín",
        date: new Date("2025-02-14T00:00:00"),
        description: "El día del amor y la amistad"
    },
    {
        name: "Fiestas Patrias Chile",
        date: new Date("2025-09-18T00:00:00"),
        description: "Celebración de la independencia de Chile"
    },
    {
        name: "Navidad 2025",
        date: new Date("2025-12-25T00:00:00"),
        description: "La celebración navideña"
    }
];

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Cómo Organizar el Evento Perfecto: Guía Completa 2025",
        excerpt: "Una guía paso a paso para planificar eventos memorables, desde la concepción inicial hasta la ejecución perfecta. Aprende los secretos de los organizadores profesionales.",
        date: "20 de Enero, 2025",
        readTime: "8 min de lectura",
        content: `
            <h2>Cómo Organizar el Evento Perfecto: Guía Completa 2025</h2>
            <p><em>Publicado el 20 de Enero, 2025 • 8 min de lectura</em></p>
            
            <p>Organizar un evento exitoso requiere mucho más que simplemente elegir una fecha y un lugar. Ya sea que estés planificando una boda íntima, una celebración corporativa, o una fiesta de cumpleaños memorable, esta guía te proporcionará las herramientas y conocimientos necesarios para crear una experiencia inolvidable.</p>

            <h3>1. Definición y Planificación Inicial</h3>
            <p>El primer paso para cualquier evento exitoso es establecer objetivos claros y realistas. Pregúntate: ¿Cuál es el propósito de este evento? ¿Qué experiencia quieres crear para tus invitados? ¿Cuál es tu presupuesto disponible?</p>

            <p><strong>Elementos clave a definir:</strong></p>
            <ul>
                <li><strong>Objetivo del evento:</strong> Celebración, networking, educación, entretenimiento</li>
                <li><strong>Audiencia objetivo:</strong> Edad, intereses, expectativas</li>
                <li><strong>Presupuesto total:</strong> Incluye un 10-15% extra para imprevistos</li>
                <li><strong>Fecha y duración:</strong> Considera feriados, eventos competidores, clima</li>
                <li><strong>Número de invitados:</strong> Esto determinará el tamaño del venue y catering</li>
            </ul>

            <h3>2. Selección del Venue Perfecto</h3>
            <p>El lugar puede hacer o deshacer tu evento. No se trata solo de encontrar un espacio bonito, sino uno que se alinee con tus objetivos y presupuesto.</p>

            <p><strong>Factores a considerar:</strong></p>
            <ul>
                <li><strong>Capacidad:</strong> Debe acomodar cómodamente a todos los invitados</li>
                <li><strong>Ubicación:</strong> Accesible para la mayoría de invitados</li>
                <li><strong>Estacionamiento:</strong> Suficiente espacio o alternativas de transporte</li>
                <li><strong>Servicios incluidos:</strong> Catering, sonido, iluminación, mobiliario</li>
                <li><strong>Flexibilidad:</strong> Posibilidad de personalizar la decoración</li>
                <li><strong>Plan B:</strong> Opciones en caso de mal clima (para eventos al aire libre)</li>
            </ul>

            <h3>3. Gestión de Presupuesto Inteligente</h3>
            <p>Un presupuesto bien planificado es la columna vertebral de cualquier evento exitoso. La clave está en priorizar los elementos que más impacto tendrán en la experiencia de tus invitados.</p>

            <p><strong>Distribución típica del presupuesto:</strong></p>
            <ul>
                <li><strong>Venue (40-50%):</strong> Alquiler del espacio y servicios básicos</li>
                <li><strong>Catering (25-35%):</strong> Comida, bebidas y servicio</li>
                <li><strong>Entretenimiento (10-20%):</strong> Música, DJ, espectáculos</li>
                <li><strong>Decoración (5-15%):</strong> Flores, iluminación, ambientación</li>
                <li><strong>Otros (5-10%):</strong> Invitaciones, fotografía, transporte</li>
            </ul>

            <h3>4. Catering y Experiencia Gastronómica</h3>
            <p>La comida y bebida son elementos centrales que tus invitados recordarán. No necesitas gastar una fortuna, pero sí ofrecer calidad y variedad.</p>

            <p><strong>Consejos para el catering perfecto:</strong></p>
            <ul>
                <li><strong>Conoce a tu audiencia:</strong> Considera restricciones dietéticas y preferencias</li>
                <li><strong>Calidad sobre cantidad:</strong> Mejor pocos platos excelentes que muchos mediocres</li>
                <li><strong>Timing perfecto:</strong> Coordina el servicio con el flujo del evento</li>
                <li><strong>Opciones vegetarianas/veganas:</strong> Siempre incluye alternativas</li>
                <li><strong>Bebidas estratégicas:</strong> Ofrece opciones alcohólicas y sin alcohol</li>
            </ul>

            <h3>5. Entretenimiento y Ambiente</h3>
            <p>El entretenimiento debe complementar, no competir con, el objetivo de tu evento. La música, iluminación y actividades deben crear la atmósfera deseada.</p>

            <p><strong>Elementos de entretenimiento a considerar:</strong></p>
            <ul>
                <li><strong>Música:</strong> DJ profesional, banda en vivo, o playlist cuidadosamente seleccionada</li>
                <li><strong>Iluminación:</strong> Crea ambientes diferentes para diferentes momentos</li>
                <li><strong>Actividades interactivas:</strong> Juegos, concursos, photo booth</li>
                <li><strong>Sorpresas:</strong> Elementos inesperados que generen conversación</li>
            </ul>

            <h3>6. Logística y Coordinación</h3>
            <p>Los detalles logísticos pueden parecer menores, pero son cruciales para el éxito del evento.</p>

            <p><strong>Lista de verificación logística:</strong></p>
            <ul>
                <li><strong>Timeline detallado:</strong> Desde el setup hasta el cleanup</li>
                <li><strong>Lista de contactos:</strong> Proveedores, venue, equipo de apoyo</li>
                <li><strong>Plan de contingencia:</strong> Qué hacer si algo sale mal</li>
                <li><strong>Asignación de responsabilidades:</strong> Quién hace qué y cuándo</li>
                <li><strong>Comunicación con invitados:</strong> Información clara sobre ubicación, dress code, etc.</li>
            </ul>

            <h3>7. Tecnología y Herramientas Modernas</h3>
            <p>La tecnología puede simplificar enormemente la organización y mejorar la experiencia de los invitados.</p>

            <p><strong>Herramientas útiles:</strong></p>
            <ul>
                <li><strong>Apps de gestión de eventos:</strong> Para coordinar proveedores y timeline</li>
                <li><strong>RSVP digital:</strong> Facilita el seguimiento de confirmaciones</li>
                <li><strong>Redes sociales:</strong> Crea hashtags únicos para el evento</li>
                <li><strong>Cuentas regresivas:</strong> Mantén la emoción antes del evento</li>
                <li><strong>Códigos QR:</strong> Para menús digitales, información adicional</li>
            </ul>

            <h3>8. Día del Evento: Ejecución Perfecta</h3>
            <p>El día del evento, tu trabajo como organizador cambia de planificador a director de orquesta.</p>

            <p><strong>Consejos para el día del evento:</strong></p>
            <ul>
                <li><strong>Llega temprano:</strong> Al menos 2 horas antes del inicio</li>
                <li><strong>Delega responsabilidades:</strong> No trates de hacer todo tú mismo</li>
                <li><strong>Mantén la calma:</strong> Los problemas menores son normales</li>
                <li><strong>Disfruta el momento:</strong> Recuerda celebrar tu trabajo duro</li>
                <li><strong>Documenta todo:</strong> Fotos y videos para recordar y mejorar futuros eventos</li>
            </ul>

            <h3>9. Post-Evento: Cierre y Evaluación</h3>
            <p>El trabajo no termina cuando se van los últimos invitados. Un buen cierre es crucial para relaciones futuras.</p>

            <p><strong>Actividades post-evento:</strong></p>
            <ul>
                <li><strong>Agradecimientos:</strong> Envía notas de agradecimiento a proveedores e invitados especiales</li>
                <li><strong>Evaluación:</strong> ¿Qué funcionó bien? ¿Qué mejorarías?</li>
                <li><strong>Feedback:</strong> Solicita opiniones honestas de invitados clave</li>
                <li><strong>Documentación:</strong> Guarda contactos y notas para futuros eventos</li>
                <li><strong>Celebración personal:</strong> Reconoce tu logro</li>
            </ul>

            <h3>10. Errores Comunes a Evitar</h3>
            <p>Aprende de los errores más frecuentes para evitar problemas innecesarios:</p>

            <ul>
                <li><strong>Subestimar el tiempo de preparación:</strong> Comienza a planificar con al menos 2-3 meses de anticipación</li>
                <li><strong>No tener plan B:</strong> Siempre ten alternativas para elementos críticos</li>
                <li><strong>Ignorar el flujo del evento:</strong> Planifica transiciones suaves entre actividades</li>
                <li><strong>Sobrecargar el programa:</strong> Deja tiempo para socialización espontánea</li>
                <li><strong>No comunicar claramente:</strong> Asegúrate de que todos entiendan sus roles</li>
            </ul>

            <h3>Conclusión</h3>
            <p>Organizar el evento perfecto es un arte que combina planificación meticulosa, creatividad, y flexibilidad. Recuerda que la perfección no existe, pero la excelencia sí es alcanzable. Cada evento es una oportunidad de crear memorias duraderas y conectar personas de manera significativa.</p>

            <p>El secreto está en los detalles, pero también en mantener la perspectiva general. No pierdas de vista el objetivo principal: crear una experiencia memorable para tus invitados. Con planificación adecuada, un equipo confiable, y una actitud positiva, tu próximo evento será sin duda un éxito rotundo.</p>

            <p>¿Estás listo para comenzar a planificar tu próximo evento? Recuerda que cada gran celebración comienza con una cuenta regresiva emocionante. ¡Que comience la planificación!</p>
        `
    },
    {
        id: 2,
        title: "La Psicología de la Anticipación: Por Qué Contar los Días Nos Emociona",
        excerpt: "Descubre por qué el cerebro humano encuentra placer en la anticipación y cómo las cuentas regresivas pueden mejorar nuestro bienestar emocional.",
        date: "15 de Enero, 2025",
        readTime: "6 min de lectura",
        content: `
            <h2>La Psicología de la Anticipación: Por Qué Contar los Días Nos Emociona</h2>
            <p><em>Publicado el 15 de Enero, 2025 • 6 min de lectura</em></p>
            
            <p>La anticipación es una de las emociones más poderosas del ser humano. Desde pequeños, esperamos con ansias nuestro cumpleaños, las vacaciones de verano o la llegada de la Navidad. Pero, ¿por qué contar los días hacia un evento especial nos genera tanta emoción?</p>

            <h3>El Cerebro y la Recompensa Futura</h3>
            <p>Según estudios en neurociencia, cuando anticipamos algo placentero, nuestro cerebro libera dopamina, el neurotransmisor asociado con el placer y la motivación. Esta liberación no ocurre solo cuando experimentamos el evento, sino también durante la fase de anticipación. En muchos casos, la anticipación puede ser incluso más placentera que el evento mismo.</p>

            <p>El Dr. Robert Sapolsky, neurobiólogo de Stanford, explica que "la dopamina no se trata tanto de experimentar placer, sino de anticipar el placer". Esto significa que las cuentas regresivas no son solo herramientas de medición del tiempo, sino generadores activos de bienestar emocional.</p>

            <h3>El Poder de la Visualización</h3>
            <p>Cuando contamos los días hacia un evento, nuestro cerebro comienza a visualizar y planificar la experiencia futura. Esta visualización activa las mismas regiones cerebrales que se activarían durante el evento real, creando una especie de "ensayo mental" que intensifica la emoción positiva.</p>

            <p>Los psicólogos han identificado que las personas que practican la anticipación positiva tienden a:</p>
            <ul>
                <li>Experimentar niveles más altos de felicidad general</li>
                <li>Tener mejor manejo del estrés</li>
                <li>Mostrar mayor resiliencia ante adversidades</li>
                <li>Desarrollar una perspectiva más optimista de la vida</li>
            </ul>

            <h3>Cuentas Regresivas y Mindfulness</h3>
            <p>Paradójicamente, aunque las cuentas regresivas nos enfocan en el futuro, también pueden ser una forma de mindfulness. Al ser conscientes del tiempo que transcurre, nos volvemos más presentes y apreciamos mejor cada momento que nos acerca a nuestro objetivo.</p>

            <p>La práctica de contar días puede transformarse en un ritual de gratitud diaria, donde cada día que pasa es una oportunidad para prepararnos mental y emocionalmente para la experiencia que viene.</p>

            <h3>Consejos para Maximizar la Anticipación Positiva</h3>
            <p>Para aprovechar al máximo el poder psicológico de las cuentas regresivas:</p>
            <ol>
                <li><strong>Visualiza detalles específicos:</strong> No solo pienses en el evento, imagina colores, sonidos, olores y sensaciones.</li>
                <li><strong>Comparte tu anticipación:</strong> Hablar sobre el evento con otros multiplica la emoción positiva.</li>
                <li><strong>Crea rituales de preparación:</strong> Pequeñas acciones diarias relacionadas con el evento aumentan la conexión emocional.</li>
                <li><strong>Documenta el proceso:</strong> Llevar un diario de la cuenta regresiva puede intensificar la experiencia.</li>
            </ol>

            <h3>Conclusión</h3>
            <p>Las cuentas regresivas son mucho más que simples medidores de tiempo. Son herramientas poderosas que pueden mejorar nuestro bienestar emocional, aumentar nuestra felicidad y ayudarnos a vivir de manera más consciente y plena. La próxima vez que uses una cuenta regresiva, recuerda que no solo estás contando días: estás cultivando alegría.</p>

            <p>En un mundo donde a menudo nos enfocamos en las preocupaciones y el estrés, tomarse el tiempo para anticipar algo positivo puede ser un acto revolucionario de autocuidado. Así que adelante, cuenta esos días, y disfruta cada momento de la espera.</p>
        `
    },
    {
        id: 3,
        title: "Historia de las Celebraciones: Cómo Nacieron Nuestras Tradiciones Favoritas",
        excerpt: "Un viaje fascinante por el origen de las celebraciones más importantes del mundo y cómo han evolucionado a través de los siglos.",
        date: "10 de Enero, 2025",
        readTime: "7 min de lectura",
        content: `
            <h2>Historia de las Celebraciones: Cómo Nacieron Nuestras Tradiciones Favoritas</h2>
            <p><em>Publicado el 10 de Enero, 2025 • 7 min de lectura</em></p>
            
            <p>Cada celebración que esperamos con ansias tiene una historia fascinante detrás. Desde los fuegos artificiales de Año Nuevo hasta el intercambio de regalos en Navidad, nuestras tradiciones favoritas han evolucionado a través de milenios, adaptándose a diferentes culturas y épocas.</p>

            <h3>Año Nuevo: El Renacimiento del Tiempo</h3>
            <p>La celebración del Año Nuevo es una de las más antiguas de la humanidad. Los primeros registros datan de hace más de 4,000 años en la antigua Babilonia, aunque ellos lo celebraban en marzo, coincidiendo con el equinoccio de primavera y la siembra de cultivos.</p>

            <p>Los romanos fueron quienes establecieron enero como el primer mes del año en el 46 a.C., bajo el calendario juliano de Julio César. El mes fue nombrado en honor a Jano, el dios romano de dos caras que podía mirar tanto al pasado como al futuro, simbolizando perfectamente la transición entre años.</p>

            <p>La tradición de los fuegos artificiales comenzó en China hace más de 2,000 años. Los chinos creían que los ruidos fuertes y las luces brillantes ahuyentaban a los espíritus malignos, asegurando un año próspero. Esta práctica se extendió por todo el mundo y hoy es sinónimo de celebración.</p>

            <h3>Navidad: La Fusión de Tradiciones</h3>
            <p>La Navidad moderna es el resultado de la fusión de múltiples tradiciones. Aunque se celebra el nacimiento de Jesucristo, muchas de sus costumbres tienen raíces paganas anteriores al cristianismo.</p>

            <p>El árbol de Navidad tiene sus orígenes en los rituales germánicos del solsticio de invierno. Los pueblos nórdicos decoraban árboles perennes como símbolo de vida durante los meses más oscuros del año. Esta tradición fue cristianizada en el siglo XVI en Alemania y se extendió por Europa.</p>

            <p>La figura de Santa Claus combina elementos del San Nicolás histórico (un obispo del siglo IV conocido por su generosidad), tradiciones holandesas del Sinterklaas, y elementos de la mitología nórdica. La imagen moderna de Santa Claus fue popularizada en el siglo XIX por el poema "A Visit from St. Nicholas" y las ilustraciones de Thomas Nast.</p>

            <h3>San Valentín: Del Martirio al Romance</h3>
            <p>El Día de San Valentín tiene orígenes complejos que mezclan historia cristiana y tradiciones romanas. San Valentín fue un sacerdote cristiano del siglo III que, según la leyenda, realizaba matrimonios secretos cuando el emperador Claudio II había prohibido el matrimonio para los soldados jóvenes.</p>

            <p>Sin embargo, la asociación con el amor romántico puede tener raíces en las Lupercales romanas, un festival de fertilidad celebrado a mediados de febrero. La tradición de enviar cartas de amor en esta fecha se popularizó en la Edad Media, cuando se creía que el 14 de febrero era el día en que las aves comenzaban a aparearse.</p>

            <h3>Conclusión</h3>
            <p>Nuestras celebraciones favoritas son el resultado de miles de años de evolución cultural. Cada tradición que practicamos lleva consigo las huellas de civilizaciones pasadas, adaptadas y transformadas por cada generación.</p>

            <p>Al contar los días hacia estas celebraciones, no solo estamos anticipando momentos de alegría, sino participando en rituales ancestrales que han dado significado y estructura a la experiencia humana durante milenios. En un mundo que cambia rápidamente, estas tradiciones nos proporcionan anclas de estabilidad y continuidad.</p>
        `
    },
    {
        id: 4,
        title: "Tradiciones Chilenas: Celebraciones Únicas que Definen Nuestra Identidad",
        excerpt: "Explora las celebraciones más emblemáticas de Chile, desde las Fiestas Patrias hasta la Tirana, y descubre cómo estas tradiciones forjan nuestra identidad nacional.",
        date: "5 de Enero, 2025",
        readTime: "10 min de lectura",
        content: `
            <h2>Tradiciones Chilenas: Celebraciones Únicas que Definen Nuestra Identidad</h2>
            <p><em>Publicado el 5 de Enero, 2025 • 10 min de lectura</em></p>
            
            <p>Chile, con su geografía única que se extiende desde el desierto más árido del mundo hasta los glaciares antárticos, ha desarrollado un rico tapiz de tradiciones y celebraciones que reflejan la diversidad de su pueblo y su historia. Estas festividades no solo marcan el calendario nacional, sino que definen profundamente la identidad chilena.</p>

            <h3>Fiestas Patrias: El Corazón de la Chilenidad</h3>
            <p>Las Fiestas Patrias, celebradas el 18 y 19 de septiembre, son sin duda la celebración más importante del calendario chileno. Conmemoran la Primera Junta Nacional de Gobierno de 1810, considerada el primer paso hacia la independencia de España.</p>

            <p>Durante estos días, Chile se transforma. Las fondas y ramadas aparecen en parques y plazas, recreando el ambiente festivo de la época colonial. El aroma de las empanadas recién horneadas llena el aire, mientras que el sonido de la cueca, nuestra danza nacional, resuena en cada rincón del país.</p>

            <p>La cueca, declarada danza nacional en 1979, es mucho más que un baile: es una representación simbólica del cortejo amoroso, donde el huaso (hombre) corteja a la china (mujer) con movimientos que imitan el galanteo de los gallos y las gallinas. Los pañuelos blancos ondean al aire, creando un espectáculo visual que conecta a los chilenos con sus raíces campesinas.</p>

            <h3>La Tirana: Fe y Tradición en el Desierto</h3>
            <p>En el corazón del desierto de Atacama, cada 16 de julio, se celebra una de las festividades religiosas más importantes del norte de Chile: La Tirana. Esta celebración única combina elementos católicos con tradiciones andinas precolombinas, creando un sincretismo religioso fascinante.</p>

            <p>La leyenda cuenta que una princesa inca, conocida como "La Tirana", se enamoró de un conquistador español y se convirtió al cristianismo. Tras su muerte, se le apareció la Virgen del Carmen, quien se convirtió en la patrona de la festividad.</p>

            <p>Durante la celebración, más de 200,000 peregrinos llegan al pequeño pueblo de La Tirana para rendir homenaje a la Virgen del Carmen. Las calles se llenan de coloridos trajes de bailes religiosos: diabladas, caporales, chinos, gitanos y muchos otros. Cada grupo tiene su propia historia, música y coreografía, pero todos comparten la misma devoción.</p>

            <h3>Conclusión</h3>
            <p>Las tradiciones chilenas son el hilo conductor que conecta nuestro pasado con nuestro presente y futuro. Cada celebración es una oportunidad para reafirmar quiénes somos como pueblo, para transmitir valores a las nuevas generaciones y para crear memorias compartidas que fortalecen el tejido social.</p>

            <p>En un mundo cada vez más globalizado, mantener vivas estas tradiciones es un acto de resistencia cultural y de amor por nuestra identidad. Cada vez que bailamos cueca, cada vez que preparamos empanadas, cada vez que participamos en una festividad local, estamos contribuyendo a preservar un patrimonio cultural invaluable.</p>
        `
    },
    {
        id: 5,
        title: "Tecnología y Celebraciones: Cómo las Apps Transforman Nuestras Tradiciones",
        excerpt: "Analiza cómo la tecnología digital está cambiando la forma en que celebramos y mantenemos nuestras tradiciones en la era moderna.",
        date: "1 de Enero, 2025",
        readTime: "7 min de lectura",
        content: `
            <h2>Tecnología y Celebraciones: Cómo las Apps Transforman Nuestras Tradiciones</h2>
            <p><em>Publicado el 1 de Enero, 2025 • 7 min de lectura</em></p>
            
            <p>Vivimos en una era donde la tecnología ha transformado prácticamente todos los aspectos de nuestras vidas, y las celebraciones no son la excepción. Desde aplicaciones de cuentas regresivas hasta transmisiones en vivo de eventos familiares, la tecnología digital está redefiniendo cómo experimentamos, compartimos y preservamos nuestras tradiciones más queridas.</p>

            <h3>La Revolución de las Cuentas Regresivas Digitales</h3>
            <p>Las aplicaciones de cuentas regresivas han democratizado la anticipación. Ya no necesitamos calendarios físicos o cálculos mentales para saber exactamente cuánto tiempo falta para nuestro evento favorito. Con precisión de segundos, estas herramientas digitales han intensificado nuestra experiencia de anticipación.</p>

            <p>Aplicaciones como "¿Cuánto Falta?" permiten a los usuarios crear múltiples cuentas regresivas personalizadas, compartirlas con familiares y amigos, y recibir notificaciones que mantienen viva la emoción. Esta tecnología ha transformado la anticipación de una experiencia pasiva a una activa y social.</p>

            <h3>Redes Sociales: Celebraciones Globales en Tiempo Real</h3>
            <p>Las redes sociales han transformado las celebraciones de eventos privados a experiencias globales compartidas. Instagram, Facebook, TikTok y otras plataformas permiten que millones de personas participen virtualmente en celebraciones alrededor del mundo.</p>

            <p>El fenómeno de los hashtags ha creado comunidades temporales masivas. Durante eventos como Año Nuevo, #AñoNuevo2025 puede generar millones de publicaciones, creando una celebración digital global que trasciende fronteras geográficas y culturales.</p>

            <h3>El Futuro de las Celebraciones Digitales</h3>
            <p>Mirando hacia el futuro, podemos anticipar desarrollos tecnológicos que transformarán aún más nuestras celebraciones:</p>

            <ul>
                <li><strong>Realidad Virtual:</strong> Experiencias inmersivas que permitirán participar en celebraciones históricas o visitar lugares sagrados virtualmente</li>
                <li><strong>Hologramas:</strong> Presencia "física" de seres queridos en celebraciones familiares a pesar de la distancia</li>
                <li><strong>Internet de las Cosas:</strong> Hogares inteligentes que se decoran automáticamente para celebraciones específicas</li>
                <li><strong>Inteligencia Artificial Avanzada:</strong> Asistentes que pueden recrear conversaciones con ancestros fallecidos durante celebraciones familiares</li>
            </ul>

            <h3>Conclusión</h3>
            <p>La tecnología no es enemiga de las tradiciones; es una herramienta poderosa que, utilizada conscientemente, puede preservar, amplificar y enriquecer nuestras celebraciones más queridas. Las aplicaciones de cuentas regresivas, las redes sociales, la realidad aumentada y otras innovaciones digitales están creando nuevas formas de experimentar la anticipación, la comunidad y la conexión cultural.</p>

            <p>El desafío para nuestra generación es navegar esta transformación de manera que honre el pasado mientras abraza las posibilidades del futuro. Cada cuenta regresiva digital que creamos, cada celebración que compartimos en redes sociales, cada tradición que documentamos digitalmente, es una oportunidad para fortalecer nuestros vínculos culturales y transmitir nuestros valores a las generaciones futuras.</p>
        `
    }
];

// Privacy Policy content
const privacyPolicyContent = `
    <h2>Política de Privacidad</h2>
    <p><em>Última actualización: 1 de enero de 2025</em></p>
    
    <h3>1. Información que Recopilamos</h3>
    <p>En ¿Cuánto Falta?, respetamos tu privacidad y nos comprometemos a proteger tu información personal. Recopilamos la siguiente información:</p>
    <ul>
        <li><strong>Información de contacto:</strong> Nombre y dirección de correo electrónico cuando nos contactas a través de nuestro formulario.</li>
        <li><strong>Información de uso:</strong> Datos sobre cómo utilizas nuestro sitio web, incluyendo páginas visitadas y tiempo de permanencia.</li>
        <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo y datos de cookies.</li>
    </ul>

    <h3>2. Cómo Utilizamos tu Información</h3>
    <p>Utilizamos la información recopilada para:</p>
    <ul>
        <li>Responder a tus consultas y proporcionarte soporte</li>
        <li>Mejorar nuestros servicios y la experiencia del usuario</li>
        <li>Enviar comunicaciones relacionadas con nuestros servicios (solo si has dado tu consentimiento)</li>
        <li>Cumplir con obligaciones legales</li>
    </ul>

    <h3>3. Compartir Información</h3>
    <p>No vendemos, intercambiamos ni transferimos tu información personal a terceros, excepto en los siguientes casos:</p>
    <ul>
        <li>Cuando sea requerido por ley</li>
        <li>Para proteger nuestros derechos, propiedad o seguridad</li>
        <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web (bajo estrictos acuerdos de confidencialidad)</li>
    </ul>

    <h3>4. Cookies</h3>
    <p>Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies nos ayudan a:</p>
    <ul>
        <li>Recordar tus preferencias</li>
        <li>Analizar el tráfico del sitio web</li>
        <li>Personalizar el contenido</li>
    </ul>
    <p>Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>

    <h3>5. Seguridad de los Datos</h3>
    <p>Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>

    <h3>6. Tus Derechos</h3>
    <p>Tienes derecho a:</p>
    <ul>
        <li>Acceder a tu información personal</li>
        <li>Corregir información inexacta</li>
        <li>Solicitar la eliminación de tu información</li>
        <li>Oponerte al procesamiento de tu información</li>
        <li>Retirar tu consentimiento en cualquier momento</li>
    </ul>

    <h3>7. Retención de Datos</h3>
    <p>Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política o según lo requiera la ley.</p>

    <h3>8. Enlaces a Terceros</h3>
    <p>Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios externos.</p>

    <h3>9. Cambios a esta Política</h3>
    <p>Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web.</p>

    <h3>10. Contacto</h3>
    <p>Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de nuestro formulario de contacto en el sitio web.</p>

    <p><strong>Nota:</strong> Esta política de privacidad cumple con las regulaciones de protección de datos aplicables, incluyendo el GDPR para usuarios europeos.</p>
`;

// Terms of Service content
const termsOfServiceContent = `
    <h2>Términos de Servicio</h2>
    <p><em>Última actualización: 1 de enero de 2025</em></p>
    
    <h3>1. Aceptación de los Términos</h3>
    <p>Al acceder y utilizar el sitio web ¿Cuánto Falta? (cuantofalta.cl), aceptas estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, no debes utilizar este sitio.</p>

    <h3>2. Descripción del Servicio</h3>
    <p>¿Cuánto Falta? es un sitio web que proporciona:</p>
    <ul>
        <li>Cuentas regresivas para eventos y fechas especiales</li>
        <li>Información sobre celebraciones y tradiciones</li>
        <li>Contenido educativo y de entretenimiento relacionado con eventos</li>
        <li>Herramientas para calcular tiempo restante hasta fechas específicas</li>
    </ul>

    <h3>3. Uso Aceptable</h3>
    <p>Te comprometes a utilizar nuestro servicio únicamente para fines legales y de acuerdo con estos términos. No puedes:</p>
    <ul>
        <li>Utilizar el servicio para actividades ilegales o no autorizadas</li>
        <li>Intentar acceder a áreas restringidas del sitio web</li>
        <li>Interferir con el funcionamiento del sitio web</li>
        <li>Transmitir virus, malware o código malicioso</li>
        <li>Violar los derechos de propiedad intelectual</li>
        <li>Acosar, amenazar o intimidar a otros usuarios</li>
    </ul>

    <h3>4. Propiedad Intelectual</h3>
    <p>Todo el contenido del sitio web, incluyendo pero no limitado a texto, gráficos, logos, imágenes, software y diseño, es propiedad de ¿Cuánto Falta? o de sus licenciantes y está protegido por las leyes de derechos de autor y propiedad intelectual.</p>

    <h3>5. Contenido del Usuario</h3>
    <p>Si envías contenido a través de nuestros formularios de contacto o cualquier otra función interactiva:</p>
    <ul>
        <li>Mantienes la propiedad de tu contenido</li>
        <li>Nos otorgas una licencia no exclusiva para usar, modificar y mostrar ese contenido</li>
        <li>Garantizas que tienes derecho a compartir ese contenido</li>
        <li>Te responsabilizas por la exactitud y legalidad de tu contenido</li>
    </ul>

    <h3>6. Privacidad</h3>
    <p>Tu privacidad es importante para nosotros. El uso de tu información personal se rige por nuestra Política de Privacidad, que forma parte integral de estos términos.</p>

    <h3>7. Limitación de Responsabilidad</h3>
    <p>El servicio se proporciona "tal como está" sin garantías de ningún tipo. No garantizamos que:</p>
    <ul>
        <li>El servicio será ininterrumpido o libre de errores</li>
        <li>Los resultados obtenidos serán exactos o confiables</li>
        <li>Cualquier error será corregido</li>
    </ul>
    <p>En ningún caso seremos responsables por daños directos, indirectos, incidentales, especiales o consecuentes.</p>

    <h3>8. Indemnización</h3>
    <p>Aceptas indemnizar y eximir de responsabilidad a ¿Cuánto Falta?, sus empleados y afiliados de cualquier reclamo, pérdida, responsabilidad, daño o gasto que surja de tu uso del servicio o violación de estos términos.</p>

    <h3>9. Modificaciones del Servicio</h3>
    <p>Nos reservamos el derecho de:</p>
    <ul>
        <li>Modificar o discontinuar el servicio en cualquier momento</li>
        <li>Cambiar estos términos de servicio</li>
        <li>Actualizar el contenido y las funcionalidades del sitio</li>
    </ul>
    <p>Los cambios significativos serán notificados a través del sitio web.</p>

    <h3>10. Terminación</h3>
    <p>Podemos terminar o suspender tu acceso al servicio inmediatamente, sin previo aviso, por cualquier motivo, incluyendo la violación de estos términos.</p>

    <h3>11. Enlaces a Terceros</h3>
    <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas de privacidad o prácticas de estos sitios externos.</p>

    <h3>12. Ley Aplicable</h3>
    <p>Estos términos se rigen por las leyes de Chile. Cualquier disputa será resuelta en los tribunales competentes de Chile.</p>

    <h3>13. Divisibilidad</h3>
    <p>Si alguna disposición de estos términos se considera inválida o inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto.</p>

    <h3>14. Acuerdo Completo</h3>
    <p>Estos términos constituyen el acuerdo completo entre tú y ¿Cuánto Falta? con respecto al uso del servicio.</p>

    <h3>15. Contacto</h3>
    <p>Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos a través de nuestro formulario de contacto en el sitio web.</p>

    <p><strong>Al utilizar nuestro servicio, confirmas que has leído, entendido y aceptado estos Términos de Servicio.</strong></p>
`;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupCountdowns();
    setupEvents();
    setupBlog();
    setupContactForm();
    setupModals();
    startMainCountdown();
}

// Navigation functionality
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });
}

// Countdown functionality
function setupCountdowns() {
    // Update all countdowns every second
    setInterval(updateCountdowns, 1000);
}

function startMainCountdown() {
    // Set main countdown to New Year 2026
    const newYear = new Date("2026-01-01T00:00:00");
    updateMainCountdown(newYear);
}

function updateMainCountdown(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
}

function updateCountdowns() {
    // Update main countdown
    const newYear = new Date("2026-01-01T00:00:00");
    updateMainCountdown(newYear);

    // Update event countdowns
    document.querySelectorAll('.event-countdown').forEach(countdown => {
        const eventDate = new Date(countdown.dataset.date);
        updateEventCountdown(countdown, eventDate);
    });
}

function updateEventCountdown(element, targetDate) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const daysEl = element.querySelector('.event-countdown-number[data-unit="days"]');
        const hoursEl = element.querySelector('.event-countdown-number[data-unit="hours"]');
        const minutesEl = element.querySelector('.event-countdown-number[data-unit="minutes"]');

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
    }
}

// Events section
function setupEvents() {
    const eventsGrid = document.getElementById('events-grid');
    
    events.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    card.innerHTML = `
        <h3 class="event-title">${event.name}</h3>
        <div class="event-countdown" data-date="${event.date.toISOString()}">
            <div class="event-countdown-item">
                <span class="event-countdown-number" data-unit="days">0</span>
                <span class="event-countdown-label">Días</span>
            </div>
            <div class="event-countdown-item">
                <span class="event-countdown-number" data-unit="hours">0</span>
                <span class="event-countdown-label">Horas</span>
            </div>
            <div class="event-countdown-item">
                <span class="event-countdown-number" data-unit="minutes">0</span>
                <span class="event-countdown-label">Minutos</span>
            </div>
        </div>
        <p>${event.description}</p>
    `;
    
    return card;
}

// Blog section
function setupBlog() {
    const blogGrid = document.getElementById('blog-grid');
    
    blogPosts.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.addEventListener('click', () => openBlogModal(post));
    
    card.innerHTML = `
        <div class="blog-card-content">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span class="blog-date">${post.date}</span>
                <span class="blog-read-time">${post.readTime}</span>
            </div>
        </div>
    `;
    
    return card;
}

function openBlogModal(post) {
    const modal = document.getElementById('blog-modal');
    const content = document.getElementById('blog-content');
    
    content.innerHTML = post.content;
    modal.style.display = 'block';
}

// Contact form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Simulate form submission
        alert('¡Gracias por tu mensaje! Te responderemos pronto.');
        form.reset();
    });
}

// Modal functionality
function setupModals() {
    // Privacy policy modal
    document.getElementById('privacy-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('privacy-modal', privacyPolicyContent);
    });
    
    // Terms of service modal
    document.getElementById('terms-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('terms-modal', termsOfServiceContent);
    });
    
    // Close modal functionality
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

function openModal(modalId, content) {
    const modal = document.getElementById(modalId);
    const contentElement = modal.querySelector('.modal-content > div');
    
    contentElement.innerHTML = content;
    modal.style.display = 'block';
}

