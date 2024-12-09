// Handle hobby selection with single click and double-click behavior
document.querySelectorAll('.hobby-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function(event) {
        const hobbyBox = this.closest('.hobby');
        
        // Prevent double-click from toggling selection
        if (event.detail === 2) {
            event.preventDefault();
            return;
        }

        if (this.checked) {
            hobbyBox.classList.add('selected');  
        } else {
            hobbyBox.classList.remove('selected');  
        }
    });
});

// Handle the start button click
document.getElementById("startButton").onclick = function() {
    let selectedHobbies = [];
    const checkboxes = document.querySelectorAll('.hobby-checkbox:checked');
    
    // Collect selected hobbies
    checkboxes.forEach(function(checkbox) {
        selectedHobbies.push(checkbox.id.replace(/([A-Z])/g, ' $1').toLowerCase());
    });

     if (selectedHobbies.length > 0) {
            document.getElementById("startLink").click(); // Trigger the link click programmatically
        }// If there are selected hobbies, navigate to forms.html

};

