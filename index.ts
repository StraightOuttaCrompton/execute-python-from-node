import { spawn } from "child_process";

// python3 is the name of the python binary
const pyProg = spawn("python3", ["./python/helloWorld.py"]);

pyProg.stdout.on("data", function(data) {
    console.log(data.toString());
});