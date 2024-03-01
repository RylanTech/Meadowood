import { RequestHandler } from "express"
import { verifyUser } from "../services/authService"
import { staff } from "../models/staff"

export const getAllStaff: RequestHandler = async (req, res, next) => {
    try {
        let staffMembers = await staff.findAll()
        if (staffMembers) {
            res.status(200).send(staffMembers);
        } else {
            res.status(404).send(null)
        }
    } catch {
        res.status(500).send()
    }
}

export const getOneStaff: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id;
            let existing = await staff.findByPk(id)
            if (existing) {
                res.status(200).send(existing)
            } else {
                res.status(404).send(null)
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const createStaff: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let newStaff: staff = req.body;
            if (newStaff.name && newStaff.position && newStaff.clickableInfo) {
                newStaff.clickableInfo = JSON.stringify(newStaff.clickableInfo)
                let created = await staff.create(newStaff)
                console.log(created)
                res.status(201).send(created)
            } else {
                res.status(400).send(null);
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const editStaff: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id
        let editedStaff: staff = req.body
        let staffMember = await staff.findOne({ where: { staffId: id } })
        if (staffMember && editedStaff.name && editedStaff.position && editedStaff.clickableInfo) {
            editedStaff.clickableInfo = JSON.stringify(editedStaff.clickableInfo)
            staff.update(editedStaff, { where: { staffId: id } })
            res.status(202).send("updated")
        } else {
            res.status(400).send(null)
        }
    } catch {
        res.status(500).send()
    }
}

export const deleteStaff: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr) {
            let id = req.params.id;
            let existing = await staff.findByPk(id)
            if (existing) {
                staff.destroy({ where: { staffId: id } })
                res.status(200).send("deleted")
            } else {
                res.status(404).send(null)
            }
            res.status(200).send()
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}