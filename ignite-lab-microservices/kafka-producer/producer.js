const { Kafka } = require("kafkajs");
const { randomUUID } = require("node:crypto");
require("dotenv").config();

async function bootstrap() {
    try {
        console.log(process.env.KAFKA_BROKER)
        const kafka = new Kafka({
            clientId: "kafka-producer",
            brokers: [process.env.KAFKA_BROKER],
            sasl: {
                mechanism: "scram-sha-256",
                username: process.env.KAFKA_SASL_USERNAME,
                password: process.env.KAFKA_SASL_PASSWORD,
            },
            ssl: true,
        });

        const producer = kafka.producer();

        console.log("Connecting producer...");
        await producer.connect();
        console.log("Producer connected!");

        await producer.send({
            topic: "notifications.send-notification",
            messages: [{
                value: JSON.stringify({
                    content: "Nova solicitação de amizade!",
                    category: "social",
                    recipientId: randomUUID(),
                }),
            }, ],
        });

        await producer.disconnect();
    } catch (error) {
        console.log(error);
    }
}

bootstrap();