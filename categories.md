---
layout: default
title: التصنيفات
permalink: /blog/categories/
---

<section class="relative z-10 py-20 px-4 md:px-12 bg-gradient-to-b from-dark to-gray-900/50" id="categories">
    <div class="container mx-auto">
        <div class="text-center mb-16 animate-on-scroll"> 
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
                <span class="gradient-text neon-flicker">{{ page.title }}</span>
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p class="text-gray-400 max-w-3xl mx-auto">
                تصفح المقالات حسب التصنيف
            </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {% assign categories_list = site.categories | sort %}
            {% for category in categories_list %}
            <div class="bg-gradient-to-b from-gray-900 to-dark rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden holographic-card animate-on-scroll" style="animation-delay: {{ forloop.index | times: 0.1 }}s;">
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full pulse"></div>
                <div class="relative z-10 text-center">
                    <div class="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 border border-cyan-500/30 pulse-soft mx-auto">
                        <i class="fas fa-folder-open text-3xl text-cyan-400"></i>
                    </div>
                    
                    <h3 class="text-xl font-bold text-light mb-3">{{ category[0] }}</h3>
                    <p class="text-gray-400 mb-4">{{ category[1].size }} مقال</p>
                    
                    <a href="{{ site.baseurl }}/blog/category/{{ category[0] | slugify }}/" class="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-cyan-400 text-sm hover:from-cyan-500/40 hover:to-purple-600/40 transition-all duration-300 border border-cyan-500/30">
                        عرض المقالات <i class="fas fa-chevron-left mr-1"></i>
                    </a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>
