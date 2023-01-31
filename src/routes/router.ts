import express from 'express';
import ValidateModel from '../validator/validator';
import Middleware from '../middleware/index';
import PacienteController from '../controller/controller';

const router = express.Router();

router.post(
	'/create',
	ValidateModel.createValidator(),
	Middleware.errorValidator,
	PacienteController.store
);

router.get(
	'/read',
	ValidateModel.createValidator(),
	Middleware.errorValidator,
	PacienteController.index
);

router.get(
	'/read/:id',
	ValidateModel.IdValidator(),
	Middleware.errorValidator,
	PacienteController.getOne
);

router.put(
	'/update/:id',
	ValidateModel.IdValidator(),
	Middleware.errorValidator,
	PacienteController.update
);

router.delete(
	'/remove/:id',
	ValidateModel.IdValidator(),
	Middleware.errorValidator,
	PacienteController.remove
);

export default router;