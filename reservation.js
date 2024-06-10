document.getElementById('reservation').addEventListener('submit', function(event){
    event.preventDefault()


    document.getElementById('title').classList.remove('borderLine')
    document.getElementById('titleError').style.display = 'none'
    document.getElementById('lastName').classList.remove('borderLine')
    document.getElementById('lastNameError').style.display = 'none'
    document.getElementById('firstName').classList.remove('borderLine')
    document.getElementById('firstNameError').style.display = 'none'
    document.getElementById('otherNames').classList.remove('borderLine')
    document.getElementById('otherNamesError').style.display = 'none'
    document.getElementById('age').classList.remove('borderLine')
    document.getElementById('ageError').style.display = 'none'
    document.getElementById('phoneNumber').classList.remove('borderLine')
    document.getElementById('phoneNumberError').style.display = 'none'
    document.getElementById('email').classList.remove('borderLine')
    document.getElementById('emailError').style.display = 'none'
    document.getElementById('address').classList.remove('borderLine')
    document.getElementById('addressError').style.display = 'none'
    document.getElementById('Occupation').classList.remove('borderLine')
    document.getElementById('OccupationError').style.display = 'none'
    document.getElementById('title2').classList.remove('borderLine')
    document.getElementById('title2Error').style.display = 'none'
    document.getElementById('fullName').classList.remove('borderLine')
    document.getElementById('fullNameError').style.display = 'none'
    document.getElementById('address2').classList.remove('borderLine')
    document.getElementById('address2Error').style.display = 'none'
    document.getElementById('guardianNumber').classList.remove('borderLine')
    document.getElementById('guardianNumberError').style.display = 'none'
    document.getElementById('email2').classList.remove('borderLine')
    document.getElementById('email2Error').style.display = 'none'
    document.getElementById('TypeOfLeasson').classList.remove('borderLine')
    document.getElementById('TypeOfLeassonError').style.display = 'none'
    document.getElementById('lessonDuration').classList.remove('borderLine')
    document.getElementById('lessonDurationError').style.display = 'none'
    document.getElementById('lessonperiod').classList.remove('borderLine')
    document.getElementById('lessonperiodError').style.display = 'none'
    document.getElementById('lessonInstructor').classList.remove('borderLine')
    document.getElementById('lessonInstructorError').style.display = 'none'
    document.getElementById('date').classList.remove('borderLine')
    document.getElementById('dateError').style.display = 'none'
    document.getElementById('time').classList.remove('borderLine')
    document.getElementById('timeError').style.display = 'none'
    document.getElementById('lastError').style.display = 'none'


    let studentDetails = {
        title : document.getElementById('title').value,
        lastName : document.getElementById('lastName').value,
        firstName : document.getElementById('firstName').value,
        otherNames : document.getElementById('otherNames').value,
        age : document.getElementById('age').value,
        phoneNumber : document.getElementById('phoneNumber').value,
        email : document.getElementById('email').value,
        address : document.getElementById('address').value,
        Occupation : document.getElementById('Occupation').value,
        guidiantitle2 : document.getElementById('title2').value,
        guidianFullName : document.getElementById('fullName').value,
        guidianAddress2 : document.getElementById('address2').value,
        guardianNumber : document.getElementById('guardianNumber').value,
        guidianemail2 : document.getElementById('email2').value,
        TypeOfLeasson : document.getElementById('TypeOfLeasson').value,
        lessonDuration : document.getElementById('lessonDuration').value,
        lessonperiod : document.getElementById('lessonperiod').value,
        lessonInstructor : document.getElementById('lessonInstructor').value,
        date : document.getElementById('date').value,
        time : document.getElementById('time').value
    }

    if (studentDetails.title === "") {
        document.getElementById('title').classList.add('borderLine')
        document.getElementById('titleError').style.display = 'block'
        document.getElementById('lastError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.lastName === "") {
        document.getElementById('lastName').classList.add('borderLine')
        document.getElementById('lastNameError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.firstName === "") {
        document.getElementById('firstName').classList.add('borderLine')
        document.getElementById('firstNameError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    
    if (studentDetails.otherNames === "") {
        document.getElementById('otherNames').classList.add('borderLine')
        document.getElementById('otherNamesError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.age === "") {
        document.getElementById('age').classList.add('borderLine')
        document.getElementById('ageError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    
    if (studentDetails.phoneNumber === "") {
        document.getElementById('phoneNumber').classList.add('borderLine')
        document.getElementById('phoneNumberError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.email === "") {
        document.getElementById('email').classList.add('borderLine')
        document.getElementById('emailError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.address === "") {
        document.getElementById('address').classList.add('borderLine')
        document.getElementById('addressError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.Occupation === "") {
        document.getElementById('Occupation').classList.add('borderLine')
        document.getElementById('OccupationError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.guidiantitle2 === "") {
        document.getElementById('title2').classList.add('borderLine')
        document.getElementById('title2Error').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.guidianFullName === "") {
        document.getElementById('fullName').classList.add('borderLine')
        document.getElementById('fullNameError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.guidianAddress2 === "") {
        document.getElementById('address2').classList.add('borderLine')
        document.getElementById('address2Error').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.guardianNumber === "") {
        document.getElementById('guardianNumber').classList.add('borderLine')
        document.getElementById('guardianNumberError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.guidianemail2 === "") {
        document.getElementById('email2').classList.add('borderLine')
        document.getElementById('email2Error').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.TypeOfLeasson === "") {
        document.getElementById('TypeOfLeasson').classList.add('borderLine')
        document.getElementById('TypeOfLeassonError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.lessonDuration === "") {
        document.getElementById('lessonDuration').classList.add('borderLine')
        document.getElementById('lessonDurationError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.lessonperiod === "") {
        document.getElementById('lessonperiod').classList.add('borderLine')
        document.getElementById('lessonperiodError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.lessonInstructor === "") {
        document.getElementById('lessonInstructor').classList.add('borderLine')
        document.getElementById('lessonInstructorError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.time === "") {
        document.getElementById('time').classList.add('borderLine')
        document.getElementById('timeError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (studentDetails.date === "") {
        document.getElementById('date').classList.add('borderLine')
        document.getElementById('dateError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }

    if (studentDetails.TypeOfLeasson === "highway") {
        document.getElementById('TypeOfLeasson').classList.add('borderLine')
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `There's No More Available Slot For The Selected Lesson Type  `,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        error = true
        return false
    } else if (studentDetails.TypeOfLeasson === "Manual") {
        document.getElementById('TypeOfLeasson').classList.add('borderLine')
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `There's No More Available Slot For The Selected Lesson Type  `,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    } else {
        // Swal.fire({
        //     title: "Congratulations on your successful booking",
        //     text: "clicked the OK button and see yor Lesson Sumary",
        //     icon: "success"
        //   });
        window.location.href = "Summary.html"
        error = false
    }




    let = studentDetailsJson = JSON.stringify(studentDetails);
    localStorage.setItem("student", studentDetailsJson)
    
    
});