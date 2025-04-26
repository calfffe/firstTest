const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let timeLeft = 1800;
let interval;
let running = false;

const updateTimer = () => {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	timer.innerHTML =
	`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

};

const startTimer = () => {
	if(running) return;
	running = true;

	interval = setInterval(() => {
		timeLeft--;
		updateTimer();

		if(timeLeft === 0) {
			clearInterval(interval);
			running = false;
			alert("time's up");
			timeLeft = 1800;
			updateTimer();
		}

	}, 1000);
};

const pauseTimer = () => {
	clearInterval(interval);
	running = false;
}

const resetTimer = () => {
	clearInterval(interval);
	running = false;
	timeLeft = 1800;
	updateTimer();
}

start.addEventListener("click",startTimer);
pause.addEventListener("click",pauseTimer);
reset.addEventListener("click",resetTimer);