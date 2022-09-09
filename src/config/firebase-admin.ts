import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "./service-account.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});
const db = admin.firestore();

export default db;
