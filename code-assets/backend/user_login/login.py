from flask import Flask, render_template

# render template
# return render_template("index.html")

app = Flask(__name__)

@app.route('/')
def login():
    return render_template("index.html")

print("Passing the numbers: 1,2,3")
answer = sum([1,2,3])
print("What is the result of 1+2+3?: %d" %answer)

def sum(*args):
    finalResult = 0
    for number in args:
        finalResult += number
    return finalResult

if __name__ == '__main__':
    app.run(debug=True)