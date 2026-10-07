const base = import.meta.env.BASE_URL;
const img = (name) => `${base}images/sevdam/${name}`;

const contact = {
  phone: "0542 723 54 55",
  phoneHref: "tel:+905427235455",
  phone2: "0530 645 87 77",
  phone2Href: "tel:+905306458777",
  whatsappHref: "https://wa.me/905427235455",
  instagramHref: "https://www.instagram.com/sevdamcafe.davetevi/",
  address: "Atatürk Mah. Sami Soysal Cd. No:12/A, Ünye / Ordu",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Sevda'M+Davet+Evi+Sami+Soysal+Cd+12A+%C3%9Cnye",
};

const flavorlists = [
  {
    name: "Kız İsteme",
    img: img("kiz-isteme.jpg"),
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Söz & Nişan",
    img: img("nisan.jpg"),
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Kına Gecesi",
    img: img("kina.jpg"),
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Doğum Günü",
    img: img("dogum-gunu.jpg"),
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Bebek Partisi",
    img: img("bebek-partisi.jpg"),
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Cafe & Buluşma",
    img: img("cafe.jpg"),
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Kapasite", sub: "en fazla", amount: "250 Kişi" },
  { label: "Google Puanı", sub: "misafir yorumlarıyla", amount: "5 / 5" },
  { label: "Konsept", sub: "istemeden kınaya", amount: "6+" },
  { label: "Açılış", sub: "sabah", amount: "08:30" },
  { label: "Konum", sub: "Ordu", amount: "Ünye" },
];

const cards = [
  {
    src: img("ayna-elif-gokhan.jpg"),
    rotation: "rotate-z-[-10deg]",
    name: "Karşılama aynası",
    translation: "translate-y-[-5%]",
  },
  {
    src: img("pasta.jpg"),
    rotation: "rotate-z-[4deg]",
    name: "Pasta sunumu",
  },
  {
    src: img("neon-koltuk.jpg"),
    rotation: "rotate-z-[-4deg]",
    name: "Hikayemiz Başlıyor köşesi",
    translation: "translate-y-[-5%]",
  },
  {
    src: img("ayna-dilek.jpg"),
    rotation: "rotate-z-[4deg]",
    name: "Kişiye özel karşılama yazısı",
    translation: "translate-y-[5%]",
  },
  {
    src: img("samdan.jpg"),
    rotation: "rotate-z-[-10deg]",
    name: "Kristal şamdan ve çiçek sütunu",
  },
  {
    src: img("altin-tepsi.jpg"),
    rotation: "rotate-z-[4deg]",
    name: "Altın ikram tepsisi",
    translation: "translate-y-[5%]",
  },
  {
    src: img("ayna-ceren-deniz.jpg"),
    rotation: "rotate-z-[-3deg]",
    name: "Kırmızı halı girişi",
    translation: "translate-y-[10%]",
  },
];

export { flavorlists, nutrientLists, cards, contact, img };
