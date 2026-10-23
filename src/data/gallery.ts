/**
 * صور مرجعية من Unsplash ورسومات توضيحية محلية؛ ليست مشاريع منفذة لدى أركان الرياض.
 * لتغيير أي صورة: ضعها في public/images ثم غيّر src إلى /images/اسم-الصورة.webp
 * راجع IMAGE_SOURCES.md لمصادر وتراخيص الصور.
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
  { id: 'wood-01', category: 'sheeboard', title: 'تكسية جدارية خشبية', alt: 'تصميم مرجعي لجدار بشرائح خشبية داخل مساحة حديثة', src: photo('photo-1777613359399-d13a513aa571'), source: 'https://unsplash.com/photos/modern-interior-with-wooden-slatted-walls-and-seating-areas-Vh-PU2TLZHE' },
  { id: 'parquet-01', category: 'parquet', title: 'باركيه بلون خشبي دافئ', alt: 'صالة مع أرضية باركيه خشبية بنمط عصري', src: photo('photo-1598718544285-7180f670198b'), source: 'https://unsplash.com/photos/living-room-with-brown-wooden-parquet-floor-and-white-wall-kffkjgreORE' },
  { id: 'skirting-01', category: 'fiber-skirting', title: 'تصور توضيحي لنعلات الفايبر', alt: 'رسم توضيحي لنعلات تشطيب بيضاء على التقاء الجدار بالأرضية', src: '/images/fiber-skirting-reference.svg', source: 'local-original-illustration' },
  { id: 'mouldings-01', category: 'foam-mouldings', title: 'تصور توضيحي للبانوهات', alt: 'رسم توضيحي لبراويز بانوهات مستطيلة على جدار عاجي', src: '/images/foam-mouldings-reference.svg', source: 'local-original-illustration' },
  { id: 'paint-01', category: 'painting', title: 'تصور توضيحي للدهانات', alt: 'رسم توضيحي لجدار مطلي بدرجات دافئة من البيج والبني', src: '/images/painting-reference.svg', source: 'local-original-illustration' },
];

export const galleryCategories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'جميع التصاميم' },
  { id: 'sheeboard', label: 'الشيبورد' },
  { id: 'parquet', label: 'الباركيه' },
  { id: 'fiber-skirting', label: 'نعلات الفايبر' },
  { id: 'foam-mouldings', label: 'البانوهات' },
  { id: 'painting', label: 'الدهانات' },
];
