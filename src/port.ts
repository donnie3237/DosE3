import killPort from "kill-port";

export function kill(port : any) {
	killPort(port, "tcp").then(() => console.log(`Closed port ${port}`));
}


import net from "node:net";

function checkPort(port : any) {
	return new Promise((resolve) => {
		const client = net.connect(port, "localhost", () => {
			// Port is open and a connection was established
			client.end();
			resolve(port);
		});

		client.on("error", () => {
			// Port is not open
			resolve(null);
		});
	});
}

async function checkPorts(startPort : number, endPort : number , onComplete: any) {
	for (let port = startPort; port <= endPort; port++) {
		const result = await checkPort(port);
		if (result !== null) {
			console.log(`  --> Port ${result} is open.`);
		}
	};
    onComplete();
}

export function scan() {
	checkPorts(1, 65535 , ()=>{
        console.log("Scan finished!");
    });
}
