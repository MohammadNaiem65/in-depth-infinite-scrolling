const mainContainer = document.querySelectorAll('.scroller');

function createLoop() {
	mainContainer.forEach((scroller) => {
		const container = scroller.querySelector('.inner');
		const contents = Array.from(container.children);

		contents.forEach((item) => {
			const duplicateItem = item.cloneNode(true);
			duplicateItem.setAttribute('aria-hidden', true);

			container.appendChild(duplicateItem);
		});
	});
}

createLoop();
