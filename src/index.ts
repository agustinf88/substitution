import express from "express";
import bodyParser from "body-parser";
import { DefaultSubstitutorFactory } from "./usecases/DefaultSubstitutorFactory";
import { ErrorResponse } from "./entities/types";
import { DefaultBodyParser } from "./usecases/DefaultBodyParser";

const app = express();

const port = 8080; // default port to listen

app.use(bodyParser.json())


const substitutorFactory = new DefaultSubstitutorFactory();
const parser = new DefaultBodyParser();


app.post("/substitute", (req, res) => {
    try {
        const { strategy, boolValues, numberValues } = parser.parse(req.body);

        const substitutor = substitutorFactory.create(strategy);

        const result = substitutor.apply(boolValues, numberValues);

        res.send(result);
    } catch (error) {
        const response: ErrorResponse = {
            code: error.code,
            message: error.message,
        }
        res.status(500).send(response);
    }
});

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});