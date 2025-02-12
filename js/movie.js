const nowShowingMovies = [
    { title: "Người nhện", genre: "Hành động", duration: "120 phút", image: "https://play-lh.googleusercontent.com/PQW6qebXTYwtpgYCPsGu2qt7YivGjDrEPH_yfkgNpPJUXcyoJfu-ZAE3oRGdKzc3TAqV" },
    { title: "Phù thủy tối thượng", genre: "Hài", duration: "90 phút", image: "https://kenh14cdn.com/203336854389633024/2022/2/16/generic-poster-1645005383930439832060.jpg" },
    { title: "Kung Fu Panda 4", genre: "Hài", duration: "120 phút", image: "https://metiz.vn/media/uploads/2024/03/06/kung-fu-panda-4.jpg" },
    { title: "Ác quỷ ma sơ", genre: "Kinh dị", duration: "100 phút", image: "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_FMjpg_UX1000_.jpg" }
];

const comingSoonMovies = [
    { title: "Đại Chiến Người Khổng Lồ", genre: "Phiêu lưu", duration: "110 phút", image: "https://m.media-amazon.com/images/M/MV5BZTAyMjUxYWItYTBkNS00YmNlLWEzNmItMDQ0MTRlYzQwNzIyXkEyXkFqcGc@._V1_.jpg", releaseDate: "01/03/2025" },
    { title: "Titanic", genre: "Tình cảm", duration: "95 phút", image: "https://upload.wikimedia.org/wikipedia/vi/a/ab/Titanic_3D_poster_Vietnam.jpg", releaseDate: "15/03/2025" },
    { title: "Transformer 4", genre: "Khoa học viễn tưởng", duration: "130 phút", image: "https://anh.24h.com.vn/upload/2-2014/images/2014-05-16/1400233025-kynguyenhuydiet-1.jpg", releaseDate: "30/03/2025" }
];

function displayMovies(movies, containerId, buttonText) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous content
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Thể loại: ${movie.genre}</p>
            <p>Thời lượng: ${movie.duration}</p>
            ${movie.releaseDate ? `<p>Ngày khởi chiếu: ${movie.releaseDate}</p>` : ''}
            <button class="book-ticket">${buttonText}</button>
        `;
        container.appendChild(movieElement);
    });
}

displayMovies(nowShowingMovies, 'now-showing', 'Mua vé');
displayMovies(comingSoonMovies, 'coming-soon', 'Đặt trước vé');

// Ticket booking modal functionality
const modal = document.getElementById('ticketModal');
const closeModal = document.getElementsByClassName('close')[0];

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('book-ticket')) {
        modal.style.display = "block";
        populateDateOptions();
        populateSeatSelection();
    }
});

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const cinema = document.getElementById('cinema').value;
    const selectedSeats = document.querySelectorAll('.seat-selection button.selected');
    if (date && time && cinema && selectedSeats.length > 0) {
        window.location.href = "member.html"; // Redirect to member page
    } else {
        alert('Vui lòng chọn đủ ngày, giờ chiếu, rạp và ghế.');
    }
});

function populateDateOptions() {
    const dateSelection = document.getElementById('date-selection');
    dateSelection.innerHTML = ''; // Clear previous options
    const today = new Date();
    const daysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    for (let i = 0; i < 5; i++) {
        const dateButton = document.createElement('button');
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const dayOfWeek = daysOfWeek[date.getDay()];
        dateButton.textContent = `${day}/${month} - ${dayOfWeek}`;
        dateButton.dataset.value = date.toISOString().split('T')[0];
        dateButton.addEventListener('click', function() {
            document.getElementById('date').value = dateButton.dataset.value;
            const buttons = dateSelection.getElementsByTagName('button');
            for (let btn of buttons) {
                btn.classList.remove('selected');
            }
            dateButton.classList.add('selected');
        });
        dateSelection.appendChild(dateButton);
    }
}

function populateSeatSelection() {
    const seatSelection = document.getElementById('seat-selection');
    seatSelection.innerHTML = ''; // Clear previous seats
    const rows = ['A', 'B', 'C', 'D', 'E'];
    for (let row of rows) {
        for (let i = 1; i <= 10; i++) {
            const seatButton = document.createElement('button');
            seatButton.textContent = `${row}${i}`;
            seatButton.value = `${row}${i}`;
            seatButton.addEventListener('click', function() {
                seatButton.classList.toggle('selected');
            });
            seatSelection.appendChild(seatButton);
        }
    }
}