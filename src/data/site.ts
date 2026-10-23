/** عدّل هذا الملف فقط عند اعتماد هوية العميل والرقم. */
export const site = {
  name: 'أركان الرياض', // اسم مؤقت إلى حين التحقق التجاري
  subtitle: 'للتصميم الداخلي والاستشارات',
  fullName: 'أركان الرياض للتصميم الداخلي والاستشارات',
  yearsExperience: 12,
  phoneDisplay: '+966 53 334 0982',
  phoneE164: '+966533340982',
  whatsappNumber: '966533340982',
  serviceCity: 'الرياض',
  suppliesNationwide: true,
  temporaryBrand: true,
} as const;

export const contactLink = (service?: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    service
      ? `السلام عليكم، أريد الاستفسار عن خدمة ${service} لدى ${site.name}.`
      : `السلام عليكم، أريد الاستفسار عن خدمات ${site.name}.`,
  )}`;
export const callLink = `tel:${site.phoneE164}`;
