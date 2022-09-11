import AddClassesForm from './AddClassesForm'
import {class_codes} from '../classCodes'
import {useState} from 'react'

function AddClassesFormFetch(){


    return(
        <div>
            <AddClassesForm classCodes={class_codes} terms={["Fall-2022", "Spring-2023"]}></AddClassesForm>
        </div>
    )
}

export default AddClassesFormFetch;