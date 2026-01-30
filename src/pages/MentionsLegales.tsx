import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MentionsLegales = () => {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Mentions légales | Cabinet Cécile Prost - Avocate Marseille</title>
        <meta name="description" content="Mentions légales du site de Maître Cécile Prost, avocate au Barreau de Marseille. Informations légales, propriété intellectuelle et protection des données." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">Mentions légales</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cabinet de Maître Cécile Prost – Avocate à Marseille (13006)
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Dernière mise à jour : {currentDate}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-foreground/80">
                Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), il est précisé aux utilisateurs du présent site l'identité des différents intervenants.
              </p>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Éditeur du site</h2>
                <p className="text-foreground/80 mb-4">Le présent site est édité par :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p className="font-medium text-primary">Maître Cécile Prost</p>
                  <p className="text-foreground/80">Avocate au Barreau de Marseille</p>
                  <p className="text-foreground/80">Cabinet d'avocat à Marseille (13006)</p>
                  <p className="text-foreground/80">Adresse du cabinet : 20 cours Pierre Puget, 13006 Marseille</p>
                  <p className="text-foreground/80">Téléphone : <a href="tel:+33662525687" className="text-gold hover:underline">06 62 52 56 87</a></p>
                  <p className="text-foreground/80">Email : <a href="mailto:avocat.prost@gmail.com" className="text-gold hover:underline">avocat.prost@gmail.com</a></p>
                  <p className="text-foreground/80">Numéro SIREN : 894 000 462</p>
                </div>
                <p className="text-foreground/80 mt-4">Maître Cécile Prost exerce à titre individuel.</p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-1">
                  <li>Titre professionnel : Avocat</li>
                  <li>Barreau d'appartenance : Barreau de Marseille</li>
                  <li>Pays d'exercice : France</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Règles professionnelles</h2>
                <p className="text-foreground/80">
                  La profession d'avocat est une profession réglementée.
                </p>
                <p className="text-foreground/80 mt-2">
                  Maître Cécile Prost est soumise aux règles déontologiques de la profession d'avocat, notamment au Règlement Intérieur National (RIN), consultable sur le site du Conseil National des Barreaux :
                </p>
                <a 
                  href="https://www.cnb.avocat.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:underline inline-block mt-2"
                >
                  https://www.cnb.avocat.fr
                </a>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Autorité de contrôle</h2>
                <p className="text-foreground/80">Ordre des Avocats au Barreau de Marseille</p>
                <a 
                  href="https://www.barreau-marseille.avocat.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:underline inline-block mt-2"
                >
                  https://www.barreau-marseille.avocat.fr
                </a>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Hébergement</h2>
                <p className="text-foreground/80 mb-4">Le site est hébergé par :</p>
                <div className="bg-muted/30 p-6 rounded-lg space-y-2">
                  <p className="font-medium text-primary">OVH SAS – Hébergeur web en France</p>
                  <p className="text-foreground/80">Siège social : 2 rue Kellermann – 59100 Roubaix – France</p>
                  <p className="text-foreground/80">RCS Lille Métropole 424 761 419 00045</p>
                  <p className="text-foreground/80">Code APE : 2620Z</p>
                  <p className="text-foreground/80">N° TVA : FR 22 424 761 419</p>
                </div>
                <p className="text-foreground/80 mt-4">
                  OVH SAS (OVHcloud) est l'un des principaux hébergeurs web français, proposant des solutions d'hébergement, de serveurs cloud, et d'enregistrement de noms de domaine.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Propriété intellectuelle</h2>
                <p className="text-foreground/80">
                  L'ensemble du site (contenus, textes, images, graphismes, logos, icônes, structure…) est la propriété exclusive de Maître Cécile Prost, cabinet d'avocat à Marseille, sauf mentions contraires.
                </p>
                <p className="text-foreground/80 mt-4">
                  Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, du site ou de ses éléments, est interdite sans autorisation écrite préalable.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Responsabilité</h2>
                <p className="text-foreground/80">
                  Les informations présentes sur ce site ont pour objet de présenter l'activité du cabinet d'avocat à Marseille et ses domaines d'intervention. Elles sont fournies à titre informatif et ne constituent en aucun cas une consultation juridique personnalisée.
                </p>
                <p className="text-foreground/80 mt-4">
                  Maître Cécile Prost s'efforce d'assurer l'exactitude des informations diffusées, sans pouvoir en garantir l'exhaustivité ou la mise à jour permanente.
                </p>
                <p className="text-foreground/80 mt-4">
                  L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Données personnelles</h2>
                <p className="text-foreground/80">
                  Les données personnelles éventuellement collectées via les formulaires du site ou par contact direct sont destinées exclusivement à Maître Cécile Prost, dans le cadre du traitement des demandes des utilisateurs et de la relation avocat-client.
                </p>
                <p className="text-foreground/80 mt-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données.
                </p>
                <p className="text-foreground/80 mt-4">
                  Vous pouvez exercer ces droits en adressant un email à :
                </p>
                <a 
                  href="mailto:avocat.prost@gmail.com"
                  className="text-gold hover:underline inline-block mt-2"
                >
                  📧 avocat.prost@gmail.com
                </a>
                <p className="text-foreground/80 mt-4">
                  Aucune donnée personnelle n'est cédée, vendue ou transmise à des tiers. Les informations communiquées au cabinet sont couvertes par le secret professionnel de l'avocat.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-primary mb-4">Cookies</h2>
                <p className="text-foreground/80">
                  Le site du cabinet d'avocat Maître Cécile Prost à Marseille peut utiliser des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur.
                </p>
                <p className="text-foreground/80 mt-4">
                  Lors de votre première visite, un bandeau vous permet d'accepter ou refuser les cookies. Vous pouvez également configurer votre navigateur pour refuser les cookies.
                </p>
              </section>

              <section className="bg-primary/5 p-8 rounded-lg mt-12">
                <h2 className="font-serif text-2xl text-primary mb-4">Cabinet d'avocat à Marseille – Assistance juridique professionnelle</h2>
                <p className="text-foreground/80">
                  Maître Cécile Prost accompagne ses clients à Marseille et dans les Bouches-du-Rhône avec écoute, confidentialité et engagement, en droit pénal et droit de la famille.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default MentionsLegales;
