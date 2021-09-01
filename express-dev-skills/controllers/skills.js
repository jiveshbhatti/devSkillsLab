const Skill = require('../models/skill')
const fs = require('fs')
const data = require('../data/skills.json')
const { param } = require('../routes/skills')


const fullSkillSet = function (req,res){
    res.render('skills/allMySkills',{skills: Skill.showAll()})
 
}
const addNew = function (req,res){
   

    const newSkill = req.body.skill
   
    data.push({id:(data[data.length-1].id) +1,
     skill:newSkill, delete : false})
   
 
   //res.render('skills/allMySkills', {skills: Skill.showAll()})
    res.redirect(201,'/skills')
}

const showForm = function(req,res){

    res.render('skills/new', {})
}

const deleteSkill = function(req,res){
    // console.log(data)
    console.log('this is params', req.params.id)
    const deleteId = req.params.id
    data.forEach((e) => {
        console.log(e.id)
        
        if(e.id == deleteId ){
          e.delete = true
          
        }})

        res.redirect(201,'/skills')
   
}

module.exports ={
    fullSkillSet,
    addNew,
    showForm,
    deleteSkill
}