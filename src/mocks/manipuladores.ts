import type { TRegistroUsuarioData } from "@/types/index.type";
import { http } from "msw";

const USUARIO_CORRETO = {
  id: 1,
  nome: "Leonardo Santos",
  email: "l@l.l",
  senha: "1",
};

let USUARIO_FALSO = {
  id: 0,
  nome: "",
  email: "",
};

let tokenFalso: string | null = "fake.jwt.token.v1";

export const manipuladores = [
  http.post("/auth/login", async ({ request }) => {
    console.log("Mock interceptado: /auth/login");

    const { email, senha } = (await request.json()) as {
      email: string;
      senha: string;
    };

    console.log(
      "LOGIN MOCK:",
      email,
      senha,
      USUARIO_CORRETO.email,
      USUARIO_CORRETO.senha
    );

    if (email != USUARIO_CORRETO.email) {
      return new Response(
        JSON.stringify({ erro: "Credenciais incorretas 1" }),
        {
          status: 401,
        }
      );
    }

    if (senha != USUARIO_CORRETO.senha) {
      return new Response(
        JSON.stringify({ erro: "Credenciais incorretas 2" }),
        {
          status: 401,
        }
      );
    }

    console.log("LOGIN MOC2K:", email, senha);

    if (email === USUARIO_CORRETO.email && senha === USUARIO_CORRETO.senha) {
      USUARIO_FALSO = {
        id: USUARIO_CORRETO.id,
        nome: USUARIO_CORRETO.nome,
        email: USUARIO_CORRETO.email,
      };

      tokenFalso = "fake.jwt.token.v1";
      console.log("LOGIN - Retornando token:", tokenFalso);

      return new Response(
        JSON.stringify({ usuario: USUARIO_FALSO, token: tokenFalso }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `token=${tokenFalso}; Path=/; Max-Age=1800`,
          },
        }
      );
    }

    return new Response(JSON.stringify({ erro: "Credenciais inválidas" }), {
      status: 401,
    });
  }),

  http.get("/auth/verifica", ({ request }) => {
    const cookieRecebido = request.headers.get("cookie") ?? "";
    const cabecalhoAuth = request.headers.get("authorization") ?? "";
    const tokenDoHeader = cabecalhoAuth.replace("Bearer ", "").trim();

    console.log("VERIFICA - Cookie recebido:", cookieRecebido);
    console.log("VERIFICA - Authorization header:", tokenDoHeader);
    console.log("Token atual esperado:", tokenFalso);

    const contemToken = cookieRecebido.includes(`token=${tokenFalso}`);

    if (contemToken || tokenDoHeader === tokenFalso) {
      return Response.json(USUARIO_FALSO);
    }

    return new Response(JSON.stringify({ erro: "Token inválido" }), {
      status: 401,
    });
  }),

  http.post("/auth/refresh", () => {
    tokenFalso = "fake.jwt.token.v2";
    const nome = "Leonardo";
    console.log("REFRESH - Novo token gerado:", tokenFalso);

    return new Response(JSON.stringify({ ok: true, nome, token: tokenFalso }), {
      status: 200,
      headers: {
        "Set-Cookie": `token=${tokenFalso}; Path=/; Max-Age=3600`,
      },
    });
  }),

  http.post("/auth/registro", async ({ request }) => {
    const { nome, email, senha } =
      (await request.json()) as TRegistroUsuarioData;
    if (!nome || !email || !senha) {
      return new Response(JSON.stringify({ erro: "Campos obrigatórios" }), {
        status: 400,
      });
    }

    return new Response(
      JSON.stringify({
        usuario: { id: 2, nome, email },
        token: "fake.jwt.token.vNovo",
      }),
      {
        status: 201,
      }
    );
  }),
];
