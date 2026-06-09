(function () {
  "use strict";

  /* ── helpers ─────────────────────────────────────────────── */
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); };
  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }

  /* ── translations ────────────────────────────────────────── */
  var T = {
    es: {
      "nav.brandSub": "Cocina Mediterránea Casera",
      "nav.story": "Nuestra Historia",
      "nav.dishes": "Especialidades",
      "nav.menu": "Carta & Menú",
      "nav.contact": "Contacto",
      "nav.reserve": "Reservar",
      "nav.language": "Idioma",
      "hero.sub": "Cocina Mediterránea Casera",
      "hero.hours": "Mar–Sáb 10:00–23:30 · Dom 10:00–23:00",
      "hero.bookBtn": "Reservar Mesa",
      "hero.menuBtn": "Ver la Carta",
      "hero.open": "Abierto hoy",
      "info.callUs": "Llámanos",
      "info.address": "Dirección",
      "info.hours": "Horario",
      "info.hoursValue": "Mar–Sáb 10h–23:30h · Dom 10h–23h",
      "info.waValue": "Reservas y consultas",
      "about.eyebrow": "Nuestra Historia",
      "about.title1": "Sabores de casa,",
      "about.title2": "en el corazón del Mediterráneo.",
      "about.p1": "En Los Serrano cocinamos como en casa: con producto fresco del mercado, recetas de siempre y el sabor que solo da el cariño. Sin pretensiones, sin artificios. Solo buena comida.",
      "about.p2": "Aquí encontrarás el arroz que te reconforta, el pescado del día y el postre que no puedes rechazar. Todo hecho con las manos y el corazón.",
      "about.cta": "Hacer una reserva",
      "about.feat1": "Terraza exterior",
      "about.feat2": "Dos salones",
      "spec.eyebrow": "Nuestra Cocina",
      "spec.title": "Especialidades de la casa",
      "spec.sub": "Producto fresco, recetas de siempre.",
      "dish.bravas": "Patatas Bravas",
      "dish.bravas.desc": "Crujientes, con nuestra salsa de la casa.",
      "dish.arroz": "Arroz con Gambas",
      "dish.arroz.desc": "Arroz mediterráneo, en su punto.",
      "dish.merluza": "Merluza a la Plancha",
      "dish.merluza.desc": "Pescado fresco con guarnición.",
      "dish.escalope": "Escalope con Champiñones",
      "dish.escalope.desc": "Crujiente, con salsa de champiñones y patatas.",
      "dish.postre1": "Melocotón con Nata",
      "dish.postre1.desc": "Nuestro postre casero más querido.",
      "dish.profiteroles": "Profiteroles con Chocolate",
      "dish.profiteroles.desc": "El final perfecto de cualquier comida.",
      "menudia.eyebrow": "Cada día de la semana",
      "menudia.title": "Menú del Día",
      "menudia.schedule": "Todos los días · 13:30 – 16:00",
      "menudia.weekdayLabel": "Lun – Vie",
      "menudia.weekendLabel": "Sáb – Dom",
      "menudia.imgLabel1": "Pollo a la Plancha",
      "menudia.imgLabel2": "Salmón a la Plancha",
      "menudia.starters": "Entrantes a elegir",
      "menudia.s1": "Ensalada Mixta",
      "menudia.s2": "Crema de Calabacín",
      "menudia.s3": "Ensalada de Verduras",
      "menudia.mains": "Plato Principal a elegir",
      "menudia.m1": "Pechuga a la Plancha o Escalope",
      "menudia.m2": "Merluza a la Plancha",
      "menudia.m3": "Carrillada de Cerdo",
      "menudia.m4": "Estofado de Ternera en Salsa",
      "menudia.m5": "Salmón a la Plancha",
      "menudia.m6": "Pasta al Pesto a la Marinera",
      "menudia.inc1": "Pan con Alioli",
      "menudia.inc2": "Bebida incluida",
      "menudia.inc3": "Postre o Café",
      "carta.eyebrow": "Nuestra carta",
      "carta.title": "Carta",
      "carta.cat1": "Para ir abriendo boca",
      "carta.cat2": "Arepas",
      "carta.cat3": "Patacones",
      "carta.cat4": "Cachapas y Hallacas",
      "carta.cat5": "Carnes y Parrilla",
      "carta.footnote": "Pan, IVA y servicio de mesa incluidos · Pregunta por nuestras sugerencias del día",
      "reviews.eyebrow": "Lo que dicen nuestros clientes",
      "reviews.title": "Reseñas",
      "reviews.r1": "“Un sitio que repites seguro. El menú del día es una pasada, todo casero y muy bien presentado. La merluza, exquisita.”",
      "reviews.r1.origin": "La Vila Joiosa",
      "reviews.r2": "“Vinimos desde Benidorm después de una recomendación y no nos defraudó. El arroz con gambas, de los mejores de la zona.”",
      "reviews.r3": "“Wir waren drei Mal während unseres Urlaubs dort! Ausgezeichnetes Essen, freundliches Personal und sehr faire Preise.”",
      "reviews.r3.origin": "Alemania",
      "reviews.invite": "¿Has venido? Nos encantaría leer tu opinión.",
      "reviews.cta": "Dejar una reseña en Google",
      "contact.eyebrow": "Cómo llegar",
      "contact.title": "Visítanos",
      "contact.address": "Dirección",
      "contact.gmaps": "Ver en Google Maps →",
      "contact.phone": "Teléfono",
      "contact.waText": "Escríbenos por WhatsApp",
      "contact.hours": "Horario",
      "contact.closed": "Cerrado",
      "contact.callCta": "Llamar ahora",
      "contact.waCta": "Reservar por WhatsApp",
      "days.mon": "Lunes",
      "days.tue-sat": "Martes – Sábado",
      "days.sun": "Domingo",
      "footer.tagline": "Cocina Mediterránea Casera",
      "footer.rights": "© 2026 Los Serrano · Todos los derechos reservados"
    },
    en: {
      "nav.brandSub": "Home-Style Mediterranean Cuisine",
      "nav.story": "Our Story",
      "nav.dishes": "Specialties",
      "nav.menu": "Menu",
      "nav.contact": "Contact",
      "nav.reserve": "Book a Table",
      "nav.language": "Language",
      "hero.sub": "Home-Style Mediterranean Cuisine",
      "hero.hours": "Tue–Sat 10:00–23:30 · Sun 10:00–23:00",
      "hero.bookBtn": "Book a Table",
      "hero.menuBtn": "See the Menu",
      "hero.open": "Open today",
      "info.callUs": "Call Us",
      "info.address": "Address",
      "info.hours": "Opening Hours",
      "info.hoursValue": "Tue–Sat 10am–11:30pm · Sun 10am–11pm",
      "info.waValue": "Bookings & enquiries",
      "about.eyebrow": "Our Story",
      "about.title1": "Home flavours,",
      "about.title2": "at the heart of the Mediterranean.",
      "about.p1": "At Los Serrano we cook like at home: with fresh market produce, time-honoured recipes, and the flavour that only care can bring. No pretence, no fuss. Just good food.",
      "about.p2": "You’ll find the rice that comforts you, the catch of the day, and the dessert you won’t be able to refuse. All made with hands and heart.",
      "about.cta": "Make a reservation",
      "about.feat1": "Outdoor terrace",
      "about.feat2": "Two dining rooms",
      "spec.eyebrow": "Our Kitchen",
      "spec.title": "House Specialties",
      "spec.sub": "Fresh produce, timeless recipes.",
      "dish.bravas": "Patatas Bravas",
      "dish.bravas.desc": "Crispy, with our house sauce.",
      "dish.arroz": "Rice with Prawns",
      "dish.arroz.desc": "Mediterranean rice, perfectly cooked.",
      "dish.merluza": "Grilled Hake",
      "dish.merluza.desc": "Fresh fish on the grill, with side dish.",
      "dish.escalope": "Escalope with Mushrooms",
      "dish.escalope.desc": "Crispy, with mushroom sauce and potatoes.",
      "dish.postre1": "Peach with Cream",
      "dish.postre1.desc": "Our most beloved homemade dessert.",
      "dish.profiteroles": "Profiteroles with Chocolate",
      "dish.profiteroles.desc": "The perfect ending to any meal.",
      "menudia.eyebrow": "Every day of the week",
      "menudia.title": "Daily Menu",
      "menudia.schedule": "Every day · 1:30 pm – 4:00 pm",
      "menudia.weekdayLabel": "Mon – Fri",
      "menudia.weekendLabel": "Sat – Sun",
      "menudia.imgLabel1": "Grilled Chicken",
      "menudia.imgLabel2": "Grilled Salmon",
      "menudia.starters": "Starter of your choice",
      "menudia.s1": "Mixed Salad",
      "menudia.s2": "Courgette Cream Soup",
      "menudia.s3": "Vegetable Salad",
      "menudia.mains": "Main Course of your choice",
      "menudia.m1": "Grilled Chicken Breast or Escalope",
      "menudia.m2": "Grilled Hake",
      "menudia.m3": "Braised Pork Cheeks",
      "menudia.m4": "Veal Stew in Sauce",
      "menudia.m5": "Grilled Salmon",
      "menudia.m6": "Pasta with Pesto Marinera",
      "menudia.inc1": "Bread with Alioli",
      "menudia.inc2": "Drink included",
      "menudia.inc3": "Dessert or Coffee",
      "carta.eyebrow": "Our menu",
      "carta.title": "Menu",
      "carta.cat1": "Starters",
      "carta.cat2": "Arepas",
      "carta.cat3": "Patacones",
      "carta.cat4": "Cachapas & Hallacas",
      "carta.cat5": "Meats & Grill",
      "carta.footnote": "Bread, VAT and table service included · Ask about our daily specials",
      "reviews.eyebrow": "What our customers say",
      "reviews.title": "Reviews",
      "reviews.r1": "“A place you’ll definitely come back to. The daily menu is amazing, everything homemade and beautifully presented. The hake, exquisite.”",
      "reviews.r1.origin": "La Vila Joiosa",
      "reviews.r2": "“We came from Benidorm on a recommendation and were not disappointed. The rice with prawns, among the best in the area.”",
      "reviews.r3": "“Wir waren drei Mal während unseres Urlaubs dort! Ausgezeichnetes Essen, freundliches Personal und sehr faire Preise.”",
      "reviews.r3.origin": "Germany",
      "reviews.invite": "Have you visited? We’d love to read your review.",
      "reviews.cta": "Leave a review on Google",
      "contact.eyebrow": "How to find us",
      "contact.title": "Visit Us",
      "contact.address": "Address",
      "contact.gmaps": "View on Google Maps →",
      "contact.phone": "Phone",
      "contact.waText": "Message us on WhatsApp",
      "contact.hours": "Opening Hours",
      "contact.closed": "Closed",
      "contact.callCta": "Call now",
      "contact.waCta": "Book via WhatsApp",
      "days.mon": "Monday",
      "days.tue-sat": "Tuesday – Saturday",
      "days.sun": "Sunday",
      "footer.tagline": "Home-Style Mediterranean Cuisine",
      "footer.rights": "© 2026 Los Serrano · All rights reserved"
    },
    de: {
      "nav.brandSub": "Mediterrane Hausmannskost",
      "nav.story": "Über Uns",
      "nav.dishes": "Spezialisierungen",
      "nav.menu": "Speisekarte",
      "nav.contact": "Kontakt",
      "nav.reserve": "Reservieren",
      "nav.language": "Sprache",
      "hero.sub": "Mediterrane Hausmannskost",
      "hero.hours": "Di–Sa 10:00–23:30 · So 10:00–23:00",
      "hero.bookBtn": "Tisch Reservieren",
      "hero.menuBtn": "Zur Speisekarte",
      "hero.open": "Heute geöffnet",
      "info.callUs": "Anrufen",
      "info.address": "Adresse",
      "info.hours": "Öffnungszeiten",
      "info.hoursValue": "Di–Sa 10–23:30 Uhr · So 10–23 Uhr",
      "info.waValue": "Reservierungen & Anfragen",
      "about.eyebrow": "Unsere Geschichte",
      "about.title1": "Hausgemachte Aromen,",
      "about.title2": "am Herzen des Mittelmeers.",
      "about.p1": "Bei Los Serrano kochen wir wie zu Hause: mit frischen Marktprodukten, bewährten Rezepten und dem Geschmack, den nur Liebe verleiht. Ohne Prätentionen, ohne Tricks. Nur gutes Essen.",
      "about.p2": "Hier finden Sie den Reis, der Ihnen gut tut, den Tagesfang und das Dessert, das Sie nicht ablehnen können. Alles mit Herz zubereitet.",
      "about.cta": "Reservierung vornehmen",
      "about.feat1": "Außenterrasse",
      "about.feat2": "Zwei Speisesäle",
      "spec.eyebrow": "Unsere Küche",
      "spec.title": "Hausspezialitäten",
      "spec.sub": "Frische Zutaten, bewährte Rezepte.",
      "dish.bravas": "Patatas Bravas",
      "dish.bravas.desc": "Knusprig, mit unserer Haussaße.",
      "dish.arroz": "Reis mit Garnelen",
      "dish.arroz.desc": "Mediterraner Reis, perfekt zubereitet.",
      "dish.merluza": "Gegrillter Seehecht",
      "dish.merluza.desc": "Frischer Fisch vom Grill mit Beilage.",
      "dish.escalope": "Schnitzel mit Champignons",
      "dish.escalope.desc": "Knusprig, mit Champignonsoße und Kartoffeln.",
      "dish.postre1": "Pfirsich mit Sahne",
      "dish.postre1.desc": "Unser beliebtestes hausgemachtes Dessert.",
      "dish.profiteroles": "Profiteroles mit Schokolade",
      "dish.profiteroles.desc": "Der perfekte Abschluss jedes Essens.",
      "menudia.eyebrow": "Jeden Tag der Woche",
      "menudia.title": "Tagesmenü",
      "menudia.schedule": "Täglich · 13:30 – 16:00 Uhr",
      "menudia.weekdayLabel": "Mo – Fr",
      "menudia.weekendLabel": "Sa – So",
      "menudia.imgLabel1": "Gegrilltes Hähnchen",
      "menudia.imgLabel2": "Gegrillter Lachs",
      "menudia.starters": "Vorspeise nach Wahl",
      "menudia.s1": "Gemischter Salat",
      "menudia.s2": "Zucchinicremesuppe",
      "menudia.s3": "Gemüsesalat",
      "menudia.mains": "Hauptgericht nach Wahl",
      "menudia.m1": "Gegrillte Hähnchenbrust oder Schnitzel",
      "menudia.m2": "Gegrillter Seehecht",
      "menudia.m3": "Geschmorte Schweinebacken",
      "menudia.m4": "Kalbseintopf in Soße",
      "menudia.m5": "Gegrillter Lachs",
      "menudia.m6": "Pasta mit Pesto Marinera",
      "menudia.inc1": "Brot mit Alioli",
      "menudia.inc2": "Getränk inbegriffen",
      "menudia.inc3": "Dessert oder Kaffee",
      "carta.eyebrow": "Unsere Speisekarte",
      "carta.title": "Speisekarte",
      "carta.cat1": "Vorspeisen",
      "carta.cat2": "Arepas",
      "carta.cat3": "Patacones",
      "carta.cat4": "Cachapas & Hallacas",
      "carta.cat5": "Fleisch & Grill",
      "carta.footnote": "Brot, MwSt. und Tischservice inbegriffen · Fragen Sie nach unseren Tagesempfehlungen",
      "reviews.eyebrow": "Was unsere Gäste sagen",
      "reviews.title": "Bewertungen",
      "reviews.r1": "„Ein Ort, zu dem man immer wiederkommt. Das Tagesmenü ist fantastisch, alles hausgemacht und schön präsentiert. Der Seehecht war exquisit.“",
      "reviews.r1.origin": "La Vila Joiosa",
      "reviews.r2": "„Wir kamen auf Empfehlung aus Benidorm und wurden nicht enttäuscht. Der Reis mit Garnelen, einer der besten der Region.“",
      "reviews.r3": "„Wir waren drei Mal während unseres Urlaubs dort! Ausgezeichnetes Essen, freundliches Personal und sehr faire Preise.“",
      "reviews.r3.origin": "Deutschland",
      "reviews.invite": "Waren Sie bei uns? Wir würden uns über Ihre Bewertung freuen.",
      "reviews.cta": "Bewertung auf Google hinterlassen",
      "contact.eyebrow": "So finden Sie uns",
      "contact.title": "Besuchen Sie Uns",
      "contact.address": "Adresse",
      "contact.gmaps": "Auf Google Maps anzeigen →",
      "contact.phone": "Telefon",
      "contact.waText": "Schreiben Sie uns auf WhatsApp",
      "contact.hours": "Öffnungszeiten",
      "contact.closed": "Geschlossen",
      "contact.callCta": "Jetzt anrufen",
      "contact.waCta": "Per WhatsApp reservieren",
      "days.mon": "Montag",
      "days.tue-sat": "Dienstag – Samstag",
      "days.sun": "Sonntag",
      "footer.tagline": "Mediterrane Hausmannskost",
      "footer.rights": "© 2026 Los Serrano · Alle Rechte vorbehalten"
    },
    it: {
      "nav.brandSub": "Cucina Mediterranea Casalinga",
      "nav.story": "La Nostra Storia",
      "nav.dishes": "Specialità",
      "nav.menu": "Carta e Menù",
      "nav.contact": "Contatto",
      "nav.reserve": "Prenota",
      "nav.language": "Lingua",
      "hero.sub": "Cucina Mediterranea Casalinga",
      "hero.hours": "Mar–Sab 10:00–23:30 · Dom 10:00–23:00",
      "hero.bookBtn": "Prenota un Tavolo",
      "hero.menuBtn": "Vedi la Carta",
      "hero.open": "Aperto oggi",
      "info.callUs": "Chiamaci",
      "info.address": "Indirizzo",
      "info.hours": "Orario",
      "info.hoursValue": "Mar–Sab 10–23:30 · Dom 10–23",
      "info.waValue": "Prenotazioni e informazioni",
      "about.eyebrow": "La Nostra Storia",
      "about.title1": "Sapori di casa,",
      "about.title2": "nel cuore del Mediterraneo.",
      "about.p1": "Da Los Serrano cuciniamo come a casa: con prodotti freschi del mercato, ricette di sempre e il sapore che solo la passione sa dare. Senza pretese, senza fronzoli. Solo buon cibo.",
      "about.p2": "Qui troverete il riso che vi scalda, il pesce del giorno e il dessert che non potrete rifiutare. Tutto fatto con le mani e con il cuore.",
      "about.cta": "Prenota ora",
      "about.feat1": "Terrazza esterna",
      "about.feat2": "Due sale da pranzo",
      "spec.eyebrow": "La Nostra Cucina",
      "spec.title": "Specialità della Casa",
      "spec.sub": "Prodotto fresco, ricette di sempre.",
      "dish.bravas": "Patatas Bravas",
      "dish.bravas.desc": "Croccanti, con la nostra salsa della casa.",
      "dish.arroz": "Riso con Gamberi",
      "dish.arroz.desc": "Riso mediterraneo, cotto alla perfezione.",
      "dish.merluza": "Nasello alla Griglia",
      "dish.merluza.desc": "Pesce fresco alla griglia con contorno.",
      "dish.escalope": "Scaloppina ai Funghi",
      "dish.escalope.desc": "Croccante, con salsa ai funghi e patate.",
      "dish.postre1": "Pesca con Panna",
      "dish.postre1.desc": "Il nostro dessert casalingo più amato.",
      "dish.profiteroles": "Bigni al Cioccolato",
      "dish.profiteroles.desc": "Il finale perfetto di ogni pasto.",
      "menudia.eyebrow": "Ogni giorno della settimana",
      "menudia.title": "Menù del Giorno",
      "menudia.schedule": "Ogni giorno · 13:30 – 16:00",
      "menudia.weekdayLabel": "Lun – Ven",
      "menudia.weekendLabel": "Sab – Dom",
      "menudia.imgLabel1": "Pollo alla Griglia",
      "menudia.imgLabel2": "Salmone alla Griglia",
      "menudia.starters": "Primo a scelta",
      "menudia.s1": "Insalata Mista",
      "menudia.s2": "Crema di Zucchine",
      "menudia.s3": "Insalata di Verdure",
      "menudia.mains": "Secondo a scelta",
      "menudia.m1": "Petto di Pollo o Scaloppina",
      "menudia.m2": "Nasello alla Griglia",
      "menudia.m3": "Guanciale di Maiale Brasato",
      "menudia.m4": "Stufato di Vitello in Salsa",
      "menudia.m5": "Salmone alla Griglia",
      "menudia.m6": "Pasta al Pesto alla Marinara",
      "menudia.inc1": "Pane con Aioli",
      "menudia.inc2": "Bevanda inclusa",
      "menudia.inc3": "Dessert o Caffè",
      "carta.eyebrow": "La nostra carta",
      "carta.title": "Carta",
      "carta.cat1": "Per iniziare",
      "carta.cat2": "Arepas",
      "carta.cat3": "Patacones",
      "carta.cat4": "Cachapas e Hallacas",
      "carta.cat5": "Carni e Griglia",
      "carta.footnote": "Pane, IVA e servizio al tavolo inclusi · Chiedi le nostre proposte del giorno",
      "reviews.eyebrow": "Cosa dicono i nostri clienti",
      "reviews.title": "Recensioni",
      "reviews.r1": "“Un posto dove si torna sicuramente. Il menù del giorno è fantastico, tutto fatto in casa e presentato benissimo. Il nasello, squisito.”",
      "reviews.r1.origin": "La Vila Joiosa",
      "reviews.r2": "“Siamo venuti da Benidorm su raccomandazione e non siamo rimasti delusi. Il riso con gamberi, tra i migliori della zona.”",
      "reviews.r3": "“Wir waren drei Mal während unseres Urlaubs dort! Ausgezeichnetes Essen, freundliches Personal und sehr faire Preise.”",
      "reviews.r3.origin": "Germania",
      "reviews.invite": "Sei stato da noi? Ci farebbe piacere leggere la tua recensione.",
      "reviews.cta": "Lascia una recensione su Google",
      "contact.eyebrow": "Come trovarci",
      "contact.title": "Vienici a trovare",
      "contact.address": "Indirizzo",
      "contact.gmaps": "Vedi su Google Maps →",
      "contact.phone": "Telefono",
      "contact.waText": "Scrivici su WhatsApp",
      "contact.hours": "Orario",
      "contact.closed": "Chiuso",
      "contact.callCta": "Chiama ora",
      "contact.waCta": "Prenota via WhatsApp",
      "days.mon": "Lunedì",
      "days.tue-sat": "Martedì – Sabato",
      "days.sun": "Domenica",
      "footer.tagline": "Cucina Mediterranea Casalinga",
      "footer.rights": "© 2026 Los Serrano · Tutti i diritti riservati"
    },
    fr: {
      "nav.brandSub": "Cuisine Méditerranéenne Maison",
      "nav.story": "Notre Histoire",
      "nav.dishes": "Spécialités",
      "nav.menu": "Carte & Menu",
      "nav.contact": "Contact",
      "nav.reserve": "Réserver",
      "nav.language": "Langue",
      "hero.sub": "Cuisine Méditerranéenne Maison",
      "hero.hours": "Mar–Sam 10:00–23:30 · Dim 10:00–23:00",
      "hero.bookBtn": "Réserver une Table",
      "hero.menuBtn": "Voir la Carte",
      "hero.open": "Ouvert aujourd’hui",
      "info.callUs": "Appelez-nous",
      "info.address": "Adresse",
      "info.hours": "Horaires",
      "info.hoursValue": "Mar–Sam 10h–23h30 · Dim 10h–23h",
      "info.waValue": "Réservations et renseignements",
      "about.eyebrow": "Notre Histoire",
      "about.title1": "Des saveurs maison,",
      "about.title2": "au cœur de la Méditerranée.",
      "about.p1": "Chez Los Serrano, nous cuisinons comme à la maison : avec des produits frais du marché, des recettes d’antan et la saveur que seul l’amour peut donner. Sans prétentions, sans artifices. Juste de la bonne cuisine.",
      "about.p2": "Vous trouverez ici le riz qui réconforte, le poisson du jour et le dessert que vous ne pourrez pas refuser. Tout préparé avec les mains et le cœur.",
      "about.cta": "Faire une réservation",
      "about.feat1": "Terrasse extérieure",
      "about.feat2": "Deux salles",
      "spec.eyebrow": "Notre Cuisine",
      "spec.title": "Spécialités de la Maison",
      "spec.sub": "Produits frais, recettes d’antan.",
      "dish.bravas": "Patatas Bravas",
      "dish.bravas.desc": "Croustillantes, avec notre sauce maison.",
      "dish.arroz": "Riz aux Crevettes",
      "dish.arroz.desc": "Riz méditerranéen, cuit à la perfection.",
      "dish.merluza": "Merlu Grillé",
      "dish.merluza.desc": "Poisson frais grillé avec garniture.",
      "dish.escalope": "Escalope aux Champignons",
      "dish.escalope.desc": "Croustillant, avec sauce aux champignons et pommes de terre.",
      "dish.postre1": "Pêche à la Crème",
      "dish.postre1.desc": "Notre dessert maison le plus apprécié.",
      "dish.profiteroles": "Profiteroles au Chocolat",
      "dish.profiteroles.desc": "La fin parfaite de tout repas.",
      "menudia.eyebrow": "Chaque jour de la semaine",
      "menudia.title": "Menu du Jour",
      "menudia.schedule": "Chaque jour · 13h30 – 16h00",
      "menudia.weekdayLabel": "Lun – Ven",
      "menudia.weekendLabel": "Sam – Dim",
      "menudia.imgLabel1": "Poulet Grillé",
      "menudia.imgLabel2": "Saumon Grillé",
      "menudia.starters": "Entrée au choix",
      "menudia.s1": "Salade Mixte",
      "menudia.s2": "Crème de Courgette",
      "menudia.s3": "Salade de Légumes",
      "menudia.mains": "Plat principal au choix",
      "menudia.m1": "Blanc de Poulet ou Escalope",
      "menudia.m2": "Merlu Grillé",
      "menudia.m3": "Joues de Porc Brasées",
      "menudia.m4": "Ragoût de Veau en Sauce",
      "menudia.m5": "Saumon Grillé",
      "menudia.m6": "Pâtes au Pesto Marinera",
      "menudia.inc1": "Pain avec Aïoli",
      "menudia.inc2": "Boisson incluse",
      "menudia.inc3": "Dessert ou Café",
      "carta.eyebrow": "Notre carte",
      "carta.title": "Carte",
      "carta.cat1": "Pour commencer",
      "carta.cat2": "Arepas",
      "carta.cat3": "Patacones",
      "carta.cat4": "Cachapas & Hallacas",
      "carta.cat5": "Viandes & Grill",
      "carta.footnote": "Pain, TVA et service compris · Demandez nos suggestions du jour",
      "reviews.eyebrow": "Ce que disent nos clients",
      "reviews.title": "Avis",
      "reviews.r1": "“Un endroit où l’on revient à coup sûr. Le menu du jour est formidable, tout fait maison et joliment présenté. Le merlu, exquis.”",
      "reviews.r1.origin": "La Vila Joiosa",
      "reviews.r2": "“Nous sommes venus de Benidorm sur recommandation et n’avons pas été déçus. Le riz aux crevettes, parmi les meilleurs de la région.”",
      "reviews.r3": "“Wir waren drei Mal während unseres Urlaubs dort! Ausgezeichnetes Essen, freundliches Personal und sehr faire Preise.”",
      "reviews.r3.origin": "Allemagne",
      "reviews.invite": "Vous avez visité ? Nous serions ravis de lire votre avis.",
      "reviews.cta": "Laisser un avis sur Google",
      "contact.eyebrow": "Comment nous trouver",
      "contact.title": "Venez Nous Voir",
      "contact.address": "Adresse",
      "contact.gmaps": "Voir sur Google Maps →",
      "contact.phone": "Téléphone",
      "contact.waText": "Écrivez-nous sur WhatsApp",
      "contact.hours": "Horaires",
      "contact.closed": "Fermé",
      "contact.callCta": "Appeler maintenant",
      "contact.waCta": "Réserver par WhatsApp",
      "days.mon": "Lundi",
      "days.tue-sat": "Mardi – Samedi",
      "days.sun": "Dimanche",
      "footer.tagline": "Cuisine Méditerranéenne Maison",
      "footer.rights": "© 2026 Los Serrano · Tous droits réservés"
    }
  };

  var state = { lang: "es" };

  /* ── language switcher ───────────────────────────────────── */
  function setLanguage(lang) {
    if (!T[lang]) return;
    state.lang = lang;
    var t = T[lang];
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // sync all lang buttons (desktop + mobile)
    $$(".lang-btn, .mobile-lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("ls-lang", lang); } catch (_) {}
  }

  function initLang() {
    var saved;
    try { saved = localStorage.getItem("ls-lang"); } catch (_) {}
    var preferred = (saved && T[saved]) ? saved : "es";
    setLanguage(preferred);

    $$(".lang-btn, .mobile-lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ── nav scroll state ────────────────────────────────────── */
  function initNav() {
    var nav = $("#nav");
    if (!nav) return;
    var tick = false;
    function onScroll() {
      if (!tick) {
        requestAnimationFrame(function () {
          nav.classList.toggle("is-scrolled", window.scrollY > 40);
          tick = false;
        });
        tick = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── hamburger / mobile menu ─────────────────────────────── */
  function initMobileMenu() {
    var ham = $("#hamburger");
    var menu = $("#mobile-menu");
    var closeBtn = $("#mobile-menu-close");
    if (!ham || !menu) return;

    function openMenu() {
      ham.classList.add("is-open");
      menu.classList.add("is-open");
      ham.setAttribute("aria-expanded", "true");
      menu.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      ham.classList.remove("is-open");
      menu.classList.remove("is-open");
      ham.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    ham.addEventListener("click", function () {
      ham.classList.contains("is-open") ? closeMenu() : openMenu();
    });

    if (closeBtn) closeBtn.addEventListener("click", closeMenu);

    // close on nav link click
    $$(".mobile-nav-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && ham.classList.contains("is-open")) closeMenu();
    });
  }

  /* ── smooth anchor scroll ────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 64;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navH,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    });
  }

  /* ── scroll reveal ───────────────────────────────────────── */
  function initReveals() {
    var els = $$(".reveal");
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04, rootMargin: "0px 0px -3% 0px" });

    els.forEach(function (el) { io.observe(el); });

    // safety net: force-reveal anything still hidden after 6s
    setTimeout(function () {
      $$(".reveal:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight + 200) {
          el.classList.add("is-visible");
        }
      });
    }, 6000);
  }

  /* ── hover tilt on cards (fine pointer only) ─────────────── */
  function initTilt() {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var TILT = 5; // max degrees
    $$(".dish-card, .carta-card, .review-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
        var y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
        card.style.transform = "translateY(-4px) rotateX(" + (-y * TILT) + "deg) rotateY(" + (x * TILT) + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ── carta accordion ────────────────────────────────────── */
  function initCarta() {
    var items = $$(".carta-acc-item");
    if (!items.length) return;
    items.forEach(function (item) {
      var trigger = item.querySelector(".carta-acc-trigger");
      if (!trigger) return;
      trigger.addEventListener("click", function () {
        var isOpen = item.classList.contains("is-open");
        items.forEach(function (i) {
          i.classList.remove("is-open");
          var t = i.querySelector(".carta-acc-trigger");
          if (t) t.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ── open status dot (hide on Monday) ────────────────────── */
  function initOpenStatus() {
    var statusEl = $(".hero-open-status");
    if (!statusEl) return;
    var day = new Date().getDay(); // 0=Sun, 1=Mon
    if (day === 1) {
      // Monday: closed
      statusEl.style.display = "none";
    }
  }

  /* ── boot ────────────────────────────────────────────────── */
  function boot() {
    safe(initLang,         "initLang");
    safe(initNav,          "initNav");
    safe(initMobileMenu,   "initMobileMenu");
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initReveals,      "initReveals");
    safe(initTilt,         "initTilt");
    safe(initCarta,        "initCarta");
    safe(initOpenStatus,   "initOpenStatus");
    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

})();
