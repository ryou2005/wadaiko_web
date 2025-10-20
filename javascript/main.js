const images = [
	'images/slideshow/slideshow1.jpg',
	'images/slideshow/slideshow3.jpeg',
	'images/slideshow/slideshow4.jpg',
    'images/slideshow/slideshow5.jpg',
    'images/slideshow/slideshow6.jpg',
    'images/slideshow/slideshow7.png',
    'images/slideshow/slideshow8.jpg',
    'images/slideshow/slideshow10.jpg',
    'images/slideshow/slideshow11.jpg',
    'images/slideshow/slideshow12.jpg',
    'images/slideshow/slideshow13.jpg',
];

let currentIndex = 0;
const slideA = document.getElementById('slideA');
const slideB = document.getElementById('slideB');

// Ensure slides exist
if (slideA && slideB) {
	// preload images
	images.forEach(src => { const i = new Image(); i.src = src; });

	// Set initial images
	slideA.src = images[0];
	slideB.src = images[1 % images.length];

	let showingA = true;

	function showNext() {
		// respect reduced motion
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) return; // do nothing if user prefers reduced motion

		const nextIndex = (currentIndex + 1) % images.length;

		if (showingA) {
			// set next image to B, then fade B in
			slideB.src = images[nextIndex];
			slideB.classList.add('visible');
			slideA.classList.remove('visible');
		} else {
			slideA.src = images[nextIndex];
			slideA.classList.add('visible');
			slideB.classList.remove('visible');
		}

		showingA = !showingA;
		currentIndex = nextIndex;
	}

	// Start interval (5 seconds)
	setInterval(showNext, 5000);
}

