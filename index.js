var collection = {
    "Academic":
    [  
        {"Moodle":"https://moodle.nottingham.ac.uk/login/index.php", "Description":"The most frequently used website containing all the course materials and assignments"},  
        {"Web Instatt":"https://attendance.nottingham.edu.my/login", "Description":"In case your phone doesn't work, use this Web Version Instatt to take attendance"},  
        {"SharePoint":"https://numcmy.sharepoint.com/_layouts/15/sharepoint.aspx", "Description":"Sharepoint is where you can find all the adademic documents"},
        {"Turnitin": "https://moodle.nottingham.ac.uk/mod/turnitintooltwo/view.php?id=5481182", "Description": "This is where you can check the similarity of your assignment"},
        {"Citethisforme": "https://www.citethisforme.com/", "Description": "This is where you can create citation in different format"},
        {"Academic Calender": "https://www.nottingham.edu.my/AboutUs/documents/Academic-Calendar/New-Aca-Calendar-2021-22-UG-and-PGT.pdf", "Description": "This is the academic calender of Academic Year 21 - 22"},
        {"Timetable": "http://timetablingunmc.nottingham.ac.uk:8006/program.htm", "Description": "This is where you can find the timetable of your course"} 
    ],
    "Non-Academic":
    [
        {"MyNottingham": "https://mynottingham.nottingham.ac.uk/", "Description": "This is the platform for all the general administration stuffs including Finance Payment and Course Enrollment"},
        {"Online Requests App": "https://apps.nottingham.edu.my/jw/web/userview/appcenter/UNMC_Workflow/_/home", "Description": "This is the platform where you can submit all your request (accomodation clearning services, book gym session etc.) <br> This will be extremely useful when you return back to campus"},
        {"Accomodation Application:": "https://applyaccommodation.nottingham.edu.my/", "Description": "This is where you can apply for On-Campus Accomodation"},
        {"Pictures of campus": "https://drive.google.com/drive/folders/1DMqNdOP5bwDaD_qvGU0qu4Itlif2Rn2W?usp=sharing", "Description": "Some pictures of our beautiful campus (taken last year when I was stying there)"}
    ]
} 


var list = document.createElement("ol");
    
list.setAttribute("class", "collection-list");

// Function taken from: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function isValidHttpUrl(string) {
    let url;
    
    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }
    
    return true;
}

for (object in collection) {
    let topic = document.createElement("ul");
    topic.setAttribute("class", "collection-topic");

    let list_title = document.createElement("h3");
    list_title.innerHTML = object;

    topic.append(list_title);
    
    for (i = 0; i < collection[object].length; i++) {

        let item = document.createElement("ul");
        item.setAttribute("class", "collection-item");
        
        for(subobject in collection[object][i]) {

            let item_content = document.createElement("li");
            item_content.setAttribute("class", "collection-item-content")
            link = collection[object][i][subobject]

            if(isValidHttpUrl(link)) {
                item_content.innerHTML = "<b>" + subobject + "</b>" + ": " + `<a href='${link}' target="_blank">` + link + "</a>";
            } else {
                item_content.innerHTML = link
            }
            

            item.append(item_content);
            
        }
        topic.append(item);

        let space = document.createElement("br");
        topic.append(space)
    };

    list.append(topic);
    
    document.getElementById("collection").appendChild(list);
};


