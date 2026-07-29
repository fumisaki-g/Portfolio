fetch('assets/data/about.json')
    .then(response => response.json())
    .then( data => {
        const activities = document.getElementById('about-bio-me');

        data.forEach(item => {
            activities.innerHTML +=`
            <p>${item.descriptionabout}</p>`
        });
    })
    .catch (error => {console.error('รันไม่ผ่านจร้าาาาาาา',error)})