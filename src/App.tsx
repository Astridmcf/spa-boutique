
import Navbar from './componentes/Navbar';
import Banner from './componentes/Banner';
import ImageDisplay from './componentes/ImageDisplay';
import ServicesSection from './componentes/ServicesSection';
import Detalles from './componentes/Detalles';
import BoutiqueSection from './componentes/BoutiqueSection';
import VisitanosSection from './componentes/VisitanosSection';
import SocialMediaSection from './componentes/SocialMediaSection';
import PromotionDev from './componentes/PromotionDev';
import Footer from './componentes/Footer';

function App() {
  const servicesData = [
    { imageUrl: '/img/nails.jpeg', title: 'Manicura y pedicura' },
    { imageUrl: '/img/hair.jpg', title: 'Cabello' },
    { imageUrl: '/img/eyelashes.jpeg', title: 'Pestañas' },
    { imageUrl: '/img/hairRemoval.jpeg', title: 'Depilación' },
  ];
  const detallesData = [
    {
      title: 'Manicura y pedicura',
      details: [
        'Acrílicas',
        'Tech Gel',
        'Semi permanentes',
        'Presson',
        'Forrado de acrílico',
        'Mantenimiento',
        'Manicure tradicional',
        'Pedicure tradicional',
        'Gelish spa',
        'Pedicure spa',
      ],
    },
    {
      title: 'Cabello',
      details: [
        'Keratina',
        'Cirugía capilar',
        'Hidratación profunda',
        'Iluminaciones Bisos',
        'Secado y planchado',
      ],
    },
    {
      title: 'Pestañas',
      details: [
        'Punto a punto',
        'Todos los efectos',
        'Pelo a pelo',
      ],
    },
    {
      title: 'Depilación',
      details: [
        'Cejas',
        'Cejas semipermanentes',
        'Bozo',
        'Axila',
        'Media pierna',
        'Pierna completa',
        'Zona V',
      ],
    },
  ];

  const visitanosData = {
    title: ' Visítanos',
    infoItems: [
      {
        title: 'Horario de Atención',
        details: ['Lunes a Domingo', '8:30 am - 10:00 pm'],
      },
      {
        title: 'Nuestra Ubicación',
        details: ['Colombia', 'Medellín'],
      },
      {
        title: 'Información Adicional',
        details: ['Horarios flexibles pensados para ti', 'Servicios a domicilio '],
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section id="inicio" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100vh', padding: '0 20px' }}>
        <div style={{ textAlign: 'left', marginTop: '-30px', marginRight: '20px', paddingLeft: '80px' }}>
          <Banner
            title="GABRIELA LUCES"
            subtitle="Luce siempre bella y encuentra el outfit perfecto en nuestra boutique"
            button1Text="Contactame aquí"
            button2Text="Lanza tu WEB YA"
          />
        </div>
        <div style={{ textAlign: 'right', marginRight: '0px', paddingRight: '50px' }}>
          <ImageDisplay imageUrl1="/img/woman.jpg" imageUrl2="/img/woman.jpg" />
        </div>
      </section>
      <section id="servicios">
        <ServicesSection services={servicesData} /> {/* Renderiza la nueva sección */}
      </section>
      <section id="detalles">
        <Detalles columns={detallesData} />
      </section>
      <section id="boutique">
        <BoutiqueSection
          title="Boutique"
          imageUrl="/img/boutique.jpeg" // Reemplaza con la URL de tu imagen
          subtitle=" En nuestra boutique encontrarás una cuidada selección de conjuntos ideales para cada ocasión: blusas delicadas, jeans de corte perfecto, shorts frescos, vestidos con encanto, faldas elegantes, enterizos modernos, chaquetas ligeras y mucho más. Cada prenda está pensada para resaltar tu esencia con un toque femenino y sofisticado." // Puedes añadir un subtítulo si lo deseas
        />
      </section>
      <section id="visitanos">
        <VisitanosSection
          title={visitanosData.title}
          infoItems={visitanosData.infoItems}
        />
      </section>
      <section id="redes-sociales">
        <SocialMediaSection
          leftHeading="Lo mejor de nosotros aquí"
          leftSubheading="Síguenos y comparte"
          instagramUsername="Luces Radiante"
          tiktokUsername="Próximamente en otras redes sociales"
        />
      </section>
      <section id="promotion-dev">
        <PromotionDev imageSrc="/img/PromotionDev.jpeg" />
      </section>
      <Footer />
    </div>
  );
}

export default App;