import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications-service',
        brokers: [process.env.KAFKA_BROKER],
        sasl: {
          mechanism: "scram-sha-256",
          username: process.env.KAFKA_SASL_USERNAME,
          password: process.env.KAFKA_SASL_PASSWORD,
        },
        ssl: true,
      }
    })
  }

  async onModuleDestroy() {
    await this.close();
  }
}