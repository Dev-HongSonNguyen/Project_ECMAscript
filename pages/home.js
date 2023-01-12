const homePage = function(){
    const listProject = [
        {
            id: 1,
            name: "Duan1"
        },
        {
            id: 2,
            name: "Duan2"
        }
    ]
    return `<h1>HomePage</h1>
    ${listProject.map(function(item){
        return `<div><a href="/project/${item.id}">${item.name}</a></div>`
    }).join("")}
    `;
}
export default homePage;