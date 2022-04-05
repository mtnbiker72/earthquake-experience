const newExperienceHandler = async (event) => {
    event.preventDefault();
  
    const feel_it = document.querySelector('#experience-feel').value.trim();
    const description = document.querySelector('#experience-desc').value.trim();
  
    if (feel_it && description) {
      const response = await fetch(`/api/experience`, {
        method: 'POST',
        body: JSON.stringify({ feel_it, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };

  document
  .querySelector('.new-experience-form')
  .addEventListener('submit', newExperienceHandler);