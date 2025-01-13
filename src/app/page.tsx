"use client"
import Image from "next/image";
import logo from "@/assets/images/logo.jpeg"
import duas from "@/assets/images/duas.png"
import momBadal from "@/assets/images/mom-om-badal.png"
import broHead from "@/assets/images/man-making-dua.png"
import momInvoking from "@/assets/images/mom-invoking-cut.png"
import heroImage from "@/assets/images/hero-image.png"
import Timer from '@/components/Timer';
import { useEffect, useRef, useState } from "react";
import mixpanel from "@/utils/mixpanel";
import { log } from "console";
import Link from "next/link";



export default function Home() {
   const mainRef = useRef<HTMLDivElement | null>(null);
   const hassanateRef = useRef<HTMLDivElement | null>(null);
   const duasRef = useRef<HTMLDivElement | null>(null);
   const badalRef = useRef<HTMLDivElement | null>(null);
   const [currentSection, setCurrentSection] = useState<string | null>(null);

  const isInViewport = (element: HTMLElement | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= 0 &&
        rect.bottom >= 0
    );
  }

  const handleScroll = () => {
    if (mainRef.current && hassanateRef.current) {
      
      const sections = [
        {ref: mainRef, name: 'main'},
        {ref: hassanateRef, name: 'hassanate'}, 
        {ref: duasRef, name: 'duas'}, 
        {ref: badalRef, name: 'badal'}
      ];
      const viewedSection = sections.find(section => isInViewport(section.ref.current));


      if (viewedSection) {
        if(viewedSection.name !== currentSection){
          setCurrentSection(viewedSection.name);
          mixpanel.track("Section Viewed", {
            "Section": viewedSection.name,
            "Page": "Home"
          });
        }
      }
    }

  };

  useEffect(() => {
    mixpanel.track("Page Viewed", {
      "Page": "Home"
    });
  }, []);
  useEffect(() => {

    const element = mainRef.current as HTMLDivElement;
    if(element){
      window.document.addEventListener('scroll', handleScroll);

      return () => {
        window.document.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentSection]);
  return (
    <div className="mx-auto  ty-8" >
      {/* Header */}
      <header className="flex items-center justify-between mb-8 pl-8 py-8">
        <Image
          src={logo}
          alt="Travel Logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </header>

      {/* Hero Section */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-12 px-4 lg:pl-8" ref={mainRef}>
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 lg:gap-10">
          <div>
            <h1 className="text-3xl lg:text-5xl font-black mb-2">
              <span className="text-primary">Faites votre Oumra</span>
            </h1>
            <h2 className="text-3xl lg:text-5xl font-black mb-4">
              Voyagez vers le pardon, revenez avec la sérénité.
            </h2>
          </div>
          <p className="text-gray-600 mb-4 lg:mb-6 text-xl lg:text-3xl">
            Avec Mariam Travel reconnectez-vous à l'essentiel : votre foi, votre âme, votre Créateur.
          </p>
          <div className="mb-8">
            <h3 className="text-lg lg:text-xl font-bold mb-4">Spécial Offre Ramadan 2025</h3>
            <Link href="/form-inscription-umra-2025" target="_blank" 
              className="bg-primary text-white px-4 lg:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 border-b-4 border-yellow-700 w-full lg:w-1/2 text-xl lg:text-2xl mb-3 block text-center">
              Je m'inscris 
            </Link>
            <div className="text-xl lg:text-2xl pt-2">ou appelez +221 77 953 29 95</div>
            <Timer />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-7 lg:relative lg:-top-24">
          <Image src={heroImage} alt="Dad doing umra" className="w-full" />
        </div>
      </section>

      {/* Hassanate Section */}
      <section className="rounded-lg px-4 lg:px-0 pb-16" ref={hassanateRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-1 lg:col-span-6">
            <Image src={momInvoking} alt="mom making dua" className="w-full" />
          </div>
          <div className="col-span-1 lg:col-span-6 pt-6 lg:pt-10 lg:pr-8">
            <h2 className="text-3xl lg:text-5xl font-light text-secondary mb-4">
              <div>Chaque minute compte</div>
              <div>Time is <span className="font-black">HASSANATE</span></div>
            </h2>
            <p className="mb-12 text-2xl text-gray-500">
              C'est pourquoi il est important pour nous de fournir une <span className="font-black">formation complète</span> avant le départ.
              Ainsi, vous pourrez tirer <span className="font-black">le meilleur de votre Oumra.</span>
            </p>
            <p className="mb-12 text-2xl">
            Chez Mariam Travel, nous vous offrons une formation exclusive pour vous <span className="font-black text-secondary">guider dans chaque étape </span >, afin que votre Oumra soit une <span   className="font-black text-secondary" >expérience spirituelle inoubliable </span> et de maximiser les hassanates (récompenses).
            </p>
            <div className="bg-white rounded-lg mb-6 text-xl">
              <h4 className="font-bold mb-4 bg-primary px-4 py-1 font-black inline-block">Le Package :</h4>
              <ul className="grid grid-cols-2 gap-4 line-clamp-1">
                <li>- Hôtel</li>
                <li>- Billet d'avion (aller-retour)</li>
                <li>- VISA</li>
                <li>- Véhicule particulier</li>
                <li>- Koulou ziar</li>
                <li>- Assistance + Guide</li>
                <li>- Full board</li>
                <li>- Zam zam offert</li>
              </ul>
            </div>
            <div className="text-xl  gap-10">

              <h4 className="font-bold mb-4 bg-primary px-4 py-1 font-black inline-block">Période :</h4>
              <div className="text-xl">
                <p> Du 15 au 30 mars 2025 (15 jours)</p>
              </div>
            </div>
            <div className="lg:hidden block mb-6 mt-10">
              <Image src={broHead} alt="Illustration" className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 mt-10 px-4 lg:px-0">
          <div className="col-span-1 lg:col-span-6 pt-4 lg:pt-10 lg:pl-10">
            <h2 className="text-2xl lg:text-4xl font-light text-center mb-6 lg:mb-10">
              Le nombre de place est 
              <span className="text-primary font-black text-center relative before:content[' '] before:block before:left-0 before:-bottom-1 before:absolute before:bg-darkblue before:w-full before:h-3 before:-z-10 z-20">
                limité
              </span>
            </h2>
            
            <div className="text-base lg:text-xl">
              <div className="bg-white rounded-lg p-4 lg:p-6 my-4 lg:my-8 shadow-lg border-2 border-primary">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl lg:text-2xl font-bold">Places disponibles</div>
                  <div className="bg-primary text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full font-black">5/15</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 lg:h-4">
                  <div className="bg-primary h-3 lg:h-4 rounded-full" style={{width: `${10/15*100}%`}}></div>
                </div>
                <p className="text-gray-500 mt-2 text-center text-sm lg:text-base font-medium">
                  Il ne reste que 5 places ! Réservez vite la vôtre
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4 lg:mb-6 mt-6 lg:mt-10">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-regular text-lg lg:text-2xl text-gray-400 mb-2">Avec pension</h4>
                <p className="text-3xl lg:text-5xl font-black">2.900.000<sup>F</sup></p>
                <p className="text-sm lg:text-lg text-gray-400">Kheud + Ndogou + Diner</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-regular text-lg lg:text-2xl text-gray-400 mb-2">Sans pension</h4>
                <p className="text-3xl lg:text-5xl font-black">2.500.000<sup>F</sup></p>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center">
              <div className="text-base lg:text-lg text-center px-4">
                Cette offre est valable jusqu'au 31 janvier 2025
              </div>
              <Timer />
            </div>

            <div className="mb-6 lg:mb-10 px-4 lg:px-0">
              <h4 className="font-bold mb-4 bg-secondary text-white px-3 lg:px-4 py-1 font-black inline-block">
                Garantie :
              </h4>
              <p className="text-sm lg:text-md">
                Nous vous garantissons une expérience Oumra inoubliable. Si vous n'etes pas satisfait, nous vous ferons 
                <span className="font-black">une réduction de 10% sur votre prochaine Oumra.</span>
              </p>
            </div>

            <div className="px-4 lg:px-0">
              <Link 
                href="/form-inscription-umra-2025" 
                target="_blank" 
                className="w-full bg-primary text-white px-4 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-yellow-500 border-b-4 border-yellow-700 text-xl lg:text-2xl mb-3 block text-center"
              >
                Je m'inscris
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-6 mt-8 lg:mt-0">
            <Image src={broHead} alt="Illustration" className="w-full h-auto hidden lg:block" />

          </div>
        </div>
      </section>

      {/* Oumra Badal Section */}
      <section className="bg-gray-100 rounded-lg pb-8 lg:pb-16 pt-8 lg:pt-16" ref={badalRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 px-4 lg:px-0">
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-6 lg:gap-10 px-4 lg:pl-16">
            <h3 className="text-3xl lg:text-6xl font-black text-center lg:text-left">
              Offrez à un <span className="text-yellow-500">défunt</span> le précieux cadeau d'une
              <span className="text-yellow-500"> Oumra</span> durant le Ramadan qui <span className="text-yellow-500">équivaut à un Hajj</span>
            </h3>
            <div>
              <Image 
                src={momBadal} 
                alt="mom making dua" 
                className="w-full h-auto lg:hidden block" 
                priority
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white p-4 lg:p-8 rounded-lg w-full shadow-lg border-l-4 border-yellow-500 mb-4 lg:mb-6">
                <p className="text-sm lg:text-md italic mb-2 lg:mb-4">
                  Une femme de Juhayna vint trouver le Prophète ﷺ et lui dit :
                </p>
                <p className="text-sm lg:text-md mb-2 lg:mb-4">
                  « Ma mère avait fait le vœu d'accomplir son pèlerinage à La Mecque, mais elle est
                  morte avant de s'en acquitter, puis-je le faire pour elle ? »
                </p>
                <p className="text-base lg:text-lg mb-2 lg:mb-4 font-semibold">
                  « Oui, fais-le pour elle » répondit le Prophèteﷺ, et ajouta :
                </p>
                <p className="text-sm lg:text-md">
                  « Vois-tu, si ta mère avait contracté une dette, l'aurais-tu remboursée pour elle ?
                  Honorez vos dettes, car les dettes à l'égard d'Allah sont plus dignes d'être honorées »
                </p>
                <p className="text-xs lg:text-sm text-gray-500 mt-2 lg:mt-4">Rapporté par Al-Bukhârî, d'après Ibn 'Abbâs</p>
              </div>
              
              <p className="text-base lg:text-lg text-center lg:text-left">
                Durant ce notre voyage pour <span className="font-bold">Oumra Ramadan 2025</span>, du 15 Mars au 30 mars 2025, Nous faisons gratuitement 3 Oumra Badal pour vos proches. 
                Si vous êtes sélectionné, une vidéo vous sera envoyé par whatsapp au début et durant la Oumra
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link 
                href="/free-omra-badal" 
                target="_blank" 
                className="bg-secondary border-b-4 border-darkblue text-white px-4 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-blue-500 text-xl lg:text-2xl mb-3 block text-center w-full lg:w-auto"
              >
                Inscrire un proche
              </Link>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-6 relative pt-6 lg:pt-20">
            <Image 
              src={momBadal} 
              alt="mom making dua" 
              className="w-full h-auto hidden lg:block" 
              priority
            />
          </div>
        </div>
      </section>

      {/* Duas Section */}
      <section className="p-4 lg:p-16" ref={duasRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-1 lg:col-span-6">
            <h2 className="text-3xl lg:text-6xl font-black text-primary mb-8 lg:mb-16">Vos Prières, Portées Jusqu'à la Kaaba</h2>
           <div className="lg:hidden block mb-10">
            <Image src={duas} alt="Illustration de duas" className="w-full" />
           </div>
            <div className="mb-8 lg:mb-12">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Notre Engagement Unique : Faire Vos Duas en Votre Nom</h3>
              <p className="text-base lg:text-lg text-gray-600">
                Lors de chaque voyage, notre équipe de guides et de pèlerins se propose de recueillir les duas (invocations) des personnes qui ne peuvent pas faire le déplacement. Ces prières sont ensuite récitées dans les lieux les plus sacrés, notamment devant la Kaaba, où vos invocations sont les plus puissantes.
              </p>
            </div>

            <div className="mb-8 lg:mb-12">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Comment Cela Fonctionne ?</h3>
              <div className="space-y-4 lg:space-y-8">
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
                  <h4 className="text-lg lg:text-xl font-semibold text-primary mb-2">1. Recueil des Invocations</h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    Avant le départ, nous ouvrons une période dédiée pour que chacun puisse nous soumettre ses duas via un formulaire en ligne ou en personne.
                  </p>
                </div>
                
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
                  <h4 className="text-lg lg:text-xl font-semibold text-primary mb-2">2. Une Promesse de Prières</h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    Nos guides et pèlerins s'engagent à inclure vos invocations dans leurs propres moments de prières, particulièrement lors des instants spirituellement significatifs.
                  </p>
                </div>
                
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
                  <h4 className="text-lg lg:text-xl font-semibold text-primary mb-2">3. Un Acte de Solidarité Spirituelle</h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    Ce geste permet à tous, même ceux restés chez eux, de se connecter aux bénédictions du Hajj ou de la Oumra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-6">
            <Image src={duas} alt="Illustration de duas" className="w-full hidden lg:block" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            <div className="mb-8 lg:mb-12">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Pourquoi Nous Le Faisons ?</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base text-gray-600">
                <li>Pour les récompenses à travers cet act</li>
                <li>Pour permettre à ceux qui ne peuvent pas voyager d'être spirituellement présents.</li>
                <li>Pour partager les récompenses immenses de ce voyage sacré avec le plus grand nombre.</li>
                <li>Pour renforcer l'amour et la fraternité entre croyants.</li>
              </ul>
            </div>

            <div className="mt-4 lg:mt-12">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Soumettez Vos Prières Dès Aujourd'hui</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8">
                Confiez-nous vos invocations, et soyez assuré(e) qu'elles seront portées dans les lieux les plus bénis. Avec Mariam Travel, vos prières voyagent aussi loin que votre foi.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 lg:mt-10">
            <Link 
              href="/vos-duas-a-la-kaaba" 
              target="_blank" 
              className="bg-secondary border-b-4 border-darkblue text-white px-4 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-blue-500 text-xl lg:text-2xl mb-3 block text-center w-full lg:w-auto"
            >
              Envoyer mon dua
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center rounded-lg bg-black text-white p-16">
        <p className="font-bold">Réserver avant 31 Janvier</p>
        <p className="text-xl font-bold">+221 77 953 29 95</p>
      </footer>
    </div>
  );
}
