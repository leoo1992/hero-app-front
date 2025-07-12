import { setupWorker } from "msw/browser";
import { manipuladores } from "./manipuladores";

export const trabalhador = setupWorker(...manipuladores);
