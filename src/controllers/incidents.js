const express = require("express");
const Incident = require("../models/incidents");

function holaMundo(req, res){
    console.log("Derechos reservados Lalinsky (copirrait) 2023");
}

async function createIncident(req, res){
    const incident = new Incident();
    const params = req.body;

    incident.title = params.title;
    incident.description = params.description;
    incident.user =  params.user;
    incident.severity = params.severity;

    try {
        const saveIncident = await incident.save();
        if (!saveIncident){
            res.status(400).send({ msg: " No se guardó la incidencia" });
        }
        else {
            res.status(200).send({ incident: saveIncident})
        }

    } catch (error) {
        res.status(500).send(error);
        
    }
}

async function getIncidents(req, res){


    try {
        const incidents = await Incident.find().sort({create_at:1});
        if(!incidents){
            res.status(400).send({ msg: "Error al obtener las incidencias"});
        } 
        else {
            res.status(200).send(incidents);
        }
    } catch (error) {
            res.status(500).send(error);
    }
}

async function getIncidentsBySeverity(req, res){
    const params = req.query;
    const severity = params.severity;

    try {
        const incidents = await Incident.find({ severity : severity}).sort({create_at:1});
        if(!incidents){
            res.status(400).send({ msg: " Problemas al efectuar la consulta" });
        } 
        else {
            res.status(200).send(incidents);
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
} 

async function getIncidentsByState(req, res){
    const params = req.query;
    const completed = params.completed;

    try {

        const incidents = await Incident.find({ completed : completed}).sort({create_at: 1});
        if (!incidents){
            res.status(400).send({ msg : "Error al obtener las incidencias"});
        } 
        else {
            res.status(200).send(incidents);
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
}


async function updateIncident(req, res){
    console.log("Entrando, loco");
    const params = req.body;
    const id = params.id;

    try {
        console.log(req.body);
        console.log("Imprimiento el id");
        console.log(id);
        console.log(params);
        const updatedIncident = await Incident.findByIdAndUpdate(id, params);
        if (!updatedIncident){
            res.status(400).send({ msg: "Error al actualizar el estatus del incidente"});
        }
        else
        {
            res.status(200).send({ msg: "¡Incidente actualizado correctamente!"});
        }        
    } catch (error) {
        res.status(500).send(error);   
    }

    

}

async function deleteIncident(req, res){
    const params = req.body;
    const id=params.id;

    const deletedIncident = await Incident.findByIdAndDelete(id);

    try {
        if(!deletedIncident){
            res.status(400).send({msg: "Error al borrar incidente"});
            console.log(error);
        }
        else {
            res.status(200).send({msg: "Incidente borrado correctamente"});
        }
    } catch (error) {
        res.status(500).send(error);
    }



}

module.exports = {
    holaMundo,
    createIncident,
    getIncidents,
    getIncidentsBySeverity,
    getIncidentsByState,
    updateIncident,
    deleteIncident
}

