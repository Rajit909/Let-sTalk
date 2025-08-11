import amqp from "amqplib"
import dotenv from "dotenv"
dotenv.config();

export const startSendOtpConsumer = async () => {
    try {
      const connection  = await amqp.connect({
        port: 5672,
        username: process.env.Rabbitmq_Username,
        password: process.env.Rabbitmq_Password
      })  


    } catch (error) {
        console.log("Failed to start rabbitmq Consumer", error)
    }
}