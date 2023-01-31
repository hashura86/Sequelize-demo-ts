import { body, param } from "express-validator";

class ValidateModel {

    createValidator() {
        return [
        body('nome')
            .notEmpty()
            .withMessage("o nome deve ser informado"),
        body('faltas')
            .optional()
            .isInt({ gt: -1 })
            .withMessage("informe o número de faltas"),
        body('descricao')
            .optional()
            .isString()
            .withMessage("informe uma descrição")]
    }

    IdValidator() {
		return [
			param('id')
				.notEmpty()
				.withMessage('ID não pode ser vazio')
				.isUUID(4)
				.withMessage('ID deve ser um uuid v4'),
		];
	}
}

export default new ValidateModel()