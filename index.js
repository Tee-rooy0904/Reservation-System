document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const bookButton = document.querySelector('button[type="submit"]');
    const cancelButton = document.createElement('button');

  
    cancelButton.type = 'button';
    cancelButton.className = 'btn btn-secondary btn-block mt-2';
    cancelButton.textContent = 'Cancel';
    bookButton.insertAdjacentElement('afterend', cancelButton);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const idNo = document.getElementById('idNo').value;
        const role = document.getElementById('role').value;
        const fullName = document.getElementById('fullName').value;
        const sex = document.getElementById('sex').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const equipments = Array.from(document.querySelectorAll('.equipments-container input:checked')).map(e => e.value);

        if (idNo && role && fullName && sex && phone && date && time) {
            alert(`Reservation made for ${fullName} on ${date} at ${time} with equipments: ${equipments.join(', ')}`);
        } else {
            alert('Please fill in all fields');
        }
    });
});