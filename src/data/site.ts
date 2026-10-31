/** بيانات النشاط المعتمدة؛ عدّل القيم عند الحاجة. */
export const site = {
  name: 'أركان الرياض للديكور',
  subtitle: 'تصميم وتنفيذ وتوريد الديكور الداخلي',
  fullName: 'أركان الرياض للديكور والتشطيبات',
  legalName: 'مؤسسة أركان الرياض للديكور والتشطيبات الداخلية',
  defaultUrl: 'https://arkan-alriyadh.com',
  yearsExperience: 12,
  phoneDisplay: '+966 53 334 0982',
  phoneE164: '+966533340982',
  whatsappNumber: '966533340982',
  email: 'info@arkan-alriyadh.com',
  serviceCity: 'الرياض',
  country: 'المملكة العربية السعودية',
  countryCode: 'SA',
  regionCode: 'SA-01',
  suppliesNationwide: true,
  temporaryBrand: false,
  priceRange: '$$',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 08:00-22:00',
  geo: {
    latitude: 24.7136,
    longitude: 46.6753,
  },
  address: {
    streetAddress: 'طريق الملك فهد',
    addressLocality: 'الرياض',
    addressRegion: 'منطقة الرياض',
    postalCode: '11564',
    addressCountry: 'SA',
  },
  keywords: [
    'ديكورات الرياض',
    'شيبورد الرياض',
    'تكسيات جدارية خشبية',
    'باركيه الرياض',
    'تركيب باركيه',
    'نعلات فايبر',
    'بانوهات فوم',
    'براويز جدارية فوم',
    'دهانات داخلية بالرياض',
    'تشطيبات ديكور الرياض',
    'توريد خامات ديكور بالمملكة',
    'بديل الخشب والرخام',
  ],
} as const;

export const contactLink = (service?: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    service
      ? `السلام عليكم، أريد الاستفسار عن خدمة ${service} لدى ${site.name}.`
      : `السلام عليكم، أريد الاستفسار عن خدمات ${site.name}.`,
  )}`;

export const callLink = `tel:${site.phoneE164}`;
