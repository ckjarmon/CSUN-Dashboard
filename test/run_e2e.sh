





node_modules/.bin/cypress run --config video=false --spec cypress/integration/home.spec.js &
node_modules/.bin/cypress run --config video=false --spec cypress/integration/planner.spec.js &
node_modules/.bin/cypress run --config video=false --spec cypress/integration/faculty.spec.js &
node_modules/.bin/cypress run --config video=false --spec cypress/integration/ratings.spec.js &
node_modules/.bin/cypress run --config video=false --spec cypress/integration/majors.spec.js &
wait 


