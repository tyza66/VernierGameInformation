import os
import time

from flask import Flask, jsonify, render_template, sessions, send_file, request
from flask_cors import CORS
from gevent import pywsgi
from sql import MysqlManager

app = Flask(__name__)

cors = CORS(app, resources={"/api/*": {"origins": "*"}})
mysqlManager = MysqlManager()


@app.route('/', methods=["GET"])
def hello():
    result = {
        'info': '游标20230201建立',
        'time': str(time.time())
    }
    return jsonify(result)


@app.route("/gamelist", methods=["GET"])
def gameList():
    result = mysqlManager.getGameList()
    return jsonify(result)


@app.route("/preferential", methods=["GET"])
def Preferential():
    result = mysqlManager.getPreferential()
    return jsonify(result)


def run():
    server = pywsgi.WSGIServer(('0.0.0.0', 5001), app)
    print("启动服务器")
    server.serve_forever()


if __name__ == '__main__':
    run()
