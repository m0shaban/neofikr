# تثبيت واستخدام مدونة NeoFikr

هذا الملف يشرح كيفية تثبيت وتشغيل المدونة المبنية باستخدام Jekyll على موقع NeoFikr.

## المتطلبات الأساسية

يجب تثبيت البرامج التالية على جهازك:

1. [Ruby](https://www.ruby-lang.org/) (الإصدار 2.7.0 أو أحدث)
2. [RubyGems](https://rubygems.org/)
3. [GCC](https://gcc.gnu.org/) و[Make](https://www.gnu.org/software/make/) (لنظام Linux/MacOS) أو [Build Tools for Visual Studio](https://visualstudio.microsoft.com/downloads/) (لنظام Windows)

## خطوات التثبيت

### 1. تثبيت Jekyll والإضافات

افتح نافذة الأوامر (Terminal) وقم بتنفيذ الأوامر التالية في مجلد المشروع:

```bash
# تثبيت Bundler (إذا لم يكن موجودًا)
gem install bundler

# تثبيت جميع الإضافات المطلوبة من ملف Gemfile
bundle install
```

### 2. تشغيل الخادم المحلي

لتشغيل المدونة محليًا للتطوير والاختبار:

```bash
bundle exec jekyll serve --livereload
```

سيقوم هذا الأمر بتشغيل خادم محلي على العنوان `http://localhost:4000/neofikr/`

ميزة `--livereload` ستقوم بتحديث الموقع تلقائيًا عند إجراء أي تغييرات على الملفات.

## إضافة مقالات جديدة

لإضافة مقال جديد، قم بإنشاء ملف Markdown في مجلد `_posts` باسم ملف بالتنسيق:
`YYYY-MM-DD-title-slug.md`

على سبيل المثال: `2025-06-01-blockchain-fintech.md`

يجب أن يبدأ كل مقال بقسم الـ front matter الذي يحتوي على البيانات الوصفية:

```markdown
---
layout: post
title: "عنوان المقال"
author: "اسم الكاتب"
date: YYYY-MM-DD
categories: [تصنيف1, تصنيف2]
tags: [وسم1, وسم2, وسم3]
image: "images/image-name.jpg"
description: "وصف قصير للمقال"
---

محتوى المقال هنا...
```

## تخصيص المدونة

### الإعدادات الأساسية

يمكنك تعديل الإعدادات الأساسية للمدونة من خلال ملف `_config.yml`.

### القوالب

قوالب الصفحات موجودة في مجلد `_layouts`:
- `default.html`: القالب الأساسي للموقع
- `blog.html`: قالب صفحة المدونة الرئيسية
- `post.html`: قالب عرض المقال
- `category.html`: قالب صفحة التصنيف
- `tag.html`: قالب صفحة الوسم

### الأجزاء المشتركة

العناصر المشتركة مثل الرأس والتذييل موجودة في مجلد `_includes`:
- `header.html`: ترويسة الموقع
- `footer.html`: تذييل الموقع

## النشر على GitHub Pages

لنشر المدونة على GitHub Pages:

1. تأكد من أن التغييرات المحلية تعمل بشكل صحيح
2. قم بدفع التغييرات إلى مستودع GitHub:
   ```bash
   git add .
   git commit -m "تحديث المدونة"
   git push origin master
   ```
3. سيقوم GitHub Pages تلقائيًا ببناء ونشر الموقع (قد يستغرق هذا بضع دقائق)

## الدعم والمساعدة

إذا واجهتك أي مشكلة، راجع الوثائق الرسمية لـ Jekyll على [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/) أو تواصل مع فريق التطوير.
