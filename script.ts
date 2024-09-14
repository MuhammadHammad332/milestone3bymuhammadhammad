document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();


        const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
        const nameElement = document.getElementById('name') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const phoneElement = document.getElementById('phone') as HTMLInputElement;
        const educationElement = document.getElementById('education') as HTMLInputElement;
        const experienceElement = document.getElementById('experience') as HTMLInputElement;
        const skillsElement = document.getElementById('skills') as HTMLInputElement;
    
    
        if (profilePictureInput && profilePictureInput && nameElement && emailElement && phoneElement && educationElement &&experienceElement && skillsElement){
    
            const name = nameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const education = educationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;
        
            const profilePictureFile = profilePictureInput.files?.[0]
            const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

            const resumeoutput= `
            <h1>Dynamic Resume</h1>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt= "Profile Picture" class="profilepicture">` : ""}
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Phone number:</strong> ${phone}</p>
    
            <h3>Education</h3>
            <p>${education}</p>
    
            
            <h3>Experience</h3>
            <p>${experience}</p>
    
            
            <h3>Skills</h3>
            <p>${skills}</p>
            `;
    
            const resumeOutputElement=document.getElementById('resumeoutput');
            if (resumeOutputElement){

                resumeOutputElement.innerHTML=resumeoutput;
                resumeOutputElement.style.display='block';
            } 
        }    
            else {
                console.error('one or more elements are missing')
            }
    
    });