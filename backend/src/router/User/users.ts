import { Router, Request, Response } from 'express';

const router = Router();


router.post('/register', (req: Request, res: Response) => {
    console.log(req)
});


export default router;