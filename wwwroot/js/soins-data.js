// DERMATOLASER - Base de données des soins (utilisée par soin.html)
const SOINS_DATA = [
    {
        id: "laser-co2-resurfacing",
        category: "Visage",
        categoryLabel: "Soins Visage",
        badge: "Visage",
        title: "Laser CO2 : Resurfacing & Anti-Âge",
        tech: "Laser CO2 Fractionné & Ablatif",
        tagline: "Lisser les rides profondes, affiner le grain de peau et effacer les signes du photovieillissement.",
        image: "images/soins/laser-co2-resurfacing.jpg",
        duration: "45 min",
        sessions: "1 à 3 séances",
        interval: "6 à 8 semaines",
        downtime: "5 à 7 jours",
        reservation: "Laser CO2 : Resurfacing",
        intro: [
            "Le laser CO2 fractionné est la référence du resurfaçage cutané. Il crée des milliers de micro-colonnes thermiques dans la peau, qui éliminent les couches abîmées de l'épiderme et stimulent en profondeur la production de collagène et d'élastine.",
            "Le résultat : une peau plus lisse, plus ferme et plus lumineuse, avec une nette atténuation des rides, ridules et irrégularités de texture. Les résultats continuent de s'améliorer pendant plusieurs mois après la séance."
        ],
        indications: ["Rides & ridules", "Photovieillissement", "Relâchement cutané", "Pores dilatés", "Teint terne", "Grain de peau irrégulier"],
        benefits: [
            "Peau visiblement plus lisse et plus ferme",
            "Stimulation durable du collagène",
            "Amélioration nette de la texture et de l'éclat",
            "Résultats progressifs et naturels"
        ],
        steps: [
            { title: "Consultation", text: "Analyse de votre peau, de votre phototype et de vos attentes par le médecin." },
            { title: "Préparation", text: "Nettoyage du visage et application d'une crème anesthésiante pendant 45 minutes." },
            { title: "Séance laser", text: "Passage du laser CO2 fractionné zone par zone, avec des paramètres sur mesure." },
            { title: "Soins post-acte", text: "Application d'une crème cicatrisante et remise d'un protocole de soins à domicile." }
        ],
        before: [
            "Éviter toute exposition solaire 3 à 4 semaines avant",
            "Arrêter les rétinoïdes et peelings 1 semaine avant",
            "Signaler tout antécédent d'herpès au médecin"
        ],
        after: [
            "Rougeurs et légère desquamation pendant 5 à 7 jours",
            "Hydratation intensive et crème cicatrisante",
            "Protection solaire SPF 50+ obligatoire pendant 3 mois"
        ],
        faq: [
            { q: "La séance est-elle douloureuse ?", a: "Grâce à la crème anesthésiante appliquée avant la séance, la sensation est bien tolérée : une chaleur et des picotements passagers." },
            { q: "Quand voit-on les résultats ?", a: "Un premier effet éclat apparaît après la cicatrisation (7 à 10 jours). L'effet tenseur et le lissage des rides se renforcent pendant 3 à 6 mois." },
            { q: "Quelle est la meilleure période pour ce traitement ?", a: "L'automne et l'hiver sont idéals, car il faut éviter le soleil pendant plusieurs semaines après la séance." }
        ]
    },
    {
        id: "laser-co2-cicatrices",
        category: "Visage",
        categoryLabel: "Soins Visage",
        badge: "Visage",
        title: "Laser CO2 : Traitement de cicatrice",
        tech: "Laser CO2 Réparateur",
        tagline: "Atténuer les cicatrices d'acné, chirurgicales ou post-traumatiques pour retrouver une peau uniforme.",
        image: "images/s1.jpg",
        duration: "40 min",
        sessions: "3 à 5 séances",
        interval: "6 à 8 semaines",
        downtime: "4 à 6 jours",
        reservation: "Laser CO2 : Traitement de cicatrice",
        intro: [
            "Les cicatrices, notamment celles laissées par l'acné, modifient le relief de la peau et sont souvent difficiles à camoufler. Le laser CO2 fractionné agit en profondeur pour remodeler le tissu cicatriciel.",
            "En provoquant une régénération contrôlée de la peau, il comble progressivement les creux, lisse les reliefs et unifie la texture, séance après séance."
        ],
        indications: ["Cicatrices d'acné", "Cicatrices chirurgicales", "Cicatrices post-traumatiques", "Creux & reliefs", "Pores dilatés"],
        benefits: [
            "Comblement progressif des creux cicatriciels",
            "Lissage du relief de la peau",
            "Texture plus homogène et plus fine",
            "Regain de confiance en soi"
        ],
        steps: [
            { title: "Diagnostic", text: "Évaluation du type, de la profondeur et de l'ancienneté des cicatrices." },
            { title: "Anesthésie locale", text: "Application d'une crème anesthésiante pour un confort optimal." },
            { title: "Traitement ciblé", text: "Le laser CO2 est réglé spécifiquement pour remodeler chaque zone cicatricielle." },
            { title: "Suivi", text: "Contrôle de la cicatrisation et ajustement du protocole à chaque séance." }
        ],
        before: [
            "Éviter le soleil et l'autobronzant 3 semaines avant",
            "Arrêter l'isotrétinoïne au moins 6 mois avant",
            "Ne pas épiler ni gommer la zone la semaine précédente"
        ],
        after: [
            "Rougeurs et petites croûtes pendant quelques jours",
            "Ne pas gratter ni arracher les croûtes",
            "Protection solaire SPF 50+ quotidienne"
        ],
        faq: [
            { q: "Les cicatrices disparaissent-elles totalement ?", a: "L'objectif est une amélioration nette et visible (souvent 50 à 80 %). Le résultat dépend de la profondeur et du type de cicatrice." },
            { q: "Peut-on traiter des cicatrices anciennes ?", a: "Oui, le laser CO2 est efficace aussi bien sur des cicatrices récentes que sur des cicatrices de plusieurs années." },
            { q: "Combien de séances faut-il ?", a: "En moyenne 3 à 5 séances espacées de 6 à 8 semaines, selon la sévérité des cicatrices." }
        ]
    },
    {
        id: "laser-co2-papillomes",
        category: "Visage",
        categoryLabel: "Soins Visage",
        badge: "Visage",
        title: "Laser CO2 : Papillomes & Verrues",
        tech: "Laser CO2 Chirurgical & Ablatif",
        tagline: "Éliminer rapidement et proprement les excroissances cutanées bénignes, sans bistouri.",
        image: "uploads/28b2d777-e26b-4d51-8720-e8168c52d4e2.jpg",
        duration: "25 min",
        sessions: "1 séance",
        interval: "Contrôle à 4 semaines",
        downtime: "Aucune à 3 jours",
        reservation: "Laser CO2 : Traitement des papillomes & verrues",
        intro: [
            "Papillomes, acrochordons (petites boules de peau), verrues ou grains de beauté bénins peuvent être gênants esthétiquement ou s'irriter au frottement.",
            "Le laser CO2 permet de les vaporiser avec une grande précision, sans saignement et sans suture. La cicatrisation est rapide et le risque de cicatrice est minimal."
        ],
        indications: ["Papillomes", "Acrochordons", "Verrues", "Kératoses séborrhéiques", "Grains de milium", "Lésions bénignes"],
        benefits: [
            "Élimination nette en une seule séance",
            "Sans saignement ni points de suture",
            "Cicatrisation rapide",
            "Risque de cicatrice très faible"
        ],
        steps: [
            { title: "Examen médical", text: "Le médecin vérifie le caractère bénin de chaque lésion avant le traitement." },
            { title: "Anesthésie", text: "Crème anesthésiante ou petite anesthésie locale selon la zone." },
            { title: "Vaporisation", text: "Chaque lésion est vaporisée au laser CO2 en quelques secondes." },
            { title: "Pansement", text: "Application d'une crème cicatrisante et, si besoin, d'un petit pansement." }
        ],
        before: [
            "Consultation médicale préalable obligatoire",
            "Éviter l'exposition solaire de la zone",
            "Signaler tout traitement anticoagulant"
        ],
        after: [
            "Petite croûte qui tombe en 5 à 10 jours",
            "Garder la zone propre et hydratée",
            "Protéger du soleil pendant 1 mois"
        ],
        faq: [
            { q: "Toutes les lésions peuvent-elles être traitées ?", a: "Seules les lésions jugées bénignes par le médecin sont traitées. En cas de doute, une analyse est proposée avant." },
            { q: "Y a-t-il un risque de récidive ?", a: "Une lésion retirée ne revient généralement pas, mais de nouvelles lésions peuvent apparaître avec le temps." },
            { q: "Combien de lésions peut-on traiter en une séance ?", a: "Plusieurs lésions peuvent être traitées lors de la même séance, selon leur nombre et leur localisation." }
        ]
    },
    {
        id: "traitement-acne",
        category: "Visage",
        categoryLabel: "Soins Visage",
        badge: "Visage",
        title: "Traitement Acné Laser",
        tech: "Laser Candela — Anti-Acné",
        tagline: "Réduire l'acné active et prévenir les récidives grâce à un traitement laser ciblé et sans médicament.",
        image: "images/ll4.jpg",
        duration: "35 min",
        sessions: "4 à 6 séances",
        interval: "2 à 4 semaines",
        downtime: "Aucune",
        reservation: "Traitement Acné Laser",
        intro: [
            "L'acné touche aussi bien les adolescents que les adultes et peut laisser des marques durables. Le laser Candela agit directement sur les causes de l'acné.",
            "Il réduit l'inflammation, régule la production de sébum et détruit les bactéries responsables des boutons, sans médicament par voie orale. La peau devient plus nette et plus saine."
        ],
        indications: ["Acné inflammatoire", "Acné de l'adulte", "Peau grasse", "Rougeurs post-acné", "Pores obstrués"],
        benefits: [
            "Diminution rapide des boutons inflammatoires",
            "Régulation du sébum",
            "Prévention des cicatrices d'acné",
            "Sans traitement médicamenteux lourd"
        ],
        steps: [
            { title: "Bilan cutané", text: "Analyse du type d'acné et de votre routine de soins actuelle." },
            { title: "Nettoyage", text: "Préparation de la peau et protection des yeux." },
            { title: "Séance laser", text: "Passage du laser sur les zones concernées, sensation de légère chaleur." },
            { title: "Routine adaptée", text: "Conseils et routine de soins personnalisée pour optimiser les résultats." }
        ],
        before: [
            "Éviter le soleil et le bronzage",
            "Ne pas percer les boutons avant la séance",
            "Venir sans maquillage si possible"
        ],
        after: [
            "Légère rougeur passagère possible",
            "Utiliser des soins non comédogènes",
            "Protection solaire quotidienne"
        ],
        faq: [
            { q: "Le traitement remplace-t-il les médicaments ?", a: "Il peut constituer une alternative ou un complément. Le médecin définit avec vous la meilleure stratégie." },
            { q: "Est-ce adapté aux peaux sensibles ?", a: "Oui, les paramètres sont ajustés à chaque type de peau pour un traitement doux et sûr." },
            { q: "Quand voit-on une amélioration ?", a: "Une diminution des boutons est généralement visible dès les 2 ou 3 premières séances." }
        ]
    },
    {
        id: "laser-vaginal",
        category: "Corps",
        categoryLabel: "Soins Corps",
        badge: "Corps",
        title: "Laser Vaginal : Rajeunissement",
        tech: "Gynécologie Laser & Rajeunissement",
        tagline: "Restaurer le confort intime et la qualité de la muqueuse, sans chirurgie et en toute discrétion.",
        image: "uploads/b50e40f9-a9f9-4585-9c0c-5c149da4142a.webp",
        duration: "30 min",
        sessions: "3 séances",
        interval: "4 à 6 semaines",
        downtime: "Aucune",
        reservation: "Laser Vaginal : Rajeunissement vaginal",
        intro: [
            "Avec l'âge, après un accouchement ou à la ménopause, la muqueuse vaginale peut perdre en élasticité et en hydratation, entraînant inconfort, sécheresse ou petites fuites urinaires.",
            "Le laser vaginal stimule la régénération des tissus et la production de collagène. Ce traitement rapide, non chirurgical et pratiquement indolore améliore durablement le confort intime."
        ],
        indications: ["Sécheresse vaginale", "Atrophie vaginale", "Relâchement post-accouchement", "Incontinence urinaire d'effort légère", "Ménopause"],
        benefits: [
            "Amélioration de l'hydratation naturelle",
            "Meilleure tonicité des tissus",
            "Réduction des petites fuites urinaires",
            "Traitement rapide, discret et sans chirurgie"
        ],
        steps: [
            { title: "Consultation privée", text: "Entretien confidentiel et examen médical préalable." },
            { title: "Installation", text: "Installation confortable dans une salle de soin privée." },
            { title: "Séance laser", text: "Application de la sonde laser pendant quelques minutes, sans douleur." },
            { title: "Reprise immédiate", text: "Retour immédiat à vos activités quotidiennes." }
        ],
        before: [
            "Frottis de dépistage à jour",
            "Absence d'infection gynécologique",
            "Éviter la période des règles"
        ],
        after: [
            "Éviter les rapports pendant 3 à 5 jours",
            "Pas de bain ni piscine pendant 3 jours",
            "Légères pertes possibles pendant quelques jours"
        ],
        faq: [
            { q: "Le traitement est-il douloureux ?", a: "Non, la plupart des patientes ressentent seulement une légère chaleur. Aucune anesthésie n'est nécessaire." },
            { q: "Combien de temps durent les résultats ?", a: "Les effets durent en moyenne 12 à 18 mois. Une séance d'entretien annuelle est recommandée." },
            { q: "La consultation est-elle confidentielle ?", a: "Absolument. Toute la prise en charge se fait dans le respect total de votre intimité." }
        ]
    },
    {
        id: "epilation-alexandrite-ndyag",
        category: "Corps",
        categoryLabel: "Soins Corps",
        badge: "Corps",
        title: "Laser Épilation : Alexandrite / Nd:YAG",
        tech: "Cynosure Elite Pro — Double longueur d'onde",
        tagline: "L'épilation laser de référence, efficace sur tous les phototypes, des peaux claires aux peaux foncées.",
        image: "images/s2.webp",
        duration: "15 à 60 min",
        sessions: "6 à 8 séances",
        interval: "4 à 8 semaines",
        downtime: "Aucune",
        reservation: "Laser Épilation : Alexandrite / Nd:YAG (Cynosure Elite Pro)",
        intro: [
            "Le Cynosure Elite Pro associe deux lasers dans un seul appareil : l'Alexandrite 755 nm, idéal pour les peaux claires à mates, et le Nd:YAG 1064 nm, conçu pour les peaux foncées et noires.",
            "Le laser cible la mélanine du poil et détruit le bulbe sans abîmer la peau. Après un protocole complet, la pilosité est réduite de façon durable, pour une peau douce au quotidien."
        ],
        indications: ["Visage", "Aisselles", "Maillot", "Jambes", "Dos & torse", "Poils incarnés"],
        benefits: [
            "Réduction durable de la pilosité",
            "Adapté à tous les phototypes (I à VI)",
            "Fin des poils incarnés et irritations",
            "Refroidissement intégré pour plus de confort"
        ],
        steps: [
            { title: "Test & phototype", text: "Détermination de votre phototype et test sur une petite zone." },
            { title: "Préparation", text: "Rasage de la zone et protection des yeux." },
            { title: "Séance laser", text: "Passage rapide du laser avec refroidissement continu de la peau." },
            { title: "Apaisement", text: "Application d'un soin apaisant en fin de séance." }
        ],
        before: [
            "Raser la zone la veille (ne pas épiler à la cire ou à la pince)",
            "Pas d'exposition solaire ni d'autobronzant 3 semaines avant",
            "Venir sans crème ni déodorant sur la zone"
        ],
        after: [
            "Légère rougeur pendant quelques heures",
            "Éviter sport intense, hammam et piscine 24 à 48 h",
            "Protection solaire SPF 50+ sur les zones exposées"
        ],
        faq: [
            { q: "L'épilation est-elle définitive ?", a: "On parle de réduction durable de la pilosité : 80 à 95 % des poils sont éliminés après un protocole complet. Une séance d'entretien peut être utile." },
            { q: "Est-ce adapté aux peaux foncées ?", a: "Oui, la longueur d'onde Nd:YAG 1064 nm permet de traiter en toute sécurité les peaux foncées et noires." },
            { q: "Les poils blonds ou blancs sont-ils traités ?", a: "Le laser cible la mélanine : les poils très clairs, roux ou blancs répondent peu. Le médecin vous conseillera lors de la consultation." }
        ]
    },
    {
        id: "epilation-laser-diode",
        category: "Corps",
        categoryLabel: "Soins Corps",
        badge: "Corps",
        title: "Laser Épilation : Laser Diode",
        tech: "Plateau Épilation Laser Diode",
        tagline: "Une épilation laser rapide et confortable, idéale pour les grandes zones du corps.",
        image: "uploads/3604a82e-206c-4e08-ac72-6f82895945e1.jpg",
        duration: "20 à 60 min",
        sessions: "6 à 8 séances",
        interval: "4 à 8 semaines",
        downtime: "Aucune",
        reservation: "Laser Épilation : Laser Diode",
        intro: [
            "Le laser Diode est une technologie d'épilation performante, particulièrement adaptée au traitement des grandes surfaces comme les jambes, le dos ou le torse.",
            "Sa grande pièce à main et son système de refroidissement permettent des séances rapides et confortables, pour une réduction progressive et durable de la pilosité."
        ],
        indications: ["Jambes complètes", "Dos", "Torse", "Bras", "Aisselles", "Maillot"],
        benefits: [
            "Séances rapides sur les grandes zones",
            "Grand confort grâce au refroidissement",
            "Peau douce et nette durablement",
            "Excellent rapport efficacité / temps"
        ],
        steps: [
            { title: "Consultation", text: "Évaluation de la pilosité et du phototype, définition des zones." },
            { title: "Préparation", text: "Rasage de la zone, application du gel de contact." },
            { title: "Séance laser", text: "Traitement rapide en balayage continu de la zone." },
            { title: "Soin apaisant", text: "Nettoyage et application d'une crème apaisante." }
        ],
        before: [
            "Raser la zone 24 h avant",
            "Éviter le soleil 3 semaines avant",
            "Ne pas utiliser de cire ni de pince entre les séances"
        ],
        after: [
            "Rougeurs légères pendant quelques heures",
            "Pas de sauna ni de hammam pendant 48 h",
            "Protection solaire sur les zones exposées"
        ],
        faq: [
            { q: "Quelle différence avec l'Alexandrite / Nd:YAG ?", a: "Les deux sont efficaces. Le médecin choisit la technologie la plus adaptée à votre phototype, votre type de poil et la zone traitée." },
            { q: "Combien de séances faut-il ?", a: "En moyenne 6 à 8 séances, car seuls les poils en phase de croissance sont détruits à chaque séance." },
            { q: "Peut-on se raser entre les séances ?", a: "Oui, le rasage est autorisé. En revanche, la cire et la pince sont à proscrire." }
        ]
    },
    {
        id: "photorajeunissement-tightening",
        category: "Corps",
        categoryLabel: "Soins Corps",
        badge: "Corps",
        title: "Photorajeunissement & Tightening",
        tech: "Laser Candela — Rajeunissement",
        tagline: "Une peau plus ferme, plus lumineuse et plus jeune, sans éviction sociale.",
        image: "images/ll3.jpg",
        duration: "45 min",
        sessions: "3 à 5 séances",
        interval: "3 à 4 semaines",
        downtime: "Aucune",
        reservation: "Photorajeunissement & Tightening",
        intro: [
            "Le photorajeunissement associé au tightening (raffermissement) agit sur deux signes majeurs du vieillissement : la perte d'éclat et le relâchement de la peau.",
            "L'énergie du laser chauffe en douceur les couches profondes de la peau, ce qui resserre les fibres de collagène et stimule leur renouvellement. La peau retrouve fermeté, uniformité et luminosité."
        ],
        indications: ["Relâchement cutané", "Perte d'éclat", "Ridules", "Teint irrégulier", "Cou & décolleté", "Mains"],
        benefits: [
            "Effet tenseur progressif",
            "Teint plus uniforme et lumineux",
            "Aucune éviction sociale",
            "Traitement doux et confortable"
        ],
        steps: [
            { title: "Analyse", text: "Évaluation de la qualité de la peau et des zones à raffermir." },
            { title: "Préparation", text: "Démaquillage et protection oculaire." },
            { title: "Séance laser", text: "Chauffage progressif et contrôlé des tissus, sensation de chaleur agréable." },
            { title: "Résultat immédiat", text: "Effet bonne mine immédiat, reprise directe de vos activités." }
        ],
        before: [
            "Éviter le soleil et le bronzage 2 semaines avant",
            "Arrêter les peelings 1 semaine avant",
            "Venir avec une peau propre"
        ],
        after: [
            "Légère rougeur possible pendant 1 à 2 heures",
            "Bien hydrater la peau",
            "Protection solaire quotidienne"
        ],
        faq: [
            { q: "Peut-on se maquiller après la séance ?", a: "Oui, le maquillage est possible dès le lendemain, voire le jour même selon la sensibilité de la peau." },
            { q: "Combien de temps durent les résultats ?", a: "Les résultats durent plusieurs mois. Une séance d'entretien tous les 6 à 12 mois est conseillée." },
            { q: "Quelles zones peut-on traiter ?", a: "Le visage, le cou, le décolleté, les mains et certaines zones du corps." }
        ]
    },
    {
        id: "lesions-vasculaires",
        category: "Vasculaire",
        categoryLabel: "Lésions Vasculaires",
        badge: "Vasculaire",
        title: "Lésions Vasculaires",
        tech: "Laser Candela — Nd:YAG / KTP",
        tagline: "Effacer couperose, rougeurs, angiomes et petits vaisseaux visibles pour un teint unifié.",
        image: "images/s4.jpg",
        duration: "30 min",
        sessions: "1 à 3 séances",
        interval: "4 à 6 semaines",
        downtime: "Aucune à 48 h",
        reservation: "Lésions Vasculaires",
        intro: [
            "Les lésions vasculaires sont des petits vaisseaux sanguins dilatés et visibles sous la peau : couperose, rosacée, angiomes, taches rubis ou varicosités des jambes.",
            "Le laser Candela cible sélectivement l'hémoglobine contenue dans ces vaisseaux. Ils sont refermés puis éliminés naturellement par l'organisme, sans abîmer la peau autour."
        ],
        indications: ["Couperose", "Rosacée", "Angiomes", "Taches rubis", "Télangiectasies", "Varicosités des jambes"],
        benefits: [
            "Disparition des vaisseaux visibles",
            "Teint plus uniforme et apaisé",
            "Résultats rapides en peu de séances",
            "Traitement précis et sécurisé"
        ],
        steps: [
            { title: "Diagnostic", text: "Identification du type de lésion vasculaire et de sa profondeur." },
            { title: "Protection", text: "Protection des yeux et application d'un gel de contact." },
            { title: "Séance laser", text: "Impulsions ciblées sur chaque vaisseau, sensation d'élastique qui claque." },
            { title: "Apaisement", text: "Refroidissement de la peau et application d'un soin apaisant." }
        ],
        before: [
            "Éviter le soleil 3 semaines avant",
            "Ne pas prendre d'aspirine quelques jours avant (sauf avis médical)",
            "Venir sans maquillage"
        ],
        after: [
            "Rougeur ou léger gonflement pendant 24 à 48 h",
            "Éviter chaleur intense, sport et hammam 48 h",
            "Protection solaire SPF 50+"
        ],
        faq: [
            { q: "Les vaisseaux traités peuvent-ils revenir ?", a: "Les vaisseaux traités disparaissent définitivement, mais de nouveaux peuvent apparaître selon votre terrain. Une séance d'entretien peut être utile." },
            { q: "Peut-on traiter les jambes ?", a: "Oui, les petites varicosités des jambes peuvent être traitées. Les varices plus importantes nécessitent un avis spécialisé." },
            { q: "Combien de séances faut-il ?", a: "Souvent 1 à 3 séances selon l'étendue et le type de lésions." }
        ]
    },
    {
        id: "sylfirm-x",
        category: "Tech",
        categoryLabel: "Technologies Avancées",
        badge: "RF Microneedling",
        title: "RF Microneedling Sylfirm X",
        tech: "Sylfirm X — Double Mode RF",
        tagline: "La technologie qui combine micro-aiguilles et radiofréquence pour régénérer la peau en profondeur.",
        image: "images/s7.jpg",
        duration: "60 min",
        sessions: "3 à 5 séances",
        interval: "4 semaines",
        downtime: "24 à 48 h",
        reservation: "RF Microneedling Sylfirm X",
        intro: [
            "Sylfirm X est un système de microneedling par radiofréquence unique, doté de deux modes : un mode pulsé qui agit sur les vaisseaux et la pigmentation, et un mode continu qui stimule le collagène en profondeur.",
            "Les micro-aiguilles délivrent la radiofréquence exactement là où elle est nécessaire. Résultat : un traitement polyvalent pour le mélasma, la rosacée, les rides, le relâchement, les cicatrices et les vergetures."
        ],
        indications: ["Mélasma", "Rosacée", "Pores dilatés", "Rides & relâchement", "Double menton", "Cicatrices & vergetures"],
        benefits: [
            "Traitement polyvalent en une seule technologie",
            "Efficace sur le mélasma résistant",
            "Raffermissement et lissage visibles",
            "Adapté à tous les phototypes"
        ],
        steps: [
            { title: "Consultation", text: "Choix du mode (pulsé ou continu) selon votre problématique." },
            { title: "Anesthésie", text: "Application d'une crème anesthésiante pendant 45 minutes." },
            { title: "Séance Sylfirm X", text: "Passage de la pièce à main sur les zones, avec profondeur ajustée." },
            { title: "Soin réparateur", text: "Application d'un masque et d'un soin apaisant en fin de séance." }
        ],
        before: [
            "Éviter le soleil 2 semaines avant",
            "Arrêter les rétinoïdes 5 jours avant",
            "Venir sans maquillage"
        ],
        after: [
            "Rougeurs pendant 24 à 48 h",
            "Pas de maquillage pendant 24 h",
            "Protection solaire SPF 50+ et hydratation"
        ],
        faq: [
            { q: "Quelle différence avec un microneedling classique ?", a: "La radiofréquence ajoutée aux micro-aiguilles chauffe les tissus en profondeur, ce qui renforce fortement la production de collagène et les résultats." },
            { q: "Est-ce efficace sur le mélasma ?", a: "Oui, le mode pulsé de Sylfirm X est reconnu pour agir sur les vaisseaux qui entretiennent le mélasma, ce qui en fait une option de choix." },
            { q: "Est-ce douloureux ?", a: "Grâce à la crème anesthésiante, la séance est bien tolérée. Vous ressentirez des picotements et une sensation de chaleur." }
        ]
    },
    {
        id: "detatouage",
        category: "Tech",
        categoryLabel: "Technologies Avancées",
        badge: "Détatouage",
        title: "Détatouage Laser",
        tech: "Laser Candela — Q-Switch",
        tagline: "Effacer progressivement un tatouage, toutes couleurs d'encre confondues.",
        image: "images/soins/detatouage.jpg",
        duration: "15 à 45 min",
        sessions: "5 à 10 séances",
        interval: "6 à 8 semaines",
        downtime: "3 à 7 jours",
        reservation: "Détatouage Laser",
        intro: [
            "Un tatouage qui ne vous ressemble plus ? Le laser Q-Switch émet des impulsions ultra-courtes et puissantes qui fragmentent les pigments d'encre en particules microscopiques.",
            "Ces micro-particules sont ensuite éliminées naturellement par le système lymphatique. Séance après séance, le tatouage s'éclaircit jusqu'à s'effacer, tout en préservant la peau."
        ],
        indications: ["Tatouages noirs", "Tatouages colorés", "Tatouages amateurs", "Maquillage permanent", "Éclaircissement avant recouvrement"],
        benefits: [
            "Efficace sur la majorité des couleurs d'encre",
            "Respect de la peau environnante",
            "Effacement progressif et maîtrisé",
            "Possible éclaircissement pour un nouveau tatouage"
        ],
        steps: [
            { title: "Évaluation", text: "Analyse de la taille, des couleurs et de l'ancienneté du tatouage." },
            { title: "Anesthésie", text: "Crème anesthésiante et refroidissement de la zone." },
            { title: "Séance laser", text: "Impulsions laser sur l'ensemble du tatouage." },
            { title: "Pansement", text: "Application d'une crème cicatrisante et d'un pansement protecteur." }
        ],
        before: [
            "Éviter le soleil et le bronzage 4 semaines avant",
            "Peau saine, sans irritation sur la zone",
            "Signaler tout traitement photosensibilisant"
        ],
        after: [
            "Rougeur, gonflement et petites cloques possibles",
            "Garder le pansement 24 à 48 h et ne pas gratter",
            "Protection solaire stricte de la zone"
        ],
        faq: [
            { q: "Le tatouage peut-il disparaître complètement ?", a: "Dans la majorité des cas, un effacement très important est obtenu. Certaines couleurs (vert, bleu clair) peuvent nécessiter plus de séances." },
            { q: "Combien de séances faut-il ?", a: "En moyenne 5 à 10 séances selon la taille, la densité d'encre, les couleurs et l'ancienneté du tatouage." },
            { q: "Est-ce douloureux ?", a: "La sensation est comparable à celle du tatouage, mais la séance est beaucoup plus courte. La crème anesthésiante améliore le confort." }
        ]
    },
    {
        id: "lesions-pigmentaires",
        category: "Tech",
        categoryLabel: "Technologies Avancées",
        badge: "Pigmentation",
        title: "Lésions Pigmentaires",
        tech: "Laser Candela — Dépigmentation",
        tagline: "Atténuer les taches brunes, solaires et le mélasma pour un teint plus clair et uniforme.",
        image: "images/ll1.jpg",
        duration: "30 min",
        sessions: "1 à 4 séances",
        interval: "4 à 6 semaines",
        downtime: "5 à 7 jours (micro-croûtes)",
        reservation: "Lésions Pigmentaires",
        intro: [
            "Les taches pigmentaires apparaissent avec le soleil, l'âge ou les variations hormonales : taches solaires, lentigos, taches de vieillesse ou mélasma.",
            "Le laser Candela cible sélectivement l'excès de mélanine. Les taches foncent légèrement, forment de fines micro-croûtes puis s'éliminent naturellement, laissant place à une peau plus claire."
        ],
        indications: ["Taches solaires", "Lentigos", "Taches de vieillesse", "Mélasma", "Éphélides", "Hyperpigmentation post-inflammatoire"],
        benefits: [
            "Taches nettement éclaircies ou effacées",
            "Teint plus uniforme et lumineux",
            "Traitement précis et ciblé",
            "Peu de séances nécessaires"
        ],
        steps: [
            { title: "Diagnostic", text: "Examen des taches et vérification de leur caractère bénin." },
            { title: "Préparation", text: "Démaquillage et protection oculaire." },
            { title: "Séance laser", text: "Impulsions ciblées sur chaque tache, sensation de légers picotements." },
            { title: "Suivi", text: "Conseils post-soin et protocole de protection solaire." }
        ],
        before: [
            "Aucune exposition solaire 4 semaines avant",
            "Pas d'autobronzant ni de peeling",
            "Signaler la prise de médicaments photosensibilisants"
        ],
        after: [
            "Les taches foncent puis forment de fines croûtes",
            "Laisser tomber les croûtes naturellement (5 à 7 jours)",
            "Protection solaire SPF 50+ indispensable"
        ],
        faq: [
            { q: "Les taches peuvent-elles revenir ?", a: "Les taches traitées s'effacent, mais une exposition solaire sans protection peut en faire apparaître de nouvelles. La protection solaire est essentielle." },
            { q: "Le mélasma peut-il être traité ?", a: "Oui, avec un protocole doux et adapté, souvent associé à des soins dépigmentants. Le mélasma demande un suivi régulier." },
            { q: "Combien de séances faut-il ?", a: "Les taches solaires disparaissent souvent en 1 à 2 séances. Le mélasma nécessite généralement plus de séances." }
        ]
    }
];

function getSoinById(id) {
    return SOINS_DATA.find(s => s.id === id) || null;
}

