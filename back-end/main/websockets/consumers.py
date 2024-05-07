from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
import logging
import xmpp
import xmltodict
import json

logging.basicConfig(level=logging.NOTSET)

class XMPPClient:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.server = username.split('@')[1]
        self.client = None

    def connect(self):
        jid = xmpp.protocol.JID(self.username)
        self.client = xmpp.Client(server=self.server, debug=True)
        self.client.connect()
        authenticate = self.client.auth(user=jid.getNode(), password=self.password, resource=jid.getResource())

        return authenticate

    def get_contacts(self):
        roster = self.client.getRoster()
        contacts = roster.getItems()

        return contacts

    def send_message(self, receiver, message):
        self.client.send(xmpp.protocol.Message(to=receiver, body=message))

    def start_listener(self):
        while True:
            try:
                self.client.Process(1)  # Process incoming stanzas/events with a timeout of 1 second
            except KeyboardInterrupt:
                print("Exiting...")
                break

    def register_message_handler(self, message_handler):
        try:
            self.client.RegisterHandler('message', message_handler)
            logging.info("Message handler registered successfully.")
        except Exception as exception:
            logging.error(f"Failer to register message handler: {exception}")

    def disconnect(self):
        if self.client:
            self.client.disconnect()

class LoginConsumer(WebsocketConsumer):

    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({
            'type': 'connection_stablished',
            'message': 'You are now connected!'
        }))

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print(text_data_json)
        if 'type' in text_data_json and text_data_json['type'] == 'login_request':
            username = text_data_json['username']
            password = text_data_json['password']

            print('username:', username)
            print('password:', password)

            logging.info("mensaje")
            logging.info(f"password: {password}")

            self.xmpp_client = XMPPClient(username, password)
            authenticate = self.xmpp_client.connect()

            contacts = self.xmpp_client.get_contacts()

            if authenticate == 'sasl':
                self.xmpp_client.client.sendInitPresence()
                self.send(json.dumps({
                    'success': True,
                    'message': 'Log in successful'
                }))
                self.xmpp_client.register_message_handler(self.message_handler)
                self.xmpp_client.start_listener()
            
            receiver = "diegonabe@xabber.org"
            message = f"Este es el roster de {username} hacia {receiver}: {contacts}"

            self.xmpp_client.send_message(receiver, message)

        elif 'type' in text_data_json and text_data_json['type'] == 'get_roster_request':
            print(text_data_json)
            self.send_roster()

    def send_roster(self):
        if hasattr(self, 'xmpp_client'):
            contacts = self.xmpp_client.get_contacts()
            self.send(text_data=json.dumps({
                'type': 'roster_update',
                'contacts': contacts
            }))
        else:
            self.send(text_data=({
                'type': 'error',
                'message': 'XMPP client not initialized'
            }))

    def message_handler(self, conn, msg):
        xml_to_dict = xmltodict.parse(str(msg))
        if 'body' not in xml_to_dict['message']:
            xml_to_dict['message']['body'] = None
        print('XML Message:', xml_to_dict)
        json_message = json.dumps(xml_to_dict)
        print('JSON Message:', json_message)
        self.send(text_data=json_message)

    def disconnect(self, close_code):
        pass
