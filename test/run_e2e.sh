if [ $1 ]; then
    run() {
        # echo `date` > test_runs/faculty_run.txt
        node_modules/.bin/cypress run --config video=false --spec cypress/integration/home.spec.js > "test_runs/$1_run.txt"
        echo "$1 Run Complete at " `date` >> "test_runs/$1_run.txt"
        echo "$1 finished"
        exit 1
    }

    run home &
    run planner &
    run faculty &
    run ratings &
    run majors &

else

rm -rf test_runs
mkdir test_runs
node_modules/.bin/cypress run --config video=false >> test_runs/RUN.txt
echo "Run Complete at " `date` >> test_runs/RUN.txt

fi 



