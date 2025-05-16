---
layout: default
title: الوسوم
permalink: /blog/tags/
---

<section class="relative z-10 py-20 px-4 md:px-12 bg-gradient-to-b from-dark to-gray-900/50" id="tags">
    <div class="container mx-auto">
        <div class="text-center mb-16 animate-on-scroll"> 
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
                <span class="gradient-text neon-flicker">{{ page.title }}</span>
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p class="text-gray-400 max-w-3xl mx-auto">
                تصفح المقالات حسب الوسوم
            </p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4 mb-16">
            {% assign tags_list = site.tags | sort %}
            {% for tag in tags_list %}
            <a href="{{ site.baseurl }}/blog/tag/{{ tag[0] | slugify }}/" class="px-4 py-2 bg-gradient-to-r from-gray-900 to-dark rounded-full text-cyan-400 hover:text-light border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 text-sm animate-on-scroll" style="animation-delay: {{ forloop.index | times: 0.05 }}s;">
                #{{ tag[0] }} <span class="text-gray-500">({{ tag[1].size }})</span>
            </a>
            {% endfor %}
        </div>
        
        <div class="bg-gradient-to-b from-gray-900 to-dark rounded-xl p-8 border border-gray-800 max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-light mb-6 gradient-text">الوسوم الشائعة</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {% assign popular_tags = site.tags | sort: 'last.size' | reverse | limit: 6 %}
                {% for tag in popular_tags %}
                <a href="{{ site.baseurl }}/blog/tag/{{ tag[0] | slugify }}/" class="flex items-center space-x-4 p-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 border border-transparent hover:border-cyan-500/30 rtl:space-x-reverse">
                    <div class="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/30 pulse-soft">
                        <i class="fas fa-tag text-xl text-cyan-400"></i>
                    </div>
                    <div class="rtl:mr-4">
                        <h3 class="text-lg font-bold text-light">#{{ tag[0] }}</h3>
                        <p class="text-gray-400 text-sm">{{ tag[1].size }} مقال</p>
                    </div>
                </a>
                {% endfor %}
            </div>
        </div>
    </div>
</section>
