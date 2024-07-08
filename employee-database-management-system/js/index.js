(async function(){
    const data =  await fetch("../data.json");
    const res = await data.json();

    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    console.log("employees : ", employees);

    // Render Employees Logic starts here

    const renderEmployees = () => {
        let employeeCards = document.querySelector(".employee-list__employee-cards");
        employeeCards.innerHTML = "";

        employees.forEach((emp) => {
            const employee = document.createElement("span");
            employee.classList.add("employee-card");

            const empName = document.createElement("div");
            const empDelete = document.createElement("div");

            empName.classList.add("name");
            empDelete.classList.add("delete");

            if(selectedEmployeeId === emp.id){
                employee.classList.add("active");
            }

            employee.setAttribute("id", emp.id);
            empName.innerHTML = `${emp.firstName} ${emp.lastName}`;
            empDelete.innerHTML = "❌";

            employee.append(empName);
            employee.append(empDelete);

            employeeCards.append(employee);

            employee.addEventListener('click', () => {
                console.log("clicked");
                if(selectedEmployeeId !== emp.id){
                    selectedEmployeeId = emp.id;
                    selectedEmployee = emp;

                    renderEmployees();
                    renderSingleEmployee();
                }
            })

        });

        return employeeCards;
        
    }

    renderEmployees();

    // let employeeCards = document.querySelector(".employee-list__employee-cards");

    // employeeCards.addEventListener('click', (e) => {
    //     console.log(e.target.tagName);
    //     console.log(e.target.id);
    //     if(e.target.class === "employee-card" && selectedEmployeeId !== e.target.id){
    //         selectedEmployeeId = emp.id;
    //         selectedEmployee = emp;

    //         renderEmployees();
    //         renderSingleEmployee();

    //     }
    // });

    // Render Employee Information Logic starts here

    const renderSingleEmployee = () => {
        let employeeInfoContent = document.querySelector(".employee-info__content");

        employeeInfoContent.innerHTML = "";

        let empProfile = document.createElement("img");
        let empName = document.createElement("div");
        let empAddress = document.createElement("div");
        let empEmail = document.createElement("div");
        let empContact = document.createElement("div");

        empProfile.classList.add("profile");
        empName.classList.add("name");
        empAddress.classList.add("address");
        empEmail.classList.add("email");
        empContact.classList.add("contact");

        empProfile.setAttribute("src", `${selectedEmployee.imageUrl}`);
        empName.innerHTML = `${selectedEmployee.firstName} ${selectedEmployee.lastName}`;
        empAddress.innerHTML = `${selectedEmployee.address}`;
        empEmail.innerHTML = `${selectedEmployee.email}`;
        empContact.innerHTML = `Mobile - ${selectedEmployee.contactNumber}`;

        employeeInfoContent.append(empProfile);
        employeeInfoContent.append(empName);
        employeeInfoContent.append(empAddress);
        employeeInfoContent.append(empEmail);
        employeeInfoContent.append(empContact);

    }

    if(selectedEmployee)
        renderSingleEmployee();

    //  Adding onClick Event Listener Employee Cards

    let addEmployee = document.querySelector('.addEmployee_button');
    let formWrapper = document.querySelector('.popupForm_wrapper');
    let submitNewEmployee = document.querySelector('.addEmployeeSubmit');
    let addEmployeeForm = document.querySelector('.addEmployeeForm');

    addEmployee.addEventListener('click', (e) => {
        formWrapper.style.display = "flex";
    })

    formWrapper.addEventListener('click', (e) => {
        if(e.target.className === "popupForm_wrapper"){
            formWrapper.style.display = "none";
        }
    })

    submitNewEmployee.addEventListener('click', (e) => {

        e.preventDefault();

        let empData = {};
        const formData = new FormData(addEmployeeForm);
        const values = [...formData.entries()];

        values.forEach((val) => {
            empData[val[0]] = val[1];
        })

        empData.id = employees[employees.length - 1].id + 1;

        empData.imageUrl = employees[0].imageUrl;

        employees.push(empData);

        console.log("values : ",values);

        renderEmployees();
        renderSingleEmployee();

        formWrapper.style.display = "none";
    })

    let deleteCard = document.querySelector(".delete");

    deleteCard.addEventListener('click',(e) => {

    })

})();





