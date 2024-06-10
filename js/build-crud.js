let buildIdCounter = 0;

function addBuild({
    buildName,
    level,
    mainWeapon,
    headgear,
    upperArmor,
    arms,
    bottomArmor,
    talisman,
    vigor,
    mind,
    endurance,
    strength,
    dexterity,
    intelligence,
    faith,
    arcane
}) {
    buildIdCounter++;
    const id = `build-${buildIdCounter}`;
    const updateButtonId = `update-${buildIdCounter}`;
    const deleteButtonId = `delete-${buildIdCounter}`;

    // Create the new build card element
    const buildCard = document.createElement('div');
    buildCard.classList.add('form');
    buildCard.innerHTML = `
        <div class="build-card" id="${id}">
            <h3>Build Name: ${buildName}</h3>
            <p>Level: ${level}</p>
            <p>Main Weapon: ${mainWeapon}</p>
            <p>Headgear: ${headgear}</p>
            <p>Upper Armor: ${upperArmor}</p>
            <p>Arms: ${arms}</p>
            <p>Bottom Armor: ${bottomArmor}</p>
            <p>Talisman: ${talisman}</p>
            <p>Vigor: ${vigor}</p>
            <p>Mind: ${mind}</p>
            <p>Endurance: ${endurance}</p>
            <p>Strength: ${strength}</p>
            <p>Dexterity: ${dexterity}</p>
            <p>Intelligence: ${intelligence}</p>
            <p>Faith: ${faith}</p>
            <p>Arcane: ${arcane}</p>
            <button type="button" class="form-button" id="${updateButtonId}">Update Build</button>
            <button type="button" class="form-button" id="${deleteButtonId}">Delete Build</button>
            <div class="update-form-container" style="display: none;">
                <form class="update-form">
                    <label for="update-build-name-${buildIdCounter}">Build Name:</label>
                    <input type="text" id="update-build-name-${buildIdCounter}" value="${buildName}">
                    <label for="update-level-${buildIdCounter}">Level:</label>
                    <input type="number" id="update-level-${buildIdCounter}" value="${level}">
                    <label for="update-main-weapon-${buildIdCounter}">Main Weapon:</label>
                    <input type="text" id="update-main-weapon-${buildIdCounter}" value="${mainWeapon}">
                    <label for="update-headgear-${buildIdCounter}">Headgear:</label>
                    <input type="text" id="update-headgear-${buildIdCounter}" value="${headgear}">
                    <label for="update-upper-armor-${buildIdCounter}">Upper Armor:</label>
                    <input type="text" id="update-upper-armor-${buildIdCounter}" value="${upperArmor}">
                    <label for="update-arms-${buildIdCounter}">Arms:</label>
                    <input type="text" id="update-arms-${buildIdCounter}" value="${arms}">
                    <label for="update-bottom-armor-${buildIdCounter}">Bottom Armor:</label>
                    <input type="text" id="update-bottom-armor-${buildIdCounter}" value="${bottomArmor}">
                    <label for="update-talisman-${buildIdCounter}">Talisman:</label>
                    <input type="text" id="update-talisman-${buildIdCounter}" value="${talisman}">
                    <label for="update-vigor-${buildIdCounter}">Vigor:</label>
                    <input type="number" id="update-vigor-${buildIdCounter}" value="${vigor}">
                    <label for="update-mind-${buildIdCounter}">Mind:</label>
                    <input type="number" id="update-mind-${buildIdCounter}" value="${mind}">
                    <label for="update-endurance-${buildIdCounter}">Endurance:</label>
                    <input type="number" id="update-endurance-${buildIdCounter}" value="${endurance}">
                    <label for="update-strength-${buildIdCounter}">Strength:</label>
                    <input type="number" id="update-strength-${buildIdCounter}" value="${strength}">
                    <label for="update-dexterity-${buildIdCounter}">Dexterity:</label>
                    <input type="number" id="update-dexterity-${buildIdCounter}" value="${dexterity}">
                    <label for="update-intelligence-${buildIdCounter}">Intelligence:</label>
                    <input type="number" id="update-intelligence-${buildIdCounter}" value="${intelligence}">
                    <label for="update-faith-${buildIdCounter}">Faith:</label>
                    <input type="number" id="update-faith-${buildIdCounter}" value="${faith}">
                    <label for="update-arcane-${buildIdCounter}">Arcane:</label>
                    <input type="number" id="update-arcane-${buildIdCounter}" value="${arcane}">
                    <button type="submit" class="form-button">Save</button>
                </form>
            </div>
        </div>
    `;

    // Append the new build card to the main element
    const main = document.querySelector('body > main');
    main.appendChild(buildCard);

    // Attach event listeners to the buttons
    document.getElementById(updateButtonId).addEventListener('click', () => toggleUpdateForm(id));
    document.getElementById(deleteButtonId).addEventListener('click', () => deleteBuild(id));

    // Attach event listener to the update form
    buildCard.querySelector('.update-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveUpdate(buildIdCounter);
    });
}

function toggleUpdateForm(buildId) {
    const buildCard = document.getElementById(buildId);
    const updateFormContainer = buildCard.querySelector('.update-form-container');
    updateFormContainer.style.display = updateFormContainer.style.display === 'none' ? 'block' : 'none';
}

function saveUpdate(buildId) {
    const buildCard = document.getElementById(`build-${buildId}`);
    const buildData = {
        buildName: buildCard.querySelector(`#update-build-name-${buildId}`).value,
        level: buildCard.querySelector(`#update-level-${buildId}`).value,
        mainWeapon: buildCard.querySelector(`#update-main-weapon-${buildId}`).value,
        headgear: buildCard.querySelector(`#update-headgear-${buildId}`).value,
        upperArmor: buildCard.querySelector(`#update-upper-armor-${buildId}`).value,
        arms: buildCard.querySelector(`#update-arms-${buildId}`).value,
        bottomArmor: buildCard.querySelector(`#update-bottom-armor-${buildId}`).value,
        talisman: buildCard.querySelector(`#update-talisman-${buildId}`).value,
        vigor: buildCard.querySelector(`#update-vigor-${buildId}`).value,
        mind: buildCard.querySelector(`#update-mind-${buildId}`).value,
        endurance: buildCard.querySelector(`#update-endurance-${buildId}`).value,
        strength: buildCard.querySelector(`#update-strength-${buildId}`).value,
        dexterity: buildCard.querySelector(`#update-dexterity-${buildId}`).value,
        intelligence: buildCard.querySelector(`#update-intelligence-${buildId}`).value,
        faith: buildCard.querySelector(`#update-faith-${buildId}`).value,
        arcane: buildCard.querySelector(`#update-arcane-${buildId}`).value
    };

    // Update the build card with the new data
    buildCard.querySelector('h3').innerText = `Build Name: ${buildData.buildName}`;
    buildCard.querySelector('p:nth-of-type(1)').innerText = `Level: ${buildData.level}`;
    buildCard.querySelector('p:nth-of-type(2)').innerText = `Main Weapon: ${buildData.mainWeapon}`;
    buildCard.querySelector('p:nth-of-type(3)').innerText = `Headgear: ${buildData.headgear}`;
    buildCard.querySelector('p:nth-of-type(4)').innerText = `Upper Armor: ${buildData.upperArmor}`;
    buildCard.querySelector('p:nth-of-type(5)').innerText = `Arms: ${buildData.arms}`;
    buildCard.querySelector('p:nth-of-type(6)').innerText = `Bottom Armor: ${buildData.bottomArmor}`;
    buildCard.querySelector('p:nth-of-type(7)').innerText = `Talisman: ${buildData.talisman}`;
    buildCard.querySelector('p:nth-of-type(8)').innerText = `Vigor: ${buildData.vigor}`;
    buildCard.querySelector('p:nth-of-type(9)').innerText = `Mind: ${buildData.mind}`;
    buildCard.querySelector('p:nth-of-type(10)').innerText = `Endurance: ${buildData.endurance}`;
    buildCard.querySelector('p:nth-of-type(11)').innerText = `Strength: ${buildData.strength}`;
    buildCard.querySelector('p:nth-of-type(12)').innerText = `Dexterity: ${buildData.dexterity}`;
    buildCard.querySelector('p:nth-of-type(13)').innerText = `Intelligence: ${buildData.intelligence}`;
    buildCard.querySelector('p:nth-of-type(14)').innerText = `Faith: ${buildData.faith}`;
    buildCard.querySelector('p:nth-of-type(15)').innerText = `Arcane: ${buildData.arcane}`;

    // Hide the update form
    toggleUpdateForm(`build-${buildId}`);
}

function deleteBuild(buildId) {
    const buildCard = document.getElementById(buildId);
    buildCard.remove();
}

document.getElementById('build-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Gather form data
    const buildData = {
        buildName: document.getElementById('build-name').value,
        level: document.getElementById('level').value,
        mainWeapon: document.getElementById('main-weapon').value,
        headgear: document.getElementById('headgear').value,
        upperArmor: document.getElementById('upper-armor').value,
        arms: document.getElementById('arms').value,
        bottomArmor: document.getElementById('bottom-armor').value,
        talisman: document.getElementById('talisman').value,
        vigor: document.getElementById('vigor').value,
        mind: document.getElementById('mind').value,
        endurance: document.getElementById('endurance').value,
        strength: document.getElementById('strength').value,
        dexterity: document.getElementById('dexterity').value,
        intelligence: document.getElementById('intelligence').value,
        faith: document.getElementById('faith').value,
        arcane: document.getElementById('arcane').value
    };

    // Add the new build card
    addBuild(buildData);

    // Reset the form
    document.getElementById('build-form').reset();
});
