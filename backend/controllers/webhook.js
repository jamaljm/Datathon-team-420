import { mainflow } from "./main.js";
import fs from  "fs";
import { wa } from "../supabaseconf.js";


const webhook_get = async (req, res) => {

    // const VERIFY_TOKEN = "Zyadha!@#123";
    const VERIFY_TOKEN = "test";

    console.log("yyyyyyyyyyy");
    // Parse params from the webhook verification request
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    console.log(token);

    // Check if a token and mode were sent
    if (!mode || !token) {
        return res.status(403).send({ error: "Missing mode or token" });
    }

    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
        // Respond with 200 OK and challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.setHeader('Content-Type', 'text/plain');
        res.send(challenge);
    }
    else {
        // Responds with '403 Forbidden' if verify tokens do not match
        return res.sendStatus(403);
    }

};


const webhook_post = async (req, res) => {
    try {
        console.log("yeeeeey");
        //console.log(req);
       
        console.log("ans : ",req.body);
        //dump the console to a json file
        // const logs = [];
        // const originalLog = console.log;
        // console.log = function (message) {
        //     logs.push(message);
        //     originalLog.apply(console, arguments);
        // };

        // // Write console output and req.body to JSON file
        // const dataToWrite = {
        //     reqBody: req.body,
        //     consoleLogs: logs
        // };

        // const filename = 'console_output.json';
        // fs.writeFile(filename, JSON.stringify(dataToWrite, null, 2), (err) => {
        //     if (err) {
        //         console.error('Error writing JSON file:', err);
        //     } else {
        //         console.log('JSON file saved:', filename);
        //     }
        // });


        await mainflow(req, res);

       console.log("exit");

        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(200);
    }
};




export { webhook_get, webhook_post};