import { Response } from "express";

export const sendRefhreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, { httpOnly: true });
};
