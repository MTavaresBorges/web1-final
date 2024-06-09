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

    const main = document.querySelector('body > main');

        main.innerHTML += `
        <div class="form">
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
            </div>
        </div>
        
        `;
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
});