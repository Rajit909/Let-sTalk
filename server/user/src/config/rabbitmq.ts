import amqp from 'amqplib'

let channel: amqp.Channel;

export const connectRabbitMq = async() => {
    try {
        
    } catch (error) {
        console.log("Failed to connect to rabbitmq")
    }
}