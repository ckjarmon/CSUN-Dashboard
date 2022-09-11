import MenuItem from '@mui/material/MenuItem';

function DropDownItems(props){

    function renderItems(){
        let items = []

        for(let i=0; i < props.itemsLength; i++){
            items.push(<MenuItem key={i} value={props.items[i]}>{props.items[i]}</MenuItem>)
        }
        
        return items;
    }

    return(
        <>
            {renderItems()}
        </>
    )
}

export default DropDownItems;