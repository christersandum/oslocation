/* =========================================================
   Oslocation — Oslo & Norway Travel Agency
   main.js  |  Translations · Language Switch · UI Logic
   ========================================================= */

/* ── i18n data ─────────────────────────────────────────── */
const i18n = {
  en: {
    nav_home: "Home",
    nav_tours: "Tours",
    nav_destinations: "Destinations",
    nav_about: "About Oslo",
    nav_contact: "Contact",
    nav_book: "Book Now",

    hero_badge: "🇳🇴 Norway's Premier Travel Experience",
    hero_title: "Discover Oslo &amp; Norway",
    hero_subtitle: "Experience the magic of Scandinavia's most vibrant capital — where fjords, culture and Nordic spirit meet",
    hero_cta: "Explore Tours",
    hero_cta2: "Learn More",

    stat1_num: "50+",
    stat1_label: "Unique Tours",
    stat2_num: "10,000+",
    stat2_label: "Happy Travellers",
    stat3_num: "4.9",
    stat3_label: "Average Rating",
    stat4_num: "15+",
    stat4_label: "Years Experience",

    features_title: "Why Choose Oslo?",
    features_subtitle: "Norway's capital offers something extraordinary for every kind of traveller",
    feat1_title: "World-Class Culture",
    feat1_desc: "Explore world-renowned museums, stunning architecture and a thriving arts scene that defines modern Norway.",
    feat2_title: "Breathtaking Nature",
    feat2_desc: "From the majestic Oslofjord to surrounding forests and mountains — nature is always just moments away.",
    feat3_title: "Safe &amp; Sustainable",
    feat3_desc: "Oslo consistently ranks among the world's safest and most sustainable cities. Travel with complete peace of mind.",
    feat4_title: "Expert Local Guides",
    feat4_desc: "Our passionate guides share insider knowledge and hidden gems that only true Oslo locals know about.",

    tours_title: "Our Oslo &amp; Norway Tours",
    tours_subtitle: "Handcrafted experiences for the discerning traveller",
    filter_all: "All Tours",
    filter_city: "City",
    filter_nature: "Nature",
    filter_adventure: "Adventure",
    filter_culture: "Culture",
    from_price: "From",
    days_label: "days",
    day_label: "day",
    book_tour: "Book Now",
    view_details: "Details",

    tour1_name: "Oslo City Explorer",
    tour1_desc: "Discover Oslo's iconic landmarks — the Royal Palace, Karl Johans gate and the vibrant Aker Brygge waterfront.",
    tour1_dur: "2 days",
    tour1_price: "€299",

    tour2_name: "Oslofjord Safari",
    tour2_desc: "Cruise the stunning Oslofjord, visit island communities and experience Norway's rich maritime heritage.",
    tour2_dur: "1 day",
    tour2_price: "€149",

    tour3_name: "Viking Heritage Tour",
    tour3_desc: "Step back in time at the Viking Ship Museum and discover the legendary seafarers who shaped world history.",
    tour3_dur: "1 day",
    tour3_price: "€129",

    tour4_name: "Holmenkollen Winter Magic",
    tour4_desc: "Experience Norway's iconic ski jump, cross-country skiing trails and breathtaking winter panoramas.",
    tour4_dur: "2 days",
    tour4_price: "€349",

    tour5_name: "Bergen &amp; the Fjords",
    tour5_desc: "Journey to the gateway of the fjords — explore Bergen's UNESCO-listed Bryggen and the majestic Hardangerfjord.",
    tour5_dur: "3 days",
    tour5_price: "€549",

    tour6_name: "Northern Lights Odyssey",
    tour6_desc: "Chase the magical Aurora Borealis across Norway's pristine Arctic landscapes — a once-in-a-lifetime adventure.",
    tour6_dur: "5 days",
    tour6_price: "€1,299",

    tour7_name: "Flåm Railway &amp; Sognefjord",
    tour7_desc: "Ride one of the world's most scenic railways and cruise the majestic Sognefjord, Norway's longest fjord.",
    tour7_dur: "2 days",
    tour7_price: "€449",

    tour8_name: "Oslo Arts &amp; Culture",
    tour8_desc: "Immerse yourself in Oslo's cultural scene — the MUNCH Museum, National Gallery and Vigeland Sculpture Park.",
    tour8_dur: "1 day",
    tour8_price: "€99",

    destinations_title: "Iconic Oslo Destinations",
    destinations_subtitle: "Places that will take your breath away",
    dest1_name: "Oslo City Centre",
    dest1_sub: "Capital & Culture",
    dest2_name: "The Oslofjord",
    dest2_sub: "Nature & Maritime",
    dest3_name: "Bygdøy Peninsula",
    dest3_sub: "Museums & History",
    dest4_name: "Holmenkollen",
    dest4_sub: "Sport & Adventure",
    dest5_name: "Vigeland Park",
    dest5_sub: "Art & Sculpture",
    dest6_name: "Aker Brygge",
    dest6_sub: "Waterfront & Dining",
    explore: "Explore",

    video_title: "Experience Oslo in Motion",
    video_subtitle: "Let Norway's beauty speak for itself",

    gallery_title: "Oslo Through Our Lens",
    gallery_subtitle: "Moments captured in Norway's magnificent capital",

    test_title: "What Our Travellers Say",
    test_subtitle: "Real experiences from real travellers",
    test1_text: "The Oslo City Explorer tour was absolutely fantastic! Our guide's knowledge of the city's history made every moment unforgettable. We'll definitely be back.",
    test1_name: "Emma L.",
    test1_from: "United Kingdom",
    test2_text: "The Northern Lights Odyssey exceeded all our expectations. Seeing the Aurora Borealis dancing over the Arctic mountains was a spiritual experience.",
    test2_name: "Hans M.",
    test2_from: "Germany",
    test3_text: "Bergen and the Fjords tour was perfectly organised. Breathtaking scenery, superb accommodation, and a guide with genuine passion for Norway.",
    test3_name: "Marie D.",
    test3_from: "France",

    cta_title: "Ready to Experience Oslo?",
    cta_subtitle: "Let us craft your perfect Norwegian adventure",
    cta_button: "Start Planning",

    contact_title: "Get in Touch",
    contact_subtitle: "We're here to help plan your perfect Oslo experience",
    contact_address: "Aker Brygge 1, 0150 Oslo, Norway",
    contact_phone: "+47 22 00 00 00",
    contact_email: "info@oslocation.no",
    contact_hours: "Mon – Fri: 09:00 – 18:00",
    form_name: "Your Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_tour: "Tour of Interest",
    form_message: "Your Message",
    form_submit: "Send Message",
    form_success: "Thank you! We'll be in touch shortly.",

    footer_desc: "Your trusted partner for discovering the magic of Oslo and Norway. We craft unforgettable experiences for travellers from around the world.",
    footer_links: "Quick Links",
    footer_dest_title: "Destinations",
    footer_contact_title: "Contact",
    footer_newsletter: "Newsletter",
    footer_newsletter_text: "Subscribe for Oslo travel inspiration and exclusive offers",
    footer_email_ph: "Your email address",
    footer_subscribe: "Subscribe",
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
  },

  /* ── German ──────────────────────────────────────────── */
  de: {
    nav_home: "Start",
    nav_tours: "Touren",
    nav_destinations: "Reiseziele",
    nav_about: "Über Oslo",
    nav_contact: "Kontakt",
    nav_book: "Buchen",

    hero_badge: "🇳🇴 Norwegens Premium-Reiseerlebnis",
    hero_title: "Oslo &amp; Norwegen Entdecken",
    hero_subtitle: "Erleben Sie die Magie Skandinaviens lebendigster Hauptstadt — wo Fjorde, Kultur und nordischer Geist zusammentreffen",
    hero_cta: "Touren Erkunden",
    hero_cta2: "Mehr Erfahren",

    stat1_num: "50+",
    stat1_label: "Einzigartige Touren",
    stat2_num: "10.000+",
    stat2_label: "Zufriedene Reisende",
    stat3_num: "4,9",
    stat3_label: "Durchschnittsbewertung",
    stat4_num: "15+",
    stat4_label: "Jahre Erfahrung",

    features_title: "Warum Oslo?",
    features_subtitle: "Norwegens Hauptstadt bietet jedem Reisenden etwas Außergewöhnliches",
    feat1_title: "Weltklasse Kultur",
    feat1_desc: "Erkunden Sie weltberühmte Museen, atemberaubende Architektur und eine lebendige Kunstszene, die das moderne Norwegen definiert.",
    feat2_title: "Atemberaubende Natur",
    feat2_desc: "Vom majestätischen Oslofjord bis zu Wäldern und Bergen — die Natur ist immer in greifbarer Nähe.",
    feat3_title: "Sicher &amp; Nachhaltig",
    feat3_desc: "Oslo zählt zu den sichersten und nachhaltigsten Städten der Welt. Reisen Sie mit vollständiger Ruhe.",
    feat4_title: "Erfahrene Lokalguides",
    feat4_desc: "Unsere leidenschaftlichen Guides teilen ihr Insiderwissen und die verborgenen Schätze Oslos.",

    tours_title: "Unsere Oslo &amp; Norwegen Touren",
    tours_subtitle: "Handverlesene Erlebnisse für anspruchsvolle Reisende",
    filter_all: "Alle Touren",
    filter_city: "Stadt",
    filter_nature: "Natur",
    filter_adventure: "Abenteuer",
    filter_culture: "Kultur",
    from_price: "Ab",
    days_label: "Tage",
    day_label: "Tag",
    book_tour: "Buchen",
    view_details: "Details",

    tour1_name: "Oslo Stadtentdecker",
    tour1_desc: "Entdecken Sie Oslos ikonische Sehenswürdigkeiten — den Königspalast, Karl Johans gate und das lebendige Aker Brygge.",
    tour1_dur: "2 Tage",
    tour1_price: "€299",

    tour2_name: "Oslofjord Safari",
    tour2_desc: "Kreuzfahrt auf dem wunderschönen Oslofjord, besuchen Sie Inselgemeinden und erleben Sie Norwegens maritimes Erbe.",
    tour2_dur: "1 Tag",
    tour2_price: "€149",

    tour3_name: "Wikingerkultur-Tour",
    tour3_desc: "Reisen Sie zurück in die Zeit im Wikingerschiffmuseum und entdecken Sie die legendären Seefahrer der Geschichte.",
    tour3_dur: "1 Tag",
    tour3_price: "€129",

    tour4_name: "Holmenkollen Winterzauber",
    tour4_desc: "Erleben Sie Norwegens ikonische Skisprungschanze, Langlaufloipen und atemberaubende Winterpanoramen.",
    tour4_dur: "2 Tage",
    tour4_price: "€349",

    tour5_name: "Bergen &amp; die Fjorde",
    tour5_desc: "Reise zum Tor der Fjorde — erkunden Sie Bergens UNESCO-Bryggen und den majestätischen Hardangerfjord.",
    tour5_dur: "3 Tage",
    tour5_price: "€549",

    tour6_name: "Nordlichter Odyssee",
    tour6_desc: "Jagen Sie das magische Aurora Borealis durch Norwegens unberührte Arktislandschaften — ein Erlebnis fürs Leben.",
    tour6_dur: "5 Tage",
    tour6_price: "€1.299",

    tour7_name: "Flåmsbahn &amp; Sognefjord",
    tour7_desc: "Fahren Sie eine der malerischsten Eisenbahnen der Welt und kreuzen Sie den majestätischen Sognefjord.",
    tour7_dur: "2 Tage",
    tour7_price: "€449",

    tour8_name: "Oslo Kunst &amp; Kultur",
    tour8_desc: "Tauchen Sie in Oslos Kulturszene ein — MUNCH-Museum, Nationalgalerie und Vigeland Skulpturenpark.",
    tour8_dur: "1 Tag",
    tour8_price: "€99",

    destinations_title: "Ikonische Oslo-Reiseziele",
    destinations_subtitle: "Orte, die Ihnen den Atem verschlagen",
    dest1_name: "Oslo Innenstadt",
    dest1_sub: "Hauptstadt &amp; Kultur",
    dest2_name: "Der Oslofjord",
    dest2_sub: "Natur &amp; Maritime",
    dest3_name: "Halbinsel Bygdøy",
    dest3_sub: "Museen &amp; Geschichte",
    dest4_name: "Holmenkollen",
    dest4_sub: "Sport &amp; Abenteuer",
    dest5_name: "Vigeland Park",
    dest5_sub: "Kunst &amp; Skulptur",
    dest6_name: "Aker Brygge",
    dest6_sub: "Waterfront &amp; Gastronomie",
    explore: "Erkunden",

    video_title: "Oslo in Bewegung Erleben",
    video_subtitle: "Lassen Sie Norwegens Schönheit für sich sprechen",

    gallery_title: "Oslo Durch Unsere Linse",
    gallery_subtitle: "Momente in Norwegens prächtiger Hauptstadt",

    test_title: "Was Unsere Reisenden Sagen",
    test_subtitle: "Echte Erfahrungen von echten Reisenden",
    test1_text: "Die Oslo Stadtentdecker-Tour war absolut fantastisch! Das Wissen unseres Guides über die Stadtgeschichte machte jeden Moment unvergesslich.",
    test1_name: "Emma L.",
    test1_from: "Vereinigtes Königreich",
    test2_text: "Die Nordlichter-Odyssee übertraf alle unsere Erwartungen. Die Aurora Borealis über den Arktisbergen zu sehen war ein spirituelles Erlebnis.",
    test2_name: "Hans M.",
    test2_from: "Deutschland",
    test3_text: "Die Bergen und Fjorde Tour war perfekt organisiert. Atemberaubende Landschaft, tolle Unterkunft und ein leidenschaftlicher Guide.",
    test3_name: "Marie D.",
    test3_from: "Frankreich",

    cta_title: "Bereit, Oslo zu Erleben?",
    cta_subtitle: "Lassen Sie uns Ihr perfektes norwegisches Abenteuer gestalten",
    cta_button: "Jetzt Planen",

    contact_title: "Kontakt Aufnehmen",
    contact_subtitle: "Wir helfen Ihnen bei der Planung Ihres perfekten Oslo-Erlebnisses",
    contact_address: "Aker Brygge 1, 0150 Oslo, Norwegen",
    contact_phone: "+47 22 00 00 00",
    contact_email: "info@oslocation.no",
    contact_hours: "Mo – Fr: 09:00 – 18:00",
    form_name: "Ihr Name",
    form_email: "E-Mail-Adresse",
    form_phone: "Telefonnummer",
    form_tour: "Gewünschte Tour",
    form_message: "Ihre Nachricht",
    form_submit: "Nachricht Senden",
    form_success: "Danke! Wir melden uns in Kürze.",

    footer_desc: "Ihr vertrauenswürdiger Partner für die Entdeckung des Zaubers von Oslo und Norwegen.",
    footer_links: "Schnelllinks",
    footer_dest_title: "Reiseziele",
    footer_contact_title: "Kontakt",
    footer_newsletter: "Newsletter",
    footer_newsletter_text: "Abonnieren Sie für Oslo-Reisetipps und exklusive Angebote",
    footer_email_ph: "Ihre E-Mail-Adresse",
    footer_subscribe: "Abonnieren",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_privacy: "Datenschutz",
    footer_terms: "Nutzungsbedingungen",
  },

  /* ── French ──────────────────────────────────────────── */
  fr: {
    nav_home: "Accueil",
    nav_tours: "Circuits",
    nav_destinations: "Destinations",
    nav_about: "À Propos d'Oslo",
    nav_contact: "Contact",
    nav_book: "Réserver",

    hero_badge: "🇳🇴 L'expérience voyage premium de Norvège",
    hero_title: "Découvrez Oslo &amp; la Norvège",
    hero_subtitle: "Vivez la magie de la capitale la plus vibrante de Scandinavie — là où fjords, culture et esprit nordique se rencontrent",
    hero_cta: "Explorer les Circuits",
    hero_cta2: "En Savoir Plus",

    stat1_num: "50+",
    stat1_label: "Circuits Uniques",
    stat2_num: "10 000+",
    stat2_label: "Voyageurs Heureux",
    stat3_num: "4,9",
    stat3_label: "Note Moyenne",
    stat4_num: "15+",
    stat4_label: "Ans d'Expérience",

    features_title: "Pourquoi Choisir Oslo ?",
    features_subtitle: "La capitale norvégienne offre quelque chose d'extraordinaire à chaque voyageur",
    feat1_title: "Culture de Classe Mondiale",
    feat1_desc: "Explorez des musées de renommée mondiale, une architecture époustouflante et une scène artistique florissante.",
    feat2_title: "Nature Époustouflante",
    feat2_desc: "Du majestueux Oslofjord aux forêts et montagnes environnantes — la nature est toujours à portée de main.",
    feat3_title: "Sûre &amp; Durable",
    feat3_desc: "Oslo figure régulièrement parmi les villes les plus sûres et durables du monde. Voyagez l'esprit tranquille.",
    feat4_title: "Guides Locaux Experts",
    feat4_desc: "Nos guides passionnés partagent leur savoir privilégié et les trésors cachés d'Oslo.",

    tours_title: "Nos Circuits Oslo &amp; Norvège",
    tours_subtitle: "Des expériences sur mesure pour le voyageur exigeant",
    filter_all: "Tous les Circuits",
    filter_city: "Ville",
    filter_nature: "Nature",
    filter_adventure: "Aventure",
    filter_culture: "Culture",
    from_price: "À partir de",
    days_label: "jours",
    day_label: "jour",
    book_tour: "Réserver",
    view_details: "Détails",

    tour1_name: "Explorateur d'Oslo",
    tour1_desc: "Découvrez les monuments emblématiques d'Oslo — le Palais Royal, Karl Johans gate et le vibrant front de mer d'Aker Brygge.",
    tour1_dur: "2 jours",
    tour1_price: "€299",

    tour2_name: "Safari sur l'Oslofjord",
    tour2_desc: "Croisez le magnifique Oslofjord, visitez les communautés insulaires et vivez le patrimoine maritime norvégien.",
    tour2_dur: "1 jour",
    tour2_price: "€149",

    tour3_name: "Circuit Patrimoine Viking",
    tour3_desc: "Remontez le temps au Musée des Navires Vikings et découvrez les légendaires navigateurs qui ont façonné l'histoire.",
    tour3_dur: "1 jour",
    tour3_price: "€129",

    tour4_name: "Magie Hivernale de Holmenkollen",
    tour4_desc: "Vivez le tremplin de ski emblématique, les pistes de ski de fond et des panoramas hivernaux époustouflants.",
    tour4_dur: "2 jours",
    tour4_price: "€349",

    tour5_name: "Bergen &amp; les Fjords",
    tour5_desc: "Voyagez vers la porte des fjords — explorez le Bryggen d'UNESCO à Bergen et le majestueux Hardangerfjord.",
    tour5_dur: "3 jours",
    tour5_price: "€549",

    tour6_name: "Odyssée des Aurores Boréales",
    tour6_desc: "Chassez la magique Aurora Borealis à travers les paysages arctiques immaculés de Norvège — une aventure unique.",
    tour6_dur: "5 jours",
    tour6_price: "€1 299",

    tour7_name: "Train de Flåm &amp; Sognefjord",
    tour7_desc: "Voyagez sur l'un des chemins de fer les plus pittoresques du monde et croisez le majestueux Sognefjord.",
    tour7_dur: "2 jours",
    tour7_price: "€449",

    tour8_name: "Arts &amp; Culture d'Oslo",
    tour8_desc: "Plongez dans la scène culturelle d'Oslo — Musée MUNCH, Galerie Nationale et Parc de Sculptures Vigeland.",
    tour8_dur: "1 jour",
    tour8_price: "€99",

    destinations_title: "Destinations Emblématiques d'Oslo",
    destinations_subtitle: "Des endroits qui vous couperont le souffle",
    dest1_name: "Centre-ville d'Oslo",
    dest1_sub: "Capitale &amp; Culture",
    dest2_name: "L'Oslofjord",
    dest2_sub: "Nature &amp; Maritime",
    dest3_name: "Péninsule de Bygdøy",
    dest3_sub: "Musées &amp; Histoire",
    dest4_name: "Holmenkollen",
    dest4_sub: "Sport &amp; Aventure",
    dest5_name: "Parc Vigeland",
    dest5_sub: "Art &amp; Sculpture",
    dest6_name: "Aker Brygge",
    dest6_sub: "Front de mer &amp; Gastronomie",
    explore: "Explorer",

    video_title: "Vivez Oslo en Mouvement",
    video_subtitle: "Laissez la beauté de la Norvège parler d'elle-même",

    gallery_title: "Oslo à Travers Notre Objectif",
    gallery_subtitle: "Des moments capturés dans la magnifique capitale norvégienne",

    test_title: "Ce Que Disent Nos Voyageurs",
    test_subtitle: "De vraies expériences de vrais voyageurs",
    test1_text: "Le circuit Explorateur d'Oslo était absolument fantastique ! Les connaissances de notre guide sur l'histoire de la ville ont rendu chaque instant inoubliable.",
    test1_name: "Emma L.",
    test1_from: "Royaume-Uni",
    test2_text: "L'Odyssée des Aurores Boréales a dépassé toutes nos attentes. Voir l'Aurora Borealis danser sur les montagnes arctiques était une expérience spirituelle.",
    test2_name: "Hans M.",
    test2_from: "Allemagne",
    test3_text: "Le circuit Bergen et les Fjords était parfaitement organisé. Des paysages à couper le souffle et un guide avec une vraie passion pour la Norvège.",
    test3_name: "Marie D.",
    test3_from: "France",

    cta_title: "Prêt à Découvrir Oslo ?",
    cta_subtitle: "Laissez-nous créer votre aventure norvégienne parfaite",
    cta_button: "Commencer à Planifier",

    contact_title: "Nous Contacter",
    contact_subtitle: "Nous sommes là pour vous aider à planifier votre expérience parfaite à Oslo",
    contact_address: "Aker Brygge 1, 0150 Oslo, Norvège",
    contact_phone: "+47 22 00 00 00",
    contact_email: "info@oslocation.no",
    contact_hours: "Lun – Ven : 09h00 – 18h00",
    form_name: "Votre Nom",
    form_email: "Adresse E-mail",
    form_phone: "Numéro de Téléphone",
    form_tour: "Circuit Souhaité",
    form_message: "Votre Message",
    form_submit: "Envoyer le Message",
    form_success: "Merci ! Nous vous contacterons bientôt.",

    footer_desc: "Votre partenaire de confiance pour découvrir la magie d'Oslo et de la Norvège.",
    footer_links: "Liens Rapides",
    footer_dest_title: "Destinations",
    footer_contact_title: "Contact",
    footer_newsletter: "Newsletter",
    footer_newsletter_text: "Abonnez-vous pour de l'inspiration voyage à Oslo et des offres exclusives",
    footer_email_ph: "Votre adresse e-mail",
    footer_subscribe: "S'abonner",
    footer_rights: "Tous droits réservés.",
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions d'Utilisation",
  },

  /* ── Norwegian ───────────────────────────────────────── */
  no: {
    nav_home: "Hjem",
    nav_tours: "Turer",
    nav_destinations: "Destinasjoner",
    nav_about: "Om Oslo",
    nav_contact: "Kontakt",
    nav_book: "Bestill",

    hero_badge: "🇳🇴 Norges fremste reiseopplevelse",
    hero_title: "Oppdag Oslo &amp; Norge",
    hero_subtitle: "Opplev magien i Skandinavias mest levende hovedstad — der fjorder, kultur og nordisk ånd møtes",
    hero_cta: "Utforsk Turer",
    hero_cta2: "Les Mer",

    stat1_num: "50+",
    stat1_label: "Unike Turer",
    stat2_num: "10 000+",
    stat2_label: "Fornøyde Reisende",
    stat3_num: "4,9",
    stat3_label: "Gjennomsnittskarakter",
    stat4_num: "15+",
    stat4_label: "Års Erfaring",

    features_title: "Hvorfor Oslo?",
    features_subtitle: "Norges hovedstad har noe ekstraordinært for enhver reisende",
    feat1_title: "Verdensklasse Kultur",
    feat1_desc: "Utforsk verdensberømte museer, fantastisk arkitektur og en blomstrende kunstscene som definerer moderne Norge.",
    feat2_title: "Betagende Natur",
    feat2_desc: "Fra det majestetiske Oslofjorden til skoger og fjell — naturen er alltid rett utenfor døren.",
    feat3_title: "Trygg &amp; Bærekraftig",
    feat3_desc: "Oslo rangerer konsekvent blant verdens tryggeste og mest bærekraftige byer. Reis med ro i sjelen.",
    feat4_title: "Ekspertguider",
    feat4_desc: "Våre lidenskapelige lokale guider deler insiderkunnskap og skjulte perler som bare Oslo-folk kjenner til.",

    tours_title: "Våre Oslo &amp; Norge-Turer",
    tours_subtitle: "Håndplukkede opplevelser for den kresne reisende",
    filter_all: "Alle Turer",
    filter_city: "By",
    filter_nature: "Natur",
    filter_adventure: "Eventyr",
    filter_culture: "Kultur",
    from_price: "Fra",
    days_label: "dager",
    day_label: "dag",
    book_tour: "Bestill",
    view_details: "Detaljer",

    tour1_name: "Oslo By-Eventyr",
    tour1_desc: "Oppdag Oslos ikoniske landemerker — Slottet, Karl Johans gate og den livlige Aker Brygge-strandpromenaden.",
    tour1_dur: "2 dager",
    tour1_price: "€299",

    tour2_name: "Oslofjord Safari",
    tour2_desc: "Cruise det vakre Oslofjorden, besøk øysamfunn og opplev Norges rike maritime arv.",
    tour2_dur: "1 dag",
    tour2_price: "€149",

    tour3_name: "Vikingkultur-Tur",
    tour3_desc: "Ta et skritt tilbake i tid på Vikingskipshuset og oppdag de legendariske sjøfarerne som formet verdenshistorien.",
    tour3_dur: "1 dag",
    tour3_price: "€129",

    tour4_name: "Holmenkollen Vintermagi",
    tour4_desc: "Opplev Norges ikoniske skihopp, langrennssporene og betagende vinterpanoramaer.",
    tour4_dur: "2 dager",
    tour4_price: "€349",

    tour5_name: "Bergen &amp; Fjordene",
    tour5_desc: "Reis til fjordenes port — utforsk Bergens UNESCO-listede Bryggen og det majestetiske Hardangerfjorden.",
    tour5_dur: "3 dager",
    tour5_price: "€549",

    tour6_name: "Nordlys Odyssé",
    tour6_desc: "Jakt på det magiske Nordlyset over Norges urørte arktiske landskap — en opplevelse for livet.",
    tour6_dur: "5 dager",
    tour6_price: "€1 299",

    tour7_name: "Flåmsbanen &amp; Sognefjorden",
    tour7_desc: "Kjør en av verdens mest pittoreske jernbaner og cruise det majestetiske Sognefjorden, Norges lengste fjord.",
    tour7_dur: "2 dager",
    tour7_price: "€449",

    tour8_name: "Oslo Kunst &amp; Kultur",
    tour8_desc: "Fordyp deg i Oslos kulturscene — MUNCH-museet, Nasjonalgalleriet og Vigelandsparken.",
    tour8_dur: "1 dag",
    tour8_price: "€99",

    destinations_title: "Ikoniske Oslo-Destinasjoner",
    destinations_subtitle: "Steder som vil ta pusten fra deg",
    dest1_name: "Oslo Sentrum",
    dest1_sub: "Hovedstad &amp; Kultur",
    dest2_name: "Oslofjorden",
    dest2_sub: "Natur &amp; Maritime",
    dest3_name: "Bygdøy-halvøya",
    dest3_sub: "Museer &amp; Historie",
    dest4_name: "Holmenkollen",
    dest4_sub: "Sport &amp; Eventyr",
    dest5_name: "Vigelandsparken",
    dest5_sub: "Kunst &amp; Skulptur",
    dest6_name: "Aker Brygge",
    dest6_sub: "Brygge &amp; Spisesteder",
    explore: "Utforsk",

    video_title: "Opplev Oslo i Bevegelse",
    video_subtitle: "La Norges skjønnhet tale for seg selv",

    gallery_title: "Oslo Gjennom Vår Linse",
    gallery_subtitle: "Øyeblikk fanget i Norges praktfulle hovedstad",

    test_title: "Hva Våre Reisende Sier",
    test_subtitle: "Ekte opplevelser fra ekte reisende",
    test1_text: "Oslo By-Eventyr-turen var helt fantastisk! Guidens kunnskap om byhistorien gjorde hvert øyeblikk uforglemmelig. Vi kommer definitivt tilbake.",
    test1_name: "Emma L.",
    test1_from: "Storbritannia",
    test2_text: "Nordlys Odysséen oversteg alle våre forventninger. Å se Aurora Borealis danse over de arktiske fjellene var en åndelig opplevelse.",
    test2_name: "Hans M.",
    test2_from: "Tyskland",
    test3_text: "Bergen og Fjordene-turen var perfekt organisert. Betagende landskap, suverene overnattingssteder og en guide med ekte lidenskap for Norge.",
    test3_name: "Marie D.",
    test3_from: "Frankrike",

    cta_title: "Klar for å Oppleve Oslo?",
    cta_subtitle: "La oss skape ditt perfekte norske eventyr",
    cta_button: "Begynn å Planlegge",

    contact_title: "Ta Kontakt",
    contact_subtitle: "Vi er her for å hjelpe deg planlegge din perfekte Oslo-opplevelse",
    contact_address: "Aker Brygge 1, 0150 Oslo, Norge",
    contact_phone: "+47 22 00 00 00",
    contact_email: "info@oslocation.no",
    contact_hours: "Man – Fre: 09:00 – 18:00",
    form_name: "Ditt Navn",
    form_email: "E-postadresse",
    form_phone: "Telefonnummer",
    form_tour: "Ønsket Tur",
    form_message: "Din Melding",
    form_submit: "Send Melding",
    form_success: "Takk! Vi tar kontakt snart.",

    footer_desc: "Din pålitelige partner for å oppdage magien i Oslo og Norge. Vi lager uforglemmelige opplevelser for reisende fra hele verden.",
    footer_links: "Hurtiglenker",
    footer_dest_title: "Destinasjoner",
    footer_contact_title: "Kontakt",
    footer_newsletter: "Nyhetsbrev",
    footer_newsletter_text: "Abonner for Oslo-reiseinspirasjoner og eksklusive tilbud",
    footer_email_ph: "Din e-postadresse",
    footer_subscribe: "Abonner",
    footer_rights: "Alle rettigheter forbeholdt.",
    footer_privacy: "Personvernpolicy",
    footer_terms: "Vilkår for Bruk",
  },
};

/* ── State ──────────────────────────────────────────────── */
let currentLang = localStorage.getItem("oslocation_lang") || "en";
let currentTestimonial = 0;
let testimonialInterval;

/* ── Language Switcher ──────────────────────────────────── */
function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem("oslocation_lang", lang);

  // update <html lang>
  document.documentElement.lang = lang === "no" ? "nb" : lang;

  // update text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // update placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.dataset.i18nPh;
    if (i18n[lang][key] !== undefined) {
      el.placeholder = i18n[lang][key];
    }
  });

  // active lang button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // re-apply tour filter labels
  applyTourFilter(document.querySelector(".filter-btn.active")?.dataset.filter || "all");
}

/* ── Navbar scroll behaviour ────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById("navbar");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── Mobile hamburger menu ──────────────────────────────── */
function initMobileMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("nav-menu");
  btn.addEventListener("click", () => {
    const isOpen = btn.classList.toggle("open");
    menu.classList.toggle("open", isOpen);
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // close on link click
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      btn.classList.remove("open");
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ── Tour filter ────────────────────────────────────────── */
function applyTourFilter(category) {
  document.querySelectorAll(".tour-card").forEach(card => {
    const show = category === "all" || card.dataset.category === category;
    card.style.display = show ? "" : "none";
    if (show) {
      card.style.animation = "fadeInUp 0.4s ease both";
    }
  });
}

function initTourFilter() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyTourFilter(btn.dataset.filter);
    });
  });
}

/* ── Testimonials carousel ──────────────────────────────── */
function showTestimonial(index) {
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".test-dot");
  if (!cards.length) return;
  cards.forEach((c, i) => c.classList.toggle("active", i === index));
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
  currentTestimonial = index;
}

function initTestimonials() {
  const cards = document.querySelectorAll(".testimonial-card");
  if (!cards.length) return;

  // build dots
  const dotsContainer = document.querySelector(".test-dots");
  if (dotsContainer) {
    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "test-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Testimonial " + (i + 1));
      dot.addEventListener("click", () => {
        clearInterval(testimonialInterval);
        showTestimonial(i);
      });
      dotsContainer.appendChild(dot);
    });
  }

  document.querySelector(".test-prev")?.addEventListener("click", () => {
    clearInterval(testimonialInterval);
    showTestimonial((currentTestimonial - 1 + cards.length) % cards.length);
  });
  document.querySelector(".test-next")?.addEventListener("click", () => {
    clearInterval(testimonialInterval);
    showTestimonial((currentTestimonial + 1) % cards.length);
  });

  showTestimonial(0);
  testimonialInterval = setInterval(() => {
    showTestimonial((currentTestimonial + 1) % cards.length);
  }, 6000);
}

/* ── Back to top ────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ── Scroll reveal (IntersectionObserver) ────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ── Counter animation ──────────────────────────────────── */
const ANIMATION_FRAMES = 60; // approximate frame count for ~1s at 60fps

function animateCounter(el, target, suffix) {
  let current = 0;
  const step = Math.max(1, Math.ceil(target / ANIMATION_FRAMES));
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const raw = el.dataset.count;
        if (!raw) return;
        // Only animate integer-based counters (skip decimals like "4.9")
        const suffix = raw.replace(/[0-9]/g, "");
        const num = parseInt(raw, 10);
        if (!isNaN(num) && num > 0) {
          animateCounter(el, num, suffix);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".stat-number[data-count]").forEach(el => observer.observe(el));
}

/* ── Contact form ───────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const msg = document.getElementById("form-success-msg");
    if (msg) {
      msg.textContent = i18n[currentLang].form_success;
      msg.style.display = "block";
      setTimeout(() => (msg.style.display = "none"), 5000);
    }
    form.reset();
  });
}

/* ── Smooth scroll for anchor links ─────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = document.getElementById("navbar")?.offsetHeight || 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
      }
    });
  });
}

/* ── Preloader ──────────────────────────────────────────── */
function initPreloader() {
  window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    if (loader) {
      setTimeout(() => loader.classList.add("fade-out"), 400);
      setTimeout(() => loader.remove(), 1000);
    }
  });
}

/* ── Gallery lightbox (simple) ──────────────────────────── */
function initGallery() {
  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "lightbox-overlay";
      overlay.innerHTML = `<div class="lightbox-inner"><img src="${img.src}" alt="${img.alt}"><button class="lightbox-close">×</button></div>`;
      document.body.appendChild(overlay);
      overlay.addEventListener("click", e => {
        if (e.target === overlay || e.target.classList.contains("lightbox-close")) {
          overlay.remove();
        }
      });
    });
    img.style.cursor = "pointer";
  });
}

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  initNavbar();
  initMobileMenu();
  initTourFilter();
  initTestimonials();
  initBackToTop();
  initScrollReveal();
  initCounters();
  initContactForm();
  initSmoothScroll();
  initGallery();
  setLanguage(currentLang);
});

initPreloader();
