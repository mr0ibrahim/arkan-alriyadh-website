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
  { id: 'sheeboard-01', category: 'sheeboard', title: 'تكسية خشبية خلف شاشة التلفزيون', alt: 'تصور تصميمي لتكسية شيبورد بشرائح خشبية عمودية خلف شاشة التلفزيون', src: '/images/sheeboard-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'parquet-01', category: 'parquet', title: 'أرضية باركيه بنمط هندسي', alt: 'تصور تصميمي لأرضية باركيه بنمط هندسي في غرفة معيشة راقية', src: '/images/parquet-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'skirting-01', category: 'fiber-skirting', title: 'نعلات تشطيب بيضاء', alt: 'تصور تصميمي لنعلات فايبر بيضاء عند التقاء الجدار بالأرضية مع زاوية مقصوصة بدقة', src: '/images/fiber-skirting-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'mouldings-01', category: 'foam-mouldings', title: 'بانوهات جدارية كلاسيكية', alt: 'تصور تصميمي لبراويز فوم وبانوهات مستطيلة بارزة على جدار مجلس فاخر', src: '/images/foam-mouldings-main.webp', source: 'AI-generated illustrative concept' },
  { id: 'painting-01', category: 'painting', title: 'دهانات ديكورية بملمس حجري', alt: 'تصور تصميمي لجدار بدهانات ديكورية ملمسية بلون بيج دافئ', src: '/images/painting-main.webp', source: 'AI-generated illustrative concept' },
];

export const galleryCategories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'جميع التصاميم' },
  { id: 'sheeboard', label: 'الشيبورد' },
  { id: 'parquet', label: 'الباركيه' },
  { id: 'fiber-skirting', label: 'نعلات الفايبر' },
  { id: 'foam-mouldings', label: 'البانوهات' },
  { id: 'painting', label: 'الدهانات' },
];
