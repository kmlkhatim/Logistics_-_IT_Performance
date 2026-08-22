const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

const translations = {
  fr: {
    pageTitle: 'Logistics & IT Performance | Supply Chain & systèmes d’information', navLabel: 'Navigation principale', languageLabel: 'Choisir la langue', menuLabel: 'Ouvrir le menu',
    description: 'Logistics & IT Performance accompagne les directions logistiques dans l’optimisation des flux, la digitalisation WMS/ERP et le développement d’outils de gestion sur mesure.',
    brandAlt: 'Kamal Khatim - Logistics & IT Performance',
    nav: ['Expertise', 'Services', 'Technologies', 'Projets', 'Tarifs', 'Parlons de votre projet'],
    heroEyebrow: 'Conseil indépendant · Supply Chain & IT',
    heroTitle: 'Des opérations plus<br><em>fluides.</em> Des décisions<br>plus <em>fiables.</em>',
    heroLead: 'J’aide les entreprises à transformer leurs flux et leurs outils en leviers de performance mesurable.',
    heroCta: 'Prendre rendez-vous', heroExplore: 'Découvrir les expertises',
    heroFooter: ['Accompagnement terrain<br>et à distance', 'Supply Chain · WMS · ERP<br>Outils de gestion', 'Faire défiler pour explorer'],
    introEyebrow: 'Une expertise à deux dimensions', introTitle: 'Le terrain rencontre<br><em>la technologie.</em>',
    introParagraphs: ['Une chaîne logistique performante ne repose pas uniquement sur un nouvel outil. Elle commence par une compréhension fine de vos opérations, de vos équipes et de vos contraintes.', 'Avec une expérience senior en Supply Chain et en systèmes d’information, je relie les enjeux métier aux solutions concrètes : moins de friction, plus de visibilité, des décisions prises sur des données fiables.'],
    introLink: 'Échangeons sur vos enjeux', metrics: ['Comprendre<br>les flux réels', 'Structurer<br>la performance', 'Déployer<br>des outils utiles'],
    servicesEyebrow: 'Ce que je peux débloquer', servicesTitle: 'Trois leviers.<br><em>Un même objectif.</em>', servicesLead: 'Des interventions ciblées pour obtenir des résultats visibles dans vos opérations et durables dans le temps.',
    services: [['Audit & conseil<br>Supply Chain', 'Cartographier les flux, identifier les points de rupture et construire une feuille de route priorisée, directement actionnable.'], ['Digitalisation<br>WMS / ERP', 'Faire le lien entre vos besoins opérationnels et votre système d’information : intégration, paramétrage, interfaçage et conduite du changement.'], ['Outils de gestion<br>sur mesure', 'Développer des applications fiables avec MS Access, SQL, Excel/VBA pour automatiser vos processus et rendre vos reportings utiles.']],
    more: 'En savoir plus', techEyebrow: 'Boîte à outils', techTitle: 'La bonne<br><em>technologie</em><br>au bon endroit.', techLead: 'Pas de solution plaquée. Je sélectionne et assemble les technologies qui répondent vraiment à votre contexte, à vos ressources et à vos objectifs.', techList: ['Microsoft Access', 'SQL', 'Odoo', 'WMS', 'Excel / VBA', 'Interfaces & données'],
    projectsEyebrow: 'Applications métiers & SGBD sur mesure', projectsTitle: 'Des outils conçus<br>pour le <em>réel.</em>', projectsLead: 'Chaque application répond à un enjeu opérationnel précis : automatiser, fiabiliser les données et accélérer la décision.',
    projects: [['Gestion logistique globale', 'Système WMS & ERP pour piloter l’approvisionnement, l’entreposage et la distribution.'], ['Achats & approvisionnements', 'Commandes fournisseurs, suivi des réceptions et optimisation des stocks de sécurité.'], ['Coordination logistique', 'Suivi des flux inter-sites et synchronisation des opérations de la chaîne logistique.'], ['Administration des stocks', 'Mouvements, inventaires, péremptions et valorisation du stock.'], ['Logistique hôtelière', 'Gestion des consommables, des équipements et des approvisionnements hôteliers.'], ['Gestion de flotte transport', 'Parc automobile et poids lourds, maintenance, carburant et plannings de livraison.'], ['Business Intelligence & KPI', 'Tableaux de bord dynamiques avec Excel, Access et Power Query pour l’analyse décisionnelle.'], ['Gestion des retours', 'Logistique inverse, reconditionnement, réintégration en stock et suivi des litiges.'], ['Gestion d’entrepôt WMS', 'Emplacement dynamique, picking, emballage et expédition des commandes.'], ['Logistique forestière', 'Traçabilité des lots de bois, transports spécifiques et suivi des chantiers d’exploitation.']],
    pricingEyebrow: 'Modalités financières', pricingTitle: 'Un cadre<br><em>simple et clair.</em>', pricingLead: 'Des conditions adaptées au format de la mission, avec une facturation lisible et un suivi précis du temps réalisé.', remote: 'À DISTANCE', onsite: 'SUR SITE', perHour: '/ heure', dayRemote: 'Soit environ <b>120 € / jour</b> sur une base de 8 heures.', dayOnsite: 'Soit environ <b>200 € / jour</b> sur une base de 8 heures, hors frais de déplacement et d’hébergement facturés au réel.', terms: [['DEVISE', 'EUR (€) ou équivalent en MAD'], ['FACTURATION', 'Mensuelle sur relevé d’heures (CRA)'], ['PAIEMENT', 'À 30 jours'], ['INTERVENTION', 'À distance, hybride ou sur site']], missionEyebrow: 'Types de missions couvertes', missions: ['Audit & Conseil Supply Chain', 'Digitalisation SI / WMS / ERP', 'Outils de gestion sur mesure'],
    modesEyebrow: 'Une présence adaptée', modesTitle: 'Sur site ou<br><em>à distance.</em>', modes: [['Sur site', 'Immersion au cœur de vos opérations, ateliers avec les équipes, observation des pratiques et accompagnement du changement.'], ['À distance', 'Une collaboration souple et réactive pour les missions d’expertise, le développement, le pilotage et le support.']],
    contactEyebrow: 'Un premier échange', contactTitle: 'Parlons de ce qui<br>vous <em>ralentit.</em>', contactLead: 'Décrivez-moi votre contexte en quelques lignes. Nous identifierons ensemble la prochaine action utile.', response: 'Réponse sous 48 h ouvrées', labels: ['Votre nom', 'Votre email professionnel', 'Votre besoin'], placeholders: ['Nom et prénom', 'vous@entreprise.fr', 'Un audit, un projet WMS, un outil à créer...'], formSubmit: 'Envoyer ma demande', formNote: 'Votre messagerie va s’ouvrir pour finaliser l’envoi.', footerTag: 'Supply Chain & IT Performance', contact: 'Contact', legal: 'Mentions légales'
  },
  en: {
    pageTitle: 'Logistics & IT Performance | Supply Chain & information systems', navLabel: 'Main navigation', languageLabel: 'Choose language', menuLabel: 'Open menu', description: 'Logistics & IT Performance helps logistics teams optimize flows, digitize WMS/ERP systems and build custom management tools.', brandAlt: 'Kamal Khatim - Logistics & IT Performance', nav: ['Expertise', 'Services', 'Technologies', 'Projects', 'Rates', 'Let’s discuss your project'], heroEyebrow: 'Independent consulting · Supply Chain & IT', heroTitle: 'Smoother<br><em>operations.</em> More<br><em>reliable</em> decisions.', heroLead: 'I help companies turn their flows and tools into measurable performance drivers.', heroCta: 'Book a meeting', heroExplore: 'Explore expertise', heroFooter: ['On-site and remote<br>support', 'Supply Chain · WMS · ERP<br>Management tools', 'Scroll to explore'], introEyebrow: 'Two-dimensional expertise', introTitle: 'Where operations meet<br><em>technology.</em>', introParagraphs: ['A high-performing supply chain does not rely on a new tool alone. It starts with a clear understanding of your operations, teams and constraints.', 'With senior experience in Supply Chain and information systems, I connect business challenges to practical solutions: less friction, more visibility and decisions based on reliable data.'], introLink: 'Let’s discuss your challenges', metrics: ['Understand<br>real flows', 'Structure<br>performance', 'Deploy<br>useful tools'], servicesEyebrow: 'What I can unlock', servicesTitle: 'Three levers.<br><em>One objective.</em>', servicesLead: 'Targeted interventions that deliver visible results in your operations and lasting improvements over time.', services: [['Supply Chain<br>audit & consulting', 'Map flows, identify breaking points and build a prioritized, actionable roadmap.'], ['WMS / ERP<br>digitalization', 'Bridge your operational needs and information system: integration, configuration, interfaces and change management.'], ['Custom<br>management tools', 'Build reliable applications with MS Access, SQL and Excel/VBA to automate processes and make reporting useful.']], more: 'Learn more', techEyebrow: 'The toolbox', techTitle: 'The right<br><em>technology</em><br>in the right place.', techLead: 'No one-size-fits-all solution. I select and combine technologies that truly match your context, resources and goals.', techList: ['Microsoft Access', 'SQL', 'Odoo', 'WMS', 'Excel / VBA', 'Interfaces & data'], projectsEyebrow: 'Business applications & custom databases', projectsTitle: 'Tools designed<br>for the <em>real world.</em>', projectsLead: 'Every application addresses a precise operational challenge: automate, make data reliable and speed up decisions.', projects: [['End-to-end logistics management', 'WMS & ERP system to manage procurement, warehousing and distribution.'], ['Purchasing & procurement', 'Supplier orders, receipt tracking and safety stock optimization.'], ['Logistics coordination', 'Track inter-site flows and synchronize supply chain operations.'], ['Inventory administration', 'Movements, stocktakes, expiries and inventory valuation.'], ['Hotel logistics', 'Management of consumables, equipment and hotel procurement.'], ['Transport fleet management', 'Cars and trucks, maintenance, fuel and delivery schedules.'], ['Business Intelligence & KPIs', 'Dynamic dashboards with Excel, Access and Power Query for decision-making analysis.'], ['Returns management', 'Reverse logistics, reconditioning, stock reintegration and dispute tracking.'], ['WMS warehouse management', 'Dynamic locations, picking, packing and order shipping.'], ['Forestry logistics', 'Timber lot traceability, specialized transport and forestry site tracking.']], pricingEyebrow: 'Financial terms', pricingTitle: 'A framework<br><em>simple and clear.</em>', pricingLead: 'Terms adapted to the mission format, with transparent billing and precise tracking of time spent.', remote: 'REMOTE', onsite: 'ON-SITE', perHour: '/ hour', dayRemote: 'Approximately <b>€120 / day</b> based on 8 hours.', dayOnsite: 'Approximately <b>€200 / day</b> based on 8 hours, excluding travel and accommodation expenses billed at cost.', terms: [['CURRENCY', 'EUR (€) or equivalent in MAD'], ['BILLING', 'Monthly, based on timesheets'], ['PAYMENT', '30 days'], ['DELIVERY', 'Remote, hybrid or on-site']], missionEyebrow: 'Mission types covered', missions: ['Supply Chain audit & consulting', 'IS / WMS / ERP digitalization', 'Custom management tools'], modesEyebrow: 'A tailored presence', modesTitle: 'On-site or<br><em>remote.</em>', modes: [['On-site', 'Immersion in your operations, team workshops, observation of practices and change support.'], ['Remote', 'Flexible and responsive collaboration for consulting, development, project management and support.']], contactEyebrow: 'An initial conversation', contactTitle: 'Let’s discuss what<br>is <em>slowing you down.</em>', contactLead: 'Describe your context in a few lines. Together, we will identify the next useful action.', response: 'Reply within 48 business hours', labels: ['Your name', 'Your business email', 'Your needs'], placeholders: ['Name and surname', 'you@company.com', 'An audit, a WMS project, a tool to build...'], formSubmit: 'Send my request', formNote: 'Your email app will open to finalize the message.', footerTag: 'Supply Chain & IT Performance', contact: 'Contact', legal: 'Legal notice'
  },
  es: {
    pageTitle: 'Logistics & IT Performance | Supply Chain y sistemas de información', navLabel: 'Navegación principal', languageLabel: 'Elegir idioma', menuLabel: 'Abrir menú', description: 'Logistics & IT Performance ayuda a los equipos logísticos a optimizar los flujos, digitalizar sistemas WMS/ERP y crear herramientas de gestión a medida.', brandAlt: 'Kamal Khatim - Logistics & IT Performance', nav: ['Experiencia', 'Servicios', 'Tecnologías', 'Proyectos', 'Tarifas', 'Hablemos de su proyecto'], heroEyebrow: 'Consultoría independiente · Supply Chain e IT', heroTitle: 'Operaciones más<br><em>fluidas.</em> Decisiones<br>más <em>fiables.</em>', heroLead: 'Ayudo a las empresas a convertir sus flujos y herramientas en palancas de rendimiento medible.', heroCta: 'Solicitar una cita', heroExplore: 'Descubrir la experiencia', heroFooter: ['Acompañamiento presencial<br>y a distancia', 'Supply Chain · WMS · ERP<br>Herramientas de gestión', 'Desplácese para explorar'], introEyebrow: 'Una experiencia en dos dimensiones', introTitle: 'El terreno se une<br><em>a la tecnología.</em>', introParagraphs: ['Una cadena logística eficiente no depende únicamente de una nueva herramienta. Empieza por comprender a fondo sus operaciones, equipos y limitaciones.', 'Con experiencia senior en Supply Chain y sistemas de información, conecto los retos del negocio con soluciones concretas: menos fricción, más visibilidad y decisiones basadas en datos fiables.'], introLink: 'Hablemos de sus retos', metrics: ['Comprender<br>los flujos reales', 'Estructurar<br>el rendimiento', 'Desplegar<br>herramientas útiles'], servicesEyebrow: 'Lo que puedo desbloquear', servicesTitle: 'Tres palancas.<br><em>Un objetivo común.</em>', servicesLead: 'Intervenciones específicas para obtener resultados visibles en sus operaciones y mejoras duraderas.', services: [['Auditoría y consultoría<br>de Supply Chain', 'Mapear los flujos, identificar los puntos de ruptura y crear una hoja de ruta priorizada y accionable.'], ['Digitalización<br>WMS / ERP', 'Conectar sus necesidades operativas con su sistema de información: integración, configuración, interfaces y gestión del cambio.'], ['Herramientas de gestión<br>a medida', 'Desarrollar aplicaciones fiables con MS Access, SQL y Excel/VBA para automatizar procesos y hacer útiles sus informes.']], more: 'Saber más', techEyebrow: 'Caja de herramientas', techTitle: 'La tecnología<br><em>adecuada</em><br>en el lugar adecuado.', techLead: 'No hay soluciones prefabricadas. Selecciono y combino las tecnologías que responden a su contexto, recursos y objetivos.', techList: ['Microsoft Access', 'SQL', 'Odoo', 'WMS', 'Excel / VBA', 'Interfaces y datos'], projectsEyebrow: 'Aplicaciones empresariales y bases de datos a medida', projectsTitle: 'Herramientas diseñadas<br>para la <em>realidad.</em>', projectsLead: 'Cada aplicación responde a un reto operativo concreto: automatizar, fiabilizar los datos y acelerar la toma de decisiones.', projects: [['Gestión logística integral', 'Sistema WMS y ERP para gestionar el aprovisionamiento, el almacenamiento y la distribución.'], ['Compras y aprovisionamiento', 'Pedidos a proveedores, seguimiento de recepciones y optimización del stock de seguridad.'], ['Coordinación logística', 'Seguimiento de flujos entre centros y sincronización de las operaciones de la cadena logística.'], ['Administración de inventario', 'Movimientos, inventarios, caducidades y valoración del stock.'], ['Logística hotelera', 'Gestión de consumibles, equipos y aprovisionamiento hotelero.'], ['Gestión de flota de transporte', 'Vehículos y camiones, mantenimiento, combustible y planificación de entregas.'], ['Business Intelligence y KPI', 'Cuadros de mando dinámicos con Excel, Access y Power Query para el análisis de decisiones.'], ['Gestión de devoluciones', 'Logística inversa, reacondicionamiento, reintegración en stock y seguimiento de litigios.'], ['Gestión de almacén WMS', 'Ubicación dinámica, picking, embalaje y envío de pedidos.'], ['Logística forestal', 'Trazabilidad de lotes de madera, transportes específicos y seguimiento de explotaciones.']], pricingEyebrow: 'Condiciones económicas', pricingTitle: 'Un marco<br><em>sencillo y claro.</em>', pricingLead: 'Condiciones adaptadas al formato de la misión, con una facturación transparente y un seguimiento preciso del tiempo realizado.', remote: 'A DISTANCIA', onsite: 'PRESENCIAL', perHour: '/ hora', dayRemote: 'Aproximadamente <b>120 € / día</b> sobre una base de 8 horas.', dayOnsite: 'Aproximadamente <b>200 € / día</b> sobre una base de 8 horas, sin incluir gastos de desplazamiento y alojamiento facturados al coste real.', terms: [['MONEDA', 'EUR (€) o equivalente en MAD'], ['FACTURACIÓN', 'Mensual según registro de horas'], ['PAGO', 'A 30 días'], ['INTERVENCIÓN', 'A distancia, híbrida o presencial']], missionEyebrow: 'Tipos de misiones cubiertas', missions: ['Auditoría y consultoría de Supply Chain', 'Digitalización SI / WMS / ERP', 'Herramientas de gestión a medida'], modesEyebrow: 'Una presencia adaptada', modesTitle: 'Presencial o<br><em>a distancia.</em>', modes: [['Presencial', 'Inmersión en sus operaciones, talleres con los equipos, observación de prácticas y acompañamiento del cambio.'], ['A distancia', 'Colaboración flexible y reactiva para misiones de consultoría, desarrollo, dirección y soporte.']], contactEyebrow: 'Una primera conversación', contactTitle: 'Hablemos de lo que<br>le <em>está frenando.</em>', contactLead: 'Descríbame su contexto en unas líneas. Juntos identificaremos la próxima acción útil.', response: 'Respuesta en 48 horas laborables', labels: ['Su nombre', 'Su correo profesional', 'Su necesidad'], placeholders: ['Nombre y apellidos', 'usted@empresa.es', 'Una auditoría, un proyecto WMS, una herramienta que crear...'], formSubmit: 'Enviar mi solicitud', formNote: 'Su aplicación de correo se abrirá para finalizar el envío.', footerTag: 'Supply Chain e IT Performance', contact: 'Contacto', legal: 'Aviso legal'
  }
};

const setText = (selector, value, html = false) => {
  const element = document.querySelector(selector);
  if (element) element[html ? 'innerHTML' : 'textContent'] = value;
};

const cardTranslations = {
  fr: { label: 'CARTE DE VISITE', role: 'Consultant Supply Chain & IT', action: 'Parlons de votre projet' },
  en: { label: 'BUSINESS CARD', role: 'Supply Chain & IT Consultant', action: 'Let’s discuss your project' },
  es: { label: 'TARJETA DE VISITA', role: 'Consultor de Supply Chain e IT', action: 'Hablemos de su proyecto' }
};

const cocoonTranslations = {
  fr: {
    eyebrow: 'Architecture SEO', title: 'Le cocon<br><em>sémantique.</em>', lead: 'Une architecture de contenus lisible, où chaque page renforce la suivante et consolide le thème central.', mother: 'Page mère', branch: 'Sous-thème', leaf: 'Page fille', explanations: [['Thème central', 'La page mère porte le sujet principal et donne la direction éditoriale.'], ['Sous-thèmes', 'Les pages sœurs organisent les grands axes et renforcent la pertinence du sujet.'], ['Pages filles', 'Les articles ciblent les recherches précises et transmettent leur valeur au réseau.']], flow: 'Les points blancs représentent le flux de popularité entre les pages.', labels: { central: 'Thème central', logistics: 'Silo logistique', wms: 'WMS & Access', automation: 'VBA automation', supply: 'Supply Chain', planning: 'Planification', performance: 'Performance KPI', stocks: 'Stocks', transport: 'Transport', warehouse: 'Entrepôt', data: 'Données SQL', reporting: 'Reporting KPI', excel: 'Excel', audit: 'Audit', erp: 'ERP', forecast: 'Prévisions', orders: 'Commandes', dashboards: 'Dashboard', quality: 'Qualité' }
  },
  en: {
    eyebrow: 'SEO architecture', title: 'The semantic<br><em>cocoon.</em>', lead: 'A clear content architecture where each page strengthens the next and consolidates the central topic.', mother: 'Parent page', branch: 'Subtopic', leaf: 'Child page', explanations: [['Central topic', 'The parent page carries the main subject and sets the editorial direction.'], ['Subtopics', 'Sibling pages organize the main themes and reinforce topical relevance.'], ['Child pages', 'Articles target specific searches and pass their value through the network.']], flow: 'White points represent the popularity flow between pages.', labels: { central: 'Central topic', logistics: 'Logistics silo', wms: 'WMS & Access', automation: 'VBA automation', supply: 'Supply Chain', planning: 'Planning', performance: 'KPI performance', stocks: 'Stock', transport: 'Transport', warehouse: 'Warehouse', data: 'SQL data', reporting: 'KPI reporting', excel: 'Excel', audit: 'Operations audit', erp: 'ERP', forecast: 'Forecasting', orders: 'Orders', dashboards: 'Dashboard', quality: 'Data quality' }
  },
  es: {
    eyebrow: 'Arquitectura SEO', title: 'El capullo<br><em>semántico.</em>', lead: 'Una arquitectura de contenidos clara donde cada página refuerza la siguiente y consolida el tema central.', mother: 'Página madre', branch: 'Subtema', leaf: 'Página hija', explanations: [['Tema central', 'La página madre presenta el tema principal y marca la dirección editorial.'], ['Subtemas', 'Las páginas hermanas organizan los grandes ejes y refuerzan la relevancia temática.'], ['Páginas hijas', 'Los artículos responden a búsquedas precisas y transmiten su valor a la red.']], flow: 'Los puntos blancos representan el flujo de popularidad entre las páginas.', labels: { central: 'Tema central', logistics: 'Silo logístico', wms: 'WMS y Access', automation: 'Automatización VBA', supply: 'Supply Chain', planning: 'Planificación', performance: 'Rendimiento KPI', stocks: 'Stock', transport: 'Transporte', warehouse: 'Almacén', data: 'Datos SQL', reporting: 'Informes KPI', excel: 'Excel', audit: 'Auditoría operativa', erp: 'ERP', forecast: 'Previsiones', orders: 'Pedidos', dashboards: 'Panel de control', quality: 'Calidad de datos' }
  }
};

const setLanguage = (language) => {
  const selected = translations[language] ? language : 'fr';
  const translation = translations[selected];
  const cardTranslation = cardTranslations[selected];
  if (!document.querySelector('.contact-note')) { const note = document.createElement('p'); note.className = 'contact-note'; note.textContent = 'Si vous êtes en CDI, merci de nous en informer.'; note.style.cssText = 'border-left:2px solid #ffc700;color:#ffc700;font-family:var(--mono);font-size:11px;margin:22px 0;padding-left:12px'; document.querySelector('.contact-intro')?.after(note); }
  document.documentElement.lang = selected;
  document.querySelector('.main-nav')?.setAttribute('aria-label', translation.navLabel);
  document.querySelector('.language-switch')?.setAttribute('aria-label', translation.languageLabel);
  document.querySelector('.menu-toggle')?.setAttribute('aria-label', translation.menuLabel);
  document.title = translation.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', translation.description);
  document.querySelectorAll('.brand-image').forEach((image) => image.setAttribute('alt', translation.brandAlt));
  setText('[data-card-label]', cardTranslation.label); setText('[data-card-role]', cardTranslation.role); setText('[data-card-action]', `${cardTranslation.action} <span>↗</span>`, true);

  ['.main-nav a:nth-child(1)', '.main-nav a:nth-child(2)', '.main-nav a:nth-child(3)', '.main-nav a:nth-child(4)', '.main-nav a:nth-child(5)', '.nav-cta span:first-child'].forEach((selector, index) => setText(selector, translation.nav[index]));
  setText('.hero .eyebrow', `<span class="eyebrow-line"></span> ${translation.heroEyebrow}`, true);
  setText('.hero h1', translation.heroTitle, true); setText('.hero-lead', translation.heroLead);
  setText('[data-i18n="heroCta"]', translation.heroCta); setText('[data-i18n="heroExplore"]', translation.heroExplore);
  document.querySelectorAll('.hero-footer > span').forEach((element, index) => setText(`.hero-footer > span:nth-child(${index + 1})`, index === 2 ? `${translation.heroFooter[index]} <b>↓</b>` : translation.heroFooter[index], true));
  setText('.intro .eyebrow', `<span class="eyebrow-line"></span> ${translation.introEyebrow}`, true); setText('.intro h2', translation.introTitle, true);
  document.querySelectorAll('.intro-copy > p').forEach((element, index) => element.textContent = translation.introParagraphs[index]); setText('.intro .arrow-link', `${translation.introLink} <span>↗</span>`, true);
  document.querySelectorAll('.metrics > div span').forEach((element, index) => element.innerHTML = translation.metrics[index]);
  setText('.services .eyebrow', `<span class="eyebrow-line"></span> ${translation.servicesEyebrow}`, true); setText('.services h2', translation.servicesTitle, true); setText('.section-heading > p', translation.servicesLead);
  document.querySelectorAll('.service-card').forEach((card, index) => { card.querySelector('h3').innerHTML = translation.services[index][0]; card.querySelector('p').textContent = translation.services[index][1]; card.querySelector('a').innerHTML = `${translation.more} <span>↗</span>`; card.querySelector('a').setAttribute('aria-label', `${translation.more}: ${translation.services[index][0].replace('<br>', ' ')}`); });
  setText('.tech .eyebrow', `<span class="eyebrow-line"></span> ${translation.techEyebrow}`, true); setText('.tech h2', translation.techTitle, true); setText('.tech-content > p', translation.techLead); document.querySelectorAll('.tech-list span').forEach((element, index) => element.textContent = translation.techList[index]);
  setText('.projects .eyebrow', `<span class="eyebrow-line"></span> ${translation.projectsEyebrow}`, true); setText('.projects h2', translation.projectsTitle, true); setText('.projects .section-heading > p', translation.projectsLead);
  document.querySelectorAll('.project-card').forEach((card, index) => { card.querySelector('h3').textContent = translation.projects[index][0]; card.querySelector('p').textContent = translation.projects[index][1]; });
  setText('.pricing .eyebrow', `<span class="eyebrow-line"></span> ${translation.pricingEyebrow}`, true); setText('.pricing h2', translation.pricingTitle, true); setText('.pricing-intro', translation.pricingLead); setText('.rate-card:first-child .card-number', translation.remote); setText('.rate-card-site .card-number', translation.onsite); document.querySelectorAll('.rate-card small').forEach((element) => element.textContent = translation.perHour); setText('.rate-card:first-child p', translation.dayRemote, true); setText('.rate-card-site p', translation.dayOnsite, true);
  document.querySelectorAll('.terms-list div').forEach((element, index) => { element.querySelector('span').textContent = translation.terms[index][0]; element.querySelector('b').textContent = translation.terms[index][1]; }); setText('.mission-strip .eyebrow', `<span class="eyebrow-line"></span> ${translation.missionEyebrow}`, true); document.querySelectorAll('.mission-list span').forEach((element, index) => element.textContent = translation.missions[index]);
  setText('.modes .eyebrow', `<span class="eyebrow-line"></span> ${translation.modesEyebrow}`, true); setText('.modes h2', translation.modesTitle, true); document.querySelectorAll('.mode-card').forEach((card, index) => { card.querySelector('h3').textContent = translation.modes[index][0]; card.querySelector('p').textContent = translation.modes[index][1]; });
  setText('.contact .eyebrow', `<span class="eyebrow-line"></span> ${translation.contactEyebrow}`, true); setText('.contact h2', translation.contactTitle, true); setText('.contact-intro', translation.contactLead); setText('.contact-details span', translation.response); document.querySelectorAll('.contact-form label').forEach((element, index) => element.textContent = translation.labels[index]); document.querySelectorAll('.contact-form input, .contact-form textarea').forEach((element, index) => element.placeholder = translation.placeholders[index]); setText('.contact-form button', `${translation.formSubmit} <span>↗</span>`, true);
  setText('.footer p', `${translation.footerTag}<br><span>© 2026 Logistics & IT Performance</span>`, true); setText('.footer-links a:first-child', translation.contact); setText('.footer-links a:last-child', translation.legal);
  const cocoon = cocoonTranslations[selected];
  setText('.cocoon-heading .eyebrow', `<span class="eyebrow-line"></span> ${cocoon.eyebrow}`, true); setText('.cocoon-heading h2', cocoon.title, true); setText('.cocoon-heading > p', cocoon.lead); setText('.cocoon-legend span:nth-child(1)', `<i class="legend-dot legend-central"></i> ${cocoon.mother}`, true); setText('.cocoon-legend span:nth-child(2)', `<i class="legend-dot legend-branch"></i> ${cocoon.branch}`, true); setText('.cocoon-legend span:nth-child(3)', `<i class="legend-dot legend-leaf"></i> ${cocoon.leaf}`, true);
  document.querySelectorAll('.cocoon-explanation > div').forEach((item, index) => { item.querySelector('strong').textContent = cocoon.explanations[index][0]; item.querySelector('p').textContent = cocoon.explanations[index][1]; }); setText('.cocoon-flow-note', `<i></i> ${cocoon.flow}`, true);
  window.updateSemanticLanguage?.(selected);
  document.querySelectorAll('.language-button').forEach((button) => { const active = button.dataset.language === selected; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
  localStorage.setItem('site-language', selected);
};

document.querySelectorAll('.language-button').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

setLanguage(localStorage.getItem('site-language') || 'fr');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mainNav.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mainNav?.classList.remove('is-open');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const translation = translations[document.documentElement.lang] || translations.fr;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent(`${translation.contact} - ${name}`);
  const body = encodeURIComponent(`${translation.labels[0]} : ${name}\n${translation.labels[1]} : ${email}\n\n${translation.labels[2]} :\n${message}`);
  window.location.href = `mailto:kmlkhatim@gmail.com?subject=${subject}&body=${body}`;
  document.querySelector('#form-note').textContent = translation.formNote;
});

const semanticCanvas = document.querySelector('#semantic-canvas');

if (semanticCanvas) {
  const semanticStage = semanticCanvas.parentElement;
  const semanticTooltip = semanticStage.querySelector('.cocoon-tooltip');
  const semanticContext = semanticCanvas.getContext('2d');
  const semanticNodes = [
    { id: 'central', label: 'Thème central', type: 'central', parent: null },
    { id: 'logistics', label: 'Silo logistique', type: 'branch', parent: 'central' },
    { id: 'wms', label: 'WMS & Access', type: 'branch', parent: 'central' },
    { id: 'automation', label: 'VBA automation', type: 'branch', parent: 'central' },
    { id: 'supply', label: 'Supply Chain', type: 'branch', parent: 'central' },
    { id: 'planning', label: 'Planification', type: 'branch', parent: 'central' },
    { id: 'performance', label: 'Performance KPI', type: 'branch', parent: 'central' },
    { id: 'stocks', label: 'Gestion des stocks', type: 'leaf', parent: 'logistics' },
    { id: 'transport', label: 'Transport & flotte', type: 'leaf', parent: 'logistics' },
    { id: 'warehouse', label: 'Entrepôt', type: 'leaf', parent: 'wms' },
    { id: 'data', label: 'Données SQL', type: 'leaf', parent: 'wms' },
    { id: 'reporting', label: 'Reporting KPI', type: 'leaf', parent: 'automation' },
    { id: 'excel', label: 'Excel sur mesure', type: 'leaf', parent: 'automation' },
    { id: 'audit', label: 'Audit opérationnel', type: 'leaf', parent: 'supply' },
    { id: 'erp', label: 'Digitalisation ERP', type: 'leaf', parent: 'supply' },
    { id: 'forecast', label: 'Prévisions', type: 'leaf', parent: 'planning' },
    { id: 'orders', label: 'Commandes', type: 'leaf', parent: 'planning' },
    { id: 'dashboards', label: 'Tableaux de bord', type: 'leaf', parent: 'performance' },
    { id: 'quality', label: 'Qualité des données', type: 'leaf', parent: 'performance' }
  ];
  window.updateSemanticLanguage = (language) => {
    const labels = cocoonTranslations[language]?.labels || cocoonTranslations.fr.labels;
    semanticNodes.forEach((node) => { node.label = labels[node.id] || node.label; });
    semanticCanvas.setAttribute('aria-label', language === 'en' ? 'Animated SEO semantic cocoon graph. Hover a node to show its full label.' : language === 'es' ? 'Gráfico animado del capullo semántico SEO. Pase el cursor sobre un nodo para ver su nombre completo.' : 'Graphe animé du cocon sémantique SEO. Survolez un nœud pour afficher son intitulé complet.');
  };
  window.updateSemanticLanguage(document.documentElement.lang || 'fr');
  const semanticEdges = semanticNodes.filter((node) => node.parent).map((node) => ({ from: node.parent, to: node.id }));
  const semanticParticles = semanticEdges.map((edge, index) => ({ edge, offset: index / semanticEdges.length, direction: index % 2 ? -1 : 1 }));
  let hoveredNode = null;
  let canvasScale = 1;
  let canvasWidth = 0;
  let canvasHeight = 0;

  const resizeSemanticCanvas = () => {
    const bounds = semanticCanvas.getBoundingClientRect();
    canvasScale = window.devicePixelRatio || 1;
    canvasWidth = bounds.width;
    canvasHeight = bounds.height;
    semanticCanvas.width = Math.floor(canvasWidth * canvasScale);
    semanticCanvas.height = Math.floor(canvasHeight * canvasScale);
    semanticContext.setTransform(canvasScale, 0, 0, canvasScale, 0, 0);
  };

  const positionSemanticNodes = () => {
    const centerX = canvasWidth * .5;
    const centerY = canvasHeight * .49;
    semanticNodes.find((node) => node.id === 'central').x = centerX;
    semanticNodes.find((node) => node.id === 'central').y = centerY;
    const branchNodes = semanticNodes.filter((node) => node.type === 'branch');
    const branchAngles = [-2.8, -1.7, -.65, .65, 1.7, 2.8];
    branchNodes.forEach((node, index) => {
      const angle = branchAngles[index];
      node.x = centerX + Math.cos(angle) * Math.min(canvasWidth * .3, 260);
      node.y = centerY + Math.sin(angle) * Math.min(canvasHeight * .31, 185);
    });
    const leafGroups = new Map(branchNodes.map((node) => [node.id, semanticNodes.filter((leaf) => leaf.parent === node.id)]));
    leafGroups.forEach((leaves, branchId) => {
      const branch = semanticNodes.find((node) => node.id === branchId);
      const branchAngle = Math.atan2(branch.y - centerY, branch.x - centerX);
      leaves.forEach((node, index) => {
        const spread = leaves.length === 1 ? 0 : (index - (leaves.length - 1) / 2) * .72;
        const angle = branchAngle + spread;
        node.x = branch.x + Math.cos(angle) * Math.min(canvasWidth * .14, 115);
        node.y = branch.y + Math.sin(angle) * Math.min(canvasHeight * .15, 90);
        node.x = Math.max(68, Math.min(canvasWidth - 68, node.x));
        node.y = Math.max(42, Math.min(canvasHeight - 58, node.y));
      });
    });
  };

  const semanticRadius = (node) => node.type === 'central' ? 68 : node.type === 'branch' ? 45 : 32;
  const semanticColors = {
    central: '#062d55',
    logistics: '#1769ad',
    wms: '#087fba',
    automation: '#315db0',
    supply: '#167d91',
    planning: '#286ca8',
    performance: '#246d86',
    stocks: '#72d9f5',
    transport: '#57c8ee',
    warehouse: '#70e0f2',
    data: '#56c9e8',
    reporting: '#8acff5',
    excel: '#68d5dc',
    audit: '#63d3c2',
    erp: '#72dfcb',
    forecast: '#70cfee',
    orders: '#63c4e3',
    dashboards: '#68d5d6',
    quality: '#62cfbe'
  };
  const isConnectedToHover = (nodeId) => hoveredNode && (nodeId === hoveredNode.id || nodeId === hoveredNode.parent || hoveredNode.parent === nodeId);
  const semanticCurvePoint = (source, target, progress) => {
    const curveStrength = Math.min(34, Math.hypot(target.x - source.x, target.y - source.y) * .12);
    const normalX = -(target.y - source.y) / Math.hypot(target.x - source.x, target.y - source.y);
    const normalY = (target.x - source.x) / Math.hypot(target.x - source.x, target.y - source.y);
    const curveDirection = source.id < target.id ? 1 : -1;
    const controlX = (source.x + target.x) / 2 + normalX * curveStrength * curveDirection;
    const controlY = (source.y + target.y) / 2 + normalY * curveStrength * curveDirection;
    return {
      x: (1 - progress) ** 2 * source.x + 2 * (1 - progress) * progress * controlX + progress ** 2 * target.x,
      y: (1 - progress) ** 2 * source.y + 2 * (1 - progress) * progress * controlY + progress ** 2 * target.y,
      controlX,
      controlY
    };
  };
  const drawSemanticEdge = (edge, time) => {
    const source = semanticNodes.find((node) => node.id === edge.from);
    const target = semanticNodes.find((node) => node.id === edge.to);
    const focused = !hoveredNode || isConnectedToHover(source.id) && isConnectedToHover(target.id);
    semanticContext.globalAlpha = focused ? 1 : .18;
    semanticContext.beginPath();
    semanticContext.moveTo(source.x, source.y);
    const curve = semanticCurvePoint(source, target, .5);
    semanticContext.quadraticCurveTo(curve.controlX, curve.controlY, target.x, target.y);
    semanticContext.strokeStyle = focused ? 'rgba(54, 157, 255, .7)' : 'rgba(89, 119, 148, .35)';
    semanticContext.lineWidth = focused ? 1.4 : 1;
    semanticContext.stroke();
    const particle = semanticParticles.find((item) => item.edge === edge);
    const progress = ((time * .00014 * particle.direction + particle.offset) % 1 + 1) % 1;
    const particlePosition = semanticCurvePoint(source, target, progress);
    semanticContext.beginPath();
    semanticContext.arc(particlePosition.x, particlePosition.y, focused ? 4 : 2.5, 0, Math.PI * 2);
    semanticContext.fillStyle = focused ? '#ffffff' : '#7892a8';
    semanticContext.shadowBlur = focused ? 12 : 4;
    semanticContext.shadowColor = semanticContext.fillStyle;
    semanticContext.fill();
    semanticContext.shadowBlur = 0;
  };

  const drawSemanticNode = (node, time) => {
    const radius = semanticRadius(node);
    const breathing = 1 + Math.sin(time * .002 + node.x) * .035;
    const focused = !hoveredNode || isConnectedToHover(node.id);
    const displayLabel = node.label;
    semanticContext.globalAlpha = focused ? 1 : .24;
    semanticContext.beginPath();
    semanticContext.arc(node.x, node.y, radius * breathing, 0, Math.PI * 2);
    semanticContext.fillStyle = semanticColors[node.id];
    semanticContext.shadowBlur = node.type === 'central' ? 28 : 16;
    semanticContext.shadowColor = node.type === 'leaf' ? '#63c9f2' : '#168cff';
    semanticContext.fill();
    semanticContext.shadowBlur = 0;
    semanticContext.strokeStyle = node.type === 'central' ? '#ffc700' : 'rgba(159, 224, 255, .75)';
    semanticContext.lineWidth = hoveredNode?.id === node.id ? 3 : 1;
    semanticContext.stroke();
    semanticContext.fillStyle = node.type === 'leaf' ? '#082033' : '#ffffff';
    semanticContext.font = `${node.type === 'central' ? 800 : 700} ${node.type === 'central' ? 14 : node.type === 'branch' ? 12 : 8}px Manrope, sans-serif`;
    semanticContext.textAlign = 'center';
    semanticContext.textBaseline = 'middle';
    semanticContext.shadowBlur = 0;
    const labelLines = displayLabel.split(' ');
    if (node.type === 'leaf' && labelLines.length > 1) {
      semanticContext.fillText(labelLines.slice(0, Math.ceil(labelLines.length / 2)).join(' '), node.x, node.y - 5);
      semanticContext.fillText(labelLines.slice(Math.ceil(labelLines.length / 2)).join(' '), node.x, node.y + 5);
    } else {
      semanticContext.fillText(displayLabel, node.x, node.y);
    }
  };

  const animateSemanticGraph = (time) => {
    semanticContext.clearRect(0, 0, canvasWidth, canvasHeight);
    positionSemanticNodes();
    semanticEdges.forEach((edge) => drawSemanticEdge(edge, time));
    semanticNodes.forEach((node) => drawSemanticNode(node, time));
    semanticContext.globalAlpha = 1;
    window.requestAnimationFrame(animateSemanticGraph);
  };

  const updateSemanticHover = (event) => {
    const bounds = semanticCanvas.getBoundingClientRect();
    const pointerX = event.clientX - bounds.left;
    const pointerY = event.clientY - bounds.top;
    hoveredNode = semanticNodes.find((node) => Math.hypot(node.x - pointerX, node.y - pointerY) <= semanticRadius(node) + 8) || null;
    if (hoveredNode) {
      semanticTooltip.textContent = hoveredNode.label;
      semanticTooltip.style.left = `${Math.min(pointerX, bounds.width - 150)}px`;
      semanticTooltip.style.top = `${Math.max(8, pointerY - 12)}px`;
      semanticTooltip.classList.add('is-visible');
    } else {
      semanticTooltip.classList.remove('is-visible');
    }
  };

  resizeSemanticCanvas();
  window.addEventListener('resize', resizeSemanticCanvas);
  semanticCanvas.addEventListener('pointermove', updateSemanticHover);
  semanticCanvas.addEventListener('pointerleave', () => { hoveredNode = null; semanticTooltip.classList.remove('is-visible'); });
  window.requestAnimationFrame(animateSemanticGraph);
}
