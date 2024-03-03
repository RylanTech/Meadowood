import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { signUpUser } from "../models/userSignedUp"

export const getAllPeople: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let people = await signUpUser.findAll()
            if (people) {
                res.status(200).send(people)
            } else {
                res.status(404).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const getAllPeopleByEvent: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        let eventId = req.params.id
        if (usr) {
            let people = await signUpUser.findAll({
                where: {
                    eventId: eventId
                }
            })
            if (people) {
                res.status(200).send(people)
            } else {
                res.status(404).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}


export const getPerson: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id
            let person = await signUpUser.findOne({
                where: {
                    signedUpUserId: id
                }
            })
            if (person) {
                res.status(200).send(person)
            } else {
                res.status(404).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const createPerson: RequestHandler = async (req, res, next) => {
    try {
        let newPerson: signUpUser = req.body
        if (newPerson && newPerson.userName && newPerson.eventId && newPerson.userPhone) {
            let created = await signUpUser.create(newPerson)
            res.status(201).send(created)
        } else {
            res.status(400).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const editPerson: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id
            let oldPerson = await signUpUser.findOne({
                where: { signedUpUserId: id }
            })

            if (oldPerson) {
                let newPerson: signUpUser = req.body
                if (newPerson && newPerson.userName && newPerson.eventId && newPerson.userPhone) {
                    let created = await signUpUser.create(newPerson)
                    res.status(201).send(created)
                } else {
                    res.status(400).send()
                }
            } else {
                res.status(404).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const deletePerson: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id
            let oldPerson = await signUpUser.findOne({
                where: { signedUpUserId: id }
            })

            if (oldPerson) {
                signUpUser.destroy({
                    where: {
                        signedUpUserId: id
                    }
                })
                res.status(200).send()
            } else {
                res.status(404).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}