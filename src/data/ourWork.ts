/** صور مقدمة من العميل. التصنيف وصفي حسب الصورة، دون إثبات الملكية أو مواد التنفيذ. */
export type WorkCategory = 'sheeboard' | 'parquet' | 'fiber-skirting' | 'foam-mouldings' | 'painting' | 'process';
export interface WorkItem { id: string; category: WorkCategory; title: string; src: string; width: number; height: number; status: string; }
export const workItems: WorkItem[] = [
  { id: 'work-01', category: 'sheeboard', title: 'مجلس بتكسية جدارية خشبية', src: '/images/our-work/work-01.webp', width: 1440, height: 1080, status: 'مكتمل' },
  { id: 'work-02', category: 'sheeboard', title: 'جدار تلفزيون بكسوة خشبية', src: '/images/our-work/work-02.webp', width: 1280, height: 1280, status: 'مكتمل' },
  { id: 'work-03', category: 'sheeboard', title: 'تكسية جدارية مع إضاءة مخفية', src: '/images/our-work/work-03.webp', width: 960, height: 1280, status: 'مكتمل' },
  { id: 'work-04', category: 'sheeboard', title: 'تكسية جدار بمنطقة معيشة', src: '/images/our-work/work-04.webp', width: 1280, height: 960, status: 'مكتمل' },
  { id: 'work-05', category: 'sheeboard', title: 'ألواح جدارية بتكوين عصري', src: '/images/our-work/work-05.webp', width: 736, height: 552, status: 'قيد التنفيذ' },
  { id: 'work-06', category: 'parquet', title: 'باركيه هندسي بمساحة واسعة', src: '/images/our-work/work-06.webp', width: 1440, height: 1080, status: 'مكتمل' },
  { id: 'work-07', category: 'parquet', title: 'أرضية خشبية بنمط متعرج', src: '/images/our-work/work-07.webp', width: 748, height: 608, status: 'مكتمل' },
  { id: 'work-08', category: 'parquet', title: 'باركيه بلون خشبي داكن', src: '/images/our-work/work-08.webp', width: 736, height: 981, status: 'مكتمل' },
  { id: 'work-09', category: 'parquet', title: 'أرضية خشبية بلون طبيعي', src: '/images/our-work/work-09.webp', width: 736, height: 908, status: 'مكتمل' },
  { id: 'work-10', category: 'parquet', title: 'باركيه فاتح داخل غرفة', src: '/images/our-work/work-10.webp', width: 1080, height: 1440, status: 'مكتمل' },
  { id: 'work-11', category: 'fiber-skirting', title: 'تشطيب نعلات بيضاء مع الأرضيات', src: '/images/our-work/work-11.webp', width: 736, height: 736, status: 'مكتمل' },
  { id: 'work-12', category: 'fiber-skirting', title: 'تفاصيل نعلات الدرج', src: '/images/our-work/work-12.webp', width: 699, height: 1440, status: 'قيد التنفيذ' },
  { id: 'work-13', category: 'fiber-skirting', title: 'زوايا النعلات وتفاصيل التركيب', src: '/images/our-work/work-13.webp', width: 1440, height: 1080, status: 'قيد التنفيذ' },
  { id: 'work-14', category: 'foam-mouldings', title: 'بانوهات جدارية بممر أنيق', src: '/images/our-work/work-14.webp', width: 736, height: 981, status: 'مكتمل' },
  { id: 'work-15', category: 'foam-mouldings', title: 'براويز جدارية داخل مجلس', src: '/images/our-work/work-15.webp', width: 736, height: 1104, status: 'مكتمل' },
  { id: 'work-16', category: 'foam-mouldings', title: 'بانوهات جدارية هندسية', src: '/images/our-work/work-16.webp', width: 590, height: 787, status: 'مكتمل' },
  { id: 'work-17', category: 'foam-mouldings', title: 'بانوهات كلاسيكية بيضاء', src: '/images/our-work/work-17.webp', width: 720, height: 878, status: 'مكتمل' },
  { id: 'work-18', category: 'painting', title: 'دهانات داخلية بألوان محايدة', src: '/images/our-work/work-18.webp', width: 655, height: 960, status: 'مكتمل' },
  { id: 'work-19', category: 'process', title: 'أعمال تشطيب داخلية أثناء التنفيذ', src: '/images/our-work/work-19.webp', width: 1440, height: 1080, status: 'قيد التنفيذ' },
  { id: 'work-20', category: 'process', title: 'معالجة فواصل الأسقف أثناء التنفيذ', src: '/images/our-work/work-20.webp', width: 960, height: 1280, status: 'قيد التنفيذ' },
];
export const workCategories = [
  { id: 'all', label: 'جميع الأعمال' },
  { id: 'sheeboard', label: 'التكسيات الجدارية' },
  { id: 'parquet', label: 'الباركيه' },
  { id: 'fiber-skirting', label: 'نعلات الفايبر' },
  { id: 'foam-mouldings', label: 'البانوهات' },
  { id: 'painting', label: 'الدهانات' },
  { id: 'process', label: 'مراحل التنفيذ' },
] as const;
