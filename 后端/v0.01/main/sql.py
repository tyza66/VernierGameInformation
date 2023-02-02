import pymysql


class MysqlManager:
    # 连接数据库信息
    config = {
        'host': '192.168.101.26',
        'user': 'vernier',
        'passwd': 'eitcAdFZLD5CKD5c',
        "port": 3306,
        'db': 'vernier',
        "charset": "utf8"
    }

    # 数据库管理库初始化
    def __init__(self):
        try:
            self.conn = pymysql.Connect(**self.config)
            print('数据库连接成功')
        except Exception as e:
            print('连接数据库失败！', str(e))
        self.cursor = self.conn.cursor(cursor=pymysql.cursors.DictCursor)

    # 提交
    def commit(self):
        self.conn.commit()
        print("发生提交")

    # 回滚
    def rollback(self):
        self.conn.rollback()
        print("发生回滚")

    # 获取游戏列表-随机10个
    def getGameList(self):
        try:
            self.cursor.execute("SELECT * FROM gamelist ORDER BY  RAND() LIMIT 10")
            return self.cursor.fetchall()
        except Exception as e:
            print("获取失败(getGameList)", str(e))
            self.conn = pymysql.Connect(**self.config)
            self.cursor = self.conn.cursor(cursor=pymysql.cursors.DictCursor)
            print('重新数据库连接成功(getGameList)')
            return self.getGameList()

    # 获取福利列表-随机10个
    def getPreferential(self):
        try:
            self.cursor.execute("SELECT * FROM preferential  WHERE statu = 0  ORDER BY  RAND() LIMIT 10")
            return self.cursor.fetchall()
        except Exception as e:
            print("获取失败(getPreferential)", str(e))
            self.conn = pymysql.Connect(**self.config)
            self.cursor = self.conn.cursor(cursor=pymysql.cursors.DictCursor)
            print('重新数据库连接成功(getPreferential)')
            return self.getPreferential()
