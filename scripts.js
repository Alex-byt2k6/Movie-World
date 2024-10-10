// scripts.js

const seriesList = [
    { title: "Series 1", image: "series1.jpg", link: "watch.html?trailer=trailer1.mp4" },
    { title: "Series 2", image: "series2.jpg", link: "watch.html?trailer=trailer2.mp4" },
    { title: "Series 3", image: "series3.jpg", link: "watch.html?trailer=trailer3.mp4" }
];

function searchSeries() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    // Clear previous search results
    searchResults.innerHTML = '';

    // Filter series based on input
    const filteredSeries = seriesList.filter(series => 
        series.title.toLowerCase().includes(input)
    );

    // Create cards for each matching series
    filteredSeries.forEach(series => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${series.image}" alt="${series.title}">
            <h3>${series.title}</h3>
            <a href="${series.link}" class="watch-now">Watch Now</a>
        `;
        searchResults.appendChild(card);
    });

    // Scroll up to the search results if there are matches
    if (filteredSeries.length > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
