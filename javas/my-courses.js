const container = document.getElementById('my-courses');
    const courses = JSON.parse(localStorage.getItem('myCourses')) || [];
    const progress = parseInt(localStorage.getItem("progress")) || 0;

    if (courses.length === 0) {
      container.innerHTML = '<p>No Courses</p>';
    } else {
      courses.forEach((course, index) => {
        const col = document.createElement('div');
        col.classList.add('col-md-6', 'col-lg-4');

        col.innerHTML = `
          <div class="card course-card shadow-sm mb-4">
            <img src="${course.image}" class="card-img-top" alt="${course.title}">
            <div class="card-body">
              <h5 class="card-title">${course.title}</h5>
              <p class="card-text"><strong>Code:</strong> ${course.id}</p>
              <p class="card-text"><strong>Starting Date:</strong> ${course.startDate}</p>
              <a href="WEBvideo1.html" class="btn btn-primary ">Start</a>

              <div class="mt-3">
                <label>Progress:</label>
                <div class="progress">
                  <div class="progress-bar bg-success" id="progressBar${index}" role="progressbar"
                       style="width: ${progress}%;" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
                    ${progress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        container.appendChild(col);
      });
    }