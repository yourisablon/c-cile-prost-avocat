export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: ArticleCategory;
  content: ArticleContent;
  relatedServiceLink: string;
  relatedUrgenceLink?: string;
  publishedAt: string;
}

export interface ArticleContent {
  introduction: string;
  comprendreSituation: {
    title: string;
    content: string;
  };
  queFaireImmediatement: {
    title: string;
    content: string;
  };
  roleAvocate: {
    title: string;
    content: string;
  };
  procedures: {
    title: string;
    content: string;
  };
  delaisHonoraires: {
    title: string;
    content: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
  conclusion: string;
}

export type ArticleCategory = 
  | 'urgences-familiales'
  | 'droit-penal'
  | 'droit-famille'
  | 'violences-conjugales'
  | 'questions-frequentes';

export const categoryLabels: Record<ArticleCategory, string> = {
  'urgences-familiales': 'Urgences familiales',
  'droit-penal': 'Droit pénal',
  'droit-famille': 'Droit de la famille',
  'violences-conjugales': 'Violences au sein du couple',
  'questions-frequentes': 'Questions fréquentes',
};

export const articles: Article[] = [
  {
    slug: 'garde-a-vue-droits-marseille',
    title: 'Garde à vue : quels sont vos droits à Marseille ?',
    metaTitle: 'Garde à vue Marseille : vos droits | Avocat pénal',
    metaDescription: 'Vous êtes placé en garde à vue à Marseille ? Découvrez vos droits, le rôle de l\'avocat et les démarches à entreprendre. Cabinet Cécile Prost.',
    excerpt: 'Placement en garde à vue : comprenez vos droits fondamentaux et l\'importance d\'être assisté par un avocat dès les premières heures.',
    category: 'droit-penal',
    relatedServiceLink: '/avocat-penal-marseille',
    publishedAt: '2026-01-15',
    content: {
      introduction: 'Vous venez d\'apprendre qu\'un proche est placé en garde à vue, ou vous êtes vous-même convoqué ? Cette situation est stressante et déstabilisante. Cet article vous explique vos droits et les étapes clés pour vous défendre efficacement.',
      comprendreSituation: {
        title: 'Comprendre la garde à vue',
        content: 'La garde à vue est une mesure de contrainte permettant aux enquêteurs de retenir une personne suspectée d\'avoir commis une infraction. Sa durée initiale est de 24 heures, renouvelable une fois. Dans certains cas (criminalité organisée, terrorisme), elle peut être prolongée jusqu\'à 96 heures. Pendant cette période, vous êtes privé de liberté mais vous conservez des droits fondamentaux que nul ne peut vous retirer.',
      },
      queFaireImmediatement: {
        title: 'Que faire immédiatement ?',
        content: 'Dès le début de la garde à vue, demandez à voir un avocat. C\'est votre droit le plus important. L\'avocat peut vous assister dès la première heure et sera présent lors de vos auditions. Vous pouvez également demander à faire prévenir un proche et à être examiné par un médecin. Restez calme, ne signez rien sans avoir consulté votre avocat, et n\'hésitez pas à garder le silence si vous avez des doutes.',
      },
      roleAvocate: {
        title: 'Le rôle de votre avocate à Marseille',
        content: 'Maître Cécile Prost intervient en urgence pour assister ses clients en garde à vue à Marseille et dans toute la région PACA. Son rôle : vous informer de vos droits, préparer votre défense, vous conseiller sur les déclarations à faire ou à éviter, et veiller au respect de la procédure par les enquêteurs. Sa présence dès les premières heures peut être déterminante pour la suite de votre affaire.',
      },
      procedures: {
        title: 'Quelles suites possibles ?',
        content: 'À l\'issue de la garde à vue, plusieurs options existent : classement sans suite, rappel à la loi, convocation devant le tribunal, mise en examen ou libération sous contrôle judiciaire. L\'avocat vous accompagne dans toutes ces étapes pour défendre au mieux vos intérêts et préparer votre défense si des poursuites sont engagées.',
      },
      delaisHonoraires: {
        title: 'Délais, honoraires et aide juridictionnelle',
        content: 'En cas d\'urgence (garde à vue), Maître Cécile Prost intervient dans les meilleurs délais, y compris le week-end. Pour les situations moins urgentes, un rendez-vous peut être obtenu sous une semaine. Le cabinet accepte l\'aide juridictionnelle totale ou partielle. Hors aide juridictionnelle, les honoraires sont fixés de manière forfaitaire et transparente, communiqués dès le premier entretien.',
      },
      faq: [
        {
          question: 'Puis-je refuser de répondre aux questions en garde à vue ?',
          answer: 'Oui, le droit au silence est un droit fondamental. Vous pouvez choisir de ne répondre qu\'en présence de votre avocat ou de garder le silence.',
        },
        {
          question: 'L\'avocat commis d\'office est-il compétent ?',
          answer: 'Les avocats commis d\'office sont des professionnels qualifiés. Cependant, vous pouvez toujours demander à être assisté par l\'avocat de votre choix.',
        },
        {
          question: 'Combien de temps dure une garde à vue ?',
          answer: 'La durée initiale est de 24 heures, renouvelable une fois. Elle peut atteindre 96 heures pour certaines infractions graves.',
        },
      ],
      conclusion: 'La garde à vue est un moment décisif. Faire appel à un avocat dès les premières heures vous permet de protéger vos droits et de préparer votre défense. N\'attendez pas.',
    },
  },
  {
    slug: 'ordonnance-protection-violences-conjugales-marseille',
    title: 'Ordonnance de protection : comment se protéger des violences conjugales à Marseille',
    metaTitle: 'Ordonnance de protection Marseille | Violences conjugales',
    metaDescription: 'Victime de violences conjugales à Marseille ? L\'ordonnance de protection vous protège rapidement. Avocat spécialisé Maître Cécile Prost.',
    excerpt: 'L\'ordonnance de protection permet d\'obtenir des mesures de protection en urgence face aux violences conjugales. Découvrez la procédure.',
    category: 'violences-conjugales',
    relatedServiceLink: '/avocat-violences-conjugales-marseille',
    relatedUrgenceLink: '/avocat-urgence-enfants-marseille',
    publishedAt: '2026-01-20',
    content: {
      introduction: 'Vous subissez des violences physiques ou psychologiques de la part de votre conjoint ou ex-conjoint ? L\'ordonnance de protection est un dispositif d\'urgence qui peut vous protéger, vous et vos enfants, en quelques jours. Voici comment en bénéficier.',
      comprendreSituation: {
        title: 'Comprendre l\'ordonnance de protection',
        content: 'L\'ordonnance de protection est une décision du juge aux affaires familiales (JAF) visant à protéger une victime de violences conjugales. Elle peut être délivrée en urgence, sans attendre une procédure pénale. Le juge peut ordonner : l\'éloignement du conjoint violent, l\'attribution du domicile conjugal, des mesures relatives aux enfants, l\'interdiction de contact, et le port d\'un bracelet anti-rapprochement dans les cas les plus graves.',
      },
      queFaireImmediatement: {
        title: 'Que faire immédiatement ?',
        content: 'Si vous êtes en danger immédiat, appelez le 17 (police) ou le 3919 (numéro national violences femmes info). Conservez toutes les preuves : certificats médicaux, photos, SMS, témoignages. Consultez un avocat rapidement pour déposer une requête en ordonnance de protection. Cette procédure est rapide : le juge doit statuer dans un délai de 6 jours.',
      },
      roleAvocate: {
        title: 'Le rôle de votre avocate à Marseille',
        content: 'Maître Cécile Prost accompagne les victimes de violences conjugales à Marseille dans leurs démarches. Elle constitue le dossier, rédige la requête, rassemble les preuves et vous représente à l\'audience. Son objectif : obtenir votre protection et celle de vos enfants dans les meilleurs délais, avec rigueur et détermination.',
      },
      procedures: {
        title: 'Quelles mesures peuvent être ordonnées ?',
        content: 'Le juge peut prononcer : l\'interdiction pour le conjoint violent d\'entrer en contact avec vous, l\'attribution du logement familial à la victime, la fixation de la résidence des enfants, une contribution aux charges du ménage, le retrait des armes, et dans les situations les plus graves, le port d\'un bracelet anti-rapprochement. Ces mesures sont valables 6 mois, renouvelables.',
      },
      delaisHonoraires: {
        title: 'Délais, honoraires et aide juridictionnelle',
        content: 'La procédure d\'ordonnance de protection est une urgence. Maître Cécile Prost peut vous recevoir très rapidement. Le cabinet accepte l\'aide juridictionnelle, permettant une prise en charge totale ou partielle des frais. Hors aide juridictionnelle, les honoraires sont forfaitaires et communiqués avant toute intervention.',
      },
      faq: [
        {
          question: 'Faut-il avoir porté plainte pour demander une ordonnance de protection ?',
          answer: 'Non, le dépôt de plainte n\'est pas obligatoire. L\'ordonnance de protection relève du juge civil et peut être obtenue indépendamment de toute procédure pénale.',
        },
        {
          question: 'Que se passe-t-il si mon conjoint ne respecte pas l\'ordonnance ?',
          answer: 'La violation d\'une ordonnance de protection est un délit puni de 2 ans d\'emprisonnement et 15 000 euros d\'amende. Appelez immédiatement la police.',
        },
        {
          question: 'L\'ordonnance de protection concerne-t-elle aussi les enfants ?',
          answer: 'Oui, le juge peut fixer la résidence des enfants, organiser le droit de visite et interdire au conjoint violent tout contact avec les mineurs.',
        },
      ],
      conclusion: 'L\'ordonnance de protection est un outil juridique efficace pour vous mettre à l\'abri rapidement. Ne restez pas dans une situation de danger.',
    },
  },
  {
    slug: 'non-representation-enfant-que-faire-marseille',
    title: 'Non-représentation d\'enfant : que faire quand l\'autre parent refuse de rendre les enfants ?',
    metaTitle: 'Non-représentation d\'enfant Marseille | Avocat famille',
    metaDescription: 'L\'autre parent refuse de vous rendre vos enfants ? Découvrez vos recours juridiques. Avocat droit de la famille à Marseille, Maître Cécile Prost.',
    excerpt: 'L\'autre parent ne respecte pas le droit de visite et refuse de rendre les enfants. Quels sont vos recours ? Comment agir rapidement ?',
    category: 'urgences-familiales',
    relatedServiceLink: '/avocat-droit-famille-marseille',
    relatedUrgenceLink: '/avocat-urgence-enfants-marseille',
    publishedAt: '2026-01-25',
    content: {
      introduction: 'Votre ex-conjoint refuse de vous remettre vos enfants à la date convenue ? Cette situation, appelée non-représentation d\'enfant, est un délit. Vous avez des droits et des recours. Voici comment agir.',
      comprendreSituation: {
        title: 'Comprendre la non-représentation d\'enfant',
        content: 'La non-représentation d\'enfant est le fait, pour un parent, de refuser de remettre un enfant mineur à la personne qui a le droit de le réclamer (généralement l\'autre parent disposant d\'un droit de visite et d\'hébergement fixé par décision de justice). C\'est un délit pénal prévu par l\'article 227-5 du Code pénal, puni d\'un an d\'emprisonnement et de 15 000 euros d\'amende.',
      },
      queFaireImmediatement: {
        title: 'Que faire immédiatement ?',
        content: 'Conservez toutes les preuves : SMS, emails, témoignages attestant du refus. Rendez-vous au commissariat ou à la gendarmerie pour signaler les faits et déposer une main courante ou une plainte. Contactez immédiatement un avocat pour évaluer les options : saisine du JAF en urgence, requête en exécution forcée, ou poursuites pénales.',
      },
      roleAvocate: {
        title: 'Le rôle de votre avocate à Marseille',
        content: 'Maître Cécile Prost intervient avec réactivité dans ces situations d\'urgence familiale. Elle analyse votre dossier, vous conseille sur la stratégie la plus adaptée (voie civile, pénale ou les deux), et engage les procédures nécessaires pour faire respecter vos droits parentaux.',
      },
      procedures: {
        title: 'Quelles procédures peuvent être engagées ?',
        content: 'Plusieurs voies sont possibles : dépôt de plainte pour non-représentation d\'enfant (voie pénale), saisine du juge aux affaires familiales en urgence pour obtenir l\'exécution de la décision, demande de modification du droit de visite, ou recours à un huissier pour constater le non-respect. L\'avocat vous guide vers la solution la plus efficace selon votre situation.',
      },
      delaisHonoraires: {
        title: 'Délais, honoraires et aide juridictionnelle',
        content: 'Les situations d\'urgence familiale nécessitent une intervention rapide. Maître Cécile Prost peut vous recevoir dans les meilleurs délais. L\'aide juridictionnelle est acceptée. Hors aide juridictionnelle, un devis forfaitaire et transparent vous est remis dès le premier rendez-vous.',
      },
      faq: [
        {
          question: 'La police peut-elle récupérer mes enfants immédiatement ?',
          answer: 'La police peut intervenir pour constater le délit, mais ne peut pas forcer la remise des enfants sans décision judiciaire. Un avocat peut saisir le juge en urgence pour obtenir cette décision.',
        },
        {
          question: 'Puis-je modifier le jugement si les refus sont répétés ?',
          answer: 'Oui, les refus répétés constituent un élément nouveau justifiant une demande de modification du droit de visite ou de la résidence des enfants.',
        },
      ],
      conclusion: 'Ne laissez pas la situation s\'enliser. Chaque jour compte pour préserver le lien avec vos enfants. Agissez rapidement avec l\'aide d\'un avocat.',
    },
  },
  {
    slug: 'divorce-procedure-marseille',
    title: 'Divorce à Marseille : quelle procédure choisir ?',
    metaTitle: 'Divorce Marseille : procédures et conseils | Avocat',
    metaDescription: 'Vous envisagez un divorce à Marseille ? Consentement mutuel, contentieux, judiciaire... Maître Cécile Prost vous guide dans le choix de la procédure.',
    excerpt: 'Divorce par consentement mutuel ou contentieux ? Découvrez les différentes procédures et choisissez celle adaptée à votre situation.',
    category: 'droit-famille',
    relatedServiceLink: '/avocat-droit-famille-marseille',
    publishedAt: '2026-01-28',
    content: {
      introduction: 'Vous avez pris la décision de divorcer. Plusieurs procédures existent selon votre situation et le degré d\'accord avec votre conjoint. Cet article vous aide à y voir plus clair pour faire le bon choix.',
      comprendreSituation: {
        title: 'Comprendre les différents types de divorce',
        content: 'Le droit français prévoit quatre types de divorce : le divorce par consentement mutuel (le plus rapide si les époux sont d\'accord sur tout), le divorce accepté (accord sur le principe, désaccord sur les conséquences), le divorce pour altération définitive du lien conjugal (après 1 an de séparation), et le divorce pour faute (en cas de violation grave des devoirs du mariage). Chaque procédure a ses spécificités, ses délais et ses coûts.',
      },
      queFaireImmediatement: {
        title: 'Que faire avant d\'engager la procédure ?',
        content: 'Rassemblez les documents essentiels : livret de famille, acte de mariage, justificatifs de revenus et de patrimoine, contrat de mariage éventuel. Réfléchissez à vos priorités : résidence des enfants, partage des biens, prestation compensatoire. Consultez un avocat pour évaluer votre situation et déterminer la procédure la plus adaptée.',
      },
      roleAvocate: {
        title: 'Le rôle de votre avocate à Marseille',
        content: 'Maître Cécile Prost vous accompagne tout au long de votre divorce, de la réflexion initiale jusqu\'au prononcé définitif. Elle négocie les accords quand c\'est possible, défend vos intérêts quand c\'est nécessaire, et veille au respect de vos droits et de ceux de vos enfants.',
      },
      procedures: {
        title: 'Déroulement des procédures',
        content: 'Le divorce par consentement mutuel se fait par acte d\'avocat, sans passage devant le juge (sauf si un enfant demande à être entendu). Les autres divorces passent par le tribunal judiciaire. La procédure comprend généralement une phase de conciliation, puis une phase de jugement. Les délais varient de quelques mois (consentement mutuel) à plusieurs années (divorce contentieux complexe).',
      },
      delaisHonoraires: {
        title: 'Délais, honoraires et aide juridictionnelle',
        content: 'Un premier rendez-vous peut être obtenu sous une semaine. L\'aide juridictionnelle est acceptée pour tous les types de divorce. Hors aide juridictionnelle, les honoraires sont forfaitaires pour le divorce par consentement mutuel, et au temps passé ou forfaitaires selon la complexité pour les divorces contentieux. Un devis détaillé vous est remis avant tout engagement.',
      },
      faq: [
        {
          question: 'Combien coûte un divorce à Marseille ?',
          answer: 'Le coût dépend du type de divorce et de sa complexité. Un divorce par consentement mutuel est généralement moins coûteux qu\'un divorce contentieux. L\'aide juridictionnelle peut couvrir tout ou partie des frais.',
        },
        {
          question: 'Peut-on divorcer sans avocat ?',
          answer: 'Non, l\'avocat est obligatoire dans toutes les procédures de divorce. Pour le consentement mutuel, chaque époux doit avoir son propre avocat.',
        },
        {
          question: 'Que devient le domicile conjugal pendant la procédure ?',
          answer: 'Le juge peut attribuer provisoirement le domicile à l\'un des époux. Dans le divorce par consentement mutuel, les époux décident ensemble de son sort.',
        },
      ],
      conclusion: 'Le divorce est une étape difficile. Un accompagnement juridique de qualité vous permet de traverser cette période avec sérénité et de préparer l\'avenir.',
    },
  },
  {
    slug: 'plainte-agression-marseille',
    title: 'Porter plainte pour agression à Marseille : mode d\'emploi',
    metaTitle: 'Porter plainte agression Marseille | Avocat pénal',
    metaDescription: 'Victime d\'agression à Marseille ? Comment porter plainte, faire constater vos blessures et vous faire indemniser. Avocat Maître Cécile Prost.',
    excerpt: 'Vous avez été victime d\'une agression physique ? Voici les démarches à suivre pour porter plainte et défendre vos droits.',
    category: 'droit-penal',
    relatedServiceLink: '/avocat-penal-marseille',
    publishedAt: '2026-01-30',
    content: {
      introduction: 'Vous avez été victime d\'une agression ? Vous êtes sous le choc et vous ne savez pas comment réagir. Cet article vous guide pas à pas dans les démarches à entreprendre pour faire valoir vos droits et obtenir réparation.',
      comprendreSituation: {
        title: 'Comprendre la qualification juridique',
        content: 'L\'agression physique peut être qualifiée de différentes manières selon sa gravité : violences légères, violences ayant entraîné une ITT (incapacité totale de travail), violences aggravées (avec arme, en réunion, sur personne vulnérable). La qualification détermine les peines encourues par l\'auteur et influence vos droits en tant que victime.',
      },
      queFaireImmediatement: {
        title: 'Que faire immédiatement après une agression ?',
        content: 'Faites constater vos blessures par un médecin (urgences ou médecin traitant) qui établira un certificat médical avec une ITT. Ce document est essentiel. Rendez-vous ensuite au commissariat ou à la gendarmerie pour déposer plainte. Conservez tous les éléments de preuve : témoignages, photos, vêtements endommagés. Contactez un avocat pour vous accompagner dans vos démarches.',
      },
      roleAvocate: {
        title: 'Le rôle de votre avocate à Marseille',
        content: 'Maître Cécile Prost assiste les victimes d\'agression à Marseille. Elle vous accompagne dès le dépôt de plainte, vous aide à constituer votre dossier, se constitue partie civile en votre nom, et défend vos intérêts pour obtenir la condamnation de l\'auteur et votre indemnisation.',
      },
      procedures: {
        title: 'Quelles procédures d\'indemnisation ?',
        content: 'En tant que victime, vous pouvez vous constituer partie civile pour demander des dommages et intérêts. Si l\'auteur est insolvable ou non identifié, vous pouvez saisir la CIVI (Commission d\'Indemnisation des Victimes d\'Infractions) pour obtenir une indemnisation par l\'État. L\'avocat vous guide vers la solution la plus adaptée à votre situation.',
      },
      delaisHonoraires: {
        title: 'Délais, honoraires et aide juridictionnelle',
        content: 'Il est important d\'agir rapidement après une agression. Maître Cécile Prost peut vous recevoir dans les meilleurs délais. L\'aide juridictionnelle est acceptée pour l\'assistance aux victimes. Hors aide juridictionnelle, un devis forfaitaire vous est proposé.',
      },
      faq: [
        {
          question: 'Quel est le délai pour porter plainte ?',
          answer: 'Le délai de prescription dépend de la gravité des faits : 6 ans pour un délit de violences. Il est cependant conseillé de porter plainte le plus rapidement possible.',
        },
        {
          question: 'La police peut-elle refuser ma plainte ?',
          answer: 'Non, la police est tenue de recevoir votre plainte. En cas de difficulté, vous pouvez écrire directement au procureur de la République.',
        },
        {
          question: 'Puis-je être indemnisé même si l\'auteur n\'est pas retrouvé ?',
          answer: 'Oui, la CIVI permet d\'obtenir une indemnisation même si l\'auteur n\'est pas identifié ou est insolvable, sous certaines conditions.',
        },
      ],
      conclusion: 'Ne restez pas seul face à cette épreuve. Un avocat peut vous aider à traverser cette période difficile et à obtenir la reconnaissance et la réparation auxquelles vous avez droit.',
    },
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getArticlesByCategory = (category: ArticleCategory): Article[] => {
  return articles.filter((article) => article.category === category);
};
