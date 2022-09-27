import re
sent = 'Grade of “C” or better in MATH 102, MATH 103, MATH 104, MATH 105, MATH 150A or MATH 255A, or a passing score on the Mathematics Placement Test (MPT) that satisfies prerequisites for MATH 150A or MATH 255A'


print(re.match(r"[A-Z]+[ ][0-9]+[\/L]?[[\/?]*[L?]*]?[[\/?]*[P?]*]?[A*B*C*]?[[\/?]*[L?]*]?[[A-Z]*]?", 'shit').group() == 'COMP 111A/L')