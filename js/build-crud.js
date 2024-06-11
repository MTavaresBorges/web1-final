let buildIdCounter = 0;

document.getElementById('build-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const buildName = document.getElementById('build-name').value;
    const vigor = document.getElementById('vigor').value;
    const mind = document.getElementById('mind').value;
    const endurance = document.getElementById('endurance').value;
    const strength = document.getElementById('strength').value;
    const dexterity = document.getElementById('dexterity').value;
    const intelligence = document.getElementById('intelligence').value;
    const faith = document.getElementById('faith').value;
    const arcane = document.getElementById('arcane').value;
    const level = document.getElementById('level').value;
    const mainWeapon = document.getElementById('main-weapon').value;
    const headgear = document.getElementById('headgear').value;
    const upperArmor = document.getElementById('upper-armor').value;
    const arms = document.getElementById('arms').value;
    const bottomArmor = document.getElementById('bottom-armor').value;
    const talisman = document.getElementById('talisman').value;

    addBuild({
        buildName,
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane,
        level,
        mainWeapon,
        headgear,
        upperArmor,
        arms,
        bottomArmor,
        talisman
    });
});

function addBuild({
    buildName,
    vigor,
    mind,
    endurance,
    strength,
    dexterity,
    intelligence,
    faith,
    arcane,
    level,
    mainWeapon,
    headgear,
    upperArmor,
    arms,
    bottomArmor,
    talisman
}) {
    buildIdCounter++;
    const id = `build-${buildIdCounter}`;
    const updateButtonId = `update-build-${buildIdCounter}`;
    const deleteButtonId = `delete-build-${buildIdCounter}`;

    const buildContainer = document.createElement('div');
    buildContainer.classList.add('ticket-container');
    buildContainer.innerHTML = `
        <div class="ticket" id="${id}">
            <h3>${buildName}</h3>
            <p>Vigor: ${vigor}</p>
            <p>Mind: ${mind}</p>
            <p>Endurance: ${endurance}</p>
            <p>Strength: ${strength}</p>
            <p>Dexterity: ${dexterity}</p>
            <p>Intelligence: ${intelligence}</p>
            <p>Faith: ${faith}</p>
            <p>Arcane: ${arcane}</p>
            <p>Level: ${level}</p>
            <p>Main Weapon: ${mainWeapon}</p>
            <p>Headgear: ${headgear}</p>
            <p>Upper Armor: ${upperArmor}</p>
            <p>Arms: ${arms}</p>
            <p>Bottom Armor: ${bottomArmor}</p>
            <p>Talisman: ${talisman}</p>
            <button type="button" class="form-button" id="${updateButtonId}">Update Build</button>
            <button type="button" class="form-button" id="${deleteButtonId}">Delete Build</button>
        </div>
        <div class="update-form-container">
            <form class="update-form">
                <div class="bottom-column">
                    <div class="column">
                        <label for="update-build-name-${buildIdCounter}">Build Name:</label>
                        <input type="text" id="update-build-name-${buildIdCounter}" value="${buildName}">
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
                    </div>
                    <div class="column">
                        <label for="update-faith-${buildIdCounter}">Faith:</label>
                        <input type="number" id="update-faith-${buildIdCounter}" value="${faith}">
                        <label for="update-arcane-${buildIdCounter}">Arcane:</label>
                        <input type="number" id="update-arcane-${buildIdCounter}" value="${arcane}">
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
                    </div>
                    <div class="column">
                        <label for="update-bottom-armor-${buildIdCounter}">Bottom Armor:</label>
                        <input type="text" id="update-bottom-armor-${buildIdCounter}" value="${bottomArmor}">
                        <label for="update-talisman-${buildIdCounter}">Talisman:</label>
                        <input type="text" id="update-talisman-${buildIdCounter}" value="${talisman}">
                        <button type="submit" class="form-button">Save</button>
                    </div>
                </div>
            </form>
        </div>
    `;

    const buildsContainer = document.querySelector('.builds-container');
    buildsContainer.appendChild(buildContainer);

    document.getElementById(updateButtonId).addEventListener('click', () => toggleUpdateForm(id));
    document.getElementById(deleteButtonId).addEventListener('click', () => deleteBuild(id));

    buildContainer.querySelector('.update-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveUpdate(buildIdCounter);
    });
}

function toggleUpdateForm(buildId) {
    const buildContainer = document.getElementById(buildId).parentElement;
    const updateFormContainer = buildContainer.querySelector('.update-form-container');
    updateFormContainer.style.display = updateFormContainer.style.display === 'none' ? 'block' : 'none';
}

function deleteBuild(buildId) {
    const build = document.getElementById(buildId);
    build.parentElement.remove();
}

function saveUpdate(buildIdCounter) {
    const buildName = document.getElementById(`update-build-name-${buildIdCounter}`).value;
    const vigor = document.getElementById(`update-vigor-${buildIdCounter}`).value;
    const mind = document.getElementById(`update-mind-${buildIdCounter}`).value;
    const endurance = document.getElementById(`update-endurance-${buildIdCounter}`).value;
    const strength = document.getElementById(`update-strength-${buildIdCounter}`).value;
    const dexterity = document.getElementById(`update-dexterity-${buildIdCounter}`).value;
    const intelligence = document.getElementById(`update-intelligence-${buildIdCounter}`).value;
    const faith = document.getElementById(`update-faith-${buildIdCounter}`).value;
    const arcane = document.getElementById(`update-arcane-${buildIdCounter}`).value;
    const level = document.getElementById(`update-level-${buildIdCounter}`).value;
    const mainWeapon = document.getElementById(`update-main-weapon-${buildIdCounter}`).value;
    const headgear = document.getElementById(`update-headgear-${buildIdCounter}`).value;
    const upperArmor = document.getElementById(`update-upper-armor-${buildIdCounter}`).value;
    const arms = document.getElementById(`update-arms-${buildIdCounter}`).value;
    const bottomArmor = document.getElementById(`update-bottom-armor-${buildIdCounter}`).value;
    const talisman = document.getElementById(`update-talisman-${buildIdCounter}`).value;

    const build = document.getElementById(`build-${buildIdCounter}`);
    build.innerHTML = `
        <h3>${buildName}</h3>
        <p>Vigor: ${vigor}</p>
        <p>Mind: ${mind}</p>
        <p>Endurance: ${endurance}</p>
        <p>Strength: ${strength}</p>
        <p>Dexterity: ${dexterity}</p>
        <p>Intelligence: ${intelligence}</p>
        <p>Faith: ${faith}</p>
        <p>Arcane: ${arcane}</p>
        <p>Level: ${level}</p>
        <p>Main Weapon: ${mainWeapon}</p>
        <p>Headgear: ${headgear}</p>
        <p>Upper Armor: ${upperArmor}</p>
        <p>Arms: ${arms}</p>
        <p>Bottom Armor: ${bottomArmor}</p>
        <p>Talisman: ${talisman}</p>
        <button type="button" class="form-button" id="update-build-${buildIdCounter}">Update Build</button>
        <button type="button" class="form-button" id="delete-build-${buildIdCounter}">Delete Build</button>
    `;

    document.getElementById(`update-build-${buildIdCounter}`).addEventListener('click', () => toggleUpdateForm(`build-${buildIdCounter}`));
    document.getElementById(`delete-build-${buildIdCounter}`).addEventListener('click', () => deleteBuild(`build-${buildIdCounter}`));
}
