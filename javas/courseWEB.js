 function enrollCourse() {
  const isLoggedIn = localStorage.getItem('loggedIn');

  if (isLoggedIn !== 'true') {
    window.location.href = 'register.html';
  } else {
    const myCourses = JSON.parse(localStorage.getItem('myCourses')) || [];
    
    const currentCourse = {
      title: 'WEB Technologies | Frontend',
      id: 'WEB01',
      startDate: '10.05.2025',
      image: 'IMAGES/WEBcourse.jpg'
    };

    if (!myCourses.some(course => course.id === currentCourse.id)) {
      myCourses.push(currentCourse);
      localStorage.setItem('myCourses', JSON.stringify(myCourses));
    }

    window.location.href = 'my-courses.html';
  }
}