import { Request, Response } from "express"
import { v4 as uuidv4 } from "uuid"
import { PacienteModel } from "../model/pacienteModel"

class PacienteController {

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params
            const paciente = await PacienteModel.findOne({ where: { id } })
            return res.json(paciente)
        } catch (e) {
            return res.json({ msg: "erro ao ler o paciente!", status: 500, route: "/read/:id" })
        }
    }

    async index(req: Request, res: Response) {
        try {
            const paciente = await PacienteModel.findAll()
            res.json({ items: paciente })
        }
        catch (e) {
            return res.json({ msg: "erro ao ler o paciente!", status: 500, route: "/read" });
        }
    }

    async store(req: Request, res: Response) {
        const id = uuidv4();
        try {
            const paciente = await PacienteModel.create({ ...req.body, id })
            return res.json({ paciente, msg: "paciente cadastrado!" })
        } catch (e) {
            return res.json({ msg: "erro ao criar!", status: 500, route: "/create" })
        }
    }


    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const paciente = await PacienteModel.findOne({ where: { id } });

            if (!paciente) {
                return res.json({ msg: "paciente não encontrado!" });
            }

            const pacienteAtualizado = await paciente.update({ ...req.body });
            return res.json({ msg: "paciente atualizado!", paciente: pacienteAtualizado });
        } catch (e) {
            return res.json({
                msg: "erro!",
                status: 500,
                route: "/update/:id",
            });
        }
    }


    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const paciente = await PacienteModel.findOne({ where: { id } });

            if (!paciente) {
                return res.json({ msg: "paciente não encontrado" });
            }

            const pacienteRemovido = await paciente.destroy();
            return res.json({ msg:"paciente removido!", paciente: pacienteRemovido });
        } catch (e) {
            return res.json({
                msg: "erro!",
                status: 500,
                route: "/remove/:id",
            });
        }
    }

}

export default new PacienteController()