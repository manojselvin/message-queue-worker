import amqp from 'amqplib';
import { CONN_URL, QUEUE_NAME } from './config';

let channel: any = null;

amqp.connect(CONN_URL).then((conn: any) => {
  conn.createChannel().then(async (ch: any) => {
     channel = await ch;
     channel.consume(QUEUE_NAME, function (msg: any) {
        console.log('.....');
        setTimeout(function(){
            console.log("Message:", msg.content.toString());
            channel.ack(msg);
        },8000);
      },{ noAck: false }
    );
  });
});

