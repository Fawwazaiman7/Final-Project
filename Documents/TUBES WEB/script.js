// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function validateForm() {
    const name = document.getElementById('name').value;
    const tripDuration = document.getElementById('tripDuration').value;
    const participantCount = document.getElementById('participantCount').value;
    const serviceType = document.getElementById('serviceType').value;

    if (!name || !tripDuration || !participantCount || !serviceType) {
        document.getElementById('formMessage').innerText = "Harap lengkapi semua kolom pada form pemesanan.";
        return false;
    }

    const hargaPaket = document.getElementById('packagePrice').value.replace(/[^0-9]/g, '');
    const jumlahTagihan = document.getElementById('totalBill').value.replace(/[^0-9]/g, '');

    // Build the modal content
    const modalContent = `
        <div class="reservation-summary">
            <div id="header" class="header">
                RANGKUMAN RESERVASI PAKET WISATA
            </div>
            <div id="content" class="content">
                <div><span>Nama</span>: ${name}</div>
                <div><span>Jumlah Peserta</span>: ${participantCount}</div>
                <div><span>Waktu Perjalanan</span>: ${tripDuration}</div>
                <div><span>Jenis Layanan</span>: ${serviceType}</div>
                <div><span>Harga Paket</span>: Rp ${parseInt(hargaPaket).toLocaleString('id-ID')},00</div>
                <div><span>Jumlah Tagihan</span>: Rp ${parseInt(jumlahTagihan).toLocaleString('id-ID')},00</div>
            </div>
        </div>
    `;

    document.getElementById('modalBody').innerHTML = modalContent;

    // Display the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    return false; // Prevent actual form submission
}

function calculatePackagePrice() {
    const serviceType = document.getElementById('serviceType').value;
    let price;

    switch(serviceType) {
        case 'penginapan':
            price = 500000;
            break;
        case 'transportasi':
            price = 300000;
            break;
        case 'makanan':
            price = 200000;
            break;
        default:
            price = 0;
    }

    calculateTotalBill(price)
    document.getElementById('packagePrice').value = price.toLocaleString('id-ID');
}

function calculateTotalBill(serviceTypePrice) {
    const tripDuration = document.getElementById('tripDuration').value;
    const participantCount = document.getElementById('participantCount').value;
    
    let totalBill = serviceTypePrice * tripDuration * participantCount;
    document.getElementById('totalBill').value = totalBill.toLocaleString('id-ID');
}

function validateNameInput() {
    const nameField = document.getElementById('name');
    nameField.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Call the function to validate name input
    validateNameInput();
});
