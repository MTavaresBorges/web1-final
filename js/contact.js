let ticketIdCounter = 0;

document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const zipcode = document.getElementById('zipcode').value;
    const address = document.getElementById('address').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    
    addTicket({
        name,
        email,
        message,
        zipcode,
        address,
        neighborhood,
        city,
        state
    });
});

function addTicket({
    name,
    email,
    message,
    zipcode,
    address,
    neighborhood,
    city,
    state
}) {
    ticketIdCounter++;
    const id = `ticket-${ticketIdCounter}`;
    const updateButtonId = `update-ticket-${ticketIdCounter}`;
    const deleteButtonId = `delete-ticket-${ticketIdCounter}`;

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-container');
    ticketContainer.innerHTML = `
        <div class="ticket" id="${id}">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            <p>Zipcode: ${zipcode}</p>
            <p>Address: ${address}</p>
            <p>Neighborhood: ${neighborhood}</p>
            <p>City: ${city}</p>
            <p>State: ${state}</p>
            <button type="button" class="form-button" id="${updateButtonId}">Update Ticket</button>
            <button type="button" class="form-button" id="${deleteButtonId}">Delete Ticket</button>
        </div>
        <div class="update-form-container">
            <form class="update-form">
                <label for="update-name-${ticketIdCounter}">Full Name:</label>
                <input type="text" id="update-name-${ticketIdCounter}" value="${name}">
                <label for="update-email-${ticketIdCounter}">Email:</label>
                <input type="text" id="update-email-${ticketIdCounter}" value="${email}">
                <label for="update-message-${ticketIdCounter}">Message:</label>
                <textarea id="update-message-${ticketIdCounter}" cols="33" rows="5">${message}</textarea>
                <label for="update-zipcode-${ticketIdCounter}">Zipcode:</label>
                <input type="text" id="update-zipcode-${ticketIdCounter}" value="${zipcode}">
                <label for="update-address-${ticketIdCounter}">Address:</label>
                <input type="text" id="update-address-${ticketIdCounter}" value="${address}">
                <label for="update-neighborhood-${ticketIdCounter}">Neighborhood:</label>
                <input type="text" id="update-neighborhood-${ticketIdCounter}" value="${neighborhood}">
                <label for="update-city-${ticketIdCounter}">City:</label>
                <input type="text" id="update-city-${ticketIdCounter}" value="${city}">
                <label for="update-state-${ticketIdCounter}">State:</label>
                <input type="text" id="update-state-${ticketIdCounter}" value="${state}">
                <button type="submit" class="form-button">Save</button>
            </form>
        </div>
    `;

    const ticketsContainer = document.querySelector('.tickets-container');
    ticketsContainer.appendChild(ticketContainer);

    document.getElementById(updateButtonId).addEventListener('click', () => toggleUpdateForm(id));
    document.getElementById(deleteButtonId).addEventListener('click', () => deleteTicket(id));

    ticketContainer.querySelector('.update-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveUpdate(ticketIdCounter);
    });
}

function toggleUpdateForm(ticketId) {
    const ticketContainer = document.getElementById(ticketId).parentElement;
    const updateFormContainer = ticketContainer.querySelector('.update-form-container');
    updateFormContainer.style.display = updateFormContainer.style.display === 'none' ? 'block' : 'none';
}

function deleteTicket(ticketId) {
    const ticket = document.getElementById(ticketId);
    ticket.parentElement.remove();
}

function saveUpdate(ticketIdCounter) {
    const name = document.getElementById(`update-name-${ticketIdCounter}`).value;
    const email = document.getElementById(`update-email-${ticketIdCounter}`).value;
    const message = document.getElementById(`update-message-${ticketIdCounter}`).value;
    const zipcode = document.getElementById(`update-zipcode-${ticketIdCounter}`).value;
    const address = document.getElementById(`update-address-${ticketIdCounter}`).value;
    const neighborhood = document.getElementById(`update-neighborhood-${ticketIdCounter}`).value;
    const city = document.getElementById(`update-city-${ticketIdCounter}`).value;
    const state = document.getElementById(`update-state-${ticketIdCounter}`).value;
    
    const ticket = document.getElementById(`ticket-${ticketIdCounter}`);
    ticket.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Zipcode: ${zipcode}</p>
        <p>Address: ${address}</p>
        <p>Neighborhood: ${neighborhood}</p>
        <p>City: ${city}</p>
        <p>State: ${state}</p>
        <button type="button" class="form-button" id="update-ticket-${ticketIdCounter}">Update Ticket</button>
        <button type="button" class="form-button" id="delete-ticket-${ticketIdCounter}">Delete Ticket</button>
    `;
    
    document.getElementById(`update-ticket-${ticketIdCounter}`).addEventListener('click', () => toggleUpdateForm(`ticket-${ticketIdCounter}`));
    document.getElementById(`delete-ticket-${ticketIdCounter}`).addEventListener('click', () => deleteTicket(`ticket-${ticketIdCounter}`));
}
