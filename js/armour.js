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
            const response = await fetch(`https://eldenring.fanapis.com/api/armors?name=${itemInput}`);
            const data = await response.json();

            if (data.data && data.data.length > 0) {
                const item = data.data[0];

                document.getElementById('item-image').src = item.image;
                document.getElementById('item-name').textContent = `Name: ${item.name}`;
                document.getElementById('item-description').textContent = `Description: ${item.description}`;
                document.getElementById('item-category').textContent = `Armour Class: ${item.category}`;
                document.getElementById('item-weight').textContent = `Weight: ${item.weight}`;
                
                document.getElementById('physical-negation').textContent = `Physical Negation: ${item.dmgNegation[0].amount}`;
                document.getElementById('strike-negation').textContent = `Strike Negation: ${item.dmgNegation[1].amount}`;
                document.getElementById('slash-negation').textContent = `Slash Negation: ${item.dmgNegation[2].amount}`;
                document.getElementById('pierce-negation').textContent = `Pierce Negation: ${item.dmgNegation[3].amount}`;
                document.getElementById('magic-negation').textContent = `Magic Negation: ${item.dmgNegation[4].amount}`;
                document.getElementById('fire-negation').textContent = `Fire Negation: ${item.dmgNegation[5].amount}`;
                document.getElementById('lightning-negation').textContent = `Lightning Negation: ${item.dmgNegation[6].amount}`;
                document.getElementById('holy-negation').textContent = `Holy Negation: ${item.dmgNegation[7].amount}`;

                document.getElementById('immunity-resistance').textContent = `Immunity Resistence: ${item.resistance[0].amount}`;
                document.getElementById('robustness-resistance').textContent = `Robustness Resistence: ${item.resistance[1].amount}`;
                document.getElementById('focus-resistance').textContent = `Focus Resistence: ${item.resistance[2].amount}`;
                document.getElementById('vitality-resistance').textContent = `Vitality Resistence: ${item.resistance[3].amount}`;
                document.getElementById('poise-resistance').textContent = `Poise Resistence: ${item.resistance[4].amount}`;

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