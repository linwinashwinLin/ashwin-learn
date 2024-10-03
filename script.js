document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById('contents');
    function updateContent() {
        fetch("https://raw.githubusercontent.com/poojar222/My-learning/main/meta.json")
            .then(resp => resp.json())
            .then(data => {
                let innerContents = '';
                data.learning_records.forEach(rec => {
                    let buttons = '';
                    if (rec.pagelink || rec.repolink) {
                        if (rec.pagelink) {
                            buttons += `<button onclick="window.open('${rec.pagelink}', '_blank');">UI PAGE</button>`;
                        }
                        if (rec.repolink) {
                            buttons += `<button onclick="window.open('${rec.repolink}', '_blank');">SOURCE CODE</button>`;
                        }
                    } else if (rec.quizlink) {
                        buttons += `<button onclick="window.open('${rec.quizlink}', '_blank');">QUIZ</button>`;
                    }
                    innerContents += `
                        <div class="project">
                            <div class="first-data">
                                <img src="${rec.img}" alt="">
                                <div class="inner-data">
                                    <span>${rec.title}</span>
                                    <div class="buttons">
                                        ${buttons}
                                    </div>
                                </div>
                            </div>
                        </div>`;
                });
                div.innerHTML = innerContents;
            });
    }
    updateContent();
});
