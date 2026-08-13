fetch('assets/data/about.json')
    .then(response => response.json())
    .then( data => {
        const activities = document.getElementById('about-bio-me');

        data.forEach(item => {
            activities.innerHTML +=`
            <p>${item.descriptionabout}</p>`
        });
    })
    .catch (error => {console.error('Error fetching about-me data:', error)})




fetch('assets/data/timeline.json')
    .then(response => response.json())
    .then( time => {
        const activities = document.getElementById('texttimeline');

        time.forEach(text => {
            activities.innerHTML +=`
                        <h2>${text.title}</h2>
                        <h3>${text.content}</h3>`
        });
    })
    .catch (error => {console.error('Error fetching timeline:', error)})




fetch('assets/data/activities-detail.json')
    .then(response => response.json())
    .then( card => {
        const activities = document.getElementById('activities-details');

        card.forEach(item => {
            activities.innerHTML +=`
                        
                        <div class="skill-bar-box" style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <div class="skill-info">
                                <span class="tag tag-html" style="background-color: #ecfdf5; color: ${item.color_tag};">${item.tag}</span>
                                <span class="skill-percentage" style="color: #64748b; font-size: 0.9rem;">${item.year}</span>
                            </div>
                            <h4 style="margin: 0; font-size: 1.1rem; color: #0f172a; font-weight: 700;">${item.title}</h4>
                            <p style="margin: 0; font-size: 0.95rem; color: #475569; line-height: 1.5;">
                                ${item.content}
                            </p>
                        </div>
                        `
        });
    })
    .catch (error => {console.error('Error fetching timeline:', error)})