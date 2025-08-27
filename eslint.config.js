// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      // Estilo de código
      semi: ["error", "always"], // exige ponto e vírgula
      quotes: ["error", "double"], // exige aspas duplas
      indent: ["error", 2], // indentação de 2 espaços
      "no-mixed-spaces-and-tabs": "error", // proíbe misturar tab e espaço
      "object-curly-spacing": ["error", "always"], // espaço dentro de chaves { foo: bar }
      "array-bracket-spacing": ["error", "never"], // não deixa espaço em arrays [1, 2]
      "space-before-function-paren": ["error", "never"], // não permite espaço antes de ()

      // Boas práticas
      eqeqeq: ["error", "always"], // exige === em vez de ==
      "no-var": "error", // força usar let/const
      "prefer-const": "error", // força const quando possível
      "no-multiple-empty-lines": ["error", { max: 1 }], // no máximo 1 linha em branco
      "no-trailing-spaces": "error", // proíbe espaço sobrando no fim da linha
      "curly": ["error", "all"], // exige chaves sempre em if/else/for
      "brace-style": ["error", "1tbs", { allowSingleLine: true }], // estilo de chaves { }

      // Variáveis
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }], // avisa se variáveis não forem usadas
      "no-undef": "error", // não deixar usar variável não definida

      // Funções
      "no-empty-function": "warn", // alerta funções vazias
      "max-params": ["warn", 3], // máximo 3 parâmetros por função
      "complexity": ["warn", 10], // alerta se a função for muito complexa

      // Outras regras úteis
      "no-console": "off", // permite console.log
      "no-debugger": "error", // não deixar debugger no código
      "consistent-return": "error", // funções devem sempre retornar algo ou nada
      "default-case": "warn", // exige default em switch
    },
  },
];
