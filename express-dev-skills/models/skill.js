const skillData = require('../data/skills.json')

function showAll (){

    let newList = []
    skillData.forEach(e=>{
        
        if(!e.delete){
            
            newList.push(e)
        }

})
return newList
};

module.exports = {
    showAll
}