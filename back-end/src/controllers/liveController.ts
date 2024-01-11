import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { live } from "../models/live"

export const liveStatus: RequestHandler = async (req, res, next) => {
    try {
        let status = await live.findOne({ where: { liveId: 1 } })
        res.status(200).send(status)
    } catch {
        res.status(500).send()
    }
}

export const editStatus: RequestHandler = async (req, res, next) => {
    try {
        let editedStatus: live = req.body
        let status = await live.findOne({ where: { liveId: 1 } })
        if (status) {
            live.update(editedStatus, {where: {liveId: 1}})
            res.status(202).send()
        } else {
            await live.create(editedStatus)
            res.status(201).send()
        }
    } catch {
        res.status(500).send()
    }
}