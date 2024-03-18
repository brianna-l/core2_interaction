var mainElement = document.querySelector(`.Main`)

function insertCostumeData(costume){

    mainElement.innerHTML += `
        <article class="Kirby">
            <h2>${ costume['title'] }</h2>
            <img src="./media/${ costume['image'] }" />
            <p>${ costume['powers'] }</p>
        </article>
`;

}

costumes.forEach((costume) => {
    insertCostumeData(costume);
})