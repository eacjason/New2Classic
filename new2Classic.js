function main() {
  const courseId = window.location.pathname.split('/')[2];
  const assignmentId = window.location.pathname.split('/')[4];

  fetch(`/api/quiz/v1/courses/${courseId}/quizzes/${assignmentId}/items?page=1&per_page=100`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((quizData) => {
      const respondusData = convertQuizData(quizData);
      downloadFile('respondus_quiz.txt', respondusData);
    });
}

function convertQuizData(data) {
  let output = '';

  data.forEach((item, index) => {
    const entry = item.entry;
    const interactionType = entry.interaction_type_slug;
    const questionText = entry.item_body.replace(/“|”/g, '"').replace(/’/g, "'");

    if (interactionType === 'essay') {
      output += `Type: E\n`;
    } else if (interactionType === 'matching') {
      output += `Type: MT\n`;
    } else if (interactionType === 'multi-answer') {
      output += `Type: MA\n`;
    }

    output += `${index + 1}) [HTML]${questionText}[/HTML]\n`;

    if (interactionType === 'choice') {
      entry.interaction_data.choices.forEach((choice) => {
        const choiceText = choice.item_body.replace(/“|”/g, '"').replace(/’/g, "'");
        const isCorrect = entry.scoring_data.value === choice.id;
        const choicePosition = String.fromCharCode(97 + choice.position - 1); // Convert the position to a letter (a, b, c, etc.)
        output += `${isCorrect ? '*' : ''}${choicePosition}. [HTML]${choiceText}[/HTML]\n`;
      });
    } else if (interactionType === 'true-false') {
      const correctAnswer = entry.scoring_data.value;
      output += `*a. True\nb. False\n`;
      if (!correctAnswer) {
        output = output.replace('*a', 'a').replace('b', '*b');
      }
    } else if (interactionType === 'matching') {
      const matches = entry.scoring_data.edit_data.matches;
      matches.forEach((match, index) => {
        const questionText = match.question_body.replace(/<[^>]*>?/gm, '').replace(/“|”/g, '"').replace(/’/g, "'");
        const answerText = match.answer_body.replace(/<[^>]*>?/gm, '').replace(/“|”/g, '"').replace(/’/g, "'");
        const questionPosition = String.fromCharCode(97 + index); // Convert the index to a letter (a, b, c, etc.)
        output += `${questionPosition}. ${questionText} = ${answerText}\n`;
      });
    } else if (interactionType === 'multi-answer') {
      entry.interaction_data.choices.forEach((choice) => {
        const choiceText = choice.item_body.replace(/“|”/g, '"').replace(/’/g, "'");
        const isCorrect = entry.scoring_data.value.includes(choice.id);
        const choicePosition = String.fromCharCode(97 + choice.position - 1); // Convert the position to a letter (a, b, c, etc.)
        output += `${isCorrect ? '*' : ''}${choicePosition}. [HTML]${choiceText}[/HTML]\n`;
      });
    }
  });

  return output;
}

function downloadFile(filename, content) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

main();
