document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('item-form');
    const itemCard = document.getElementById('item-card');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const itemInput = document.getElementById('item').value.trim();
        if (!itemInput) {
            alert('Please enter an item name.');
            return;
        }

        try {
            const response = await fetch(`https://eldenring.fanapis.com/api/weapons?name=${itemInput}`);
            const data = await response.json();

            if (data.data && data.data.length > 0) {
                const item = data.data[0];

                document.getElementById('item-image').src = item.image;
                document.getElementById('item-name').textContent = `Name: ${item.name}`;
                document.getElementById('item-description').textContent = `Description: ${item.description}`;
                document.getElementById('item-category').textContent = `Weapon Class: ${item.category}`;

                document.getElementById('physical-damage').textContent = `Physical Damage: ${item.attack[0].amount}`;
                document.getElementById('magic-damage').textContent = `Magic Damage: ${item.attack[1].amount}`;
                document.getElementById('fire-damage').textContent = `Fire Damage: ${item.attack[2].amount}`;
                document.getElementById('lightning-damage').textContent = `Lightning Damage: ${item.attack[3].amount}`;
                document.getElementById('holy-damage').textContent = `Holy Damage: ${item.attack[4].amount}`;
                document.getElementById('critical-damage').textContent = `Critical Damage: ${item.attack[5].amount}`;

                document.getElementById('physical-resistance').textContent = `Physical Resistance: ${item.defence[0].amount}`;
                document.getElementById('magic-resistance').textContent = `Magic Resistance: ${item.defence[1].amount}`;
                document.getElementById('fire-resistance').textContent = `Fire Resistance: ${item.defence[2].amount}`;
                document.getElementById('lightning-resistance').textContent = `Lightning Resistance: ${item.defence[3].amount}`;
                document.getElementById('holy-resistance').textContent = `Holy Resistance: ${item.defence[4].amount}`;
                document.getElementById('boost').textContent = `Boost: ${item.defence[5].amount}`;

                itemCard.style.display = 'block';
            } else {
                alert('Item not found.');
                itemCard.style.display = 'none';
            }
        } catch (error) {
            console.error('Error fetching item data:', error);
            alert('An error occurred while fetching the item data.');
            
            itemCard.style.display = 'none';
        }
    });
});