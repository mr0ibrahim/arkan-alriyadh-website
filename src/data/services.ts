export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'sheeboard',
    title: 'الشيبورد',
    shortDescription: 'لمسات جدارية عصرية',
    description:
      'تصميم وتنفيذ ديكورات الشيبورد بأشكال وخامات متنوعة تناسب المساحات الداخلية وذوق العميل.',
  },
  {
    id: 'parquet',
    title: 'باركيه الأرضيات',
    shortDescription: 'أناقة تبدأ من الأرضيات',
    description:
      'توريد وتركيب أرضيات الباركيه بتصاميم وألوان متنوعة، مع الاهتمام بتناسق الأرضيات والتشطيبات.',
  },
  {
    id: 'fiber-skirting',
    title: 'نعلات الفايبر',
    shortDescription: 'تفاصيل تكمّل جمال المساحة',
    description:
      'توريد وتركيب نعلات الفايبر بأشكال وتشطيبات تتناسب مع الأرضيات والجدران.',
  },
  {
    id: 'foam-mouldings',
    title: 'براويز الفوم (البانوهات)',
    shortDescription: 'جدران بتفاصيل راقية',
    description:
      'تصميم وتنفيذ البانوهات والبراويز الجدارية الكلاسيكية والعصرية حسب الطلب.',
  },
  {
    id: 'painting',
    title: 'الدهانات والديكورات',
    shortDescription: 'ألوان وتشطيبات تعكس ذوقك',
    description:
      'تنفيذ الدهانات الداخلية العادية والديكورية، مع خيارات متنوعة للألوان والتأثيرات الجدارية.',
  },
];
