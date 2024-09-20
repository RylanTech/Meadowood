import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { connect } from "../models/connect"

export const getConnections: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let gotClip = await connect.findAll();
            res.status(200).send(gotClip);
        } else {
            res.status(401)
        }
    } catch {
        res.status(500).send()
    }
}

export const getConnection: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id;
            let existing = await connect.findByPk(id)
            if (existing) {
                res.status(200).send(existing)
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

export const createConnection: RequestHandler = async (req, res, next) => {
    try {
        let newConnection: connect = req.body
        await connect.create(newConnection)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}

export const deleteConnection: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id;
            let existing = await connect.findByPk(id)
            if (existing) {
                connect.destroy({ where: { connectId: id } })
                res.status(200).send()
            } else {
                res.status(404).send()
            }
            res.status(200).send(existing)
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}