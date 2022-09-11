import Client from "./utils/Client";
import Notify from "./utils/Notify";

const client = new Client();
const notify = new Notify(client);

console.log(client, notify);
