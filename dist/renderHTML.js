const createHtml=()=>
{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team Roster</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    </head>
    
    <body>
      <header class="jumbotron text-center my-team-header bg-info text-white">
        <h1>My Team Roster</h1>
      </header>
      <main class="container ">
        <div class="row justify-content-center">
          <div class="col-lg-4 mb-4">
            <div class="card employee-card">
              <div class="card-header employee-header bg-info text-white">
                <h4>Oberon</h4>
                <h5><i class="fas fa-mug-hot"></i> Manager</h5>
              </div>
              <div class="card-body bg-light">
                <div class="employee-entry border border-secondary bg-white">
                  ID: 42
                </div>
                <div class="employee-entry border-right border-left border-secondary bg-white">
                  Email: <a href="mailto:oberon@myteam.com">oberon@myteam.com</a>
                </div>
                <div class="employee-entry border border-secondary bg-white">
                  Office Number: 123
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card employee-card">
              <div class="card-header employee-header bg-info text-white">
                <h4>Corwin</h4>
                <h5><i class="fas fa-glasses"></i> Engineer</h5>
              </div>
              <div class="card-body bg-light">
                <div class="employee-entry border border-secondary bg-white">
                  ID: 100
                </div>
                <div class="employee-entry border-right border-left border-secondary bg-white">
                  Email: <a href="mailto:corwin@myteam.com">corwin@myteam.com</a>
                </div>
                <div class="employee-entry border border-secondary bg-white">
                  GitHub: <a href="https://github.com/corwinrocks" target="_blank">corwinrocks</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card employee-card">
              <div class="card-header employee-header bg-info text-white">
                <h4>Gerard</h4>
                <h5><i class="fas fa-glasses"></i> Engineer</h5>
              </div>
              <div class="card-body bg-light">
                <div class="employee-entry border border-secondary bg-white" >
                  ID: 101
                </div>
                <div class="employee-entry border-right border-left border-secondary bg-white">
                  Email: <a href="mailto:gerard@myteam.com">gerard@myteam.com</a>
                </div>
                <div class="employee-entry border border-secondary bg-white">
                  GitHub: <a href="https://github.com/gerard123" target="_blank">gerard123</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 mb-4">
            <div class="card employee-card">
              <div class="card-header employee-header bg-info text-white">
                <h4>Merlin</h4>
                <h5><i class="fas fa-user-graduate "></i> Intern</h5>
              </div>
              <div class="card-body bg-light">
                <div class="employee-entry border border-secondary bg-white ">
                  ID: 200
                </div>
                <div class="employee-entry border-right border-left border-secondary bg-white">
                  Email: <a href="mailto:merlin@myteam.com">merlin@myteam.com</a>
                </div>
                <div class="employee-entry border border-secondary bg-white">
                  School: Amber University
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
     </body>
    </html>`
}