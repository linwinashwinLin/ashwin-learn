document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById('contents');

    function updateContent() {
        fetch("https://raw.githubusercontent.com/linwinashwinLin/ashwin-learn/main/meta.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                let innerContents = '';

                data.learning_records.forEach(rec => {
                    innerContents += `
                        <div class="project">
                            <div class="first-data">
                                <img src="${rec.img}" alt="">
                                <div class="inner-data">
                                    <span>${rec.title}</span>
                                    <div class="buttons">
                                        <button onclick="window.open('${rec.pagelink}', '_blank');">UI PAGE</button>
                                        <button onclick="window.open('${rec.repolink}', '_blank');">SOURCE CODE</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                });
                div.innerHTML = innerContents;
            })
            .catch(error => {
                console.error('Error fetching or processing data:', error);
            });
    };
    
    updateContent();
});
