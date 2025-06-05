from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# In-memory storage for messages
messages = []


@app.route("/message_board/messages", methods=["GET"])
def get_messages():
    return jsonify(messages)


@app.route("/message_board/messages", methods=["POST"])
def post_message():
    data = request.get_json()
    if not data or "username" not in data or "content" not in data:
        return jsonify({"error": "Invalid message format"}), 400
    message = {"username": data["username"], "content": data["content"]}
    messages.append(message)
    return jsonify({"status": "Message received"}), 201


@app.route("/message_board/messages", methods=["DELETE"])
def delete_message():
    data = request.get_json()
    if not data or "index" not in data:
        return jsonify({"error": "Invalid request, missing index"}), 400
    index = data["index"]
    if not isinstance(index, int) or index < 0 or index >= len(messages):
        return jsonify({"error": "Invalid index"}), 400
    messages.pop(index)
    return jsonify({"status": "Message deleted"}), 200


if __name__ == "__main__":
    app.run(debug=True)
