function fetchBloggerFeed() {
    const feedURL = 'https://zomboot.blogspot.com/feeds/posts/default'; // Reemplaza con tu URL
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedURL)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('feed-container');
            data.items.forEach(item => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <h2><a href="${item.link}">${item.title}</a></h2>
                    <p>Publicado el: ${new Date(item.pubDate).toLocaleDateString()}</p>
                    <div>${item.description}</div>
                `;
                container.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error al obtener el feed:', error));
}

fetchBloggerFeed();