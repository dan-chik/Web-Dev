export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    kaspiLink: string;
    likes: number;
    category: string;
}

export const products = [
    {
      id: 1,
      name: 'Серьги Золото России',
      price: 301930,
      description: 'желтое золото с бриллиантовой ставкой',
      image: '/assets/1.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/ser-gi-zoloto-rossii-j312-6721-ves-2-9-g-zoloto-brilliant-116270151/?c=750000000&ref=shared_link',
      likes: 10,
      category: 'Earings',
    },
    {
      id: 2,
      name: 'Кольцо IMPERIAL',
      price: 560400,
      description: 'размер 16.5 вес 3.05 г золото, бриллиант',
      image: '/assets/2.jpg',
      rating: 4.8,
      kaspiLink: 'https://kaspi.kz/shop/p/imperial-k0258-220-razmer-16-5-ves-3-05-g-zoloto-brilliant-109848616/?c=750000000&ref=shared_link',
      likes: 10,
      category: 'Ring',
    },
    {
      id: 3,
      name: 'Конго Saniya Gold',
      price: 359000,
      description: 'вес 8.97 г золотоб bез вставок',
      image: '/assets/3.jpg',
      rating: 3.2,
      kaspiLink: 'https://kaspi.kz/shop/p/kongo-saniya-gold-450349-ves-8-97-g-zoloto-bez-vstavok-116571386/?c=750000000&ref=shared_link',
      likes: 10,
      category: 'Earings',
    },
    {
      id: 4,
      name: 'Цепь Золото России',
      price: 116000,
      description: 'длина 55 см, вес 4.23 г золото, плетение бисмарк',
      image: '/assets/4.jpg',
      rating: 2.2,
      kaspiLink: 'https://kaspi.kz/shop/p/zoloto-rossii-570007023-dlina-55-sm-ves-4-23-g-zoloto-pletenie-bismark-108406609/?c=750000000&ref=shared_link',
      likes: 0,
      category: 'Necklace',
    },
    {
      id: 5,
      name: 'Цепь Qulan',
      price: 235000,
      description: 'длина 55 см, вес 6.13 г золото, плетение гарибальди',
      image: '/assets/5.jpg',
      rating: 4.2,
      kaspiLink: 'https://kaspi.kz/shop/p/qulan-230657sk-dlina-55-sm-ves-6-13-g-zoloto-pletenie-garibal-di-106268152/?c=750000000&ref=shared_link',
      likes: 0,
      category: 'Bracelet',
    },
    {
      id: 6,
      name: 'Кольцо ASSOS',
      price: 116000,
      description: 'размер 16.5 вес 2.19 г золото, без вставок',
      image: '/assets/6.jpg',
      rating: 3.3,
      kaspiLink: 'https://kaspi.kz/shop/p/assos-0031094303521-razmer-16-5-ves-2-19-g-zoloto-bez-vstavok-114208893/?c=750000000&ref=shared_link',
      likes: 0,
      category: 'Ring',
    },
    {
      id: 7,
      name: 'Кольцо АЛЬКОР',
      price: 359000,
      description: 'размер 16 вес 0.94 г золото, бриллиант',
      image: '/assets/7.jpg',
      rating: 3.2,
      kaspiLink: 'https://kaspi.kz/shop/p/al-kor-11712-100-razmer-16-ves-0-94-g-zoloto-brilliant-116305015/?c=750000000&ref=shared_link',
      likes: 0,
      category: 'Ring',
    },
    {
      id: 8,
      name: 'Кольцо Санис',
      price: 80600,
      description: 'размер 15.5 вес 1.24 г золото, фианит',
      image: '/assets/8.jpg',
      rating: 4.4,
      kaspiLink: 'https://kaspi.kz/shop/p/sanis-01-115221-razmer-15-5-ves-1-24-g-zoloto-fianit-116333826/?c=750000000&ref=shared_link',
      likes: 0,
      category: 'Ring',
    },
    {
      id: 9,
      name: 'Серьги Saniya Gold LEONARDO',
      price: 203000,
      description: 'вес 5.81 г золото, без вставок',
      image: '/assets/9.jpg',
      rating: 4.1,
      kaspiLink: 'https://kaspi.kz/shop/p/ser-gi-saniya-gold-leonardo-ves-5-81-g-zoloto-bez-vstavok-116243612/?c=750000000&ref=shared_link',
      likes: 0,
      category: 'Earings',
    },
    {
      id: 10,
      name: 'Серьги ADEMA GOLD',
      price: 359000,
      description: 'вес 3.69 г золото, без вставок',
      image: '/assets/10.jpg',
      rating: 3.2,
      kaspiLink: 'https://kaspi.kz/shop/p/ser-gi-adema-gold-75959472-ves-3-69-g-zoloto-bez-vstavok-116572101/?c=750000000&ref=shared_link',
      likes: 0,
      category: 'Earings',
    }
];
  