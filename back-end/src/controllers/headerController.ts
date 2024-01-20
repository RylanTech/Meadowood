import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { live } from "../models/live"
import { header } from "../models/header"

export const getHeader: RequestHandler = async (req, res, next) => {
    try {
        let headr = await header.findOne({ where: { headerId: 1 } })
        if (headr) {
            res.status(200).send(headr)
        } else {
            res.status(404).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const editHeader: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let editedHeader: header = req.body
            let hdr = await header.findOne({ where: { headerId: 1 } })
            if (hdr) {
                header.update(editedHeader, { where: { headerId: 1 } })
                res.status(202).send()
            } else {
                await header.create(editedHeader)
                res.status(201).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}