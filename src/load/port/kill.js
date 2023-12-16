import killPort from "kill-port";

export function kill(port) {
	killPort(port, "tcp").then(() => console.log(`Closed port ${port}`));
}
