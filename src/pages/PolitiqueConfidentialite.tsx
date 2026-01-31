import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité RGPD | Cabinet Cécile Prost - Avocate Marseille</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles du cabinet de Maître Cécile Prost, avocate au Barreau de Marseille. Conformité RGPD." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
              Politique de confidentialité – Protection des données personnelles (RGPD)
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cabinet de Maître Cécile Prost – Avocate à Marseille (13006)
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Dernière mise à jour : 01/02/2026
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-foreground/80">
                Le présent site est exploité par Maître Cécile Prost, avocate inscrite au Barreau de Marseille, exerçant au sein de son cabinet situé 20 cours Pierre Puget, 13006 Marseille.
              </p>
              <p className="text-foreground/80">
                La protection de vos données personnelles est une priorité. Cette politique de confidentialité a pour objectif d'expliquer de manière claire comment vos informations sont collectées, utilisées et protégées, conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">1. Responsable du traitement</h2>
                <p className="text-foreground/80 mb-4">Le responsable du traitement des données est :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p className="font-medium text-primary">Maître Cécile Prost</p>
                  <p className="text-foreground/80">Avocate au Barreau de Marseille</p>
                  <p className="text-foreground/80">Adresse : 20 cours Pierre Puget, 13006 Marseille</p>
                  <p className="text-foreground/80">Téléphone : <a href="tel:+33662525687" className="text-gold hover:underline">06 62 52 56 87</a></p>
                  <p className="text-foreground/80">Email : <a href="mailto:avocat.prost@gmail.com" className="text-gold hover:underline">avocat.prost@gmail.com</a></p>
                  <p className="text-foreground/80">SIREN : 894 000 462</p>
                </div>
                <p className="text-foreground/80 mt-4">Cabinet d'avocat à Marseille – France.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">2. Données personnelles collectées</h2>
                <p className="text-foreground/80 mb-4">
                  Dans le cadre de votre navigation ou de votre prise de contact avec le cabinet d'avocat à Marseille, les données suivantes peuvent être collectées :
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Contenu de votre message</li>
                  <li>Données de navigation (cookies, adresse IP anonymisée)</li>
                </ul>
                <p className="text-foreground/80 mb-2">Ces données sont collectées lorsque vous :</p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>utilisez le formulaire de contact</li>
                  <li>contactez directement le cabinet par téléphone ou email</li>
                  <li>naviguez sur le site internet</li>
                </ul>
                <p className="text-foreground/80 mt-4 font-medium">Aucune donnée n'est collectée à votre insu.</p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">3. Finalités du traitement</h2>
                <p className="text-foreground/80 mb-4">Vos données personnelles sont utilisées exclusivement pour :</p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>répondre à vos demandes juridiques</li>
                  <li>organiser un rendez-vous avec votre avocat à Marseille</li>
                  <li>assurer le suivi de votre dossier</li>
                  <li>gérer la relation avocat-client</li>
                  <li>améliorer la qualité du site internet</li>
                  <li>réaliser des statistiques anonymes de fréquentation</li>
                </ul>
                <p className="text-foreground/80 mt-4">
                  Les données ne sont jamais utilisées à des fins commerciales étrangères à l'activité du cabinet.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">4. Base légale du traitement</h2>
                <p className="text-foreground/80 mb-4">Le traitement de vos données repose sur :</p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>votre consentement (formulaire de contact, cookies)</li>
                  <li>l'exécution de mesures précontractuelles ou contractuelles</li>
                  <li>l'intérêt légitime du cabinet (fonctionnement et sécurité du site)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">5. Durée de conservation</h2>
                <p className="text-foreground/80 mb-4">
                  Les données sont conservées uniquement pour la durée nécessaire aux finalités poursuivies :
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>demandes de contact : 12 mois maximum</li>
                  <li>données clients : selon les obligations légales applicables aux cabinets d'avocats</li>
                  <li>cookies : 13 mois maximum</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">6. Confidentialité – Secret professionnel</h2>
                <p className="text-foreground/80 mb-4">
                  Toutes les informations transmises à Maître Cécile Prost sont strictement confidentielles et couvertes par le secret professionnel de l'avocat.
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  <li>Les données sont destinées exclusivement au cabinet.</li>
                  <li>Elles ne sont jamais vendues, louées ou communiquées à des tiers, sauf obligation légale.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">7. Sécurité des données</h2>
                <p className="text-foreground/80">
                  Le cabinet d'avocat Maître Cécile Prost à Marseille met en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir la sécurité, l'intégrité et la confidentialité de vos données personnelles.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">8. Hébergement des données</h2>
                <p className="text-foreground/80 mb-4">Le site est hébergé par :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p className="font-medium text-primary">OVH SAS</p>
                  <p className="text-foreground/80">2 rue Kellermann – 59100 Roubaix – France</p>
                </div>
                <p className="text-foreground/80 mt-4">
                  Les données sont hébergées sur des serveurs situés au sein de l'Union européenne.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">9. Vos droits</h2>
                <p className="text-foreground/80 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-4">
                  <li>droit d'accès</li>
                  <li>droit de rectification</li>
                  <li>droit d'effacement</li>
                  <li>droit à la limitation du traitement</li>
                  <li>droit d'opposition</li>
                  <li>droit à la portabilité</li>
                </ul>
                <p className="text-foreground/80 mb-2">Vous pouvez exercer vos droits à tout moment en écrivant à :</p>
                <a 
                  href="mailto:avocat.prost@gmail.com"
                  className="text-gold hover:underline inline-block mb-4"
                >
                  📧 avocat.prost@gmail.com
                </a>
                <p className="text-foreground/80 mb-4">
                  Une réponse vous sera apportée dans un délai maximal d'un mois.
                </p>
                <p className="text-foreground/80">
                  Vous pouvez également introduire une réclamation auprès de la CNIL : {' '}
                  <a 
                    href="https://www.cnil.fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    https://www.cnil.fr
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">10. Cookies</h2>
                <p className="text-foreground/80 mb-4">
                  Le site du cabinet d'avocat Maître Cécile Prost à Marseille peut utiliser des cookies afin :
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-4">
                  <li>de mesurer l'audience</li>
                  <li>d'améliorer l'expérience utilisateur</li>
                </ul>
                <p className="text-foreground/80 mb-4">
                  Lors de votre première visite, un bandeau vous permet d'accepter ou refuser les cookies.
                </p>
                <p className="text-foreground/80">
                  Vous pouvez également configurer votre navigateur pour bloquer les cookies ou supprimer ceux déjà enregistrés.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">11. Liens externes</h2>
                <p className="text-foreground/80 mb-4">
                  Le site peut contenir des liens vers des sites tiers.
                </p>
                <p className="text-foreground/80">
                  Maître Cécile Prost ne saurait être tenue responsable de leur contenu ni de leur politique de confidentialité.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">12. Modification de la politique</h2>
                <p className="text-foreground/80">
                  Cette politique de confidentialité peut être modifiée à tout moment afin de rester conforme aux évolutions légales et réglementaires.
                </p>
              </section>

              <section className="bg-primary/5 p-8 rounded-lg mt-12">
                <h2 className="font-serif text-2xl text-primary mb-4">Avocate à Marseille – Accompagnement juridique personnalisé</h2>
                <p className="text-foreground/80">
                  Maître Cécile Prost accompagne particuliers et familles à Marseille et dans les Bouches-du-Rhône avec écoute, confidentialité et engagement.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <CookieBanner />
    </>
  );
};

export default PolitiqueConfidentialite;
