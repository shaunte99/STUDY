const lessonsContainer = document.getElementById("lessons-container");
const gradeSelect = document.getElementById("grade-select");

// Parse embedded JSON
const jsonData = JSON.parse(document.getElementById("math-data").textContent);

function loadLessons(grade) {
  lessonsContainer.innerHTML = "<p>Loading...</p>";

  const lessons = jsonData[grade]?.topics;
  if (!lessons) {
    lessonsContainer.innerHTML = "<p>❌ No topics found for this grade</p>";
    return;
  }

  lessonsContainer.innerHTML = "";

  lessons.forEach(topic => {
    const card = document.createElement("div");
    card.className = "lesson-card";

    const title = document.createElement("h2");
    title.textContent = topic.title;

    const lessonText = document.createElement("p");
    lessonText.textContent = topic.lesson;

    const img = document.createElement("img");
    img.src = topic.media;
    img.alt = topic.title;

    const quiz = document.createElement("div");
    quiz.className = "quiz";
    const q = document.createElement("p");
    q.textContent = topic.quiz[0].question;

    quiz.appendChild(q);
    topic.quiz[0].options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === topic.quiz[0].answer) {
          alert("🎉 Correct!");
        } else {
          alert("❌ Try again!");
        }
      };
      quiz.appendChild(btn);
    });

    card.appendChild(title);
    card.appendChild(lessonText);
    card.appendChild(img);
    card.appendChild(quiz);

    lessonsContainer.appendChild(card);
  });
}

gradeSelect.addEventListener("change", () => {
  loadLessons(gradeSelect.value);
});

// Load Grade R on first load
loadLessons("gradeR");
