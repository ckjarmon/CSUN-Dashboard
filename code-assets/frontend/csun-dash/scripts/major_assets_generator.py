import re
import json
from glob import *
from hashlib import sha1

path_to_majors = '../../../backend/data/json_majors/*'


def not_conformable(_A):
    return re.match('[A-Z]{1}\.|[1-9]{1}\.', _A) is None and \
                re.match('[a-z]{1}\.', _A) is  None and \
                re.match('[\w \.\/]*\: [\-0-9]{1,}', _A) is  None

def conform_to_option(_OPTIONABLE):
    assert type(_OPTIONABLE) is list
    L = 0
    result = ""
    result += "<ul style={option_style}>\n" 
    result += "<li>" + _OPTIONABLE[L] + "</li>\n"
    result += "<li>" + _OPTIONABLE[L+1] + "</li>\n"
    result += "</ul>\n"
    L += 2
    return L, result


def conform_to_list(_LISTABLE):
    assert type(_LISTABLE) is list
    L = 0
    result = ""
    result += "<div style={redBoldStyle}>" + _LISTABLE[L] + "</div>\n"
    result += "<ul style={list_style}>\n"
    # print(result)
    L += 1
    try:
        while not_conformable(_LISTABLE[L]):  
            if _LISTABLE[L+1].split(' ')[0] in ['and', 'or']:
                _augmented_L, _augmented_result = conform_to_option(_LISTABLE[L:L+2])
                L += _augmented_L
                result += _augmented_result
            else:
                result += "<li>" + _LISTABLE[L] + "</li>\n"
                L += 1
    except IndexError:
        pass
    result += "</ul>\n"
    return L-1, result
        
def conform_to_sublist(_SUBLISTABLE):
    assert type(_SUBLISTABLE) is list
    L = 0
    result = ""
    result += "<div style={subRedBoldStyle}>" + _SUBLISTABLE[L] + "</div>\n"
    result += "<ul style={sublist_style}>\n"
    # print(result)
    L += 1
    try:    
        while not_conformable(_SUBLISTABLE[L]):
            if _SUBLISTABLE[L+1].split(' ')[0] in ['and', 'or']:
                _augmented_L, _augmented_result = conform_to_option(_SUBLISTABLE[L:L+2])
                L += _augmented_L
                result += _augmented_result
            else:
                result += "<li>" + _SUBLISTABLE[L] + "</li>\n"
                L += 1
    except IndexError:
        pass                    
    result += "</ul>\n"
    return L-1, result
        
def conform_to_summary(_SUMMARABLE):
    assert type(_SUMMARABLE) is list
    L = 0
    result = ""
    result += "<br></br>"
    result += "<ul style={summary_style}>\n"
    try:
        while re.match( '[\w \.\/]*\: [0-9]{1,}', _SUMMARABLE[L]) is not None:
            result += "<li>" + _SUMMARABLE[L] + "</li>\n"
            L += 1
    except IndexError:
        pass
    result += "</ul>\n"
    return L-1, result

def conform_to_information(_INFORMABLE):
    assert type(_INFORMABLE) is list
    L = 0
    result = ""
    result += "<ul style={information_style}>"
    try:
        while not_conformable(_INFORMABLE[L]):
            result += "<li>" + _INFORMABLE[L] + "</li>\n"
            L += 1
    except:
        pass
    result += "</ul>\n"
    return L-1, result 





def REACTIFY(m, major_hash, major_name):
    result = """
    import Header from "../../../components/Header";
    import Box from '@mui/system/Box'
    // import WebFont from 'webfontloader';

    const titleStyle = { color: '#E31C25', justifyContent: "center", textAlign: "center" }
    const redBoldStyle = { color: 'red', fontWeight: 'bold', textDecorationLine: 'underline', padding: "10px", textAlign: "left" }
    const subRedBoldStyle = { color: 'red', textDecorationLine: 'underline', textAlign: "left", marginLeft: "4%" }
    const subHeaderStyle = { color: 'black', fontweight: 'heavy', textDecorationLine: 'underline', padding: "2px", }

    const list_style = { marginLeft: "4%" }
    const sublist_style = { padding: "10px", marginLeft: "6%" }
    const subsequence_style = { padding: "5px" }

    const fineprint_style = { fontWeight: 'bold' }
    const option_style = { marginLeft: "2%", padding: "5px" }
    const information_style = { inlineSize: "1100px", overflowWrap: "break-word", padding: "10px", marginLeft: "2%" }
    const summary_style = { marginLeft: "2%", color: 'blue', fontWeight: 'bold', textDecorationLine: 'underline', textAlign: "left", fontSize: "20px" }


    function _""" + major_hash.upper() + """() {
        return (

            <div style={{ backgroundColor: "white" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%' }}>
                        <Box color="black" bgcolor="#eeeeee" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>""" + major_name + "</h2>"
   
    L = 0
    while L < len(m):
        if m[L][0] == '*':
            result += "<div style={fineprint_style}>" + m[L] + "</div>\n"

        elif m[L] == "Program Requirements":
            result += "<div style={titleStyle}>Program Requirements</div>"

        elif re.match('[A-Z]{1}\.|[1-9]{1}\.', m[L]) is not None:
            # print(f"LIST => {m[L]}")
            _augmented_L, _augmented_result = conform_to_list(m[L:])
            # print(_augmented_result)
            L += _augmented_L
            result += _augmented_result

        elif re.match('[a-z]{1}\.', m[L]) is not None:
            # print(f"SUBLIST => {m[L]}")
            _augmented_L, _augmented_result = conform_to_sublist(m[L:])
            # print(_augmented_result)
            L += _augmented_L
            result += _augmented_result

        elif re.match('[\w \.\/]*\: [0-9]{1,}', m[L]) is not None:
            # print(f"START OF SUMMARY => {m[L]}")
            _augmented_L, _augmented_result = conform_to_summary(m[L:])
            # print(_augmented_result)
            L += _augmented_L
            result += _augmented_result

        else:
            _augmented_L, _augmented_result = conform_to_information(m[L:])
            # print(_augmented_result)
            L += _augmented_L
            result += _augmented_result

        L += 1
    return result + """  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _""" + major_hash.upper()





hashed_major_names = []
formatted_divs = []
formatted_routes = []
imports = []
major_names = []
for name in glob(path_to_majors):
    major_name = name.split('\\')[-1].replace(';', ':').replace('---', '/').removesuffix('.json')
    major_names.append(major_name)
    sha = sha1(major_name.encode()).hexdigest()[1:5]
    
    program_reqq_blob = json.load(open(name, 'r'))["prog-reqq-blob"]
    
    # Ensures no collisions, panics if there is
    hashed_major_names.append(sha)
    assert len(set(hashed_major_names)) == len(hashed_major_names)
    
    base_div = """
                <li><h1><Link style={link} to="/majors/{route}">{name}</Link></h1></li>
          """

    formatted_div = base_div.format(route = sha1(major_name.encode()).hexdigest()[1:5],
                      name =  major_name, 
                      link = "{link}")
    
    
    formatted_divs.append(formatted_div)
    
    
    base_route = "<Route path='/majors/{lp}' element={ele} />"
    
    formatted_route = base_route.format("<Route path='/majors/{lp}' element={ele} />", 
          lp = sha,
          ele = '{' +  f"<{sha.upper()} />" + '}')
    
    formatted_routes.append(formatted_route)
    
    
    
    with open(f'../src/elements/Majors/react_files/{sha}.js', 'w') as f:
        # f.write(f"function _{sha.upper()}()" + ' {\n')
        # f.write('\treturn (<h2>STUFF WILL BE HERE...AT SOME POINT</h2>)\n')
        # f.write('}\n')
        # f.write(f'export default _{sha.upper()}\n')
        f.write(REACTIFY(program_reqq_blob, sha.upper(), major_name))
        imports.append(f"import _{sha.upper()} from './elements/Majors/react_files/{sha}'")
    
    

assert len(formatted_routes) > 0
assert len(formatted_divs) > 0

with open('./formatted_routes.txt', 'w') as f:
    for route in formatted_routes:
        f.write(route + '\n')
        
        
with open('./formatted_divs.txt', 'w') as f:
    for div in formatted_divs:
        f.write(div)
        
with open('./imports.txt', 'w') as f:
    for imp in imports:
        f.write(imp + '\n')
        
from pprint import pprint
# pprint(major_names)    



"""
    Priority
    For every _L-th line (with counter)
    
    Check re.match( '[0-9]. General Education \([0-9]+ units\)', _L) is not None
        If match => iterate every i-th line
            conform each to {information_style}

    If _L match [A-Z]{1}. OR [1-9]{1}.
        If match => iterate every i-th line
            conform each to {list_style}
            if i+1 line starts with 'and' or 'or'
                conform to option style
    
    If _L match [a-z]{1}. 
        If match => iterate every i-th line
            conform each to {sublist_style} 
            
    if _L[0] == '*'
        conform to {fineprint_style}
    
    if re.match('[\w \.\/]*\: [\-0-9]{1,}', _L) is not None:
        summary_group = (_L, _L+1)
        while re.match( '[\w \.\/]*\: [\-0-9]{1,}', _L+1) is not None:
            summary_group[1]+=1
            _L += 1
    
    else (should just be information_style at this point)
        while (subsequent lines dont match any other style)
            group the shits and conform
        
    Conform => information_style

    
    
    
    Last 4 lines should be summary
    
    
    """