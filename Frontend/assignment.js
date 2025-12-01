const addBtn = document.getElementById('addAssignmentBtn');
const formContainer = document.getElementById('assignmentFormContainer');
const assignmentWrapper = document.querySelector('.assignment-wrapper');

// Toggle form visibility
addBtn.addEventListener('click', () => {
    formContainer.classList.toggle('hidden');
});

// Handle form submission
document.getElementById('assignmentForm').addEventListener('submit', function(e){
    e.preventDefault();

    const title = this.title.value;
    const course = this.course.value;
    const deadline = this.deadline.value;
    const status = this.status.value;

    // Create new assignment card
    const newCard = document.createElement('div');
    newCard.className = 'assignment-card';
    newCard.innerHTML = `
        <h3>${title}</h3>
        <p class="course">Course: ${course}</p>
        <p class="deadline">Deadline: ${new Date(deadline).toDateString()}</p>
        <span class="status ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
        <button class="view-btn">View Details</button>
    `;

    // Prepend to show recently added at the top
    assignmentWrapper.prepend(newCard);

    // Reset form and hide
    this.reset();
    formContainer.classList.add('hidden');
});

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.textContent.toLowerCase();
        const cards = document.querySelectorAll('.assignment-card');

        cards.forEach(card => {
            const status = card.querySelector('.status').textContent.toLowerCase();
            if(filter === 'all' || status === filter){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// moving between pages 

document.getElementById("dashBtn").addEventListener("click" ,()=>{
    window.location.href = "dashboard.html"
})