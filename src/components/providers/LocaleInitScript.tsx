import { LOCALE_STORAGE_KEY } from "@/lib/i18n";

/** يطبّق اللغة المحفوظة قبل التهيئة لتقليل وميض RTL/LTR */
export function LocaleInitScript() {
  const script = `(function(){try{var l=localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)});if(l==="en"){document.documentElement.lang="en";document.documentElement.dir="ltr";}else if(l==="ar"){document.documentElement.lang="ar";document.documentElement.dir="rtl";}}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
