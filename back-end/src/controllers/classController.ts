import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { classes } from "../models/classes"

export const getClasses: RequestHandler = async (req, res, next) => {
    try {
        let meadowoodClasses = await classes.findAll()
        res.status(200).send(meadowoodClasses)
    } catch {
        res.status(500).send()
    }
}

export const getOneClass: RequestHandler = async (req, res, next) => {
    try {
        let classId = req.params.id;
        let meadowoodClass = await classes.findOne({where: {classId: classId}})
        res.status(200).send(meadowoodClass)
    } catch {
        res.status(500).send()
    }
}

export const changeClass: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let classDetails: classes = req.body;
            let classId = req.params.id

            await classes.update(classDetails, {where: {classId: classId}})
            res.status(200).send()
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const deleteClass: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let classId = req.params.id

            await classes.destroy({where: {classId: classId}})
            res.status(200).send()
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const createClass: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let classDetails: classes = req.body;
            let classId = req.params.id

            await classes.create(classDetails)
            res.status(201).send()
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}