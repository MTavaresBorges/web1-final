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
    }, buildIdCounter);

    buildIdCounter++;
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
}, id) {
    const updateButtonId = `update-build-${id}`;
    const deleteButtonId = `delete-build-${id}`;
    const buildContainer = document.createElement('div');

    buildContainer.classList.add('ticket-container');
    buildContainer.innerHTML = `
        <div class="ticket" id="build-${id}">
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
        <div class="update-form-container" style="display: none;">
            <form class="update-form">
                <div class="bottom-column">
                    <div class="column">
                        <label for="update-build-name-${id}">Build Name:</label>
                        <input type="text" id="update-build-name-${id}" value="${buildName}">
                        <label for="update-vigor-${id}">Vigor:</label>
                        <input type="number" id="update-vigor-${id}" value="${vigor}">
                        <label for="update-mind-${id}">Mind:</label>
                        <input type="number" id="update-mind-${id}" value="${mind}">
                        <label for="update-endurance-${id}">Endurance:</label>
                        <input type="number" id="update-endurance-${id}" value="${endurance}">
                        <label for="update-strength-${id}">Strength:</label>
                        <input type="number" id="update-strength-${id}" value="${strength}">
                        <label for="update-dexterity-${id}">Dexterity:</label>
                        <input type="number" id="update-dexterity-${id}" value="${dexterity}">
                        <label for="update-intelligence-${id}">Intelligence:</label>
                        <input type="number" id="update-intelligence-${id}" value="${intelligence}">
                    </div>
                    <div class="column">
                        <label for="update-faith-${id}">Faith:</label>
                        <input type="number" id="update-faith-${id}" value="${faith}">
                        <label for="update-arcane-${id}">Arcane:</label>
                        <input type="number" id="update-arcane-${id}" value="${arcane}">
                        <label for="update-level-${id}">Level:</label>
                        <input type="number" id="update-level-${id}" value="${level}">
                        <label for="update-main-weapon-${id}">Main Weapon:</label>
                        <input type="text" id="update-main-weapon-${id}" value="${mainWeapon}">
                        <label for="update-headgear-${id}">Headgear:</label>
                        <input type="text" id="update-headgear-${id}" value="${headgear}">
                        <label for="update-upper-armor-${id}">Upper Armor:</label>
                        <input type="text" id="update-upper-armor-${id}" value="${upperArmor}">
                        <label for="update-arms-${id}">Arms:</label>
                        <input type="text" id="update-arms-${id}" value="${arms}">
                    </div>
                    <div class="column">
                        <label for="update-bottom-armor-${id}">Bottom Armor:</label>
                        <input type="text" id="update-bottom-armor-${id}" value="${bottomArmor}">
                        <label for="update-talisman-${id}">Talisman:</label>
                        <input type="text" id="update-talisman-${id}" value="${talisman}">
                        <button type="submit" class="form-button">Save</button> 
                    </div>
                </div>
            </form>
        </div>
        <br>
    `;

    const buildsContainer = document.querySelector('.builds-container');
    buildsContainer.appendChild(buildContainer);

    document.getElementById(updateButtonId).addEventListener('click', () => toggleUpdateForm(id));
    document.getElementById(deleteButtonId).addEventListener('click', () => deleteBuild(id));

    buildContainer.querySelector('.update-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveUpdate(id);
    });
}

function toggleUpdateForm(buildId) {
    const buildContainer = document.getElementById(`build-${buildId}`).parentElement;
    const updateFormContainer = buildContainer.querySelector('.update-form-container');
    updateFormContainer.style.display = updateFormContainer.style.display === 'none' ? 'block' : 'none';
}
function deleteBuild(buildId) {
    const build = document.getElementById(`build-${buildId}`);
    build.parentElement.remove();
}

function saveUpdate(buildId) {
    const buildName = document.getElementById(`update-build-name-${buildId}`).value;
    const vigor = document.getElementById(`update-vigor-${buildId}`).value;
    const mind = document.getElementById(`update-mind-${buildId}`).value;
    const endurance = document.getElementById(`update-endurance-${buildId}`).value;
    const strength = document.getElementById(`update-strength-${buildId}`).value;
    const dexterity = document.getElementById(`update-dexterity-${buildId}`).value;
    const intelligence = document.getElementById(`update-intelligence-${buildId}`).value;
    const faith = document.getElementById(`update-faith-${buildId}`).value;
    const arcane = document.getElementById(`update-arcane-${buildId}`).value;
    const level = document.getElementById(`update-level-${buildId}`).value;
    const mainWeapon = document.getElementById(`update-main-weapon-${buildId}`).value;
    const headgear = document.getElementById(`update-headgear-${buildId}`).value;
    const upperArmor = document.getElementById(`update-upper-armor-${buildId}`).value;
    const arms = document.getElementById(`update-arms-${buildId}`).value;
    const bottomArmor = document.getElementById(`update-bottom-armor-${buildId}`).value;
    const talisman = document.getElementById(`update-talisman-${buildId}`).value;

    const build = document.getElementById(`build-${buildId}`);
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
        <button type="button" class="form-button" id="update-build-${buildId}">Update Build</button>
        <button type="button" class="form-button" id="delete-build-${buildId}">Delete Build</button>
    `;

    document.getElementById(`update-build-${buildId}`).addEventListener('click', () => toggleUpdateForm(buildId));
    document.getElementById(`delete-build-${buildId}`).addEventListener('click', () => deleteBuild(buildId));
}
