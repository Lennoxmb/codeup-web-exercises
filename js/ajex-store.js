(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    const toolsList = async (inventory) => {
            let response =await fetch(`data/inventory.json`)
            let data = await response.json();
            return data;
    }

    (async()=>{
        let toolsTable = await toolsList();
        console.log(toolsTable)
    })();
    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    const buildTable = (inventory) => {
        inventory.forEach(function(tool){
            let row = document.createElement('tr');
            row.innerHTML = `
                    <td>${tool.title}</td>
                    <td>${tool.quantity}</td>
                    <td>${tool.price}</td>
                    <td>${tool.catigories.join(', ')}</td>
                `;
            document.querySelector('#insertProducts').appendChild(row);
        });
    }
    buildTable();

    document.querySelector('#getData').addEventListener('click', async function(){
        document.querySelector('#insertProducts').innerHTML = '';
        let inventory = await toolsList();
        buildTable(inventory)
    })


})();