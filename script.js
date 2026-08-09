document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const semesterFilter = document.getElementById("semesterFilter");
    const semesters = document.querySelectorAll(".semester");

    function filterContent() {

        const searchText = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        const selectedSemester = semesterFilter
            ? semesterFilter.value
            : "all";

        semesters.forEach(function (semester) {

            const semesterName =
                semester.getAttribute("data-semester");

            const cards = semester.querySelectorAll(".card");

            let visibleCards = 0;

            cards.forEach(function (card) {

                const titleElement = card.querySelector("h3");

                if (!titleElement) return;

                const subject =
                    titleElement.textContent.toLowerCase();

                const matchesSearch =
                    subject.includes(searchText);

                const matchesSemester =
                    selectedSemester === "all" ||
                    selectedSemester === semesterName;

                if (matchesSearch && matchesSemester) {
                    card.style.display = "block";
                    visibleCards++;
                } else {
                    card.style.display = "none";
                }

            });

            if (visibleCards > 0) {
                semester.style.display = "block";
            } else {
                semester.style.display = "none";
            }

        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", filterContent);
    }

    if (semesterFilter) {
        semesterFilter.addEventListener("change", filterContent);
    }

});
