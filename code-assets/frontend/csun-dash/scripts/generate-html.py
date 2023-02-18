import json
from glob import *
from hashlib import sha1

path_to_majors = '../../../../backend/data/json_majors/*'

a = []
for name in glob(path_to_majors):
    name = name.split('\\')[-1].replace(';', ':').replace('---', '/').removesuffix('.json')
    sha = sha1(name.encode()).hexdigest()[1:5]
    # print(name, end=' ')
    a.append(sha)
    assert len(set(a)) == len(a)
    base = """
          <div style={blob}>
                <h1><Link style={link} to="/majors/{route}">{name}</Link></h1>
        </div>
          
          """
    
    # print(base.format(route = sha1(name.encode()).hexdigest()[1:5],
    #                   name =  name, 
    #                   link = "{link}",
    #                   blob = """{{display: "flex", justifyContent: "left", marginLeft: "200px"}}"""))
    
    # print(str.format("<Route path='/majors/{lp}' element={ele} />", 
    #       lp = sha,
    #       ele = f"<{sha.upper()} />"))
    
    with open(f'../src/elements/Majors/react_files/{sha}.js', 'w') as f:
        f.write(f"function _{sha.upper()}()" + ' {\n')
        f.write('\treturn (<h2>STUFF WILL BE HERE...AT SOME POINT</h2>)\n')
        f.write('}\n')
        f.write(f'export default _{sha.upper()}\n')
        print(f"import _{sha.upper()} from './elements/Majors/react_files/{sha}'")
    
    
    # with open(name, 'r') as m:
    #     m = json.load(m)
    #     # print(name.split('\\')[-1])
    #     # print(m['name'])
    #     name = name.replace(';', ':').replace('---', '/').removesuffix('.json')
    #     # print(f"---\n{ m['name'] in name} => \n{m['name']}\n{name}\n---\n")
    #     if m['name'] not in name:
    #         print(f"---\n{m['name']}\n{name}\n---\n")