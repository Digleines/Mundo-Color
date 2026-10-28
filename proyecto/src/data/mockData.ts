import { Product, Review, FaqItem } from '../types';
import { Images } from '../assets/images';

export const STORE_INFO = {
  name: 'Mundo Color',
  slogan: 'Detalles con amor',
  address: 'Transversal 23 # 19A - 12, Valledupar, Cesar, Colombia',
  phone: '317-506-1895',
  phoneClean: '573175061895',
  instagram: '@pydmundocolor',
  instagramUrl: 'https://instagram.com/pydmundocolor',
  hours: 'Lunes a Sábado: 8:00 AM - 7:00 PM • Domingos con entrega programada',
};

export const PRODUCTS: Product[] = [
  {
    id: 'bouquets-globos',
    name: 'Bouquets de globos',
    category: 'bouquets',
    categoryLabel: 'Bouquets Artesanales',
    badge: 'Favorito',
    description: 'Un detalle que se ve y se siente especial. Ramos volumétricos con globos foil metalizados, rosas eternas de listón satinado, golosinas selectas y mariposas doradas.',
    price: '$85.000 COP',
    priceNum: 85000,
    image: Images.heroBouquet,
    secondaryImage: Images.roseBouquet,
    inclusions: [
      'Peluche suave o globo foil corazón/estrella',
      'Rosas eternas de listón satinado hechas a mano',
      'Selección de golosinas (Ferrero, Jumbo, chocolates)',
      'Mariposas doradas 3D caladas',
      'Envoltura de lujo en papel coreano impermeable lila',
      'Tarjeta personalizada con dedicatoria'
    ],
    occasions: ['Cumpleaños', 'Amor y Amistad', 'Aniversario', 'Agradecimiento'],
    buttonText: 'Pedir bouquet',
  },
  {
    id: 'desayunos-sorpresa',
    name: 'Desayunos sorpresa',
    category: 'desayunos',
    categoryLabel: 'Gastronomía & Detalles',
    badge: 'Novedad',
    description: 'Empieza su día con una sorpresa hecha con amor. Bandeja de madera rústica con croissants frescos, jugo natural embotellado, fruta fresca, café y arreglo floral.',
    price: '$125.000 COP',
    priceNum: 125000,
    image: Images.breakfastTray,
    inclusions: [
      'Bandeja de madera fina reutilizable con asas',
      'Croissants horneados con mantequilla',
      'Jarra de vidrio con jugo de naranja natural',
      'Taza o pocillo de café premium artesanal',
      'Bowl de frutas frescas con frutos rojos',
      'Mini ramo de lavanda o rosas eternas',
      'Tarjeta caligrafiada con mensaje especial'
    ],
    occasions: ['Cumpleaños', 'Aniversario', 'Día de la Madre', 'Día del Padre'],
    buttonText: 'Pedir desayuno sorpresa',
  },
  {
    id: 'cajas-personalizadas',
    name: 'Cajas personalizadas',
    category: 'cajas',
    categoryLabel: 'Cajas Rígidas de Lujo',
    badge: 'Personalizable',
    description: 'De todas las medidas y gustos, para cualquier ocasión. Cajas rígidas forradas en tonos pasteles o lila con letras doradas estampadas, bombones artesanales y mini espumoso.',
    price: '$95.000 COP',
    priceNum: 95000,
    image: Images.luxuryBox,
    inclusions: [
      'Caja rígida imantada con nombre grabado en foil dorado',
      'Surtido de 15 bombones de chocolate fino con pétalos comestibles',
      'Mini botella de vino o espumoso con etiqueta personalizada',
      'Papel de seda aromático y lazo de satén lila',
      'Carta de amor o felicitación en papel de algodón con lacre dorado'
    ],
    occasions: ['Aniversario', 'Pedidas de Mano', 'Cumpleaños', 'Reconciliación'],
    buttonText: 'Pedir caja personalizada',
  },
  {
    id: 'carteleras-artesanales',
    name: 'Carteleras',
    category: 'carteleras',
    categoryLabel: 'Arte & Papelería',
    badge: 'Artesanal',
    description: 'Mensajes que se quedan en el corazón. Lienzos colgantes en tela y papel con flores 3D modeladas a mano, caligrafía artística y guirnaldas de amor.',
    price: '$55.000 COP',
    priceNum: 55000,
    image: Images.handmadeBanner,
    inclusions: [
      'Estandarte de tela lino natural con soporte de madera y soga',
      'Flores de papel 3D esculpidas a mano en tonos pasteles',
      'Caligrafía artística personalizada (Feliz Día, Te Amo, etc.)',
      'Banderines mini con dedicatorias (Amor & Alegría)',
      'Empaque protector para regalo'
    ],
    occasions: ['Cumpleaños', 'Grados', 'Despedidas', 'Día de la Madre'],
    buttonText: 'Pedir cartelera',
  },
  {
    id: 'peluches-coleccion',
    name: 'Peluches',
    category: 'peluches',
    categoryLabel: 'Compañeros Afectuosos',
    badge: 'Gran variedad',
    description: 'Ternura que abraza, para todas las edades. Osos gigantes, conejitos con suéter, personajes favoritos y peluches con corazones bordados.',
    price: '$45.000 COP',
    priceNum: 45000,
    image: Images.plushCollection,
    inclusions: [
      'Peluche hipoalergénico de felpa ultra suave',
      'Opción de tamaño desde 25 cm hasta 1.5 metros',
      'Lazo de regalo satinado con tarjeta conmemorativa',
      'Opción de añadir globo helio o caja de dulces'
    ],
    occasions: ['Nacimientos', 'San Valentín', 'Amor y Amistad', 'Niños y Adultos'],
    buttonText: 'Pedir peluche',
  },
  {
    id: 'rosas-eternas',
    name: 'Rosas eternas de listón',
    category: 'rosas',
    categoryLabel: 'Floristería Eterna',
    badge: 'Duradero',
    description: 'Ramos elaborados con pétalos de satén doblados cuidadosamente a mano que duran para siempre. Acompañados de mariposas doradas y luces led cálidas.',
    price: '$75.000 COP',
    priceNum: 75000,
    image: Images.roseBouquet,
    inclusions: [
      '12 o 24 rosas de satén confeccionadas artesanalmente',
      'Luces micro-LED tipo hada opcionales con batería',
      'Mariposas doradas troqueladas con pedrería',
      'Corona dorada de reina o rey opcional',
      'Papel de envoltura impermeable bicromático'
    ],
    occasions: ['Amor y Amistad', 'Graduación', 'Quinceañeras', 'Aniversario'],
    buttonText: 'Pedir rosas eternas',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Camila Villazón',
    location: 'Valledupar • Barrio Novalito',
    rating: 5,
    comment: '¡Quedé enamorada del bouquet con el osito! La dedicación que le ponen a cada detalle y la calidad de las rosas de satén superó todas mis expectativas. Llegó puntual y mi mamá lloró de felicidad.',
    occasion: 'Cumpleaños de mamá',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Andrés Felipe Mestre',
    location: 'Valledupar • Los Cortijos',
    rating: 5,
    comment: 'Excelente atención de Vanessa por WhatsApp. Le pedí una caja personalizada para mi aniversario con muy poco tiempo de anticipación y la tuvieron lista perfecta con la dedicatoria en papel de algodón. 10/10.',
    occasion: 'Aniversario de novios',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Tatiana Orozco',
    location: 'Valledupar • Barrio Dangond',
    rating: 5,
    comment: 'El desayuno sorpresa fue maravilloso, todo fresquecito y la presentación en la bandeja de madera es digna de una foto. Definitivamente Mundo Color es mi lugar de confianza para regalar.',
    occasion: 'Sorpresa de cumpleaños',
    verified: true,
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo hago mi pedido?',
    answer: 'Hacer tu pedido es muy sencillo: solo haz clic en cualquiera de los botones de WhatsApp de la página o selecciona "Arma tu Detalle". Nos escribirás directamente con las especificaciones de tu regalo y nuestro equipo te asesorará en minutos para confirmar fecha, hora y dedicatoria.'
  },
  {
    id: 'faq-2',
    question: '¿Puedo personalizar mi detalle?',
    answer: '¡Por supuesto! Es nuestra mayor especialidad. Puedes elegir los colores del papel y cintas, agregar el nombre de esa persona especial con letras doradas, seleccionar sus golosinas y snacks favoritos, cambiar el peluche e incluir tu carta de dedicatoria con caligrafía artesanal.'
  },
  {
    id: 'faq-3',
    question: '¿Con cuánto tiempo debo pedir?',
    answer: 'Para desayunos sorpresa y cajas personalizadas con grabado recomendamos realizar tu pedido con mínimo 24 a 48 horas de anticipación. Para bouquets de globos, peluches y arreglos de catálogo tenemos disponibilidad para entrega el mismo día según la agenda del taller en Valledupar.'
  },
  {
    id: 'faq-4',
    question: '¿Hacen entregas a domicilio en Valledupar?',
    answer: 'Sí, realizamos entregas a domicilio en todo el perímetro urbano de Valledupar (todos los barrios) y zonas aledañas. También puedes recoger tu detalle directamente en nuestro local comercial ubicado en la Transversal 23 # 19A - 12.'
  },
  {
    id: 'faq-5',
    question: '¿Qué medios de pago reciben?',
    answer: 'Aceptamos transferencias Nequi, Daviplata, Bancolombia, pagos con tarjeta mediante enlace de pago seguro y efectivo directamente en nuestro local en Valledupar.'
  }
];
