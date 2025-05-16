---
layout: default
title: أرشيف المدونة
permalink: /blog/archive/
---

<section class="relative z-10 py-20 px-4 md:px-12 bg-gradient-to-b from-dark to-gray-900/50" id="archive">
    <div class="container mx-auto">
        <div class="text-center mb-16 animate-on-scroll"> 
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
                <span class="gradient-text neon-flicker">{{ page.title }}</span>
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p class="text-gray-400 max-w-3xl mx-auto">
                تصفح المقالات حسب الشهر والسنة
            </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
            {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
            {% for year in postsByYear %}
            <div class="mb-12 animate-on-scroll">
                <h2 class="text-2xl font-bold text-light mb-6 flex items-center">
                    <span class="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center ml-4 border border-cyan-500/30 pulse-soft">
                        <i class="fas fa-calendar-alt text-cyan-400"></i>
                    </span>
                    {{ year.name }}
                </h2>
                
                {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%m'" %}
                {% for month in postsByMonth %}
                <div class="mb-8">
                    <h3 class="text-xl font-bold text-light mb-4 flex items-center">
                        <span class="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center ml-4 border border-purple-500/30 pulse-soft">
                            <i class="fas fa-calendar-day text-purple-400"></i>
                        </span>
                        {% assign month_name = "" %}
                        {% case month.name %}
                            {% when '01' %}{% assign month_name = "يناير" %}
                            {% when '02' %}{% assign month_name = "فبراير" %}
                            {% when '03' %}{% assign month_name = "مارس" %}
                            {% when '04' %}{% assign month_name = "أبريل" %}
                            {% when '05' %}{% assign month_name = "مايو" %}
                            {% when '06' %}{% assign month_name = "يونيو" %}
                            {% when '07' %}{% assign month_name = "يوليو" %}
                            {% when '08' %}{% assign month_name = "أغسطس" %}
                            {% when '09' %}{% assign month_name = "سبتمبر" %}
                            {% when '10' %}{% assign month_name = "أكتوبر" %}
                            {% when '11' %}{% assign month_name = "نوفمبر" %}
                            {% when '12' %}{% assign month_name = "ديسمبر" %}
                        {% endcase %}
                        {{ month_name }}
                    </h3>
                    
                    <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800 holographic-card">
                        <ul class="space-y-4">
                            {% for post in month.items %}
                            <li class="flex items-start">
                                <div class="w-10 h-10 bg-cyan-500/10 rounded-full flex-shrink-0 flex items-center justify-center ml-4 border border-cyan-500/30">
                                    <span class="text-cyan-400 font-bold">{{ post.date | date: "%d" }}</span>
                                </div>
                                <div>
                                    <a href="{{ site.baseurl }}{{ post.url }}" class="text-light font-bold hover:text-cyan-400 transition-all block mb-2">{{ post.title }}</a>
                                    <div class="flex flex-wrap gap-2">
                                        {% for category in post.categories limit:3 %}
                                        <a href="{{ site.baseurl }}/blog/category/{{ category | slugify }}/" class="text-xs bg-gray-800 text-gray-400 py-1 px-2 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                                            {{ category }}
                                        </a>
                                        {% endfor %}
                                    </div>
                                </div>
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                </div>
                {% endfor %}
            </div>
            {% endfor %}
        </div>
    </div>
</section>
