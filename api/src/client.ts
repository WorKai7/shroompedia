import { PrismaClient } from "../src/generated/prisma/client.js";

// Pattern singleton pour exporter le client prisma
const prisma = new PrismaClient();

export default prisma