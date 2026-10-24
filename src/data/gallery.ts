/**
 * نماذج تصورية مولّدة بالذكاء الاصطناعي للعرض الإلهامي فقط، لا تمثل مشاريع منفذة.
 * لاستبدالها: ضع الصورة في public/images وعدّل قيمة src أدناه فقط.
 */
export type Category = 'sheeboard' | 'parquet' | 'fiber-skirting' | 'foam-mouldings' | 'painting';
export interface GalleryImage {
  id: string;
  category: Category;
  title: string;
  alt: string;
  src: string;
  source: string;
}
const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const gallery: GalleryImage[] = [
  { id: 'sheeboard-01', category: 'sheeboard', title: 'تكسية خشبية خلف شاشة التلفزيون', alt: 'نموذج تخيلي لتكسية جدارية بشرائح خشبية عمودية وخلفية تلفزيون', src: '/images/sheeboard-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'parquet-01', category: 'parquet', title: 'أرضية باركيه بنمط هندسي', alt: 'نموذج تخيلي لأرضية خشبية بنمط هندسي في غرفة معيشة راقية', src: '/images/parquet-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'skirting-01', category: 'fiber-skirting', title: 'نعلات تشطيب بيضاء', alt: 'نموذج تخيلي لنعلات بيضاء عند التقاء الجدار والأرضية مع توضيح الزاوية', src: '/images/fiber-skirting-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'mouldings-01', category: 'foam-mouldings', title: 'بانوهات جدارية كلاسيكية', alt: 'نموذج تخيلي لبراويز بانوهات مستطيلة بارزة على جدار مجلس فاخر', src: '/images/foam-mouldings-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'painting-01', category: 'painting', title: 'دهانات ديكورية بملمس حجري', alt: 'نموذج تخيلي لجدار بتشطيب دهان ديكوري ملمسي بلون بيج دافئ', src: '/images/painting-main.webp', source: 'AI-generated illustrative concept' },
];

export const galleryCategories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'جميع التصاميم' },
  { id: 'sheeboard', label: 'الشيبورد' },
  { id: 'parquet', label: 'الباركيه' },
  { id: 'fiber-skirting', label: 'نعلات الفايبر' },
  { id: 'foam-mouldings', label: 'البانوهات' },
  { id: 'painting', label: 'الدهانات' },
];
