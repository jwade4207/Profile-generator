const generateHtml = (createdEmployees) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">y
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My-Team-Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header> 
            <div class=""> 
            <h1 class="">My Team</h1>
            </div>
        </header>
        <main>
        <!-- Manager Section -->
            <section>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${createdEmployees[0].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${createdEmployees[0].id}</h6>
              <p class="card-text">${createdEmployees[0].officeNumber}</pId>
              <a href="#" class="card-link">${createdEmployees[0].email}</a>
            </div>
          </div>
            </section>
            <!-- Engineer Section -->
            <section>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${createdEmployees[1].name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${createdEmployees[1].id}</h6>
              <p class="card-text">${createdEmployees[1].gitHub}</pId>
              <a href="#" class="card-link">${createdEmployees[1].email}</a>
            </div>
          </div>
          <!-- Employee Section -->
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${createdEmployees[2].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${createdEmployees[2].id}</h6>
            <a href="#" class="card-link">${createdEmployees[2].email}</a>
          </div>
        </div>
        <!-- Intern Section -->
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${createdEmployees[3].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${createdEmployees[3].id}</h6>
          <p class="card-text">${createdEmployees[3].school}</pId>
          <a href="#" class="card-link">${createdEmployees[3].email}</a>
        </div>
      </div>
            </section>
            
            
        </main>
    </body>
    </html>
    
    `;
};
module.exports = generateHtml