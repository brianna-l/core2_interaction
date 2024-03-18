var mainElement = document.querySelector(`.space`);
console.log(mainElement);

function insertSpaceData (space) {
    mainElement.innerHTML += `
    <article class="Spot">
    <img src="./media/${ space['image'] }" />
    <p>${ space['time'] }</p>
    <p>${ space['date'] }</p>
    <p>${ space['location'] }</p>
    </article>
    `;
};

space.forEach((space) => {
    insertSpaceData(space);
});