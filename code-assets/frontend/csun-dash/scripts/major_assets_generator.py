import json
from glob import *
from hashlib import sha1

path_to_majors = '../../../backend/data/json_majors/*'

hashed_major_names = []
formatted_divs = []
formatted_routes = []
imports = []

for name in glob(path_to_majors):
    name = name.split('\\')[-1].replace(';', ':').replace('---', '/').removesuffix('.json')
    sha = sha1(name.encode()).hexdigest()[1:5]
    
    # Ensures no collisions, panics if there is
    hashed_major_names.append(sha)
    assert len(set(hashed_major_names)) == len(hashed_major_names)
    
    base_div = """
          <div style={blob}>
                <h1><Link style={link} to="/majors/{route}">{name}</Link></h1>
        </div>
          
          """

    formatted_div = base_div.format(route = sha1(name.encode()).hexdigest()[1:5],
                      name =  name, 
                      link = "{link}",
                      blob = """{{display: "flex", justifyContent: "left", marginLeft: "200px"}}""")
    
    
    formatted_divs.append(formatted_div)
    
    
    base_route = "<Route path='/majors/{lp}' element={ele} />"
    
    formatted_route = base_route.format("<Route path='/majors/{lp}' element={ele} />", 
          lp = sha,
          ele = '{' +  f"<{sha.upper()} />" + '}')
    
    formatted_routes.append(formatted_route)
    
    
    
    with open(f'../src/elements/Majors/react_files/{sha}.js', 'w') as f:
        f.write(f"function _{sha.upper()}()" + ' {\n')
        f.write('\treturn (<h2>STUFF WILL BE HERE...AT SOME POINT</h2>)\n')
        f.write('}\n')
        f.write(f'export default _{sha.upper()}\n')
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