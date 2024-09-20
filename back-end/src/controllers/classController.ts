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

//Needs ID in routes
export const changeClass: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let classDetails: classes = req.body;
            let classId = req.params.id

            classes.update(classDetails, {where: {classId: classId}})
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}