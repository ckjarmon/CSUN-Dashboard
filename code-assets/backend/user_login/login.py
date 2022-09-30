from flask import Flask, render_template

# render template
# return render_template("index.html")

app = Flask(__name__)

# login should be shown on every page
@app.route('/')
def login():
    return render_template("index.html")

def sum_it(*args):
    finalResult = 0
    for number in args[0]:  # note this only works when 1 argument is passed, i need to modifiy this later
        finalResult += number
    return finalResult

print("Passing the numbers: 1,2,3")
answer = sum_it([1,2,3])
print("What is the result of 1+2+3?: %d" %answer)

if __name__ == '__main__':
    app.run(debug=True)