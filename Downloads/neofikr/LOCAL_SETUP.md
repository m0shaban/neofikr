# تشغيل مدونة NeoFikr محليًا

هذا الملف يشرح الخطوات اللازمة لتشغيل مدونة NeoFikr المبنية بـ Jekyll محليًا على جهازك.

## المتطلبات الأساسية

قبل البدء، تأكد من تثبيت البرامج التالية:

1. **Ruby**: قم بتثبيت آخر إصدار من Ruby (2.7.0 أو أحدث)
   - للويندوز: [RubyInstaller](https://rubyinstaller.org/)
   - للماك: `brew install ruby` (باستخدام Homebrew)
   - للينكس: `sudo apt-get install ruby-full` (أوبونتو)

2. **RubyGems**: يأتي مع تثبيت Ruby عادةً

3. **Bundler**: قم بتثبيته بعد تثبيت Ruby
   ```powershell
   gem install bundler
   ```

## خطوات التشغيل

1. **استنساخ المستودع**
   ```powershell
   git clone https://github.com/m0shaban/neofikr.git
   cd neofikr
   ```

2. **تثبيت الاعتماديات**
   ```powershell
   bundle install
   ```

3. **تشغيل الخادم المحلي**
   ```powershell
   bundle exec jekyll serve --livereload
   ```

4. **فتح المتصفح**
   افتح المتصفح واذهب إلى الرابط:
   ```
   http://localhost:4000/neofikr/
   ```

الآن يمكنك رؤية المدونة والموقع بالكامل يعمل محليًا على جهازك!

## إضافة مقالات جديدة

1. **إنشاء ملف المقال**
   قم بإنشاء ملف جديد في مجلد `_posts` باسم يتبع النمط:
   ```
   YYYY-MM-DD-title-slug.md
   ```
   مثال: `2025-05-15-artificial-intelligence-future.md`

2. **إضافة معلومات المقال**
   في بداية الملف، أضف معلومات المقال (Front Matter):
   ```yaml
   ---
   layout: post
   title: "عنوان المقال الخاص بك"
   author: "اسمك"
   date: 2025-05-15
   categories: [تصنيف1, تصنيف2]
   tags: [وسم1, وسم2, وسم3]
   image: "images/اسم-الصورة.jpg"
   description: "وصف قصير للمقال الخاص بك"
   ---

   المحتوى الخاص بمقالتك هنا...
   ```

3. **إضافة محتوى المقال**
   أضف محتوى المقال باستخدام صيغة Markdown بعد جزء Front Matter.

4. **إضافة الصور**
   قم بإضافة الصور المستخدمة في المقال إلى مجلد `images`.

## تخصيص المدونة

- **تعديل القوالب**: يمكنك تعديل قوالب الصفحات في مجلد `_layouts`
- **تعديل المكونات المشتركة**: يمكنك تعديل الترويسة والتذييل في مجلد `_includes`
- **تعديل الأنماط**: يمكنك تعديل CSS في ملف `css/styles.css`
- **تعديل إعدادات Jekyll**: يمكنك تعديل إعدادات Jekyll في ملف `_config.yml`

## استكشاف الأخطاء وإصلاحها

إذا واجهت أي مشاكل، جرّب الخطوات التالية:

1. **تحديث الإضافات**
   ```powershell
   bundle update
   ```

2. **مسح ذاكرة التخزين المؤقت**
   ```powershell
   bundle exec jekyll clean
   ```

3. **التحقق من الأخطاء**
   ```powershell
   bundle exec jekyll build --trace
   ```

## موارد إضافية

- [توثيق Jekyll الرسمي](https://jekyllrb.com/docs/)
- [Liquid للقوالب](https://shopify.github.io/liquid/)
- [توثيق Markdown](https://www.markdownguide.org/)
