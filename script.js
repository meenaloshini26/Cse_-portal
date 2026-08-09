const searchInput = document.getElementById("searchInput");

const semesters = document.querySelectorAll(".semester");

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();

    semesters.forEach(function(semester) {

        const cards = semester.querySelectorAll(".card");

        let found = false;

        cards.forEach(function(card) {

            const subject = card.querySelector("h3").textContent.toLowerCase();

            if (subject.includes(searchText)) {
                card.style.display = "block";
                found = true;
            } else {
                card.style.display = "none";
            }

        });

        if (found || searchText === "") {
            semester.style.display = "block";
        } else {
            semester.style.display = "none";
        }

    });

});
const semesterFilter = document.getElementById("semesterFilter");

semesterFilter.addEventListener("change", function() {

    const selectedSemester = semesterFilter.value;

    const semesters = document.querySelectorAll(".semester");

    semesters.forEach(function(semester) {

        const semesterName = semester.getAttribute("data-semester");

        if (selectedSemester === "all" ||
            selectedSemester === semesterName) {

            semester.style.display = "block";

        } else {

            semester.style.display = "none";

        }

    });

});
