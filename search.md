---
layout: default
title: البحث في المدونة
permalink: /blog/search/
---

<section class="relative z-10 py-20 px-4 md:px-12 bg-gradient-to-b from-dark to-gray-900/50" id="search">
    <div class="container mx-auto">
        <div class="text-center mb-16 animate-on-scroll"> 
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
                <span class="gradient-text neon-flicker">{{ page.title }}</span>
            </h1>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
            <p class="text-gray-400 max-w-3xl mx-auto">
                ابحث في جميع مقالات المدونة
            </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
            <div class="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-12 relative overflow-hidden holographic-card animate-on-scroll">
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full pulse"></div>
                <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full pulse" data-animation-delay="1s"></div>
                
                <div class="relative z-10">
                    <div class="flex w-full mb-8">
                        <div class="relative flex-grow">
                            <input type="text" id="search-input" placeholder="ابحث هنا..." class="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 focus:border-cyan-500/50 rounded-r-full text-light outline-none transition-all duration-300" aria-label="مربع البحث">
                            <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                        <button id="search-button" class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-l-full text-dark font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">بحث</button>
                    </div>
                    
                    <div id="search-results" class="space-y-6">
                        <!-- النتائج ستظهر هنا -->
                        <div class="text-center text-gray-400 py-8" id="search-placeholder">
                            <i class="fas fa-search text-4xl mb-4 text-cyan-400/50"></i>
                            <p>أدخل كلمات البحث للعثور على المقالات</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Load all posts data
    fetch('{{ site.baseurl }}/posts.json')
        .then(response => response.json())
        .then(data => {
            const searchInput = document.getElementById('search-input');
            const searchButton = document.getElementById('search-button');
            const searchResults = document.getElementById('search-results');
            const searchPlaceholder = document.getElementById('search-placeholder');
            
            // Search function
            function performSearch() {
                const query = searchInput.value.trim().toLowerCase();
                
                if (query.length < 2) {
                    searchResults.innerHTML = '';
                    searchPlaceholder.style.display = 'block';
                    return;
                }
                
                searchPlaceholder.style.display = 'none';
                
                // Filter posts based on search query
                const results = data.posts.filter(post => {
                    return post.title.toLowerCase().includes(query) || 
                           post.content.toLowerCase().includes(query) || 
                           post.categories.some(cat => cat.toLowerCase().includes(query)) || 
                           post.tags.some(tag => tag.toLowerCase().includes(query));
                });
                
                // Display results
                if (results.length > 0) {
                    let html = '';
                    
                    results.forEach(post => {
                        html += `
                        <div class="bg-gray-900/70 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden holographic-card">
                            <div class="flex flex-col md:flex-row md:items-center">
                                ${post.image ? 
                                `<div class="md:w-1/4 mb-4 md:mb-0 md:ml-4">
                                    <div class="w-full h-24 rounded-lg overflow-hidden">
                                        <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover">
                                    </div>
                                </div>` : ''}
                                <div class="md:w-${post.image ? '3/4' : 'full'}">
                                    <h3 class="text-xl font-bold text-light mb-2">
                                        <a href="${post.url}" class="hover:text-cyan-400 transition-all">${post.title}</a>
                                    </h3>
                                    <div class="flex flex-wrap items-center text-gray-400 text-sm mb-2">
                                        <span class="flex items-center ml-4 mb-2">
                                            <i class="far fa-calendar-alt ml-1"></i>
                                            ${post.date}
                                        </span>
                                        ${post.categories.length > 0 ? 
                                        `<span class="flex items-center ml-4 mb-2">
                                            <i class="far fa-folder-open ml-1"></i>
                                            ${post.categories.map(cat => `<a href="{{ site.baseurl }}/blog/category/${cat.toLowerCase().replace(/ /g, '-')}/" class="hover:text-cyan-400 transition-all">${cat}</a>`).join(', ')}
                                        </span>` : ''}
                                    </div>
                                    <p class="text-gray-400 mb-4 line-clamp-2">${post.excerpt}</p>
                                    <a href="${post.url}" class="text-cyan-400 text-sm hover:text-cyan-300 transition-all">
                                        قراءة المزيد <i class="fas fa-chevron-left ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        `;
                    });
                    
                    searchResults.innerHTML = html;
                } else {
                    searchResults.innerHTML = `
                    <div class="text-center text-gray-400 py-8">
                        <i class="fas fa-times-circle text-4xl mb-4 text-pink-400/50"></i>
                        <p>لا توجد نتائج مطابقة لـ "${query}"</p>
                    </div>
                    `;
                }
            }
            
            // Event listeners
            searchButton.addEventListener('click', performSearch);
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        })
        .catch(error => {
            console.error('Error loading posts data:', error);
            document.getElementById('search-results').innerHTML = `
            <div class="text-center text-gray-400 py-8">
                <i class="fas fa-exclamation-circle text-4xl mb-4 text-pink-400/50"></i>
                <p>حدث خطأ أثناء تحميل بيانات المقالات</p>
            </div>
            `;
        });
});
</script>
