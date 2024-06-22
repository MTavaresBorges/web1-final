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
    }, ticketIdCounter);

    ticketIdCounter++;
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
}, id) {
    const updateButtonId = `update-ticket-${id}`;
    const deleteButtonId = `delete-ticket-${id}`;
    const ticketContainer = document.createElement('div');

    ticketContainer.classList.add('ticket-container');
    ticketContainer.innerHTML = `
        <div class="ticket" id="ticket-${id}">
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
        <div class="update-form-container" style="display: none;">
            <form class="update-form">
                <label for="update-name-${id}">Full Name:</label>
                <input type="text" id="update-name-${id}" value="${name}">
                <label for="update-email-${id}">Email:</label>
                <input type="text" id="update-email-${id}" value="${email}">
                <label for="update-message-${id}">Message:</label>
                <textarea id="update-message-${id}" cols="33" rows="5">${message}</textarea>
                <label for="update-zipcode-${id}">Zipcode:</label>
                <input type="text" id="update-zipcode-${id}" value="${zipcode}">
                <label for="update-address-${id}">Address:</label>
                <input type="text" id="update-address-${id}" value="${address}">
                <label for="update-neighborhood-${id}">Neighborhood:</label>
                <input type="text" id="update-neighborhood-${id}" value="${neighborhood}">
                <label for="update-city-${id}">City:</label>
                <input type="text" id="update-city-${id}" value="${city}">
                <label for="update-state-${id}">State:</label>
                <input type="text" id="update-state-${id}" value="${state}">
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
        saveUpdate(id);
    });
}

function toggleUpdateForm(ticketId) {
    const ticketContainer = document.getElementById(`ticket-${ticketId}`).parentElement;
    const updateFormContainer = ticketContainer.querySelector('.update-form-container');
    updateFormContainer.style.display = updateFormContainer.style.display === 'none' ? 'block' : 'none';
}

function deleteTicket(ticketId) {
    const ticket = document.getElementById(`ticket-${ticketId}`);
    ticket.parentElement.remove();
}

function saveUpdate(ticketId) {
    const name = document.getElementById(`update-name-${ticketId}`).value;
    const email = document.getElementById(`update-email-${ticketId}`).value;
    const message = document.getElementById(`update-message-${ticketId}`).value;
    const zipcode = document.getElementById(`update-zipcode-${ticketId}`).value;
    const address = document.getElementById(`update-address-${ticketId}`).value;
    const neighborhood = document.getElementById(`update-neighborhood-${ticketId}`).value;
    const city = document.getElementById(`update-city-${ticketId}`).value;
    const state = document.getElementById(`update-state-${ticketId}`).value;
    
    const ticket = document.getElementById(`ticket-${ticketId}`);
    ticket.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Zipcode: ${zipcode}</p>
        <p>Address: ${address}</p>
        <p>Neighborhood: ${neighborhood}</p>
        <p>City: ${city}</p>
        <p>State: ${state}</p>
        <button type="button" class="form-button" id="update-ticket-${ticketId}">Update Ticket</button>
        <button type="button" class="form-button" id="delete-ticket-${ticketId}">Delete Ticket</button>
    `;
    
    document.getElementById(`update-ticket-${ticketId}`).addEventListener('click', () => toggleUpdateForm(ticketId));
    document.getElementById(`delete-ticket-${ticketId}`).addEventListener('click', () => deleteTicket(ticketId));
}
