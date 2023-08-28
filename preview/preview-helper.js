
function fetchGqlResponse() {
    const endpointUrl = 'https://example.com/api/endpoint';

    let serverResponse;

    fetch(endpointUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            serverResponse = data;
            console.log('Data from the server:', serverResponse);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        return serverResponse;

}
function getActionDetails(actionList) {
    let actionComponent = "";
    actionList.forEach((item, index) => {
        console.log("call came here", JSON.stringify(item));
        actionComponent += `<b>Action_${index + 1}</b> (label= ${item.label || "NA"} href= ${item.href || "NA"} ariaLabel= ${item.ariaLabel || "NA"})</br>`;
    });
    return actionComponent;
}

function creatTableTitle() {
    try {
        const reportHeading = document.createElement("h2");
        reportHeading.innerHTML = jsonData.data.screenByPath.item?.pageTitle;
        // reportHeading.insertBefore(tableBody);
        document.insertBefore(reportHeading, tableBody);
    } catch (e) {
        console.log(e);
    }
}

function generateRows(data, sectionIndex, tableBody) {
    data.forEach((item, index) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>Section_${sectionIndex + 1}_Component_${index + 1}</td>
        <td>
          <b>ContentKey</b> ${item.contentKey || "NA"}</br>
          <b>title</b> ${item.title || "NA"}</br>
          <b>Description</b> ${item.description.plaintext || "NA"}</br>
          <b>Actions</b></br> &nbsp ${getActionDetails(item.actions)}</br>
        </td>
      `;
        tableBody.appendChild(newRow);
    });
}

function generatePageImageDetails(jsonData, tableBody) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>Page_Image</td>
        <td>
          <b>Path</b> ${jsonData.data.screenByPath?.pageImage?.path || "NA"}</br>
          <b>Alt title</b> ${jsonData.data.screenByPath?.pageImage?.altTitle || "NA"}</br>
        </td>
      `;
    tableBody.appendChild(newRow);

}

function generatePageActionPreview(data,tableBody){
    const actionDetails=getActionDetails(Array.of(data));
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>Page_Action</td>
    <td>
      <b>Actions</b></br> &nbsp ${actionDetails}</br>
    </td>
  `;
    tableBody.appendChild(newRow);
}

const jsonData = {
    "data": {
        "screenByPath": {
            "item": {
                "_path": "/content/dam/global/testfolder/",
                "pageTitle": "Premier mortgages",
                "pageImage": {},
                "sections": [
                    {
                        "items": [
                            {
                                "contentTags": null,
                                "contentKey": null,
                                "icon": null,
                                "title": "Exclusive mortgage optic",
                                "description": "",
                                "actions": [{
                                    "label": "bjb",
                                    "href": "bdjsb"
                                }]
                            },
                            {
                                "contentTags": null,
                                "contentKey": null,
                                "icon": null,
                                "title": null,
                                "description": "",
                                "actions": []
                            }
                        ]
                    }
                ],
                "pageAction": {
                    "href": "",
                    "label": ""
                }
            }
        }
    }
};



const gqlResponse=fetchGqlResponse();
const tableBody = document.querySelector("#reportTable tbody");
 generatePageImageDetails(jsonData,tableBody);
 jsonData != null && jsonData.data.screenByPath.item.sections.forEach((item, index) => {generateRows(item.items, index, tableBody);});
if(jsonData.data.screenByPath.item.pageAction != null){
    generatePageActionPreview(jsonData.data.screenByPath.item.pageAction,tableBody);
}