from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
import logging
import xmpp
import json

logging.basicConfig(level=logging.NOTSET)

class LoginConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({
            'type': 'connection_stablished',
            'message': 'You are now connected!'
        }))

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        username = text_data_json['username']
        password = text_data_json['password']

        print('username:', username)
        print('password:', password)

        logging.info("mensaje")
        logging.info(f"password: {password}")

        def message_handler(conn, msg):
            print("Received message:", msg.getBody())

        jid = xmpp.protocol.JID(username)
        server = username.split('@')[1]

        client = xmpp.Client(server=server, debug=True)
        client.connect()
        authenticate = client.auth(user=jid.getNode(), password=password, resource=jid.getResource())

        if authenticate == 'sasl':
            client.sendInitPresence()
            self.send(json.dumps({
                'success': True,
                'message': 'Log in successful'
            }))
        
        receiver = "leosoplapuco@movim.eu"
        message = f"Este mensaje fue enviado desde {username} hacia {receiver} a traves de la libreria xmpppy de Python"

        client.send(xmpp.protocol.Message(to=receiver, body=message))

        client.RegisterHandler('message', message_handler)

        while True:
            try:
                client.Process(1)  # Process incoming stanzas/events with a timeout of 1 second
            except KeyboardInterrupt:
                print("Exiting...")
                break

    def disconnect(self):
        pass
