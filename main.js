const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
var modal = document.querySelector(".modal");
 //   var trigger = document.querySelector(".trigger");
	var closeButton = document.querySelector(".close-button");
	
	var modal2 = document.querySelector(".modal2");
	var btn = document.querySelector(".buttons");
	var span = document.querySelector(".close2");



let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();													
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
		// console.log('drop');
		toggleModal();

    function toggleModal() {
        modal.classList.toggle("show-modal");
	   closeButton.addEventListener("click", toggleModal);
	   
	   function toggleModal2() {
        modal2.classList.toggle("show-modal2");
	   close2.addEventListener("click", toggleModal);

	   }
	   btn.addEventListener("click", toggleModal2);


	  }
	  
	}
	
   
							
							
						
		);
		
	}
	
}