import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { event } from "../models/signUpEvents"
import { signUpUser } from "../models/userSignedUp"

export const getAllEvents: RequestHandler = async (req, res, next) => {
    try {
        let events = await event.findAll()
        if (events) {
            res.status(200).send(events)
        } else {
            res.status(404).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const getEvent: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id
            let eve = await event.findOne({
                where: {
                    eventId: id
                }
            })
            if (eve) {
                res.status(200).send(eve)
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

export const createEvent: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let newEvent: event = req.body
            if (newEvent && newEvent.eventTitle && newEvent.eventDescription && newEvent.eventLocation && newEvent.date) {
                let created = await event.create(newEvent)
                res.status(201).send(created)
            } else {
                res.status(400).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const editEvent: RequestHandler = async (req, res, next) => {
    // try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id
            let oldEvent = await event.findOne({
                where: { eventId: id }
            })

            if (oldEvent) {
                let newEvent: event = req.body
                if (newEvent && newEvent.eventTitle && newEvent.eventDescription && newEvent.eventLocation && newEvent.date && newEvent.eventId) {
                    let created = await event.update(newEvent, {
                        where: {
                            eventId: id
                        }
                    })
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
    // } catch {
    //     res.status(500).send()
    // }
}

export const deleteEvent: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id
            let oldEvent = await event.findOne({
                where: { eventId: id }
            })

            if (oldEvent) {

                // Delete all signUpUser associated with the event Id
                await signUpUser.destroy({
                    where: {
                        eventId: id
                    }
                });

                // Delete the event
                await event.destroy({
                    where: {
                        eventId: id
                    }
                });

                res.status(200).send();
            } else {
                res.status(404).send();
            }
        } else {
            res.status(401).send();
        }
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}
