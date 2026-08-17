document.addEventListener('DOMContentLoaded', async () => {
    async function loadJson(url) {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`ไม่สามารถโหลด ${url} ได้: ${response.status}`);
        }
        return response.json();
    }

    try {
        const aboutData = await loadJson('assets/data/about.json');
        const aboutSection = document.getElementById('about-bio-me');

        if (aboutSection && Array.isArray(aboutData) && aboutData.length) {
            const paragraph = aboutSection.querySelector('p');
            if (paragraph) {
                paragraph.textContent = aboutData[0].descriptionabout;
            }
        }

        const timelineData = await loadJson('assets/data/timeline.json');
        const timelineSection = document.getElementById('texttimeline');

        if (timelineSection && Array.isArray(timelineData) && timelineData.length) {
            const heading = timelineSection.querySelector('h2');
            const text = timelineSection.querySelector('p');

            if (heading) {
                heading.textContent = timelineData[0].title;
            }
            if (text) {
                text.textContent = timelineData[0].content;
            }
        }

        const activityData = await loadJson('assets/data/activities-detail.json');
        const activityContainer = document.getElementById('activities-details');

        if (activityContainer && Array.isArray(activityData) && activityData.length) {
            activityContainer.innerHTML = activityData.map(item => `
                <div class="skill-bar-box activity-item">
                    <div class="skill-info">
                        <span class="tag" style="background-color: #ecfdf5; color: ${item.color_tag || '#0229c7'};">${item.tag}</span>
                        <span class="skill-percentage">${item.day}</span>
                    </div>
                    <h4>${item.title}</h4>
                    <p>${item.content}</p>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
});
