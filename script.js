//Loading array with key value pairs
const cards = [
  { port: 21, purpose: 'FTP' },
  { port: 22, purpose: 'SSH' },
  { port: 23, purpose: 'Telnet' },
  { port: 25, purpose: 'SMTP' },
  { port: 53, purpose: 'DNS' },
  { port: 80, purpose: 'HTTP' },
  { port: 143, purpose: 'IMAP' },
  { port: 161, purpose: 'SNMP' },
  { port: 443, purpose: 'HTTPS' },
  { port: 500, purpose: 'IKE' },
  { port: 587, purpose: 'SMTP (Secure Submission)' },
  { port: 990, purpose: 'FTPS' },
  { port: 993, purpose: 'IMAPS (Secure IMAP)' },
  { port: 995, purpose: 'POP3S (Secure POP3)' },
  { port: 3306, purpose: 'MySQL' },
  { port: 3389, purpose: 'RDP' },
];

//Set initial states
let index = 0;
let flipped = false;

//Grab elements being used
const quizText = document.getElementById('quiz-text');
const progressText = document.getElementById('progress-text');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');
const startOverBtn = document.getElementById('startOver-btn');

//When page loads sets elements to initial state
document.addEventListener('DOMContentLoaded', () => {
  checkState();
});

//Does check of state of elements
function checkState() {
  //Sets currentCard to position in array
  const currentCard = cards[index];
  //Determins if port or purpose is displayed
  quizText.textContent = flipped ? currentCard.port : currentCard.purpose;
  //Determins question or answer text on flip button
  flipBtn.textContent = flipped ? 'Question' : 'Answer';
  //Sets progress
  progressText.textContent = `Card ${index + 1} of ${cards.length}`;
}

//Changes displayed from question to answer
flipBtn.addEventListener('click', () => {
  flipped = !flipped;
  checkState();
});

//Resets to begining
startOverBtn.addEventListener('click', () => {
  index = 0;
  nextBtn.disabled = false;
  flipped = false;
  checkState();
});

//Goes to next question in array
nextBtn.addEventListener('click', () => {
  flipped = false;
  index++;
  checkState();
  nextBtn.disabled = !(index < cards.length - 1);
});
